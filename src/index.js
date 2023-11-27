let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", searchCity);

let date = new Date();
let minutes = date.getMinutes();

let hour = date.getHours();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[date.getDay()];

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hour < 10) {
  hour = `0${hour}`;
}

let newTime = document.querySelector("#timeElement");
newTime.innerHTML = `${day} ${hour}:${minutes}`;

function searchCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#search-input");

  showCity(cityInput.value);
}

function showCity(city) {
  let apiKey = "8fa2ab32e21db893o44btbabb185f06b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(getTemp);
}

function getTemp(response) {
  let temperatureElement = document.querySelector("#temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  let cityInputElement = document.querySelector("#cityElement");
  cityInputElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${response.data.wind.speed}km/hr`;
  let conditionElement = document.querySelector("#condition");
  condition.innerHTML = response.data.condition.description;
  let iconElement = document.querySelector(".icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

showCity("Lisbon");
