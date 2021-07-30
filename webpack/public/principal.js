/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/principal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/principal.js":
/*!**************************!*\
  !*** ./src/principal.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ModuleBuildError: Module build failed: \\nimport 'assets/css/estilo.css'\\n      ^\\n      Invalid CSS after \\\"import\\\": expected selector, was \\\"'assets/css/estilo.\\\"\\n      in /home/luiz/Documentos/Programação/coder/webpack/src/principal.js (line 4, column 8)\\n    at /home/luiz/Documentos/Programação/coder/webpack/node_modules/webpack/lib/NormalModule.js:252:20\\n    at /home/luiz/Documentos/Programação/coder/webpack/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /home/luiz/Documentos/Programação/coder/webpack/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at context.callback (/home/luiz/Documentos/Programação/coder/webpack/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at Object.callback (/home/luiz/Documentos/Programação/coder/webpack/node_modules/sass-loader/lib/loader.js:76:13)\\n    at Object.done [as callback] (/home/luiz/Documentos/Programação/coder/webpack/node_modules/neo-async/async.js:8069:18)\\n    at options.error (/home/luiz/Documentos/Programação/coder/webpack/node_modules/node-sass/lib/index.js:294:32)\");\n\n//# sourceURL=webpack:///./src/principal.js?");

/***/ })

/******/ });