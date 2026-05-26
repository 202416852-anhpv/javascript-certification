const citySelect = document.getElementById("city-select");
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherInfo = document.getElementById("weather-info");
const locationElement = document.getElementById("location");
const mainTemperature = document.getElementById("main-temperature");
const weatherIcon = document.getElementById("weather-icon");
const weatherMain = document.getElementById("weather-main");
const humidity = document.getElementById("humidity");
const feelsLike = document.getElementById("feels-like");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const clock = document.getElementById("clock");

weatherInfo.classList.add("empty");

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  locationElement.textContent = data.name ?? "N/A";

  const weatherArray = data.weather && data.weather[0] ? data.weather[0] : {};
  weatherMain.textContent = weatherArray.main ?? "N/A";

  if (weatherArray.icon) {
    weatherIcon.src = weatherArray.icon;
    weatherIcon.alt = weatherArray.description || "Weather Icon";
    weatherIcon.style.display = "";
  } else {
    weatherIcon.style.display = "none";
  }

  const mainData = data.main ?? {};
  mainTemperature.textContent =
    mainData.temp !== undefined ? `${mainData.temp}° C` : "N/A";
  feelsLike.textContent =
    mainData.feels_like !== undefined ? `${mainData.feels_like}° C` : "N/A";
  humidity.textContent =
    mainData.humidity !== undefined ? `${mainData.humidity}%` : "N/A";

  const windData = data.wind ?? {};
  wind.textContent =
    windData.speed !== undefined ? `${windData.speed} m/s` : "N/A";
  windGust.textContent =
    windData.gust !== undefined ? `${windData.gust} m/s` : "N/A";

  weatherInfo.classList.remove("empty");
}

getWeatherBtn.addEventListener("click", () => {
  const selectedCity = citySelect.value;
  if (selectedCity === "") {
    return;
  }
  showWeather(selectedCity);
});
