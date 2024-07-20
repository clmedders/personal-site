/* eslint-disable */

function fetchWeather() {
  document.getElementById("weather-btn").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const url = `https://api.weather.gov/points/${position.coords.latitude},${position.coords.longitude}`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const forecastUrl = data.properties.forecast;
            fetch(forecastUrl)
              .then((response) => response.json())
              .then((forecastData) => {
                const currentWeather = forecastData.properties.periods[0];
                const currentTemp = currentWeather.temperature;
                const highTemp = forecastData.properties.periods[1].temperature;
                const lowTemp = forecastData.properties.periods[2].temperature;

                try {
                  document.getElementById("weather-output").innerHTML = `Conditions: ${currentWeather.shortForecast}`;
                  document.getElementById("current-temp").innerHTML = `Current Temp: ${currentTemp}`;
                  document.getElementById("high-temp").innerHTML = `High Temp: ${highTemp}`;
                  document.getElementById("low-temp").innerHTML = `Low Temp: ${lowTemp}`;
                } catch (error) {
                  console.error(`Error updating DOM: ${error.message}`);
                }
              })
            .catch((error) => {
                console.error(`Error fetching forecast: ${error.message}`);
              });
          })
        .catch((error) => {
            console.error(`Error fetching weather data: ${error.message}`);
          });
      },
      (error) => {
        console.error(`Error getting location: ${error.message}`);
      }
    );
  });
}

fetchWeather();
