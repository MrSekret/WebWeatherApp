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

/***/ }),

/***/ "./src/scripts/requests.js":
/*!*********************************!*\
  !*** ./src/scripts/requests.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestAirPollution: () => (/* binding */ requestAirPollution),
/* harmony export */   requestForecast: () => (/* binding */ requestForecast),
/* harmony export */   requestGeo: () => (/* binding */ requestGeo),
/* harmony export */   requestLatLon: () => (/* binding */ requestLatLon),
/* harmony export */   requestWeather: () => (/* binding */ requestWeather)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var APIkey = "16755258e57bd831cdcc404fc06969a1";
var APIkey2 = "454a827ca76f30e3c2ceaef00cda173a";
function requestGeo(_x) {
  return _requestGeo.apply(this, arguments);
}
function _requestGeo() {
  _requestGeo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(city) {
    var apiGeo, response, loader, notfoundBlock, startPage__notfoundText;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          apiGeo = "https://api.openweathermap.org/geo/1.0/direct?q=".concat(city, "&limit=5&appid=").concat(APIkey);
          _context.prev = 1;
          _context.next = 4;
          return fetch(apiGeo);
        case 4:
          response = _context.sent;
          _context.next = 7;
          return response.json();
        case 7:
          return _context.abrupt("return", _context.sent);
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          loader = document.getElementById("loader");
          notfoundBlock = document.querySelector(".start-page__notfound");
          startPage__notfoundText = notfoundBlock.querySelector("p");
          loader.style.display = 'none';
          notfoundBlock.style.display = "flex";
          startPage__notfoundText.innerHTML = "Server is not responding.";
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 10]]);
  }));
  return _requestGeo.apply(this, arguments);
}
function requestLatLon(_x2) {
  return _requestLatLon.apply(this, arguments);
}
function _requestLatLon() {
  _requestLatLon = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(city) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", requestGeo(city).then(function (response) {
            return [response[0].lat, response[0].lon];
          }));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _requestLatLon.apply(this, arguments);
}
function requestWeather(_x3) {
  return _requestWeather.apply(this, arguments);
}
function _requestWeather() {
  _requestWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(coords) {
    var apiWeather, response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          apiWeather = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(coords[0], "&lon=").concat(coords[1], "&appid=").concat(APIkey, "&units=metric");
          _context3.prev = 1;
          _context3.next = 4;
          return fetch(apiWeather);
        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return response.json();
        case 7:
          return _context3.abrupt("return", _context3.sent);
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 10]]);
  }));
  return _requestWeather.apply(this, arguments);
}
function requestAirPollution(_x4) {
  return _requestAirPollution.apply(this, arguments);
}
function _requestAirPollution() {
  _requestAirPollution = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(coords) {
    var apiAirPollution, response;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          apiAirPollution = "https://api.openweathermap.org/data/2.5/air_pollution?lat=".concat(coords[0], "&lon=").concat(coords[1], "&appid=").concat(APIkey2);
          _context4.prev = 1;
          _context4.next = 4;
          return fetch(apiAirPollution);
        case 4:
          response = _context4.sent;
          _context4.next = 7;
          return response.json();
        case 7:
          return _context4.abrupt("return", _context4.sent);
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 10]]);
  }));
  return _requestAirPollution.apply(this, arguments);
}
function requestForecast(_x5) {
  return _requestForecast.apply(this, arguments);
}
function _requestForecast() {
  _requestForecast = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(coords) {
    var apiForecast, response;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          apiForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=".concat(coords[0], "&lon=").concat(coords[1], "&appid=").concat(APIkey2, "&units=metric");
          _context5.prev = 1;
          _context5.next = 4;
          return fetch(apiForecast);
        case 4:
          response = _context5.sent;
          _context5.next = 7;
          return response.json();
        case 7:
          return _context5.abrupt("return", _context5.sent);
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          console.log(_context5.t0);
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 10]]);
  }));
  return _requestForecast.apply(this, arguments);
}

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
  !*** ./src/scripts/SearchPage/index.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideCities: () => (/* binding */ hideCities),
