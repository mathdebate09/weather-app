"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/LibreFranklin-Medium.ttf */ "./src/assets/fonts/LibreFranklin-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/LibreFranklin-Bold.ttf */ "./src/assets/fonts/LibreFranklin-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/FredokaOne-Regular.ttf */ "./src/assets/fonts/FredokaOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* FONT FACES */
@font-face {
  font-family: LF-Normal;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: LF-Bold;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
  font-family: Logo-Font;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

/* ROOT */
:root {
  --normal: "LF-Normal", sans-serif;
  --bold: "LF-Bold", sans-serif;
  --bg: #dce1de;
  --header: #49a078;
  --text: #333333;
  --display-box: #9cc5a1;
  --filter: invert(13%) sepia(34%) saturate(0%) hue-rotate(239deg)
    brightness(93%) contrast(81%);
}

/* GLOBAL STYLES */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* PARENT-CONTAINER */
.container {
  display: grid;
  grid-template-rows: 150px 1fr 50px;
  height: 100%;
}

/* Header */
.header {
  place-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 16px;
  background-color: var(--header);
}

.logo-text {
  font-size: 68px;
  white-space: nowrap;
  font-family: "Logo-Font", sans-serif;
  color: var(--bg);
}

.logo-img {
  width: 110px;
}

/* DISPLAY */
.display {
  width: 100%;
  height: 100%;
  background-color: var(--bg);
  display: grid;
  grid-template-rows: auto auto;
  place-items: center;
  align-content: start;
}

form {
  padding-top: 16px;
  padding-bottom: 16px;
  font-family: var(--normal);
}

input {
  height: 42px;
  width: 600px;
  padding-left: 8px;
  border-radius: 6px;
  font-size: 22px;
  margin-right: 10px;
  background-color: #dde6de;
  border: 2px solid var(--text);
}

input:focus {
  outline: none;
  background-color: #d6e2d9;
}

button {
  all: unset;
  width: 96px;
  font-size: 22px;
  height: 44px;
  border-radius: 6px;
  text-align: center;
  background-color: #216956;
  color: var(--bg);
  font-family: var(--bold);
  cursor: pointer;
}

/* DISPLAY BOX */
.parent-box {
  display: flex;
  gap: 24px;
}

.weather-gif {
  width: 450px;
  border-radius: 10px;
}
.display-box {
  background-color: var(--display-box);
  display: grid;
  grid-template-rows: repeat(5, auto);
  gap: 12px;
  width: 450px;
  border-radius: 8px;
  font-family: var(--normal);
  color: var(--text);
  padding-bottom: 16px;
}

.display-box img {
  filter: var(--filter);
}

.location {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  padding-top: 12px;
  padding-left: 16px;
  padding-right: 16px;
}

.conditions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.conditions img {
  width: 80px;
}

.conditions p {
  font-size: 30px;
}

.temps {
  text-align: center;
}

.temps .current {
  font-size: 30px;
}

.temps .feels-like {
  font-size: 24px;
}

.wind,
.humidity {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.wind img,
.humidity img {
  width: 34px;
}

.wind p,
.humidity p {
  font-size: 29px;
}

/* FOOTER */
.footer {
  font-family: var(--normal);
  font-size: 24px;
  height: 100%;
  width: 100%;
  background-color: #c4dacd;
  color: #333333;
  display: grid;
  place-items: center;
}

a {
  all: unset;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  font-family: var(--bold);
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA,eAAe;AACf;EACE,sBAAsB;EACtB,4CAAoD;AACtD;;AAEA;EACE,oBAAoB;EACpB,4CAAkD;AACpD;;AAEA;EACE,sBAAsB;EACtB,4CAAkD;AACpD;;AAEA,SAAS;AACT;EACE,iCAAiC;EACjC,6BAA6B;EAC7B,aAAa;EACb,iBAAiB;EACjB,eAAe;EACf,sBAAsB;EACtB;iCAC+B;AACjC;;AAEA,kBAAkB;AAClB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA,qBAAqB;AACrB;EACE,aAAa;EACb,kCAAkC;EAClC,YAAY;AACd;;AAEA,WAAW;AACX;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,SAAS;EACT,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA,YAAY;AACZ;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,yBAAyB;EACzB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,WAAW;EACX,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,wBAAwB;EACxB,eAAe;AACjB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,oCAAoC;EACpC,aAAa;EACb,mCAAmC;EACnC,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,0BAA0B;EAC1B,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;;EAEE,WAAW;AACb;;AAEA;;EAEE,eAAe;AACjB;;AAEA,WAAW;AACX;EACE,0BAA0B;EAC1B,eAAe;EACf,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,cAAc;EACd,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;EAC1B,wBAAwB;EACxB,eAAe;AACjB","sourcesContent":["/* FONT FACES */\n@font-face {\n  font-family: LF-Normal;\n  src: url(\"../assets/fonts/LibreFranklin-Medium.ttf\");\n}\n\n@font-face {\n  font-family: LF-Bold;\n  src: url(\"../assets/fonts/LibreFranklin-Bold.ttf\");\n}\n\n@font-face {\n  font-family: Logo-Font;\n  src: url(\"../assets/fonts/FredokaOne-Regular.ttf\");\n}\n\n/* ROOT */\n:root {\n  --normal: \"LF-Normal\", sans-serif;\n  --bold: \"LF-Bold\", sans-serif;\n  --bg: #dce1de;\n  --header: #49a078;\n  --text: #333333;\n  --display-box: #9cc5a1;\n  --filter: invert(13%) sepia(34%) saturate(0%) hue-rotate(239deg)\n    brightness(93%) contrast(81%);\n}\n\n/* GLOBAL STYLES */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n/* PARENT-CONTAINER */\n.container {\n  display: grid;\n  grid-template-rows: 150px 1fr 50px;\n  height: 100%;\n}\n\n/* Header */\n.header {\n  place-self: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  gap: 16px;\n  background-color: var(--header);\n}\n\n.logo-text {\n  font-size: 68px;\n  white-space: nowrap;\n  font-family: \"Logo-Font\", sans-serif;\n  color: var(--bg);\n}\n\n.logo-img {\n  width: 110px;\n}\n\n/* DISPLAY */\n.display {\n  width: 100%;\n  height: 100%;\n  background-color: var(--bg);\n  display: grid;\n  grid-template-rows: auto auto;\n  place-items: center;\n  align-content: start;\n}\n\nform {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  font-family: var(--normal);\n}\n\ninput {\n  height: 42px;\n  width: 600px;\n  padding-left: 8px;\n  border-radius: 6px;\n  font-size: 22px;\n  margin-right: 10px;\n  background-color: #dde6de;\n  border: 2px solid var(--text);\n}\n\ninput:focus {\n  outline: none;\n  background-color: #d6e2d9;\n}\n\nbutton {\n  all: unset;\n  width: 96px;\n  font-size: 22px;\n  height: 44px;\n  border-radius: 6px;\n  text-align: center;\n  background-color: #216956;\n  color: var(--bg);\n  font-family: var(--bold);\n  cursor: pointer;\n}\n\n/* DISPLAY BOX */\n.parent-box {\n  display: flex;\n  gap: 24px;\n}\n\n.weather-gif {\n  width: 450px;\n  border-radius: 10px;\n}\n.display-box {\n  background-color: var(--display-box);\n  display: grid;\n  grid-template-rows: repeat(5, auto);\n  gap: 12px;\n  width: 450px;\n  border-radius: 8px;\n  font-family: var(--normal);\n  color: var(--text);\n  padding-bottom: 16px;\n}\n\n.display-box img {\n  filter: var(--filter);\n}\n\n.location {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 42px;\n  padding-top: 12px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.conditions {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.conditions img {\n  width: 80px;\n}\n\n.conditions p {\n  font-size: 30px;\n}\n\n.temps {\n  text-align: center;\n}\n\n.temps .current {\n  font-size: 30px;\n}\n\n.temps .feels-like {\n  font-size: 24px;\n}\n\n.wind,\n.humidity {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n\n.wind img,\n.humidity img {\n  width: 34px;\n}\n\n.wind p,\n.humidity p {\n  font-size: 29px;\n}\n\n/* FOOTER */\n.footer {\n  font-family: var(--normal);\n  font-size: 24px;\n  height: 100%;\n  width: 100%;\n  background-color: #c4dacd;\n  color: #333333;\n  display: grid;\n  place-items: center;\n}\n\na {\n  all: unset;\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n  font-family: var(--bold);\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _modules_icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/icon.js */ "./src/modules/icon.js");
/* harmony import */ var _modules_skeleton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/skeleton.js */ "./src/modules/skeleton.js");
/* harmony import */ var _modules_domValues_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/domValues.js */ "./src/modules/domValues.js");
/* harmony import */ var _modules_apiLogic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/apiLogic.js */ "./src/modules/apiLogic.js");





_modules_domValues_js__WEBPACK_IMPORTED_MODULE_3__["default"].submitListner();


(0,_modules_apiLogic_js__WEBPACK_IMPORTED_MODULE_4__["default"])("mumbai");


/***/ }),

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

