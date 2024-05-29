/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/WeatherPage/index.js":
/*!******************************************!*\
  !*** ./src/scripts/WeatherPage/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadWeatherPage: () => (/* binding */ loadWeatherPage),
/* harmony export */   openWeatherPage: () => (/* binding */ openWeatherPage),
/* harmony export */   showStartPage: () => (/* binding */ showStartPage)
/* harmony export */ });
/* harmony import */ var _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../htmlElements.js */ "./src/scripts/htmlElements.js");

var Qualitativenames = {
  1: "Good",
  2: "Fair",
  3: "Moderate",
  4: "Poor",
  5: "Very Poor"
};
function showStartPage() {
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].startpage.style.display = "none";
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherpage.style.opacity = 0;
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].inputElemStart.readOnly = false;
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].inputElemStart.style.color = "#FAFAFA";
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].inputElemStart.value = _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].inputElemWeather.value;
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__previewblock.classList.remove("fadeIn");
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__infoblocksToday.classList.remove("fadeIn");
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__infoblocksNextdays.classList.remove("fadeIn");
  setTimeout(function () {
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].header.classList.add("fadeIn");
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].startpage.classList.add("fadeIn");
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].page.style.marginTop = "160px";
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].wrapper.style.alignItems = "center";
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].header.style.display = "block";
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].startpage.style.display = "block";
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].header.style.opacity = 1;
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].startpage.style.opacity = 1;
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherpage.style.display = "none";
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].inputElemWeather.value = "";
  }, 700);
}
function openWeatherPage() {
  var fastanime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if (fastanime) {
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].header.style.display = "none";
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].startpage.style.display = "none";
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].wrapper.style.alignItems = "normal";
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherpage.style.display = "block";
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherpage.style.opacity = 1;
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].page.style.marginTop = "40px";
  } else {
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].header.style.opacity = 0;
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].startpage.style.opacity = 0;
    setTimeout(function () {
      _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].wrapper.style.alignItems = "normal";
      _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].header.style.display = "none";
      _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].startpage.style.display = "none";
      _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherpage.style.display = "block";
      _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherpage.style.opacity = 1;
      _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].page.style.marginTop = "40px";
      _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__previewblock.classList.add("fadeIn");
      _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__infoblocksToday.classList.add("fadeIn");
      _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__infoblocksNextdays.classList.add("fadeIn");
    }, 700);
  }
}
function loadWeatherPage(title, weatherInfo, forecastInfo, airPollutionInfo) {
  var forecastImg = {
    200: ["./assets/svg/storm_day.svg", "./assets/svg/storm_night.svg"],
    300: ["./assets/svg/rain_moment_day.svg", "./assets/svg/rain_moment_night.svg"],
    500: ["./assets/svg/rain_moment_day.svg", "./assets/svg/rain_moment_night.svg"],
    600: ["./assets/svg/snow_day.svg", "./assets/svg/snow_night.svg"],
    781: ["./assets/svg/cloudy_day.svg", "./assets/svg/cloudy_night.svg"],
    700: ["./assets/svg/cloudy_day.svg", "./assets/svg/cloudy_night.svg"],
    800: ["./assets/svg/clear_day.svg", "./assets/svg/clear_night.svg"],
    801: ["./assets/svg/few_clouds_day.svg", "./assets/svg/few_clouds_night.svg"],
    802: ["./assets/svg/cloudy_day.svg", "./assets/svg/cloudy_night.svg"]
  };
  var forecastImgKeys = Object.keys(forecastImg);
  function updateWeatherTime() {
    var now = new Date();
    var utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    var settings = JSON.parse(localStorage.getItem('settings'));
    utc.setSeconds(utc.getSeconds() + settings.weatherInfo.timezone);
    var time = utc.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__topblockTime.innerHTML = time;
    return [utc, time];
  }
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var dateAndTime = updateWeatherTime();
  var date = dateAndTime[0];
  var time = dateAndTime[1];
  var formattedDate = date.toLocaleDateString('en-US', options);
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__topblockTitleblockTitle.innerHTML = title;
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__topblockTitleblockDate.innerHTML = formattedDate;
  var intervalUpdateTime;
  clearInterval(intervalUpdateTime);
  intervalUpdateTime = setInterval(updateWeatherTime, 60000);
  var temp = Math.round(weatherInfo.main.temp);
  var tempmax = Math.round(weatherInfo.main.temp_max);
  var tempmin = Math.round(weatherInfo.main.temp_min);
  var description = weatherInfo.weather[0].description;
  var weatherPathSVG;
  var weatherId = weatherInfo.weather[0].id;
  for (var i = 0; i < 9; i++) {
    if (Math.floor(weatherId / 100) == Math.floor(forecastImgKeys[i] / 100) || weatherId == forecastImgKeys[i]) {
      weatherPathSVG = forecastImg[forecastImgKeys[i]];
    }
  }
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__botblockDegrees.innerHTML = "".concat(temp, "\xBAc");
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__botblockAvgdegrees.innerHTML = "".concat(tempmax, "\xBAc / ").concat(tempmin, "\xBAc");
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__botblockText.innerHTML = description[0].toUpperCase() + description.substring(1, description.length);
  if (time[0] == "2" && time[1] > "0" || time[0] == "0" && time[1] < "5") {
    var weatherPathPNG = weatherPathSVG[1].replace('svg', 'png').replace('.svg', '.png');
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__previewblockInfoBg.src = weatherPathPNG.substring(0, 13) + "bg_" + weatherPathPNG.substring(13);
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__previewblockInfoDecor.src = weatherPathSVG[1];
  } else {
    var _weatherPathPNG = weatherPathSVG[0].replace('svg', 'png').replace('.svg', '.png');
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__previewblockInfoBg.src = _weatherPathPNG.substring(0, 13) + "bg_" + _weatherPathPNG.substring(13);
    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__previewblockInfoDecor.src = weatherPathSVG[0];
  }
  var humidity = weatherInfo.main.humidity;
  var feelslike = Math.round(weatherInfo.main.feels_like);
  var visibility = weatherInfo.visibility / 1000;
  var windspeed = weatherInfo.wind.speed.toFixed(1);
  var airPollution = Qualitativenames[airPollutionInfo.list[0].main.aqi];
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__detailsValue_thermalSensation.innerHTML = "".concat(feelslike, "\xBAc");
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__detailsValue_visibility.innerHTML = "".concat(visibility, " km");
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__detailsValue_windSpeed.innerHTML = "".concat(windspeed, " m/s");
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__detailsValue_airHumidity.innerHTML = "".concat(humidity, "%");
  _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherPage__detailsValue_airPollution.innerHTML = airPollution;
  for (var ind = 0; ind < _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherBlocks.length; ind++) {
    loadForecastNextDay(ind);
  }
  function loadForecastNextDay(ind) {
    var forecastInd = ind == 0 ? 1 : (ind + 1) * 8 - 1;
    var dateUTC = new Date();
    dateUTC.setSeconds(dateUTC.getSeconds() + forecastInfo.list[forecastInd].dt);
    var date = dateUTC.toLocaleDateString('en-US', {
      weekday: 'long'
    });
    var description = forecastInfo.list[forecastInd].weather[0].main;
    var temp = Math.round(forecastInfo.list[forecastInd].main.temp);
    weatherId = forecastInfo.list[forecastInd].weather[0].id;
    for (var _i = 0; _i < 6; _i++) {
      if (Math.floor(weatherId / 100) == Math.floor(forecastImgKeys[_i] / 100) || weatherId == forecastImgKeys[_i]) {
        weatherPathSVG = forecastImg[forecastImgKeys[_i]];
      }
    }
    var weatherPage__blockTitle = _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherBlocks[ind].querySelector(".weather-page__block-title");
    var weatherPage__blockText = _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherBlocks[ind].querySelector(".weather-page__block-text");
    var weatherPage__blockDegrees = _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherBlocks[ind].querySelector(".weather-page__block-degrees");
    var weatherPage__blockImg = _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].weatherBlocks[ind].querySelector(".weather-page__block-img");
    if (ind == 0) weatherPage__blockTitle.innerHTML = "Today";else if (ind == 1) weatherPage__blockTitle.innerHTML = "Tomorrow";else weatherPage__blockTitle.innerHTML = date;
    weatherPage__blockImg.src = weatherPathSVG[0];
    weatherPage__blockText.innerHTML = description;
    weatherPage__blockDegrees.innerHTML = "".concat(temp, "\xBAc");
  }
  return intervalUpdateTime;
}

