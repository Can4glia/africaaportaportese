/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("$(document).ready(function () {\n  // burger menu\n  var checkBox = $('#ms_menu-btn');\n  checkBox.prop('checked', false);\n  $('#ms_toggle').click(function () {\n    if ($(this).siblings(checkBox).prop('checked') == false) {\n      $(this).siblings(checkBox).prop('checked', true);\n    } else {\n      $(this).siblings(checkBox).prop('checked', false);\n    }\n  }); // smooth scroll via anchor, a native function ES2018\n\n  document.querySelectorAll('a[href^=\"#\"]').forEach(function (anchor) {\n    anchor.addEventListener('click', function (e) {\n      e.preventDefault(); // go (smooth)\n\n      document.querySelector(this.getAttribute('href')).scrollIntoView({\n        behavior: 'smooth'\n      }); // and close sidebar   \n\n      $(this).parents('#ms_nav').siblings(checkBox).prop('checked', false);\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZnJpY2FhcG9ydGFwb3J0ZXNlLy4vc3JjL2FwcC5qcz8xMTEyIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY2hlY2tCb3giLCJwcm9wIiwiY2xpY2siLCJzaWJsaW5ncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYW5jaG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwicGFyZW50cyJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBRUMsUUFBRixDQUFELENBQWNDLEtBQWQsQ0FBb0IsWUFBVztBQUU3QjtBQUNBLE1BQUlDLFFBQVEsR0FBR0gsQ0FBQyxDQUFDLGNBQUQsQ0FBaEI7QUFDQUcsRUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWMsU0FBZCxFQUF5QixLQUF6QjtBQUVBSixFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCSyxLQUFoQixDQUFzQixZQUFXO0FBRS9CLFFBQUtMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sUUFBUixDQUFpQkgsUUFBakIsRUFBMkJDLElBQTNCLENBQWdDLFNBQWhDLEtBQThDLEtBQW5ELEVBQTJEO0FBRXpESixNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLFFBQVIsQ0FBaUJILFFBQWpCLEVBQTJCQyxJQUEzQixDQUFnQyxTQUFoQyxFQUEyQyxJQUEzQztBQUVELEtBSkQsTUFJTztBQUVMSixNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLFFBQVIsQ0FBaUJILFFBQWpCLEVBQTJCQyxJQUEzQixDQUFnQyxTQUFoQyxFQUEyQyxLQUEzQztBQUNEO0FBQ0YsR0FWRCxFQU42QixDQWtCN0I7O0FBQ0FILEVBQUFBLFFBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEIsY0FBMUIsRUFBMENDLE9BQTFDLENBQWtELFVBQUFDLE1BQU0sRUFBSTtBQUMxREEsSUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFVQyxDQUFWLEVBQWE7QUFDNUNBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRixHQUQ0QyxDQUU1Qzs7QUFDQVgsTUFBQUEsUUFBUSxDQUFDWSxhQUFULENBQXVCLEtBQUtDLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBdkIsRUFBa0RDLGNBQWxELENBQWlFO0FBQy9EQyxRQUFBQSxRQUFRLEVBQUU7QUFEcUQsT0FBakUsRUFINEMsQ0FNNUM7O0FBQ0FoQixNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFpQixPQUFSLENBQWdCLFNBQWhCLEVBQTJCWCxRQUEzQixDQUFvQ0gsUUFBcEMsRUFBOENDLElBQTlDLENBQW1ELFNBQW5ELEVBQThELEtBQTlEO0FBQ0QsS0FSRDtBQVNELEdBVkQ7QUFXRCxDQTlCRCIsInNvdXJjZXNDb250ZW50IjpbIiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgLy8gYnVyZ2VyIG1lbnVcbiAgdmFyIGNoZWNrQm94ID0gJCgnI21zX21lbnUtYnRuJyk7XG4gIGNoZWNrQm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG5cbiAgJCgnI21zX3RvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKCAkKHRoaXMpLnNpYmxpbmdzKGNoZWNrQm94KS5wcm9wKCdjaGVja2VkJykgPT0gZmFsc2UgKSB7XG5cbiAgICAgICQodGhpcykuc2libGluZ3MoY2hlY2tCb3gpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgIFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICQodGhpcykuc2libGluZ3MoY2hlY2tCb3gpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBzbW9vdGggc2Nyb2xsIHZpYSBhbmNob3IsIGEgbmF0aXZlIGZ1bmN0aW9uIEVTMjAxOFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpLmZvckVhY2goYW5jaG9yID0+IHsgICAgXG4gICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHsgICAgICAgIFxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gZ28gKHNtb290aClcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkuc2Nyb2xsSW50b1ZpZXcoeyAgICAgICAgICAgIFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcgICAgICAgIFxuICAgICAgfSk7XG4gICAgICAvLyBhbmQgY2xvc2Ugc2lkZWJhciAgIFxuICAgICAgJCh0aGlzKS5wYXJlbnRzKCcjbXNfbmF2Jykuc2libGluZ3MoY2hlY2tCb3gpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgfSk7XG4gIH0pO1xufSk7Il0sImZpbGUiOiIuL3NyYy9hcHAuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZnJpY2FhcG9ydGFwb3J0ZXNlLy4vc3JjL2FwcC5zY3NzPzU2ZGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBIiwiZmlsZSI6Ii4vc3JjL2FwcC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/js/app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/app.js"],
/******/ 			["./src/app.scss"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkafricaaportaportese"] = self["webpackChunkafricaaportaportese"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;