/***/ "./src/modules/icon.js":
/*!*****************************!*\
  !*** ./src/modules/icon.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/icon.svg */ "./src/assets/images/icon.svg");


const link = document.createElement("link");
link.rel = "icon";
link.href = `${_assets_images_icon_svg__WEBPACK_IMPORTED_MODULE_0__}`;
document.head.appendChild(link);


/***/ }),

/***/ "./src/modules/skeleton.js":
/*!*********************************!*\
  !*** ./src/modules/skeleton.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/logo.svg */ "./src/assets/images/logo.svg");


/* <div class="container">
    <div class="header">
        <img class="logo-img" src="logoPath">
        <p class="logo-text">Weather App</p>
    </div>
    <div class="display">
        <form>
            <input type="text" id="search-bar" placeholder="City, Pin-code, IP Address, etc.">
            <button type="submit">Search</button>
        </form>
    </div>
    <div class="footer">
        <p>© Jay Singh <a href="https://github.com/mathdebate09/weather-app" target="_blank">(mathdebate09)</a></p>
    </div>
</div> */

const container = document.querySelector(".container");

const headerDiv = document.createElement("div");
headerDiv.classList.add("header");
headerDiv.innerHTML = `
    <img class="logo-img" src="${_assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_0__}">
    <p class="logo-text">Weather App</p>`;
