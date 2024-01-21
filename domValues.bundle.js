"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["domValues"],{

/***/ "./src/modules/apiLogic.js":
/*!*********************************!*\
  !*** ./src/modules/apiLogic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domValues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domValues.js */ "./src/modules/domValues.js");


async function getData(locationQuery) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=1cfa627e1c6c4a79ba8152845241901&q=${locationQuery}&aqi=yes`,
      { mode: "cors" },
    );
    const weatherObj = await response.json();

    _domValues_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeDisplayBoxDiv();
    _domValues_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendLocation(
      weatherObj.location.country,
      weatherObj.location.name,
    );
    _domValues_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendConditions(
      weatherObj.current.condition.icon,
      weatherObj.current.condition.text,
    );
    _domValues_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendTemperature(
      weatherObj.current.temp_c,
      weatherObj.current.feelslike_c,
    );
    _domValues_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendWindSpeed(
      weatherObj.current.wind_kph,
      weatherObj.current.wind_dir,
    );
    _domValues_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendHumidity(weatherObj.current.humidity);
    _domValues_js__WEBPACK_IMPORTED_MODULE_0__["default"].getGIF(weatherObj.current.condition.text);
  } catch (err) {
    throw err;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);


/***/ }),

/***/ "./src/modules/domValues.js":
/*!**********************************!*\
  !*** ./src/modules/domValues.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apiLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiLogic.js */ "./src/modules/apiLogic.js");
/* harmony import */ var _assets_images_wind_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/wind.svg */ "./src/assets/images/wind.svg");
/* harmony import */ var _assets_images_humidity_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/humidity.svg */ "./src/assets/images/humidity.svg");




const displayController = (function () {
  const submitListner = function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const searchQuery = document.querySelector("input");
      (0,_apiLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"])(searchQuery.value);
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
    windDiv.innerHTML = `<p>Gust ${windSpeed}km/h ${windDir}</p> <img src="${_assets_images_wind_svg__WEBPACK_IMPORTED_MODULE_1__}">`;

    newDisplayDiv.appendChild(windDiv);
  };

  const appendHumidity = function (humidityPercent) {
    const newDisplayDiv = document.querySelector(".display-box");

    const humidityDiv = document.createElement("div");
    humidityDiv.classList.add("humidity");
    humidityDiv.innerHTML = `<p>Humidity ${humidityPercent}%</p> <img src="${_assets_images_humidity_svg__WEBPACK_IMPORTED_MODULE_2__}">`;

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);


/***/ }),

/***/ "./src/assets/images/humidity.svg":
/*!****************************************!*\
  !*** ./src/assets/images/humidity.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e53a36a1156d4bfd58f.svg";

/***/ }),

/***/ "./src/assets/images/wind.svg":
/*!************************************!*\
  !*** ./src/assets/images/wind.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ed2931a74bd5a5ee42d.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/domValues.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tVmFsdWVzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLGNBQWM7QUFDdkcsUUFBUSxjQUFjO0FBQ3RCO0FBQ0E7O0FBRUEsSUFBSSxxREFBaUI7QUFDckIsSUFBSSxxREFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBaUI7QUFDckIsSUFBSSxxREFBaUI7QUFDckIsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDYTtBQUNhO0FBQ1E7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSx3REFBTztBQUNiO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1R0FBdUcsU0FBUztBQUNoSCxRQUFRLGNBQWM7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsWUFBWSxJQUFJLFNBQVM7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLFFBQVEsUUFBUSxhQUFhOztBQUV4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QyxZQUFZLDBDQUEwQyxjQUFjOztBQUVsSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxVQUFVLE9BQU8sUUFBUSxpQkFBaUIsb0RBQVEsQ0FBQzs7QUFFdEY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCLGtCQUFrQix3REFBWSxDQUFDOztBQUUxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2FwaUxvZ2ljLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2RvbVZhbHVlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZG9tVmFsdWVzLmpzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEobG9jYXRpb25RdWVyeSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTFjZmE2MjdlMWM2YzRhNzliYTgxNTI4NDUyNDE5MDEmcT0ke2xvY2F0aW9uUXVlcnl9JmFxaT15ZXNgLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9LFxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlck9iaiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGRpc3BsYXlDb250cm9sbGVyLm1ha2VEaXNwbGF5Qm94RGl2KCk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuYXBwZW5kTG9jYXRpb24oXG4gICAgICB3ZWF0aGVyT2JqLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICB3ZWF0aGVyT2JqLmxvY2F0aW9uLm5hbWUsXG4gICAgKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5hcHBlbmRDb25kaXRpb25zKFxuICAgICAgd2VhdGhlck9iai5jdXJyZW50LmNvbmRpdGlvbi5pY29uLFxuICAgICAgd2VhdGhlck9iai5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuYXBwZW5kVGVtcGVyYXR1cmUoXG4gICAgICB3ZWF0aGVyT2JqLmN1cnJlbnQudGVtcF9jLFxuICAgICAgd2VhdGhlck9iai5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgICk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuYXBwZW5kV2luZFNwZWVkKFxuICAgICAgd2VhdGhlck9iai5jdXJyZW50LndpbmRfa3BoLFxuICAgICAgd2VhdGhlck9iai5jdXJyZW50LndpbmRfZGlyLFxuICAgICk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuYXBwZW5kSHVtaWRpdHkod2VhdGhlck9iai5jdXJyZW50Lmh1bWlkaXR5KTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5nZXRHSUYod2VhdGhlck9iai5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgZXJyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7XG4iLCJpbXBvcnQgZ2V0RGF0YSBmcm9tIFwiLi9hcGlMb2dpYy5qc1wiO1xuaW1wb3J0IHdpbmRQYXRoIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3dpbmQuc3ZnXCI7XG5pbXBvcnQgaHVtaWRpdHlQYXRoIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2h1bWlkaXR5LnN2Z1wiO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHN1Ym1pdExpc3RuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgICAgZ2V0RGF0YShzZWFyY2hRdWVyeS52YWx1ZSk7XG4gICAgICBzZWFyY2hRdWVyeS52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0R0lGID0gYXN5bmMgZnVuY3Rpb24gKGltZ1F1ZXJ5KSB7XG4gICAgY29uc3QgZXhpc3RpbmdHaWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZ2lmXCIpO1xuICAgIGlmIChleGlzdGluZ0dpZikge1xuICAgICAgZXhpc3RpbmdHaWYucmVtb3ZlKCk7XG4gICAgfVxuICAgIGNvbnN0IHF1ZXJ5SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBxdWVyeUltZy5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1naWZcIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT1CU2NJRkJwOGtpSWJPWEVUNDJ4a0ViSmJ3blZyamJKRiZzPXdlYXRoZXItaXMtJHtpbWdRdWVyeX1gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9LFxuICAgICk7XG4gICAgY29uc3QgaW1nRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBxdWVyeUltZy5zcmMgPSBpbWdEYXRhLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcblxuICAgIGNvbnN0IG5ld1BhcmVudERpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmVudC1ib3hcIik7XG4gICAgbmV3UGFyZW50RGlzcGxheURpdi5hcHBlbmRDaGlsZChxdWVyeUltZyk7XG4gIH07XG5cbiAgY29uc3QgbWFrZURpc3BsYXlCb3hEaXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZXhpc3RpbmdEaXNwbGF5Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWJveFwiKTtcbiAgICBpZiAoZXhpc3RpbmdEaXNwbGF5Qm94KSB7XG4gICAgICBleGlzdGluZ0Rpc3BsYXlCb3gucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhpc3RpbmdQYXJlbnREaXNwbGF5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXJlbnQtYm94XCIpO1xuICAgIGlmIChleGlzdGluZ1BhcmVudERpc3BsYXlEaXYpIHtcbiAgICAgIGV4aXN0aW5nUGFyZW50RGlzcGxheURpdi5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdQYXJlbnREaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQYXJlbnREaXNwbGF5RGl2LmNsYXNzTGlzdC5hZGQoXCJwYXJlbnQtYm94XCIpO1xuXG4gICAgY29uc3QgbmV3RGlzcGxheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3RGlzcGxheURpdi5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1ib3hcIik7XG4gICAgbmV3UGFyZW50RGlzcGxheURpdi5hcHBlbmRDaGlsZChuZXdEaXNwbGF5RGl2KTtcblxuICAgIGNvbnN0IGRpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlcIik7XG4gICAgZGlzcGxheURpdi5hcHBlbmRDaGlsZChuZXdQYXJlbnREaXNwbGF5RGl2KTtcbiAgfTtcblxuICBjb25zdCBhcHBlbmRMb2NhdGlvbiA9IGZ1bmN0aW9uIChjb3VudHJ5TmFtZSwgY2l0eU5hbWUpIHtcbiAgICBjb25zdCBuZXdEaXNwbGF5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWJveFwiKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uU3RyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbG9jYXRpb25TdHIuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuICAgIGxvY2F0aW9uU3RyLnRleHRDb250ZW50ID0gYCR7Y291bnRyeU5hbWV9LCAke2NpdHlOYW1lfWA7XG5cbiAgICBuZXdEaXNwbGF5RGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uU3RyKTtcbiAgfTtcblxuICBjb25zdCBhcHBlbmRDb25kaXRpb25zID0gZnVuY3Rpb24gKGltZ1BhdGgsIGNvbmRpdGlvblN0cikge1xuICAgIGNvbnN0IG5ld0Rpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktYm94XCIpO1xuXG4gICAgY29uc3QgY29uZGl0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uZGl0aW9uc0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29uZGl0aW9uc1wiKTtcbiAgICBjb25kaXRpb25zRGl2LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7aW1nUGF0aH1cIj4gPHA+JHtjb25kaXRpb25TdHJ9PC9wPmA7XG5cbiAgICBuZXdEaXNwbGF5RGl2LmFwcGVuZENoaWxkKGNvbmRpdGlvbnNEaXYpO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZFRlbXBlcmF0dXJlID0gZnVuY3Rpb24gKGN1cnJlbnRUZW1wLCBmZWVsc0xpa2VUZW1wKSB7XG4gICAgY29uc3QgbmV3RGlzcGxheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1ib3hcIik7XG5cbiAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZW1wRGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZW1wc1wiKTtcbiAgICB0ZW1wRGl2LmlubmVySFRNTCA9IGA8cCBjbGFzcz1cImN1cnJlbnRcIj4ke2N1cnJlbnRUZW1wfcKwQzwvcD4gPHAgY2xhc3M9XCJmZWVscy1saWtlXCI+ZmVlbHMgbGlrZSAke2ZlZWxzTGlrZVRlbXB9wrBDPC9wPmA7XG5cbiAgICBuZXdEaXNwbGF5RGl2LmFwcGVuZENoaWxkKHRlbXBEaXYpO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZFdpbmRTcGVlZCA9IGZ1bmN0aW9uICh3aW5kU3BlZWQsIHdpbmREaXIpIHtcbiAgICBjb25zdCBuZXdEaXNwbGF5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWJveFwiKTtcblxuICAgIGNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdpbmREaXYuY2xhc3NMaXN0LmFkZChcIndpbmRcIik7XG4gICAgd2luZERpdi5pbm5lckhUTUwgPSBgPHA+R3VzdCAke3dpbmRTcGVlZH1rbS9oICR7d2luZERpcn08L3A+IDxpbWcgc3JjPVwiJHt3aW5kUGF0aH1cIj5gO1xuXG4gICAgbmV3RGlzcGxheURpdi5hcHBlbmRDaGlsZCh3aW5kRGl2KTtcbiAgfTtcblxuICBjb25zdCBhcHBlbmRIdW1pZGl0eSA9IGZ1bmN0aW9uIChodW1pZGl0eVBlcmNlbnQpIHtcbiAgICBjb25zdCBuZXdEaXNwbGF5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWJveFwiKTtcblxuICAgIGNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBodW1pZGl0eURpdi5jbGFzc0xpc3QuYWRkKFwiaHVtaWRpdHlcIik7XG4gICAgaHVtaWRpdHlEaXYuaW5uZXJIVE1MID0gYDxwPkh1bWlkaXR5ICR7aHVtaWRpdHlQZXJjZW50fSU8L3A+IDxpbWcgc3JjPVwiJHtodW1pZGl0eVBhdGh9XCI+YDtcblxuICAgIG5ld0Rpc3BsYXlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlEaXYpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbWFrZURpc3BsYXlCb3hEaXYsXG4gICAgYXBwZW5kTG9jYXRpb24sXG4gICAgYXBwZW5kQ29uZGl0aW9ucyxcbiAgICBhcHBlbmRUZW1wZXJhdHVyZSxcbiAgICBhcHBlbmRXaW5kU3BlZWQsXG4gICAgYXBwZW5kSHVtaWRpdHksXG4gICAgc3VibWl0TGlzdG5lcixcbiAgICBnZXRHSUYsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29udHJvbGxlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==