/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/script/modules/backtoinit.js":
/*!*********************************************!*\
  !*** ./public/script/modules/backtoinit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ backToinit\n/* harmony export */ });\nfunction backToinit() {\r\n  const buttonBack = document.querySelector('[data-back=\"button\"]');\r\n  buttonBack.addEventListener('click', () => {\r\n    document.location.reload();\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://github-search/./public/script/modules/backtoinit.js?");

/***/ }),

/***/ "./public/script/modules/create-profile.js":
/*!*************************************************!*\
  !*** ./public/script/modules/create-profile.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ createProfile\n/* harmony export */ });\nfunction createProfile(userData, userStar) {\r\n  const profileSection = document.querySelector('.user');\r\n  const profileMarkup = `\r\n    <div class=\"user__avatar\">\r\n    <img src= ${userData.avatar_url || '../public/assets/no-found.png'} />\r\n  </div>\r\n  <div class=\"user__profile\">\r\n    <h2>${userData.name || ''}</h2>\r\n    <p>@${userData.login || ''}</p>\r\n    <div class=\"user__location\">\r\n      <div>\r\n      <span class=\"iconify\" data-icon=\"fa-solid:map-marker-alt\" data-inline=\"false\"></span>\r\n      <p>${userData.location || ''}</p>\r\n      </div>\r\n      <div>\r\n      ${\r\n        userData.company\r\n          ? '<span class=\"iconify\" data-icon=\"ic:baseline-business-center\" data-inline=\"false\"></span>'\r\n          : ''\r\n      }\r\n      <p>${userData.company || ''}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"user__data\">\r\n      <span class=\"iconify\" data-icon=\"fluent:people-team-28-filled\" data-inline=\"false\"></span>\r\n      <p>${userData.followers || 0}</p>\r\n      <span class=\"iconify\" data-icon=\"fluent:people-team-28-regular\" data-inline=\"false\"></span>\r\n      <p>${userData.following || 0}</p>\r\n      <span class=\"iconify\" data-icon=\"dashicons:star-filled\" data-inline=\"false\"></span>\r\n      <p>${userStar || 0}</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"user__branchs\">\r\n    <h3>Total Repositories</h3>\r\n    <div class=\"user__total-branchs\">\r\n      <span class=\"iconify\" data-icon=\"bx:bx-git-branch\" data-inline=\"false\"></span>\r\n      <p>${userData.public_repos || 0}</p>\r\n    </div>\r\n  </div>\r\n  `;\r\n  profileSection.innerHTML = profileMarkup;\r\n}\n\n//# sourceURL=webpack://github-search/./public/script/modules/create-profile.js?");

/***/ }),

/***/ "./public/script/modules/create-repositories.js":
/*!******************************************************!*\
  !*** ./public/script/modules/create-repositories.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ createRepositories\n/* harmony export */ });\nfunction createRepositories(jsonRepositorie) {\n  const repositorySection = document.querySelector('.repositories');\n  const listRepository = jsonRepositorie.sort((first, second) => (first.id < second.id ? 1 : -1));\n\n  const repositories = [...listRepository].reduce((acc, repository) => {\n    let accumulador = acc;\n    accumulador += `<div data-anime=\"scroll\" class=\"repositories__repositorie\">\n    <div  class=\"repositories__content\">\n      <h2><a href=\"${repository.svn_url}\" target=\"_blank\">${repository.name}</a></h2>\n      <p>${repository.description || ''}</p>\n    </div>\n    <div class=\"repositories__info\">\n      <span class=\"iconify\" data-icon=\"dashicons:star-filled\" data-inline=\"false\"></span>\n      <p>${repository.stargazers_count}</p>\n      <span class=\"iconify\" data-icon=\"bx:bx-git-branch\" data-inline=\"false\"></span>\n      <p>${repository.forks}</p>\n      <span class=\"iconify\" data-icon=\"bi:file-earmark-code-fill\" data-inline=\"false\"></span>\n      <p>${repository.language || ''}</p>\n      <a href=\"${repository.svn_url}\" target=\"_blank\">\n      <span class=\"iconify\" data-icon=\"bx:bx-link-external\" data-inline=\"false\"></span>\n      </a>\n    </div>\n  </div>`;\n    return accumulador;\n  }, '');\n\n  repositorySection.innerHTML = repositories;\n}\n\n\n//# sourceURL=webpack://github-search/./public/script/modules/create-repositories.js?");