container.appendChild(headerDiv);

const display = document.createElement("div");
display.classList.add("display");
container.appendChild(display);

const form = document.createElement("form");
display.appendChild(form);

const input = document.createElement("input");
input.type = "text";
input.id = "search-bar";
input.placeholder = "Enter your City";
form.appendChild(input);

const button = document.createElement("button");
button.type = "submit";
button.textContent = "Search";
form.appendChild(button);

const createFooter = document.createElement("div");
createFooter.classList.add("footer");
createFooter.innerHTML =
  '<p>© Jay Singh <a href="https://github.com/mathdebate09/weather-app" target="_blank">(mathdebate09)</a></p>';
container.appendChild(createFooter);


/***/ }),

/***/ "./src/assets/fonts/FredokaOne-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/FredokaOne-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "376fe6504a42a11500a2.ttf";

/***/ }),

/***/ "./src/assets/fonts/LibreFranklin-Bold.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/LibreFranklin-Bold.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8a6adeeee2d88b5e4e6.ttf";

/***/ }),

/***/ "./src/assets/fonts/LibreFranklin-Medium.ttf":
/*!***************************************************!*\
  !*** ./src/assets/fonts/LibreFranklin-Medium.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "713a2f7a5993dd85cac9.ttf";

/***/ }),

/***/ "./src/assets/images/humidity.svg":
/*!****************************************!*\
  !*** ./src/assets/images/humidity.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e53a36a1156d4bfd58f.svg";

/***/ }),

