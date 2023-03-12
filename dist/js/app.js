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

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  // burger menu\n  var checkBox = document.querySelector(\"#ms_menu-btn\");\n  checkBox.checked = false;\n  document.querySelector(\"#ms_toggle\").addEventListener(\"click\", function () {\n    checkBox.checked = !checkBox.checked;\n  });\n  var carousel = document.querySelector(\"#carousel\");\n  var carouselPrev = carousel.querySelector(\".carousel-control-prev\");\n  var carouselNext = carousel.querySelector(\".carousel-control-next\");\n  var slides = Array.from(carousel.querySelectorAll(\".carousel-item\"));\n  var currentIndex = slides.findIndex(function (slide) {\n    return slide.classList.contains(\"active\");\n  });\n  carouselPrev.addEventListener(\"click\", function () {\n    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;\n    updateCarousel();\n  });\n  carouselNext.addEventListener(\"click\", function () {\n    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;\n    updateCarousel();\n  });\n\n  function updateCarousel() {\n    slides.forEach(function (slide, index) {\n      if (index === currentIndex) {\n        slide.classList.add(\"active\");\n      } else {\n        slide.classList.remove(\"active\");\n      }\n    });\n  } // smooth scroll via anchor, a native function ES2018\n\n\n  document.querySelectorAll('a[href^=\"#\"]').forEach(function (anchor) {\n    anchor.addEventListener(\"click\", function (e) {\n      e.preventDefault(); // go (smooth)\n\n      var target = document.querySelector(anchor.getAttribute(\"href\"));\n      target.scrollIntoView({\n        behavior: \"smooth\"\n      }); // and close sidebar\n\n      var checkBox = document.querySelector(\"#ms_menu-btn\");\n      var nav = anchor.closest(\"#ms_nav\");\n\n      if (nav) {\n        var siblingCheckBox = nav.nextElementSibling.querySelector(\"#ms_menu-btn\");\n        siblingCheckBox.checked = false;\n      } else {\n        checkBox.checked = false;\n      }\n    });\n  });\n  window.addEventListener(\"scroll\", function () {\n    var toTopBtn = document.querySelector(\"#toTopBtn\");\n\n    if (window.scrollY > 20) {\n      toTopBtn.style.display = \"block\";\n      toTopBtn.style.opacity = \"1\";\n    } else {\n      toTopBtn.style.opacity = \"0\";\n      setTimeout(function () {\n        toTopBtn.style.display = \"none\";\n      }, 500);\n    }\n  }); // // remove fragment as much as it can go without adding an entry in browser history:\n  // window.location.replace(\"#\");\n  // // slice off the remaining '#' in HTML5:\n  // if (typeof window.history.replaceState == 'function') {\n  //   history.replaceState({}, '', window.location.href.slice(0, -1));\n  // }\n  // console.log(window.location.href);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2dvbGFucG9ydGFwb3J0ZXNlLy4vc3JjL2FwcC5qcz8xMTEyIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrQm94IiwicXVlcnlTZWxlY3RvciIsImNoZWNrZWQiLCJjYXJvdXNlbCIsImNhcm91c2VsUHJldiIsImNhcm91c2VsTmV4dCIsInNsaWRlcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50SW5kZXgiLCJmaW5kSW5kZXgiLCJzbGlkZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwibGVuZ3RoIiwidXBkYXRlQ2Fyb3VzZWwiLCJmb3JFYWNoIiwiaW5kZXgiLCJhZGQiLCJyZW1vdmUiLCJhbmNob3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwibmF2IiwiY2xvc2VzdCIsInNpYmxpbmdDaGVja0JveCIsIm5leHRFbGVtZW50U2libGluZyIsIndpbmRvdyIsInRvVG9wQnRuIiwic2Nyb2xsWSIsInN0eWxlIiwiZGlzcGxheSIsIm9wYWNpdHkiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN6RDtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLGNBQXZCLENBQWpCO0FBQ0FELEVBQUFBLFFBQVEsQ0FBQ0UsT0FBVCxHQUFtQixLQUFuQjtBQUVBSixFQUFBQSxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUNGLGdCQUFyQyxDQUFzRCxPQUF0RCxFQUErRCxZQUFNO0FBQ3BFQyxJQUFBQSxRQUFRLENBQUNFLE9BQVQsR0FBbUIsQ0FBQ0YsUUFBUSxDQUFDRSxPQUE3QjtBQUNBLEdBRkQ7QUFJQSxNQUFNQyxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0cs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LE9BQVAsR0FBaUIsRUFBckIsRUFBeUI7QUFDeEJELE1BQUFBLFFBQVEsQ0FBQ0UsS0FBVCxDQUFlQyxPQUFmLEdBQXlCLE9BQXpCO0FBQ0FILE1BQUFBLFFBQVEsQ0FBQ0UsS0FBVCxDQUFlRSxPQUFmLEdBQXlCLEdBQXpCO0FBQ0EsS0FIRCxNQUdPO0FBQ05KLE1BQUFBLFFBQVEsQ0FBQ0UsS0FBVCxDQUFlRSxPQUFmLEdBQXlCLEdBQXpCO0FBQ0FDLE1BQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2hCTCxRQUFBQSxRQUFRLENBQUNFLEtBQVQsQ0FBZUMsT0FBZixHQUF5QixNQUF6QjtBQUNBLE9BRlMsRUFFUCxHQUZPLENBQVY7QUFHQTtBQUNELEdBWEQsRUEzRHlELENBd0V6RDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLENBakZEIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuXHQvLyBidXJnZXIgbWVudVxuXHRjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXNfbWVudS1idG5cIik7XG5cdGNoZWNrQm94LmNoZWNrZWQgPSBmYWxzZTtcblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21zX3RvZ2dsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNoZWNrQm94LmNoZWNrZWQgPSAhY2hlY2tCb3guY2hlY2tlZDtcblx0fSk7XG5cblx0Y29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nhcm91c2VsXCIpO1xuXHRjb25zdCBjYXJvdXNlbFByZXYgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsLWNvbnRyb2wtcHJldlwiKTtcblx0Y29uc3QgY2Fyb3VzZWxOZXh0ID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbC1jb250cm9sLW5leHRcIik7XG5cdGNvbnN0IHNsaWRlcyA9IEFycmF5LmZyb20oY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbChcIi5jYXJvdXNlbC1pdGVtXCIpKTtcblx0bGV0IGN1cnJlbnRJbmRleCA9IHNsaWRlcy5maW5kSW5kZXgoKHNsaWRlKSA9PlxuXHRcdHNsaWRlLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxuXHQpO1xuXG5cdGNhcm91c2VsUHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGN1cnJlbnRJbmRleCA9XG5cdFx0XHRjdXJyZW50SW5kZXggPT09IDAgPyBzbGlkZXMubGVuZ3RoIC0gMSA6IGN1cnJlbnRJbmRleCAtIDE7XG5cdFx0dXBkYXRlQ2Fyb3VzZWwoKTtcblx0fSk7XG5cblx0Y2Fyb3VzZWxOZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y3VycmVudEluZGV4ID1cblx0XHRcdGN1cnJlbnRJbmRleCA9PT0gc2xpZGVzLmxlbmd0aCAtIDEgPyAwIDogY3VycmVudEluZGV4ICsgMTtcblx0XHR1cGRhdGVDYXJvdXNlbCgpO1xuXHR9KTtcblxuXHRmdW5jdGlvbiB1cGRhdGVDYXJvdXNlbCgpIHtcblx0XHRzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGluZGV4KSA9PiB7XG5cdFx0XHRpZiAoaW5kZXggPT09IGN1cnJlbnRJbmRleCkge1xuXHRcdFx0XHRzbGlkZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8vIHNtb290aCBzY3JvbGwgdmlhIGFuY2hvciwgYSBuYXRpdmUgZnVuY3Rpb24gRVMyMDE4XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJykuZm9yRWFjaCgoYW5jaG9yKSA9PiB7XG5cdFx0YW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Ly8gZ28gKHNtb290aClcblx0XHRcdGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYW5jaG9yLmdldEF0dHJpYnV0ZShcImhyZWZcIikpO1xuXHRcdFx0dGFyZ2V0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG5cdFx0XHQvLyBhbmQgY2xvc2Ugc2lkZWJhclxuXHRcdFx0Y29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21zX21lbnUtYnRuXCIpO1xuXHRcdFx0Y29uc3QgbmF2ID0gYW5jaG9yLmNsb3Nlc3QoXCIjbXNfbmF2XCIpO1xuXHRcdFx0aWYgKG5hdikge1xuXHRcdFx0XHRjb25zdCBzaWJsaW5nQ2hlY2tCb3ggPVxuXHRcdFx0XHRcdG5hdi5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcihcIiNtc19tZW51LWJ0blwiKTtcblx0XHRcdFx0c2libGluZ0NoZWNrQm94LmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNoZWNrQm94LmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IHRvVG9wQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b1RvcEJ0blwiKTtcblx0XHRpZiAod2luZG93LnNjcm9sbFkgPiAyMCkge1xuXHRcdFx0dG9Ub3BCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdHRvVG9wQnRuLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dG9Ub3BCdG4uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRvVG9wQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdH0sIDUwMCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyAvLyByZW1vdmUgZnJhZ21lbnQgYXMgbXVjaCBhcyBpdCBjYW4gZ28gd2l0aG91dCBhZGRpbmcgYW4gZW50cnkgaW4gYnJvd3NlciBoaXN0b3J5OlxuXHQvLyB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIiNcIik7XG5cblx0Ly8gLy8gc2xpY2Ugb2ZmIHRoZSByZW1haW5pbmcgJyMnIGluIEhUTUw1OlxuXHQvLyBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdC8vICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSgwLCAtMSkpO1xuXHQvLyB9XG5cblx0Ly8gY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLmhyZWYpO1xufSk7XG4iXSwiZmlsZSI6Ii4vc3JjL2FwcC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

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