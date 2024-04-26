document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "a50d97008d557ff99357ce1ede75cd40";
  const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const temperature = document.querySelector(".temperature");
  const city = document.querySelector(".city");
  const lat = document.querySelector("#lat");
  const lon = document.querySelector("#lon");
  const humidity = document.querySelector("p.humidity");
  const visibility = document.querySelector(".visibility");
  const windSpeed = document.querySelector("p.windSpeed");
  const pressure = document.querySelector(".pressure");
  const description = document.querySelector("p.description");
  const sunrise = document.querySelector("p.sunrise");
  const sunset = document.querySelector("p.sunset");
  const date = document.querySelector("p.date");
  const mainImage = document.querySelector(".card-img-top");

  function convertTimestamp(timestamp) {
    const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
    return date.toLocaleTimeString(); // Convert to local human-readable format
  }

  function convertDatestamp(timestamp) {
    const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
    return date.toLocaleDateString(); // Convert to local human-readable format
  }
  async function checkWeather(cityName) {
    const responce = await fetch(url + cityName + `&appid=${apiKey}`);
    var data = await responce.json();
    temperature.innerHTML = data.main.temp + "°C";
    city.innerHTML = data.name + "(" + data.sys.country + ")";
    lat.innerHTML = "Lat : " + data.coord.lat;
    lon.innerHTML = "Lon : " + data.coord.lon;
    humidity.innerHTML = "Humidity : " + data.main.humidity + "%";
    visibility.innerHTML = "V'bility : " + data.visibility;
    windSpeed.innerHTML = "Wind : " + data.wind.speed + "kmph";
    pressure.innerHTML =
      "Pressure : " + Math.floor(data.main.pressure / 100) + "Hgcm";
    description.innerHTML =
      "Description : " +
      data.weather[0].main +
      ", " +
      data.weather[0].description;
    sunrise.innerHTML = "Sunrise : " + convertTimestamp(data.sys.sunrise);
    sunset.innerHTML = "Sunset : " + convertTimestamp(data.sys.sunset);
    date.innerHTML = "Date : " + convertDatestamp(data.sys.sunset);
    switch (data.weather[0].main) {
      case "Clouds":
        mainImage.src = "./images/clouds.gif";
        break;
      case "Clear":
        mainImage.src = "./images/sun.gif";
        break;
      case "Rain":
        mainImage.src = "./images/rain.gif";
        break;
      case "Drizzle":
        mainImage.src = "./images/drizzle.gif";
        break;
      case "Mist":
        mainImage.src = "./images/foggy.gif";
        break;
    }
  }

  const btn = document.querySelector(".btn");
  btn.addEventListener("click", function () {
    const cityName = document.querySelector(".form-control");
    if (cityName.value == "") {
      alert("Please enter your City");
    } else {
      checkWeather(cityName.value);
    }
  });
});
