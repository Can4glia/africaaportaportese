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

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  // burger menu\n  var checkBox = document.querySelector(\"#ms_menu-btn\");\n  checkBox.checked = false;\n  document.querySelector(\"#ms_toggle\").addEventListener(\"click\", function () {\n    checkBox.checked = !checkBox.checked;\n  }); //carousel\n\n  var carousel = document.querySelector(\"#carousel\");\n  var carouselPrev = carousel.querySelector(\".carousel-control-prev\");\n  var carouselNext = carousel.querySelector(\".carousel-control-next\");\n  var slides = Array.from(carousel.querySelectorAll(\".carousel-item\"));\n  var currentIndex = slides.findIndex(function (slide) {\n    return slide.classList.contains(\"active\");\n  });\n  carouselPrev.addEventListener(\"click\", function () {\n    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;\n    updateCarousel();\n  });\n  carouselNext.addEventListener(\"click\", function () {\n    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;\n    updateCarousel();\n  });\n\n  function updateCarousel() {\n    slides.forEach(function (slide, index) {\n      if (index === currentIndex) {\n        slide.classList.add(\"active\");\n      } else {\n        slide.classList.remove(\"active\");\n      }\n    });\n  }\n\n  updateCarousel(); // smooth scroll via anchor, a native function ES2018\n\n  document.querySelectorAll('a[href^=\"#\"]').forEach(function (anchor) {\n    anchor.addEventListener(\"click\", function (e) {\n      e.preventDefault(); // go (smooth)\n\n      var target = document.querySelector(anchor.getAttribute(\"href\"));\n      target.scrollIntoView({\n        behavior: \"smooth\"\n      }); // and close sidebar\n\n      var checkBox = document.querySelector(\"#ms_menu-btn\");\n      checkBox.checked = false;\n    });\n  });\n  window.addEventListener(\"scroll\", function () {\n    var toTopBtn = document.querySelector(\"#toTopBtn\");\n\n    if (window.scrollY > 20) {\n      toTopBtn.style.display = \"block\";\n      toTopBtn.style.opacity = \"1\";\n    } else {\n      toTopBtn.style.opacity = \"0\";\n      setTimeout(function () {\n        toTopBtn.style.display = \"none\";\n      }, 500);\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2dvbGFucG9ydGFwb3J0ZXNlLy4vc3JjL2FwcC5qcz8xMTEyIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrQm94IiwicXVlcnlTZWxlY3RvciIsImNoZWNrZWQiLCJjYXJvdXNlbCIsImNhcm91c2VsUHJldiIsImNhcm91c2VsTmV4dCIsInNsaWRlcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50SW5kZXgiLCJmaW5kSW5kZXgiLCJzbGlkZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwibGVuZ3RoIiwidXBkYXRlQ2Fyb3VzZWwiLCJmb3JFYWNoIiwiaW5kZXgiLCJhZGQiLCJyZW1vdmUiLCJhbmNob3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwid2luZG93IiwidG9Ub3BCdG4iLCJzY3JvbGxZIiwic3R5bGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3pEO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFDQUQsRUFBQUEsUUFBUSxDQUFDRSxPQUFULEdBQW1CLEtBQW5CO0FBRUFKLEVBQUFBLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixZQUF2QixFQUFxQ0YsZ0JBQXJDLENBQXNELE9BQXRELEVBQStELFlBQU07QUFDcEVDLElBQUFBLFFBQVEsQ0FBQ0UsT0FBVCxHQUFtQixDQUFDRixRQUFRLENBQUNFLE9BQTdCO0FBQ0EsR0FGRCxFQUx5RCxDQVN6RDs7QUFDQSxNQUFNQyxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixXQUF2QixDQUFqQjtBQUNBLE1BQU1HLFlBQVksR0FB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Q0FBQ0UsS0FBVCxDQUFlQyxPQUFmLEdBQXlCLE1BQXpCO0FBQ0EsT0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdBO0FBQ0QsR0FYRDtBQVlBLENBbEVEIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuXHQvLyBidXJnZXIgbWVudVxuXHRjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXNfbWVudS1idG5cIik7XG5cdGNoZWNrQm94LmNoZWNrZWQgPSBmYWxzZTtcblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21zX3RvZ2dsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNoZWNrQm94LmNoZWNrZWQgPSAhY2hlY2tCb3guY2hlY2tlZDtcblx0fSk7XG5cblx0Ly9jYXJvdXNlbFxuXHRjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2Fyb3VzZWxcIik7XG5cdGNvbnN0IGNhcm91c2VsUHJldiA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIpO1xuXHRjb25zdCBjYXJvdXNlbE5leHQgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsLWNvbnRyb2wtbmV4dFwiKTtcblx0Y29uc3Qgc2xpZGVzID0gQXJyYXkuZnJvbShjYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcm91c2VsLWl0ZW1cIikpO1xuXG5cdGxldCBjdXJyZW50SW5kZXggPSBzbGlkZXMuZmluZEluZGV4KChzbGlkZSkgPT5cblx0XHRzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcblx0KTtcblxuXHRjYXJvdXNlbFByZXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjdXJyZW50SW5kZXggPSBjdXJyZW50SW5kZXggPT09IDAgPyBzbGlkZXMubGVuZ3RoIC0gMSA6IGN1cnJlbnRJbmRleCAtIDE7XG5cdFx0dXBkYXRlQ2Fyb3VzZWwoKTtcblx0fSk7XG5cblx0Y2Fyb3VzZWxOZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y3VycmVudEluZGV4ID0gY3VycmVudEluZGV4ID09PSBzbGlkZXMubGVuZ3RoIC0gMSA/IDAgOiBjdXJyZW50SW5kZXggKyAxO1xuXHRcdHVwZGF0ZUNhcm91c2VsKCk7XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUNhcm91c2VsKCkge1xuXHRcdHNsaWRlcy5mb3JFYWNoKChzbGlkZSwgaW5kZXgpID0+IHtcblx0XHRcdGlmIChpbmRleCA9PT0gY3VycmVudEluZGV4KSB7XG5cdFx0XHRcdHNsaWRlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0dXBkYXRlQ2Fyb3VzZWwoKTtcblxuXHQvLyBzbW9vdGggc2Nyb2xsIHZpYSBhbmNob3IsIGEgbmF0aXZlIGZ1bmN0aW9uIEVTMjAxOFxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpLmZvckVhY2goKGFuY2hvcikgPT4ge1xuXHRcdGFuY2hvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdC8vIGdvIChzbW9vdGgpXG5cdFx0XHRjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFuY2hvci5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKTtcblx0XHRcdHRhcmdldC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuXHRcdFx0Ly8gYW5kIGNsb3NlIHNpZGViYXJcblx0XHRcdGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtc19tZW51LWJ0blwiKTtcblx0XHRcdGNoZWNrQm94LmNoZWNrZWQgPSBmYWxzZTtcblx0XHR9KTtcblx0fSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IHRvVG9wQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b1RvcEJ0blwiKTtcblx0XHRpZiAod2luZG93LnNjcm9sbFkgPiAyMCkge1xuXHRcdFx0dG9Ub3BCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdHRvVG9wQnRuLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dG9Ub3BCdG4uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRvVG9wQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdH0sIDUwMCk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIl0sImZpbGUiOiIuL3NyYy9hcHAuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2dvbGFucG9ydGFwb3J0ZXNlLy4vc3JjL2FwcC5zY3NzPzU2ZGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBIiwiZmlsZSI6Ii4vc3JjL2FwcC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.scss\n");

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
/******/ 		var chunkLoadingGlobal = self["webpackChunkbogolanportaportese"] = self["webpackChunkbogolanportaportese"] || [];
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