/***/ }),

/***/ "./src/scripts/htmlElements.js":
/*!*************************************!*\
  !*** ./src/scripts/htmlElements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Elements = {
  page: document.querySelector(".page"),
  header: document.querySelector(".header"),
  startpage: document.querySelector(".start-page"),
  weatherpage: document.querySelector(".weather-page"),
  weatherPage__previewblock: document.querySelector(".weather-page__previewblock"),
  weatherPage__previewblockInfoBg: document.querySelector(".weather-page__previewblock-info-bg"),
  weatherPage__topblockTitleblockTitle: document.querySelector(".weather-page__topblock-titleblock-title"),
  weatherPage__topblockTitleblockDate: document.querySelector(".weather-page__topblock-titleblock-date"),
  weatherPage__topblockTime: document.querySelector(".weather-page__topblock-time"),
  weatherPage__botblockDegrees: document.querySelector(".weather-page__botblock-degrees"),
  weatherPage__botblockAvgdegrees: document.querySelector(".weather-page__botblock-avgdegrees"),
  weatherPage__botblockText: document.querySelector(".weather-page__botblock-text"),
  weatherPage__previewblockInfoDecor: document.querySelector(".weather-page__previewblock-info-decor"),
  weatherPage__infoblocksToday: document.querySelector(".weather-page__infoblocks-today"),
  weatherPage__detailsValue_thermalSensation: document.querySelector(".weather-page__details-value_thermal-sensation"),
  weatherPage__detailsValue_visibility: document.querySelector(".weather-page__details-value_visibility"),
  weatherPage__detailsValue_windSpeed: document.querySelector(".weather-page__details-value_wind-speed"),
  weatherPage__detailsValue_airHumidity: document.querySelector(".weather-page__details-value_air-humidity"),
  weatherPage__detailsValue_airPollution: document.querySelector(".weather-page__details-value_airPollution"),
  weatherPage__infoblocksNextdays: document.querySelector(".weather-page__infoblocks-nextdays"),
  weatherBlocks: document.querySelectorAll(".weather-page__block"),
  wrapper: document.querySelector(".wrapper"),
  inputElemWeather: document.querySelector(".weather-page__input"),
  inputElemStart: document.querySelector('.start-page__inputblock-input'),
  weatherPage__logo: document.getElementById("weather-page__logo"),
  loader: document.getElementById("loader"),
  notfoundBlock: document.querySelector(".start-page__notfound")
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Elements);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./src/scripts/loadLocalStorage.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WeatherPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherPage */ "./src/scripts/WeatherPage/index.js");

var zeroSettings = {
  isCitySelected: false,
  currentcity: "",
  weatherInfo: "",
  forecastInfo: "",
  airPollutionInfo: ""
};
var loadSettings = function loadSettings() {
  if (localStorage.getItem('settings') == null) {
    localStorage.setItem('settings', JSON.stringify(zeroSettings));
  }
  var settingsString = JSON.parse(localStorage.getItem('settings'));
  if (settingsString.isCitySelected) {
    (0,_WeatherPage__WEBPACK_IMPORTED_MODULE_0__.loadWeatherPage)(settingsString.currentcity, settingsString.weatherInfo, settingsString.forecastInfo, settingsString.airPollutionInfo);
    (0,_WeatherPage__WEBPACK_IMPORTED_MODULE_0__.openWeatherPage)(true);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSettings);
})();

/******/ })()
;
//# sourceMappingURL=loadLocalStorage.abe3e22776620d734e53.js.map