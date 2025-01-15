
async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
        const data = await response.json();

        if (data.cod !== 200) {
            alert('City not found');
            return;
        }

        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp} °F</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
        weatherInfo.style.display = 'block';
    } catch (error) {
        alert('An error occurred while fetching weather data.');
    }
}
