// step 3 displaying weather that from api response

function displayWeatherData(response) {
  let temperature = Math.round(response.data.temperature.current);
  let currentTemperatureValue = document.querySelector(
    ".current-temperature-value"
  );
  currentTemperatureValue.innerHTML = temperature;

  let humidity = Math.round(response.data.temperature.humidity);
  let wind = Math.round(response.data.wind.speed);
  let humidityValue = document.querySelector("#humidity-value");
  humidityValue.innerHTML = humidity;
  let windValue = document.querySelector("#wind-value");
  windValue.innerHTML = wind;
  let currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = response.data.city;
}

// step .2 this function display the cityname and current temperature when the form is clicked
function displayCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#input-city");

  // the code for displaying real data using api
  // useApi();
  let apiKey = "d2ebcoe34b6t502be4f636aa01ddf51f";
  let city = inputCity.value;

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherData);
}

// step .1 selecting the form and calling dispalycity function

let form = document.querySelector("#city-form");
form.addEventListener("submit", displayCity);

// the code for displaying time
let days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

let date = new Date();

function showTime() {
  let day = days[date.getDay()];
  let hours = date.getHours();
  hours = hours.toString().padStart(2, "0");
  let minutes = date.getMinutes();
  minutes = minutes.toString().padStart(2, "0");

  let time = `${hours}:${minutes}`;

  let timeOfDay = document.querySelector("#time-of-day");
  timeOfDay.innerHTML = `${day} ${time}`;
}
showTime();
