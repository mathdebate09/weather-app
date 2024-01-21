"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["apiLogic"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/apiLogic.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpTG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsY0FBYztBQUN2RyxRQUFRLGNBQWM7QUFDdEI7QUFDQTs7QUFFQSxJQUFJLHFEQUFpQjtBQUNyQixJQUFJLHFEQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFpQjtBQUNyQixJQUFJLHFEQUFpQjtBQUNyQixJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENhO0FBQ2E7QUFDUTs7QUFFekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHdEQUFPO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVHQUF1RyxTQUFTO0FBQ2hILFFBQVEsY0FBYztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxZQUFZLElBQUksU0FBUzs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUSxRQUFRLGFBQWE7O0FBRXhFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLFlBQVksMENBQTBDLGNBQWM7O0FBRWxIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLFVBQVUsT0FBTyxRQUFRLGlCQUFpQixvREFBUSxDQUFDOztBQUV0RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLHdEQUFZLENBQUM7O0FBRTFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvYXBpTG9naWMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvZG9tVmFsdWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tIFwiLi9kb21WYWx1ZXMuanNcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShsb2NhdGlvblF1ZXJ5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MWNmYTYyN2UxYzZjNGE3OWJhODE1Mjg0NTI0MTkwMSZxPSR7bG9jYXRpb25RdWVyeX0mYXFpPXllc2AsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH0sXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyT2JqID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgZGlzcGxheUNvbnRyb2xsZXIubWFrZURpc3BsYXlCb3hEaXYoKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5hcHBlbmRMb2NhdGlvbihcbiAgICAgIHdlYXRoZXJPYmoubG9jYXRpb24uY291bnRyeSxcbiAgICAgIHdlYXRoZXJPYmoubG9jYXRpb24ubmFtZSxcbiAgICApO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmFwcGVuZENvbmRpdGlvbnMoXG4gICAgICB3ZWF0aGVyT2JqLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXG4gICAgICB3ZWF0aGVyT2JqLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5hcHBlbmRUZW1wZXJhdHVyZShcbiAgICAgIHdlYXRoZXJPYmouY3VycmVudC50ZW1wX2MsXG4gICAgICB3ZWF0aGVyT2JqLmN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5hcHBlbmRXaW5kU3BlZWQoXG4gICAgICB3ZWF0aGVyT2JqLmN1cnJlbnQud2luZF9rcGgsXG4gICAgICB3ZWF0aGVyT2JqLmN1cnJlbnQud2luZF9kaXIsXG4gICAgKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5hcHBlbmRIdW1pZGl0eSh3ZWF0aGVyT2JqLmN1cnJlbnQuaHVtaWRpdHkpO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmdldEdJRih3ZWF0aGVyT2JqLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBlcnI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTtcbiIsImltcG9ydCBnZXREYXRhIGZyb20gXCIuL2FwaUxvZ2ljLmpzXCI7XG5pbXBvcnQgd2luZFBhdGggZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvd2luZC5zdmdcIjtcbmltcG9ydCBodW1pZGl0eVBhdGggZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaHVtaWRpdHkuc3ZnXCI7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3VibWl0TGlzdG5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgICBnZXREYXRhKHNlYXJjaFF1ZXJ5LnZhbHVlKTtcbiAgICAgIHNlYXJjaFF1ZXJ5LnZhbHVlID0gXCJcIjtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRHSUYgPSBhc3luYyBmdW5jdGlvbiAoaW1nUXVlcnkpIHtcbiAgICBjb25zdCBleGlzdGluZ0dpZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1naWZcIik7XG4gICAgaWYgKGV4aXN0aW5nR2lmKSB7XG4gICAgICBleGlzdGluZ0dpZi5yZW1vdmUoKTtcbiAgICB9XG4gICAgY29uc3QgcXVlcnlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHF1ZXJ5SW1nLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWdpZlwiKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PUJTY0lGQnA4a2lJYk9YRVQ0MnhrRWJKYnduVnJqYkpGJnM9d2VhdGhlci1pcy0ke2ltZ1F1ZXJ5fWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH0sXG4gICAgKTtcbiAgICBjb25zdCBpbWdEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHF1ZXJ5SW1nLnNyYyA9IGltZ0RhdGEuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xuXG4gICAgY29uc3QgbmV3UGFyZW50RGlzcGxheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyZW50LWJveFwiKTtcbiAgICBuZXdQYXJlbnREaXNwbGF5RGl2LmFwcGVuZENoaWxkKHF1ZXJ5SW1nKTtcbiAgfTtcblxuICBjb25zdCBtYWtlRGlzcGxheUJveERpdiA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBleGlzdGluZ0Rpc3BsYXlCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktYm94XCIpO1xuICAgIGlmIChleGlzdGluZ0Rpc3BsYXlCb3gpIHtcbiAgICAgIGV4aXN0aW5nRGlzcGxheUJveC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBleGlzdGluZ1BhcmVudERpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmVudC1ib3hcIik7XG4gICAgaWYgKGV4aXN0aW5nUGFyZW50RGlzcGxheURpdikge1xuICAgICAgZXhpc3RpbmdQYXJlbnREaXNwbGF5RGl2LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1BhcmVudERpc3BsYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1BhcmVudERpc3BsYXlEaXYuY2xhc3NMaXN0LmFkZChcInBhcmVudC1ib3hcIik7XG5cbiAgICBjb25zdCBuZXdEaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdEaXNwbGF5RGl2LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWJveFwiKTtcbiAgICBuZXdQYXJlbnREaXNwbGF5RGl2LmFwcGVuZENoaWxkKG5ld0Rpc3BsYXlEaXYpO1xuXG4gICAgY29uc3QgZGlzcGxheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheVwiKTtcbiAgICBkaXNwbGF5RGl2LmFwcGVuZENoaWxkKG5ld1BhcmVudERpc3BsYXlEaXYpO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZExvY2F0aW9uID0gZnVuY3Rpb24gKGNvdW50cnlOYW1lLCBjaXR5TmFtZSkge1xuICAgIGNvbnN0IG5ld0Rpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktYm94XCIpO1xuXG4gICAgY29uc3QgbG9jYXRpb25TdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsb2NhdGlvblN0ci5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25cIik7XG4gICAgbG9jYXRpb25TdHIudGV4dENvbnRlbnQgPSBgJHtjb3VudHJ5TmFtZX0sICR7Y2l0eU5hbWV9YDtcblxuICAgIG5ld0Rpc3BsYXlEaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25TdHIpO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZENvbmRpdGlvbnMgPSBmdW5jdGlvbiAoaW1nUGF0aCwgY29uZGl0aW9uU3RyKSB7XG4gICAgY29uc3QgbmV3RGlzcGxheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1ib3hcIik7XG5cbiAgICBjb25zdCBjb25kaXRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25kaXRpb25zRGl2LmNsYXNzTGlzdC5hZGQoXCJjb25kaXRpb25zXCIpO1xuICAgIGNvbmRpdGlvbnNEaXYuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtpbWdQYXRofVwiPiA8cD4ke2NvbmRpdGlvblN0cn08L3A+YDtcblxuICAgIG5ld0Rpc3BsYXlEaXYuYXBwZW5kQ2hpbGQoY29uZGl0aW9uc0Rpdik7XG4gIH07XG5cbiAgY29uc3QgYXBwZW5kVGVtcGVyYXR1cmUgPSBmdW5jdGlvbiAoY3VycmVudFRlbXAsIGZlZWxzTGlrZVRlbXApIHtcbiAgICBjb25zdCBuZXdEaXNwbGF5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWJveFwiKTtcblxuICAgIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRlbXBEaXYuY2xhc3NMaXN0LmFkZChcInRlbXBzXCIpO1xuICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwiY3VycmVudFwiPiR7Y3VycmVudFRlbXB9wrBDPC9wPiA8cCBjbGFzcz1cImZlZWxzLWxpa2VcIj5mZWVscyBsaWtlICR7ZmVlbHNMaWtlVGVtcH3CsEM8L3A+YDtcblxuICAgIG5ld0Rpc3BsYXlEaXYuYXBwZW5kQ2hpbGQodGVtcERpdik7XG4gIH07XG5cbiAgY29uc3QgYXBwZW5kV2luZFNwZWVkID0gZnVuY3Rpb24gKHdpbmRTcGVlZCwgd2luZERpcikge1xuICAgIGNvbnN0IG5ld0Rpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktYm94XCIpO1xuXG4gICAgY29uc3Qgd2luZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2luZERpdi5jbGFzc0xpc3QuYWRkKFwid2luZFwiKTtcbiAgICB3aW5kRGl2LmlubmVySFRNTCA9IGA8cD5HdXN0ICR7d2luZFNwZWVkfWttL2ggJHt3aW5kRGlyfTwvcD4gPGltZyBzcmM9XCIke3dpbmRQYXRofVwiPmA7XG5cbiAgICBuZXdEaXNwbGF5RGl2LmFwcGVuZENoaWxkKHdpbmREaXYpO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZEh1bWlkaXR5ID0gZnVuY3Rpb24gKGh1bWlkaXR5UGVyY2VudCkge1xuICAgIGNvbnN0IG5ld0Rpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktYm94XCIpO1xuXG4gICAgY29uc3QgaHVtaWRpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGh1bWlkaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJodW1pZGl0eVwiKTtcbiAgICBodW1pZGl0eURpdi5pbm5lckhUTUwgPSBgPHA+SHVtaWRpdHkgJHtodW1pZGl0eVBlcmNlbnR9JTwvcD4gPGltZyBzcmM9XCIke2h1bWlkaXR5UGF0aH1cIj5gO1xuXG4gICAgbmV3RGlzcGxheURpdi5hcHBlbmRDaGlsZChodW1pZGl0eURpdik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtYWtlRGlzcGxheUJveERpdixcbiAgICBhcHBlbmRMb2NhdGlvbixcbiAgICBhcHBlbmRDb25kaXRpb25zLFxuICAgIGFwcGVuZFRlbXBlcmF0dXJlLFxuICAgIGFwcGVuZFdpbmRTcGVlZCxcbiAgICBhcHBlbmRIdW1pZGl0eSxcbiAgICBzdWJtaXRMaXN0bmVyLFxuICAgIGdldEdJRixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9