/***/ }),

/***/ "./public/script/modules/debounce.js":
/*!*******************************************!*\
  !*** ./public/script/modules/debounce.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ debounce\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  let timer;\n  return (...args) => {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      callback(...args);\n      timer = null;\n    }, delay);\n  };\n}\n\n\n//# sourceURL=webpack://github-search/./public/script/modules/debounce.js?");

/***/ }),

/***/ "./public/script/modules/get-user.js":
/*!*******************************************!*\
  !*** ./public/script/modules/get-user.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ GetUser\n/* harmony export */ });\n/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.js */ \"./public/script/modules/loader.js\");\n/* harmony import */ var _user_fetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-fetch.js */ \"./public/script/modules/user-fetch.js\");\n/* harmony import */ var _repositories_fetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repositories-fetch.js */ \"./public/script/modules/repositories-fetch.js\");\n/* harmony import */ var _backtoinit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backtoinit.js */ \"./public/script/modules/backtoinit.js\");\n/* harmony import */ var _scroll_anima_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scroll-anima.js */ \"./public/script/modules/scroll-anima.js\");\n\n\n\n\n\n\n\n\n\nclass GetUser {\n  constructor(btn, inputValue) {\n    this.buttonSearch = document.querySelector(btn);\n    this.inputValue = inputValue;\n    this.searchPage = document.querySelector('.search');\n    this.getUserName = this.getUserName.bind(this);\n    this.initLoader = _loader_js__WEBPACK_IMPORTED_MODULE_0__.default;\n    this.userFetch = _user_fetch_js__WEBPACK_IMPORTED_MODULE_1__.default;\n    this.repositorieFetch = _repositories_fetch_js__WEBPACK_IMPORTED_MODULE_2__.default;\n  }\n\n  getUserName(e) {\n    e.preventDefault();\n    this.userName = document.querySelector(this.inputValue).value;\n    this.url = `https://api.github.com/users/${this.userName}`;\n    if (this.userName) {\n      this.initLoader();\n      this.userFetch(this.url);\n      this.repositorieFetch(this.url);\n      this.searchPage.classList.remove('active');\n      setTimeout(() => {\n        const scrollAnima = new _scroll_anima_js__WEBPACK_IMPORTED_MODULE_4__.default('[data-anime=\"scroll\"]');\n        scrollAnima.init();\n      }, 2000);\n    }\n  }\n\n  getUserEvent() {\n    this.buttonSearch.addEventListener('submit', this.getUserName);\n  }\n\n  init() {\n    this.getUserEvent();\n    (0,_backtoinit_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n  }\n}\n\n\n//# sourceURL=webpack://github-search/./public/script/modules/get-user.js?");

/***/ }),

/***/ "./public/script/modules/loader.js":
/*!*****************************************!*\
  !*** ./public/script/modules/loader.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ loader\n/* harmony export */ });\nfunction loader() {\r\n  const profileSection = document.querySelector('.user');\r\n  const footer = document.querySelector('.footer');\r\n  const repositorySection = document.querySelector('.repositories');\r\n  const loading = document.querySelector('[data-loader]');\r\n  loading.classList.remove('hidden');\r\n  setTimeout(() => {\r\n    loading.classList.add('hidden');\r\n    footer.classList.add('active');\r\n    profileSection.classList.add('active');\r\n    repositorySection.classList.add('active');\r\n  }, 2000);\r\n}\r\n\n\n//# sourceURL=webpack://github-search/./public/script/modules/loader.js?");

