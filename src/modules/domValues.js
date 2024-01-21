import getData from "./apiLogic.js";
import windPath from "../assets/images/wind.svg";
import humidityPath from "../assets/images/humidity.svg";

const displayController = (function () {
  const submitListner = function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const searchQuery = document.querySelector("input");
      getData(searchQuery.value);
      searchQuery.value = "";
    });
  };

  const getGIF = async function (imgQuery) {
    const existingGif = document.querySelector(".weather-gif");
    if (existingGif) {
      existingGif.remove();
    }
    const queryImg = document.createElement("img");
    queryImg.classList.add("weather-gif");
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=BScIFBp8kiIbOXET42xkEbJbwnVrjbJF&s=weather-is-${imgQuery}`,
      { mode: "cors" },
    );
    const imgData = await response.json();
    queryImg.src = imgData.data.images.original.url;

    const newParentDisplayDiv = document.querySelector(".parent-box");
    newParentDisplayDiv.appendChild(queryImg);
  };

  const makeDisplayBoxDiv = function () {
    const existingDisplayBox = document.querySelector(".display-box");
    if (existingDisplayBox) {
      existingDisplayBox.remove();
    }

    const existingParentDisplayDiv = document.querySelector(".parent-box");
    if (existingParentDisplayDiv) {
      existingParentDisplayDiv.remove();
    }

    const newParentDisplayDiv = document.createElement("div");
    newParentDisplayDiv.classList.add("parent-box");

    const newDisplayDiv = document.createElement("div");
    newDisplayDiv.classList.add("display-box");
    newParentDisplayDiv.appendChild(newDisplayDiv);

    const displayDiv = document.querySelector(".display");
    displayDiv.appendChild(newParentDisplayDiv);
  };

  const appendLocation = function (countryName, cityName) {
    const newDisplayDiv = document.querySelector(".display-box");

    const locationStr = document.createElement("p");
    locationStr.classList.add("location");
    locationStr.textContent = `${countryName}, ${cityName}`;

    newDisplayDiv.appendChild(locationStr);
  };

  const appendConditions = function (imgPath, conditionStr) {
    const newDisplayDiv = document.querySelector(".display-box");

    const conditionsDiv = document.createElement("div");
    conditionsDiv.classList.add("conditions");
    conditionsDiv.innerHTML = `<img src="${imgPath}"> <p>${conditionStr}</p>`;

    newDisplayDiv.appendChild(conditionsDiv);
  };

  const appendTemperature = function (currentTemp, feelsLikeTemp) {
    const newDisplayDiv = document.querySelector(".display-box");

    const tempDiv = document.createElement("div");
    tempDiv.classList.add("temps");
    tempDiv.innerHTML = `<p class="current">${currentTemp}°C</p> <p class="feels-like">feels like ${feelsLikeTemp}°C</p>`;

    newDisplayDiv.appendChild(tempDiv);
  };

  const appendWindSpeed = function (windSpeed, windDir) {
    const newDisplayDiv = document.querySelector(".display-box");

    const windDiv = document.createElement("div");
    windDiv.classList.add("wind");
    windDiv.innerHTML = `<p>Gust ${windSpeed}km/h ${windDir}</p> <img src="${windPath}">`;

    newDisplayDiv.appendChild(windDiv);
  };

  const appendHumidity = function (humidityPercent) {
    const newDisplayDiv = document.querySelector(".display-box");

    const humidityDiv = document.createElement("div");
    humidityDiv.classList.add("humidity");
    humidityDiv.innerHTML = `<p>Humidity ${humidityPercent}%</p> <img src="${humidityPath}">`;

    newDisplayDiv.appendChild(humidityDiv);
  };

  return {
    makeDisplayBoxDiv,
    appendLocation,
    appendConditions,
    appendTemperature,
    appendWindSpeed,
    appendHumidity,
    submitListner,
    getGIF,
  };
})();

export default displayController;
