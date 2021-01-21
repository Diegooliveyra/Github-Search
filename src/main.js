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

/***/ "./public/script/modules/get-user.js":
/*!*******************************************!*\
  !*** ./public/script/modules/get-user.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ GetUser\n/* harmony export */ });\nclass GetUser {\n  constructor(btn, inputValue) {\n    this.buttonSearch = document.querySelector(btn);\n    this.searchPage = document.querySelector('.search');\n    this.inputValue = inputValue;\n    this.getUserName = this.getUserName.bind(this);\n  }\n\n  getUserName() {\n    this.userName = document.querySelector(this.inputValue).value;\n    this.userFetch();\n    this.starFetch();\n    this.repositorieFetch();\n    this.searchPage.classList.remove('active');\n  }\n\n  getUserEvent() {\n    this.buttonSearch.addEventListener('click', this.getUserName);\n  }\n\n  async userFetch() {\n    const response = await fetch(`https://api.github.com/users/${this.userName}`);\n    this.jsonUser = await response.json();\n    this.createProfile();\n  }\n\n  async starFetch() {\n    const response = await fetch(`https://api.github.com/users/${this.userName}/starred`);\n    this.jsonStar = await response.json();\n    this.totalStar = this.jsonStar.length;\n    this.createProfile();\n  }\n\n  async repositorieFetch() {\n    const response = await fetch(`https://api.github.com/users/${this.userName}/repos`);\n    this.jsonRepositorie = await response.json();\n    this.createRepositories();\n  }\n\n  createProfile() {\n    this.profileSection = document.querySelector('.user');\n    this.profileSection.classList.add('user');\n    const header = document.querySelector('.header');\n    const profileMarkup = `\n      <div class=\"user__avatar\">\n      <img src= ${this.jsonUser.avatar_url} />\n    </div>\n    <div class=\"user__profile\">\n      <h2>${this.jsonUser.name}</h2>\n      <p>@${this.jsonUser.login}</p>\n      <div class=\"user__location\">\n        <span class=\"iconify\" data-icon=\"fa-solid:map-marker-alt\" data-inline=\"false\"></span>\n        <p>${this.jsonUser.location}</p>\n        ${\n          this.jsonUser.company\n            ? '<span class=\"iconify\" data-icon=\"ic:baseline-business-center\" data-inline=\"false\"></span>'\n            : ''\n        }\n        <p>${this.jsonUser.company || ''}</p>\n      </div>\n      <div class=\"user__data\">\n        <span class=\"iconify\" data-icon=\"fluent:people-team-28-filled\" data-inline=\"false\"></span>\n        <p>${this.jsonUser.followers}</p>\n        <span class=\"iconify\" data-icon=\"fluent:people-team-28-regular\" data-inline=\"false\"></span>\n        <p>${this.jsonUser.following}</p>\n        <span class=\"iconify\" data-icon=\"dashicons:star-filled\" data-inline=\"false\"></span>\n        <p>${this.totalStar}</p>\n      </div>\n    </div>\n    <div class=\"user__branchs\">\n      <h3>Total Repositories</h3>\n      <div class=\"user__total-branchs\">\n        <span class=\"iconify\" data-icon=\"bx:bx-git-branch\" data-inline=\"false\"></span>\n        <p>${this.jsonUser.public_repos}</p>\n      </div>\n    </div>\n    `;\n    this.profileSection.innerHTML = profileMarkup;\n    header.parentNode.insertBefore(this.profileSection, header.nextSibling);\n  }\n\n  createRepositories() {\n    this.repositorySection = document.querySelector('.repositories');\n    this.jsonRepositorie.forEach(repository => {\n      const repositoryMarkup = `\n      <div class=\"repositories__repositorie\">\n      <div class=\"repositories__content\">\n        <h2>${repository.name}</h2>\n        <p>${repository.description}</p>\n      </div>\n      <div class=\"repositories__info\">\n        <span class=\"iconify\" data-icon=\"dashicons:star-filled\" data-inline=\"false\"></span>\n        <p>${repository.stargazers_count}</p>\n        <span class=\"iconify\" data-icon=\"bx:bx-git-branch\" data-inline=\"false\"></span>\n        <p>${repository.forks}</p>\n      </div>\n    </div>\n      `;\n      this.repositorySection.innerHTML += repositoryMarkup;\n      this.profileSection.parentNode.insertBefore(\n        this.repositorySection, this.profileSection.nextSibling);\n    });\n  }\n\n  init() {\n    this.getUserEvent();\n  }\n}\n\n\n//# sourceURL=webpack://github-search/./public/script/modules/get-user.js?");

/***/ }),

/***/ "./public/script/script.js":
/*!*********************************!*\
  !*** ./public/script/script.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_get_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/get-user.js */ \"./public/script/modules/get-user.js\");\n\r\n\r\nconst newUser = new _modules_get_user_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-search=\"btn\"]', '[data-search=\"name\"]');\r\nnewUser.init();\r\n\n\n//# sourceURL=webpack://github-search/./public/script/script.js?");

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