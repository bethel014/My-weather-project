function searchCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#search-input");
  let cityInputElement = document.querySelector("#cityElement");
  cityInputElement.innerHTML = cityInput.value;
}

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

function getCity(city) {
  let apiKey = "8fa2ab32e21db893o44btbabb185f06b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metrics`;
  axios.get(apiUrl).then(getTemp);
}