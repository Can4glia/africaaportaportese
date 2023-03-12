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

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  // burger menu\n  var checkBox = document.querySelector(\"#ms_menu-btn\");\n  checkBox.checked = false;\n  document.querySelector(\"#ms_toggle\").addEventListener(\"click\", function () {\n    checkBox.checked = !checkBox.checked;\n  }); //carousel\n\n  var carousel = document.querySelector(\"#carousel\");\n  var carouselPrev = carousel.querySelector(\".carousel-control-prev\");\n  var carouselNext = carousel.querySelector(\".carousel-control-next\");\n  var slides = Array.from(carousel.querySelectorAll(\".carousel-item\"));\n  var currentIndex = slides.findIndex(function (slide) {\n    return slide.classList.contains(\"active\");\n  });\n  carouselPrev.addEventListener(\"click\", function () {\n    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;\n    updateCarousel();\n  });\n  carouselNext.addEventListener(\"click\", function () {\n    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;\n    updateCarousel();\n  });\n\n  function updateCarousel() {\n    slides.forEach(function (slide, index) {\n      if (index === currentIndex) {\n        slide.classList.add(\"active\");\n      } else {\n        slide.classList.remove(\"active\");\n      }\n    });\n    var nextIndex = (currentIndex + 1) % slides.length;\n    slides[currentIndex].style.opacity = 0;\n    slides[currentIndex].style.zIndex = 0;\n    slides[nextIndex].style.opacity = 1;\n    slides[nextIndex].style.zIndex = 1;\n    currentIndex = nextIndex;\n  } // smooth scroll via anchor, a native function ES2018\n\n\n  document.querySelectorAll('a[href^=\"#\"]').forEach(function (anchor) {\n    anchor.addEventListener(\"click\", function (e) {\n      e.preventDefault(); // go (smooth)\n\n      var target = document.querySelector(anchor.getAttribute(\"href\"));\n      target.scrollIntoView({\n        behavior: \"smooth\"\n      }); // and close sidebar\n\n      var checkBox = document.querySelector(\"#ms_menu-btn\");\n      checkBox.checked = false;\n    });\n  });\n  window.addEventListener(\"scroll\", function () {\n    var toTopBtn = document.querySelector(\"#toTopBtn\");\n\n    if (window.scrollY > 20) {\n      toTopBtn.style.display = \"block\";\n      toTopBtn.style.opacity = \"1\";\n    } else {\n      toTopBtn.style.opacity = \"0\";\n      setTimeout(function () {\n        toTopBtn.style.display = \"none\";\n      }, 500);\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2dvbGFucG9ydGFwb3J0ZXNlLy4vc3JjL2FwcC5qcz8xMTEyIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrQm94IiwicXVlcnlTZWxlY3RvciIsImNoZWNrZWQiLCJjYXJvdXNlbCIsImNhcm91c2VsUHJldiIsImNhcm91c2VsTmV4dCIsInNsaWRlcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50SW5kZXgiLCJmaW5kSW5kZXgiLCJzbGlkZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwibGVuZ3RoIiwidXBkYXRlQ2Fyb3VzZWwiLCJmb3JFYWNoIiwiaW5kZXgiLCJhZGQiLCJyZW1vdmUiLCJuZXh0SW5kZXgiLCJzdHlsZSIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJhbmNob3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwid2luZG93IiwidG9Ub3BCdG4iLCJzY3JvbGxZIiwiZGlzcGxheSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3pEO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFDQUQsRUFBQUEsUUFBUSxDQUFDRSxPQUFULEdBQW1CLEtBQW5CO0FBRUFKLEVBQUFBLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixZQUF2QixFQUFxQ0YsZ0JBQXJDLENBQXNELE9BQXRELEVBQStELFlBQU07QUFDcEVDLElBQUFBLFFBQVEsQ0FBQ0UsT0FBVCxHQUFtQixDQUFDRixRQUFRLENBQUNFLE9BQTdCO0FBQ0EsR0FGRCxFQUx5RCxDQVN6RDs7QUFDQSxNQUFNQyxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixXQUF2QixDQUFq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RDtBQVNBLEdBVkQ7QUFZQThCLEVBQUFBLE1BQU0sQ0FBQ2pDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdkMsUUFBTWtDLFFBQVEsR0FBR25DLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixXQUF2QixDQUFqQjs7QUFDQSxRQUFJK0IsTUFBTSxDQUFDRSxPQUFQLEdBQWlCLEVBQXJCLEVBQXlCO0FBQ3hCRCxNQUFBQSxRQUFRLENBQUNYLEtBQVQsQ0FBZWEsT0FBZixHQUF5QixPQUF6QjtBQUNBRixNQUFBQSxRQUFRLENBQUNYLEtBQVQsQ0FBZUMsT0FBZixHQUF5QixHQUF6QjtBQUNBLEtBSEQsTUFHTztBQUNOVSxNQUFBQSxRQUFRLENBQUNYLEtBQVQsQ0FBZUMsT0FBZixHQUF5QixHQUF6QjtBQUNBYSxNQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNoQkgsUUFBQUEsUUFBUSxDQUFDWCxLQUFULENBQWVhLE9BQWYsR0FBeUIsTUFBekI7QUFDQSxPQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0E7QUFDRCxHQVhEO0FBWUEsQ0F2RUQiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5cdC8vIGJ1cmdlciBtZW51XG5cdGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtc19tZW51LWJ0blwiKTtcblx0Y2hlY2tCb3guY2hlY2tlZCA9IGZhbHNlO1xuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXNfdG9nZ2xlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y2hlY2tCb3guY2hlY2tlZCA9ICFjaGVja0JveC5jaGVja2VkO1xuXHR9KTtcblxuXHQvL2Nhcm91c2VsXG5cdGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJvdXNlbFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxQcmV2ID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbC1jb250cm9sLXByZXZcIik7XG5cdGNvbnN0IGNhcm91c2VsTmV4dCA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIpO1xuXHRjb25zdCBzbGlkZXMgPSBBcnJheS5mcm9tKGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2Fyb3VzZWwtaXRlbVwiKSk7XG5cdGxldCBjdXJyZW50SW5kZXggPSBzbGlkZXMuZmluZEluZGV4KChzbGlkZSkgPT5cblx0XHRzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcblx0KTtcblxuXHRjYXJvdXNlbFByZXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjdXJyZW50SW5kZXggPVxuXHRcdFx0Y3VycmVudEluZGV4ID09PSAwID8gc2xpZGVzLmxlbmd0aCAtIDEgOiBjdXJyZW50SW5kZXggLSAxO1xuXHRcdHVwZGF0ZUNhcm91c2VsKCk7XG5cdH0pO1xuXG5cdGNhcm91c2VsTmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGN1cnJlbnRJbmRleCA9XG5cdFx0XHRjdXJyZW50SW5kZXggPT09IHNsaWRlcy5sZW5ndGggLSAxID8gMCA6IGN1cnJlbnRJbmRleCArIDE7XG5cdFx0dXBkYXRlQ2Fyb3VzZWwoKTtcblx0fSk7XG5cblx0ZnVuY3Rpb24gdXBkYXRlQ2Fyb3VzZWwoKSB7XG5cdFx0c2xpZGVzLmZvckVhY2goKHNsaWRlLCBpbmRleCkgPT4ge1xuXHRcdFx0aWYgKGluZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcblx0XHRcdFx0c2xpZGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y29uc3QgbmV4dEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgc2xpZGVzLmxlbmd0aDtcblx0XHRzbGlkZXNbY3VycmVudEluZGV4XS5zdHlsZS5vcGFjaXR5ID0gMDtcblx0XHRzbGlkZXNbY3VycmVudEluZGV4XS5zdHlsZS56SW5kZXggPSAwO1xuXHRcdHNsaWRlc1tuZXh0SW5kZXhdLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdHNsaWRlc1tuZXh0SW5kZXhdLnN0eWxlLnpJbmRleCA9IDE7XG5cdFx0Y3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xuXHR9XG5cblx0Ly8gc21vb3RoIHNjcm9sbCB2aWEgYW5jaG9yLCBhIG5hdGl2ZSBmdW5jdGlvbiBFUzIwMThcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKChhbmNob3IpID0+IHtcblx0XHRhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQvLyBnbyAoc21vb3RoKVxuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhbmNob3IuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSk7XG5cdFx0XHR0YXJnZXQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcblx0XHRcdC8vIGFuZCBjbG9zZSBzaWRlYmFyXG5cdFx0XHRjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXNfbWVudS1idG5cIik7XG5cdFx0XHRjaGVja0JveC5jaGVja2VkID0gZmFsc2U7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcblx0XHRjb25zdCB0b1RvcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Ub3BCdG5cIik7XG5cdFx0aWYgKHdpbmRvdy5zY3JvbGxZID4gMjApIHtcblx0XHRcdHRvVG9wQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHR0b1RvcEJ0bi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRvVG9wQnRuLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0b1RvcEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHR9LCA1MDApO1xuXHRcdH1cblx0fSk7XG59KTtcbiJdLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

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