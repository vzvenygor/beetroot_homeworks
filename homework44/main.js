const weatherContainer = document.querySelector('.weather-forecast');
const getForecastBtn = document.querySelector('.input-button');
getForecastBtn.addEventListener('click', changeCity);

function changeCity() {

  const API = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&lang=ua&appid=7bb394b98d740aa67b6d4db222295ab6';
  let cityName = document.querySelector('.input').value;

  fetch(`${API}&q=${cityName}`)
  .then((response) => response.json())
  .then(
    (response) =>
      (response = weatherContainer.appendChild(getWeatherFotecast(response)))
  )
  .catch((error) => alert(error));

  const getWeatherFotecast = (response) => {
    const div = document.createElement("div");
    const city = document.createElement("h2");
    const temperature = document.createElement("p");
    const weather = document.createElement("p");
  
    city.innerText = `Місто: ${response.name}`;
    temperature.innerText = `Температура: ${Math.round(response.main.temp)} градусів`;
    weather.innerText = `Погода: ${response.weather[0].description}`;
  
    div.appendChild(city);
    div.appendChild(temperature);
    div.appendChild(weather);
  
    return div;
  }
};