/***/ }),

/***/ "./public/script/modules/repositories-fetch.js":
/*!*****************************************************!*\
  !*** ./public/script/modules/repositories-fetch.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ repositorieFetch\n/* harmony export */ });\n/* harmony import */ var _create_repositories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-repositories.js */ \"./public/script/modules/create-repositories.js\");\n\n\nconst createRepositories = _create_repositories_js__WEBPACK_IMPORTED_MODULE_0__.default;\n\nasync function repositorieFetch(url) {\n  try {\n    const response = await fetch(`${url}/repos`);\n    this.jsonRepositorie = await response.json();\n    createRepositories(this.jsonRepositorie);\n  } catch (error) {\n    console.log('Usuario não encontrado', error);\n  }\n}\n\n//# sourceURL=webpack://github-search/./public/script/modules/repositories-fetch.js?");

/***/ }),

/***/ "./public/script/modules/scroll-anima.js":
/*!***********************************************!*\
  !*** ./public/script/modules/scroll-anima.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Scrollanima\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./public/script/modules/debounce.js\");\n\n\n\nclass Scrollanima {\n  constructor(sections) {\n    this.sections = document.querySelectorAll(sections);\n    this.windowMetade = window.innerHeight * 0.3;\n\n    this.checkdistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.default)(this.checkdistance.bind(this), 50);\n  }\n\n  // pega a distancia de casa item \n  // em relação ao topo do site\n  getDistance() {\n    this.distance = [...this.sections].map((section) => {\n      const offset = section.offsetTop;\n      return {\n        element: section,\n        offset: Math.floor(offset - this.windowMetade),\n      };\n    });\n  }\n\n  // Verifica a distancia de casa objero\n  // em relação ao scroll do site\n  checkdistance() {\n    this.distance.forEach((item) => {\n      if (window.pageYOffset > item.offset) {\n        item.element.classList.add(\"ativo\");\n      } else if (item.element.classList.contains(\"ativo\")) {\n        item.element.classList.remove(\"ativo\");\n      }\n    });\n  }\n\n  init() {\n    if (this.sections.length) {\n      this.getDistance();\n      this.checkdistance();\n      window.addEventListener(\"scroll\", this.checkdistance);\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://github-search/./public/script/modules/scroll-anima.js?");

/***/ }),

/***/ "./public/script/modules/user-fetch.js":
/*!*********************************************!*\
  !*** ./public/script/modules/user-fetch.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ userFetch\n/* harmony export */ });\n/* harmony import */ var _create_profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-profile.js */ \"./public/script/modules/create-profile.js\");\n\r\n\r\nasync function userFetch(url) {\r\n  const createNewProfile = _create_profile_js__WEBPACK_IMPORTED_MODULE_0__.default\r\n  try {\r\n    const responseUser = await fetch(url);\r\n    this.jsonUser = await responseUser.json();\r\n    const responseStar = await fetch(`${url}/starred`);\r\n    this.jsonStar = await responseStar.json();\r\n    this.totalStar = this.jsonStar.length;\r\n    createNewProfile(this.jsonUser, this.totalStar);\r\n  } catch (error) {\r\n    console.log('Usuario não encontrado', error);\r\n  }\r\n}\n\n//# sourceURL=webpack://github-search/./public/script/modules/user-fetch.js?");

/***/ }),

/***/ "./public/script/script.js":
/*!*********************************!*\
  !*** ./public/script/script.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_get_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/get-user.js */ \"./public/script/modules/get-user.js\");\n\r\n\r\n\r\nconst newUser = new _modules_get_user_js__WEBPACK_IMPORTED_MODULE_0__.default('.search__input', '[data-search=\"name\"]');\r\nnewUser.init();\r\n\r\n\r\n\n\n//# sourceURL=webpack://github-search/./public/script/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./public/script/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;