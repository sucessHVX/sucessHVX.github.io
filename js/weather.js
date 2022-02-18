const API_KEY = '8f71632b2321abc20ee141745f07178b';
const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `날씨 : ${data.weather[0].main} / ${data.main.temp}도`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