/***/ "./src/assets/images/icon.svg":
/*!************************************!*\
  !*** ./src/assets/images/icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cb9cb13384ea167070a.svg";

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd25fb4132f2daf311f9.svg";

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyw0SkFBMkQ7QUFDdkcsNENBQTRDLHdKQUF5RDtBQUNyRyw0Q0FBNEMsd0pBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMkZBQTJGLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLE9BQU8sT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0s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dGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2FwaUxvZ2ljLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2RvbVZhbHVlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9pY29uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3NrZWxldG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvTGlicmVGcmFua2xpbi1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL0xpYnJlRnJhbmtsaW4tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvRnJlZG9rYU9uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBGT05UIEZBQ0VTICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IExGLU5vcm1hbDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTEYtQm9sZDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTG9nby1Gb250O1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuLyogUk9PVCAqL1xuOnJvb3Qge1xuICAtLW5vcm1hbDogXCJMRi1Ob3JtYWxcIiwgc2Fucy1zZXJpZjtcbiAgLS1ib2xkOiBcIkxGLUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgLS1iZzogI2RjZTFkZTtcbiAgLS1oZWFkZXI6ICM0OWEwNzg7XG4gIC0tdGV4dDogIzMzMzMzMztcbiAgLS1kaXNwbGF5LWJveDogIzljYzVhMTtcbiAgLS1maWx0ZXI6IGludmVydCgxMyUpIHNlcGlhKDM0JSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMjM5ZGVnKVxuICAgIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg4MSUpO1xufVxuXG4vKiBHTE9CQUwgU1RZTEVTICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiBQQVJFTlQtQ09OVEFJTkVSICovXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCAxZnIgNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBIZWFkZXIgKi9cbi5oZWFkZXIge1xuICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBnYXA6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcik7XG59XG5cbi5sb2dvLXRleHQge1xuICBmb250LXNpemU6IDY4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtZmFtaWx5OiBcIkxvZ28tRm9udFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogdmFyKC0tYmcpO1xufVxuXG4ubG9nby1pbWcge1xuICB3aWR0aDogMTEwcHg7XG59XG5cbi8qIERJU1BMQVkgKi9cbi5kaXNwbGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ub3JtYWwpO1xufVxuXG5pbnB1dCB7XG4gIGhlaWdodDogNDJweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZTZkZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dCk7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZTJkOTtcbn1cblxuYnV0dG9uIHtcbiAgYWxsOiB1bnNldDtcbiAgd2lkdGg6IDk2cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxNjk1NjtcbiAgY29sb3I6IHZhcigtLWJnKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvbGQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIERJU1BMQVkgQk9YICovXG4ucGFyZW50LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjRweDtcbn1cblxuLndlYXRoZXItZ2lmIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmRpc3BsYXktYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlzcGxheS1ib3gpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBhdXRvKTtcbiAgZ2FwOiAxMnB4O1xuICB3aWR0aDogNDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW5vcm1hbCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi5kaXNwbGF5LWJveCBpbWcge1xuICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XG59XG5cbi5sb2NhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDQycHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5jb25kaXRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb25kaXRpb25zIGltZyB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4uY29uZGl0aW9ucyBwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4udGVtcHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZW1wcyAuY3VycmVudCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnRlbXBzIC5mZWVscy1saWtlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ud2luZCxcbi5odW1pZGl0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbn1cblxuLndpbmQgaW1nLFxuLmh1bWlkaXR5IGltZyB7XG4gIHdpZHRoOiAzNHB4O1xufVxuXG4ud2luZCBwLFxuLmh1bWlkaXR5IHAge1xuICBmb250LXNpemU6IDI5cHg7XG59XG5cbi8qIEZPT1RFUiAqL1xuLmZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ub3JtYWwpO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGRhY2Q7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG5hIHtcbiAgYWxsOiB1bnNldDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2xkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGVBQWU7QUFDZjtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsNENBQWtEO0FBQ3BEOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUFrRDtBQUNwRDs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QjtpQ0FDK0I7QUFDakM7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUEsV0FBVztBQUNYO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRk9OVCBGQUNFUyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IExGLU5vcm1hbDtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvTGlicmVGcmFua2xpbi1NZWRpdW0udHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IExGLUJvbGQ7XFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL0xpYnJlRnJhbmtsaW4tQm9sZC50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTG9nby1Gb250O1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9GcmVkb2thT25lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbi8qIFJPT1QgKi9cXG46cm9vdCB7XFxuICAtLW5vcm1hbDogXFxcIkxGLU5vcm1hbFxcXCIsIHNhbnMtc2VyaWY7XFxuICAtLWJvbGQ6IFxcXCJMRi1Cb2xkXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tYmc6ICNkY2UxZGU7XFxuICAtLWhlYWRlcjogIzQ5YTA3ODtcXG4gIC0tdGV4dDogIzMzMzMzMztcXG4gIC0tZGlzcGxheS1ib3g6ICM5Y2M1YTE7XFxuICAtLWZpbHRlcjogaW52ZXJ0KDEzJSkgc2VwaWEoMzQlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyMzlkZWcpXFxuICAgIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg4MSUpO1xcbn1cXG5cXG4vKiBHTE9CQUwgU1RZTEVTICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIFBBUkVOVC1DT05UQUlORVIgKi9cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1MHB4IDFmciA1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4uaGVhZGVyIHtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdhcDogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcik7XFxufVxcblxcbi5sb2dvLXRleHQge1xcbiAgZm9udC1zaXplOiA2OHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9nby1Gb250XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS1iZyk7XFxufVxcblxcbi5sb2dvLWltZyB7XFxuICB3aWR0aDogMTEwcHg7XFxufVxcblxcbi8qIERJU1BMQVkgKi9cXG4uZGlzcGxheSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuZm9ybSB7XFxuICBwYWRkaW5nLXRvcDogMTZweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW5vcm1hbCk7XFxufVxcblxcbmlucHV0IHtcXG4gIGhlaWdodDogNDJweDtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZTZkZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQpO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZTJkOTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGFsbDogdW5zZXQ7XFxuICB3aWR0aDogOTZweDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGhlaWdodDogNDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTY5NTY7XFxuICBjb2xvcjogdmFyKC0tYmcpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvbGQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBESVNQTEFZIEJPWCAqL1xcbi5wYXJlbnQtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi53ZWF0aGVyLWdpZiB7XFxuICB3aWR0aDogNDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uZGlzcGxheS1ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlzcGxheS1ib3gpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIGF1dG8pO1xcbiAgZ2FwOiAxMnB4O1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW5vcm1hbCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmRpc3BsYXktYm94IGltZyB7XFxuICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgcGFkZGluZy10b3A6IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uY29uZGl0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29uZGl0aW9ucyBpbWcge1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5jb25kaXRpb25zIHAge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4udGVtcHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGVtcHMgLmN1cnJlbnQge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4udGVtcHMgLmZlZWxzLWxpa2Uge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ud2luZCxcXG4uaHVtaWRpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4ud2luZCBpbWcsXFxuLmh1bWlkaXR5IGltZyB7XFxuICB3aWR0aDogMzRweDtcXG59XFxuXFxuLndpbmQgcCxcXG4uaHVtaWRpdHkgcCB7XFxuICBmb250LXNpemU6IDI5cHg7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcbi5mb290ZXIge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW5vcm1hbCk7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGRhY2Q7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gIGFsbDogdW5zZXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LWZhbWlseTogdmFyKC0tYm9sZCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGVzL21haW4uY3NzXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvaWNvbi5qc1wiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL3NrZWxldG9uLmpzXCI7XG5pbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9kb21WYWx1ZXMuanNcIjtcblxuZGlzcGxheUNvbnRyb2xsZXIuc3VibWl0TGlzdG5lcigpO1xuXG5pbXBvcnQgZ2V0RGF0YSBmcm9tIFwiLi9tb2R1bGVzL2FwaUxvZ2ljLmpzXCI7XG5nZXREYXRhKFwibXVtYmFpXCIpO1xuIiwiaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2RvbVZhbHVlcy5qc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKGxvY2F0aW9uUXVlcnkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0xY2ZhNjI3ZTFjNmM0YTc5YmE4MTUyODQ1MjQxOTAxJnE9JHtsb2NhdGlvblF1ZXJ5fSZhcWk9eWVzYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfSxcbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJPYmogPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBkaXNwbGF5Q29udHJvbGxlci5tYWtlRGlzcGxheUJveERpdigpO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmFwcGVuZExvY2F0aW9uKFxuICAgICAgd2VhdGhlck9iai5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgd2VhdGhlck9iai5sb2NhdGlvbi5uYW1lLFxuICAgICk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuYXBwZW5kQ29uZGl0aW9ucyhcbiAgICAgIHdlYXRoZXJPYmouY3VycmVudC5jb25kaXRpb24uaWNvbixcbiAgICAgIHdlYXRoZXJPYmouY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICApO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmFwcGVuZFRlbXBlcmF0dXJlKFxuICAgICAgd2VhdGhlck9iai5jdXJyZW50LnRlbXBfYyxcbiAgICAgIHdlYXRoZXJPYmouY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICApO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmFwcGVuZFdpbmRTcGVlZChcbiAgICAgIHdlYXRoZXJPYmouY3VycmVudC53aW5kX2twaCxcbiAgICAgIHdlYXRoZXJPYmouY3VycmVudC53aW5kX2RpcixcbiAgICApO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmFwcGVuZEh1bWlkaXR5KHdlYXRoZXJPYmouY3VycmVudC5odW1pZGl0eSk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuZ2V0R0lGKHdlYXRoZXJPYmouY3VycmVudC5jb25kaXRpb24udGV4dCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IGVycjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhO1xuIiwiaW1wb3J0IGdldERhdGEgZnJvbSBcIi4vYXBpTG9naWMuanNcIjtcbmltcG9ydCB3aW5kUGF0aCBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy93aW5kLnN2Z1wiO1xuaW1wb3J0IGh1bWlkaXR5UGF0aCBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9odW1pZGl0eS5zdmdcIjtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBzdWJtaXRMaXN0bmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBzZWFyY2hRdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICAgIGdldERhdGEoc2VhcmNoUXVlcnkudmFsdWUpO1xuICAgICAgc2VhcmNoUXVlcnkudmFsdWUgPSBcIlwiO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldEdJRiA9IGFzeW5jIGZ1bmN0aW9uIChpbWdRdWVyeSkge1xuICAgIGNvbnN0IGV4aXN0aW5nR2lmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWdpZlwiKTtcbiAgICBpZiAoZXhpc3RpbmdHaWYpIHtcbiAgICAgIGV4aXN0aW5nR2lmLnJlbW92ZSgpO1xuICAgIH1cbiAgICBjb25zdCBxdWVyeUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcXVlcnlJbWcuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItZ2lmXCIpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9QlNjSUZCcDhraUliT1hFVDQyeGtFYkpid25WcmpiSkYmcz13ZWF0aGVyLWlzLSR7aW1nUXVlcnl9YCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfSxcbiAgICApO1xuICAgIGNvbnN0IGltZ0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcXVlcnlJbWcuc3JjID0gaW1nRGF0YS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG5cbiAgICBjb25zdCBuZXdQYXJlbnREaXNwbGF5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXJlbnQtYm94XCIpO1xuICAgIG5ld1BhcmVudERpc3BsYXlEaXYuYXBwZW5kQ2hpbGQocXVlcnlJbWcpO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VEaXNwbGF5Qm94RGl2ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGV4aXN0aW5nRGlzcGxheUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1ib3hcIik7XG4gICAgaWYgKGV4aXN0aW5nRGlzcGxheUJveCkge1xuICAgICAgZXhpc3RpbmdEaXNwbGF5Qm94LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGV4aXN0aW5nUGFyZW50RGlzcGxheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyZW50LWJveFwiKTtcbiAgICBpZiAoZXhpc3RpbmdQYXJlbnREaXNwbGF5RGl2KSB7XG4gICAgICBleGlzdGluZ1BhcmVudERpc3BsYXlEaXYucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3UGFyZW50RGlzcGxheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UGFyZW50RGlzcGxheURpdi5jbGFzc0xpc3QuYWRkKFwicGFyZW50LWJveFwiKTtcblxuICAgIGNvbnN0IG5ld0Rpc3BsYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0Rpc3BsYXlEaXYuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktYm94XCIpO1xuICAgIG5ld1BhcmVudERpc3BsYXlEaXYuYXBwZW5kQ2hpbGQobmV3RGlzcGxheURpdik7XG5cbiAgICBjb25zdCBkaXNwbGF5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5XCIpO1xuICAgIGRpc3BsYXlEaXYuYXBwZW5kQ2hpbGQobmV3UGFyZW50RGlzcGxheURpdik7XG4gIH07XG5cbiAgY29uc3QgYXBwZW5kTG9jYXRpb24gPSBmdW5jdGlvbiAoY291bnRyeU5hbWUsIGNpdHlOYW1lKSB7XG4gICAgY29uc3QgbmV3RGlzcGxheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1ib3hcIik7XG5cbiAgICBjb25zdCBsb2NhdGlvblN0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxvY2F0aW9uU3RyLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbiAgICBsb2NhdGlvblN0ci50ZXh0Q29udGVudCA9IGAke2NvdW50cnlOYW1lfSwgJHtjaXR5TmFtZX1gO1xuXG4gICAgbmV3RGlzcGxheURpdi5hcHBlbmRDaGlsZChsb2NhdGlvblN0cik7XG4gIH07XG5cbiAgY29uc3QgYXBwZW5kQ29uZGl0aW9ucyA9IGZ1bmN0aW9uIChpbWdQYXRoLCBjb25kaXRpb25TdHIpIHtcbiAgICBjb25zdCBuZXdEaXNwbGF5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWJveFwiKTtcblxuICAgIGNvbnN0IGNvbmRpdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbmRpdGlvbnNEaXYuY2xhc3NMaXN0LmFkZChcImNvbmRpdGlvbnNcIik7XG4gICAgY29uZGl0aW9uc0Rpdi5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2ltZ1BhdGh9XCI+IDxwPiR7Y29uZGl0aW9uU3RyfTwvcD5gO1xuXG4gICAgbmV3RGlzcGxheURpdi5hcHBlbmRDaGlsZChjb25kaXRpb25zRGl2KTtcbiAgfTtcblxuICBjb25zdCBhcHBlbmRUZW1wZXJhdHVyZSA9IGZ1bmN0aW9uIChjdXJyZW50VGVtcCwgZmVlbHNMaWtlVGVtcCkge1xuICAgIGNvbnN0IG5ld0Rpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktYm94XCIpO1xuXG4gICAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGVtcERpdi5jbGFzc0xpc3QuYWRkKFwidGVtcHNcIik7XG4gICAgdGVtcERpdi5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJjdXJyZW50XCI+JHtjdXJyZW50VGVtcH3CsEM8L3A+IDxwIGNsYXNzPVwiZmVlbHMtbGlrZVwiPmZlZWxzIGxpa2UgJHtmZWVsc0xpa2VUZW1wfcKwQzwvcD5gO1xuXG4gICAgbmV3RGlzcGxheURpdi5hcHBlbmRDaGlsZCh0ZW1wRGl2KTtcbiAgfTtcblxuICBjb25zdCBhcHBlbmRXaW5kU3BlZWQgPSBmdW5jdGlvbiAod2luZFNwZWVkLCB3aW5kRGlyKSB7XG4gICAgY29uc3QgbmV3RGlzcGxheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1ib3hcIik7XG5cbiAgICBjb25zdCB3aW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3aW5kRGl2LmNsYXNzTGlzdC5hZGQoXCJ3aW5kXCIpO1xuICAgIHdpbmREaXYuaW5uZXJIVE1MID0gYDxwPkd1c3QgJHt3aW5kU3BlZWR9a20vaCAke3dpbmREaXJ9PC9wPiA8aW1nIHNyYz1cIiR7d2luZFBhdGh9XCI+YDtcblxuICAgIG5ld0Rpc3BsYXlEaXYuYXBwZW5kQ2hpbGQod2luZERpdik7XG4gIH07XG5cbiAgY29uc3QgYXBwZW5kSHVtaWRpdHkgPSBmdW5jdGlvbiAoaHVtaWRpdHlQZXJjZW50KSB7XG4gICAgY29uc3QgbmV3RGlzcGxheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1ib3hcIik7XG5cbiAgICBjb25zdCBodW1pZGl0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaHVtaWRpdHlEaXYuY2xhc3NMaXN0LmFkZChcImh1bWlkaXR5XCIpO1xuICAgIGh1bWlkaXR5RGl2LmlubmVySFRNTCA9IGA8cD5IdW1pZGl0eSAke2h1bWlkaXR5UGVyY2VudH0lPC9wPiA8aW1nIHNyYz1cIiR7aHVtaWRpdHlQYXRofVwiPmA7XG5cbiAgICBuZXdEaXNwbGF5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5RGl2KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1ha2VEaXNwbGF5Qm94RGl2LFxuICAgIGFwcGVuZExvY2F0aW9uLFxuICAgIGFwcGVuZENvbmRpdGlvbnMsXG4gICAgYXBwZW5kVGVtcGVyYXR1cmUsXG4gICAgYXBwZW5kV2luZFNwZWVkLFxuICAgIGFwcGVuZEh1bWlkaXR5LFxuICAgIHN1Ym1pdExpc3RuZXIsXG4gICAgZ2V0R0lGLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgbXlJY29uIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2ljb24uc3ZnXCI7XG5cbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbmxpbmsucmVsID0gXCJpY29uXCI7XG5saW5rLmhyZWYgPSBgJHtteUljb259YDtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4iLCJpbXBvcnQgbG9nb1BhdGggZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmdcIjtcblxuLyogPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImxvZ28taW1nXCIgc3JjPVwibG9nb1BhdGhcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJsb2dvLXRleHRcIj5XZWF0aGVyIEFwcDwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheVwiPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic2VhcmNoLWJhclwiIHBsYWNlaG9sZGVyPVwiQ2l0eSwgUGluLWNvZGUsIElQIEFkZHJlc3MsIGV0Yy5cIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICA8cD7CqSBKYXkgU2luZ2ggPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoZGViYXRlMDkvd2VhdGhlci1hcHBcIiB0YXJnZXQ9XCJfYmxhbmtcIj4obWF0aGRlYmF0ZTA5KTwvYT48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj4gKi9cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5cbmNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5oZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbmhlYWRlckRpdi5pbm5lckhUTUwgPSBgXG4gICAgPGltZyBjbGFzcz1cImxvZ28taW1nXCIgc3JjPVwiJHtsb2dvUGF0aH1cIj5cbiAgICA8cCBjbGFzcz1cImxvZ28tdGV4dFwiPldlYXRoZXIgQXBwPC9wPmA7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcblxuY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXkpO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5kaXNwbGF5LmFwcGVuZENoaWxkKGZvcm0pO1xuXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmlucHV0LnR5cGUgPSBcInRleHRcIjtcbmlucHV0LmlkID0gXCJzZWFyY2gtYmFyXCI7XG5pbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgeW91ciBDaXR5XCI7XG5mb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbmJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VhcmNoXCI7XG5mb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jcmVhdGVGb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbmNyZWF0ZUZvb3Rlci5pbm5lckhUTUwgPVxuICAnPHA+wqkgSmF5IFNpbmdoIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWF0aGRlYmF0ZTA5L3dlYXRoZXItYXBwXCIgdGFyZ2V0PVwiX2JsYW5rXCI+KG1hdGhkZWJhdGUwOSk8L2E+PC9wPic7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==