/* harmony export */   selectedCity: () => (/* binding */ selectedCity),
/* harmony export */   setCurrentIndex: () => (/* binding */ setCurrentIndex),
/* harmony export */   showCities: () => (/* binding */ showCities)
/* harmony export */ });
/* harmony import */ var _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../htmlElements.js */ "./src/scripts/htmlElements.js");
/* harmony import */ var _requests_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../requests.js */ "./src/scripts/requests.js");
/* harmony import */ var _WeatherPage_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WeatherPage/index.js */ "./src/scripts/WeatherPage/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var loader = document.getElementById("loader");
var notfoundBlock = document.querySelector(".start-page__notfound");
function showCities() {
  var counter = 0;
  var inputValue = _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__["default"].inputElemStart.value;
  var cityBlock = document.querySelectorAll(".start-page__citiesblock-city");
  loader.style.display = "grid";
  var searchGeo = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(city) {
      var geoInfo, duplicatesarr, i, nextcity;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(city.length > 0 && counter < 3)) {
              _context.next = 19;
              break;
            }
            _context.next = 3;
            return (0,_requests_js__WEBPACK_IMPORTED_MODULE_1__.requestGeo)(city);
          case 3:
            geoInfo = _context.sent;
            if (!(geoInfo.length != 0)) {
              _context.next = 16;
              break;
            }
            notfoundBlock.style.display = "none";
            duplicatesarr = [];
            i = 0;
          case 8:
            if (!(i < geoInfo.length)) {
              _context.next = 16;
              break;
            }
            if (!(counter > 2)) {
              _context.next = 11;
              break;
            }
            return _context.abrupt("break", 16);
          case 11:
            if (!duplicatesarr.includes(geoInfo[i].name)) {
              cityBlock[counter].innerHTML = "".concat(geoInfo[i].name, ", ").concat(geoInfo[i].country);
              cityBlock[counter].style.display = "block";
              cityBlock[counter].style.opacity = 1;
              cityBlock[counter].style.top = "".concat(49 * counter, "px");
              counter++;
            }
            duplicatesarr.push(geoInfo[i].name);
          case 13:
            i++;
            _context.next = 8;
            break;
          case 16:
            if (counter == 0 && geoInfo.length == 0) {
              notfoundBlock.style.display = "flex";
            } else {
              nextcity = city.substring(0, city.length - 1);
              searchGeo(nextcity);
            }
            _context.next = 23;
            break;
          case 19:
            cityBlock[counter - 1].style.borderBottomLeftRadius = "8px";
            cityBlock[counter - 1].style.borderBottomRightRadius = "8px";
            notfoundBlock.style.display = "none";
            loader.style.display = "none";
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function searchGeo(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  hideCities("");
  if (inputValue.length > 0) {
    searchGeo(inputValue);
  }
}
function hideCities(input) {
  if (!input) {
    var cityBlock = document.querySelectorAll(".start-page__citiesblock-city");
    for (var i = 0; i < cityBlock.length; i++) {
      cityBlock[i].style.display = "none";
      cityBlock[i].style.opacity = 0;
      cityBlock[i].style.top = "".concat(cityBlock[i].style.top - 49, "px");
      cityBlock[i].style.borderBottomLeftRadius = "0px";
      cityBlock[i].style.borderBottomRightRadius = "0px";
    }
    notfoundBlock.style.display = "none";
    loader.style.display = "none";
  }
}
function selectedCity(_x2) {
  return _selectedCity.apply(this, arguments);
}
function _selectedCity() {
  _selectedCity = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(cityelem) {
    var cities, inputElem, _yield$requestLatLon, _yield$requestLatLon2, lat, lon, weatherInfo, forecastInfo, airPollutionInfo, settings;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cities = document.querySelectorAll(".start-page__citiesblock-city");
          inputElem = document.getElementById("searchcity");
          loader.style.display = "grid";
          cities.forEach(function (elem) {
            elem.style.display = "none";
          });
          inputElem.value = cityelem.innerHTML;
          inputElem.readOnly = true;
          inputElem.style.color = "#9E9EA0";
          _context2.next = 9;
          return (0,_requests_js__WEBPACK_IMPORTED_MODULE_1__.requestLatLon)(cityelem.innerHTML.split(",")[0]);
        case 9:
          _yield$requestLatLon = _context2.sent;
          _yield$requestLatLon2 = _slicedToArray(_yield$requestLatLon, 2);
          lat = _yield$requestLatLon2[0];
          lon = _yield$requestLatLon2[1];
          _context2.next = 15;
          return (0,_requests_js__WEBPACK_IMPORTED_MODULE_1__.requestWeather)([lat, lon]);
        case 15:
          weatherInfo = _context2.sent;
          _context2.next = 18;
          return (0,_requests_js__WEBPACK_IMPORTED_MODULE_1__.requestForecast)([lat, lon]);
        case 18:
          forecastInfo = _context2.sent;
          _context2.next = 21;
          return (0,_requests_js__WEBPACK_IMPORTED_MODULE_1__.requestAirPollution)([lat, lon]);
        case 21:
          airPollutionInfo = _context2.sent;
          settings = {
            isCitySelected: true,
            currentcity: cityelem.innerHTML,
            weatherInfo: weatherInfo,
            forecastInfo: forecastInfo,
            airPollutionInfo: airPollutionInfo
          };
          localStorage.setItem('settings', JSON.stringify(settings));
          (0,_WeatherPage_index_js__WEBPACK_IMPORTED_MODULE_2__.loadWeatherPage)(cityelem.innerHTML, weatherInfo, forecastInfo, airPollutionInfo);
          (0,_WeatherPage_index_js__WEBPACK_IMPORTED_MODULE_2__.openWeatherPage)();
        case 26:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _selectedCity.apply(this, arguments);
}
function setCurrentIndex(index) {
  var cities = document.querySelectorAll(".start-page__citiesblock-city");
  cities.forEach(function (city, i) {
    if (i === index) {
      city.classList.add('active');
    } else {
      city.classList.remove('active');
    }
  });
}
})();

/******/ })()
;
//# sourceMappingURL=indexSearch.9e37202993c065a81da3.js.map