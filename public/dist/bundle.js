/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/src/App.ts":
/*!***************************!*\
  !*** ./public/src/App.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Icons */ "./public/src/components/Icons.ts");

function Container() {
    return ("\n        <div class=\"container\">\n            ".concat((0,_components_Icons__WEBPACK_IMPORTED_MODULE_0__["default"])(), "\n            <nav class=\"status-container\" aria-label=\"\uD558\uB2E8 \uC0C1\uD0DC \uCC3D\"></nav>\n        </div>\n    "));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ "./public/src/components/Icons.ts":
/*!****************************************!*\
  !*** ./public/src/components/Icons.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Icons() {
    /*
    * 기본 아이콘 정보
    */
    var state = {
        icons: [
            { name: "인터넷", imgSrc: "./assets/icons/icon-internet.png", explanation: "인터넷 아이콘" },
            { name: "문서", imgSrc: "./assets/icons/icon-file-document.png", explanation: "문서 아이콘" },
            { name: "폴더", imgSrc: "./assets/icons/icon-folder.png", explanation: "폴더 아이콘" }
        ]
    };
    /*
    * 이벤트 등록
    */
    window.addEventListener('DOMContentLoaded', function () {
        /*
        * 아이콘 클릭 이벤트 관련 메서드
        */
        var iconArea = document.querySelectorAll(".default-icon");
        var inFocusIcon = function (v) {
            v.classList.add('clicked');
        };
        var outFocusIcons = function () {
            iconArea.forEach(function (v) {
                if (v.classList.value.includes('clicked')) {
                    v.classList.remove('clicked');
                }
            });
        };
        // 1. 아이콘 클릭했을 때
        iconArea.forEach(function (v) {
            v.addEventListener('click', function (e) {
                e.stopPropagation();
                outFocusIcons();
                inFocusIcon(v);
            });
        });
        // 2. 아이콘 외부 화면 클릭했을 때
        var container = document.querySelector(".main-screen-container");
        if (container) {
            container.addEventListener('click', function () {
                outFocusIcons();
            });
        }
    });
    /*
    * 아이콘 컴포넌트
    */
    var iconTemplate = function (icon, i) {
        return ("<li\n                class=\"default-icon\"\n                draggable=\"true\"\n                aria-label=".concat(icon.explanation, "\n                style=\"grid-column: 1 / 1;grid-row: ").concat(i + 1, " / ").concat(i + 2, ";\"\n            >\n                <button>\n                    <figure>\n                        <img src=").concat(icon.imgSrc, " draggable=\"false\">\n                    </figure>\n                    <figcaption>").concat(icon.name, "</figcaption>\n                </button>\n            </li>"));
    };
    return ("<ol\n            class=\"main-screen-container\"\n            aria-label=\"\uC544\uC774\uCF58 \uB9AC\uC2A4\uD2B8\"\n        >\n            ".concat(state.icons.map(function (icon, i) { return iconTemplate(icon, i); }), "\n        </ol>"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icons);


/***/ }),

/***/ "./public/src/core/CustomReact.ts":
/*!****************************************!*\
  !*** ./public/src/core/CustomReact.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "useState": () => (/* binding */ useState)
/* harmony export */ });
function CustomReact() {
    var options = {
        currentStateKey: 0,
        renderCount: 0,
    };
    var root = null;
    var rootComponent = null;
    var states = [];
    function useState(initState) {
        var currentStateKey = options.currentStateKey, renderCount = options.renderCount;
        if (states.length === currentStateKey) {
            states.push(initState);
        }
        var state = states[currentStateKey];
        var setState = function (newState) {
            states[currentStateKey] = newState;
            render(null, null);
        };
        options.currentStateKey += 1;
        return [state, setState];
    }
    function render(rootEl, rootComponentEl) {
        if (rootEl) {
            root = rootEl;
        }
        if (rootComponentEl) {
            rootComponent = rootComponentEl;
        }
        _render();
    }
    function debounceFrame(callback) {
        var nextFrameCallback = -1;
        return function () {
            cancelAnimationFrame(nextFrameCallback);
            nextFrameCallback = requestAnimationFrame(callback);
        };
    }
    ;
    var _render = debounceFrame(function () {
        if (!root || !rootComponent) {
            return;
        }
        console.log(root);
        root.innerHTML = rootComponent();
        options.currentStateKey = 0;
        options.renderCount += 1;
    });
    return { useState: useState, render: render };
}
var _a = CustomReact(), useState = _a.useState, render = _a.render;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomReact);


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
/*!*****************************!*\
  !*** ./public/src/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_CustomReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/CustomReact */ "./public/src/core/CustomReact.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./public/src/App.ts");


var root = document.querySelector("#root");
if (root) {
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.render)(root, _App__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1Y7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFDakMsT0FBTyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLEVBQUUsUUFBUSxZQUFFLE1BQU0sVUFBRSxDQUFDO0FBQ2hDLENBQUM7QUFHSyxTQUF1QixXQUFXLEVBQUUsRUFBbEMsUUFBUSxnQkFBRSxNQUFNLFlBQWtCLENBQUM7QUFDZjtBQUU1QixpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7VUN0RTNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ2Q7QUFFOUIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QyxJQUFJLElBQUksRUFBRTtJQUNOLHlEQUFNLENBQUMsSUFBSSxFQUFFLDRDQUFTLENBQUM7Q0FDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9BcHAudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9JY29ucy50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9jb3JlL0N1c3RvbVJlYWN0LnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSWNvbnMgZnJvbSBcIi4vY29tcG9uZW50cy9JY29uc1wiO1xuXG5mdW5jdGlvbiBDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIChgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICR7SWNvbnMoKX1cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJzdGF0dXMtY29udGFpbmVyXCIgYXJpYS1sYWJlbD1cIu2VmOuLqCDsg4Htg5wg7LC9XCI+PC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCJpbXBvcnQgeyBJSWNvbnMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvY29tcG9uZW50cy9pY29uc1wiO1xuXG5mdW5jdGlvbiBJY29ucyAoKSB7XG4gICAgLypcbiAgICAqIOq4sOuzuCDslYTsnbTsvZgg7KCV67O0XG4gICAgKi9cbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAgICB7IG5hbWU6IFwi7J247YSw64S3XCIsIGltZ1NyYzogXCIuL2Fzc2V0cy9pY29ucy9pY29uLWludGVybmV0LnBuZ1wiLCBleHBsYW5hdGlvbjogXCLsnbjthLDrhLcg7JWE7J207L2YXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLrrLjshJxcIiwgaW1nU3JjOiBcIi4vYXNzZXRzL2ljb25zL2ljb24tZmlsZS1kb2N1bWVudC5wbmdcIiwgZXhwbGFuYXRpb246IFwi66y47IScIOyVhOydtOy9mFwiIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwi7Y+0642UXCIsIGltZ1NyYzogXCIuL2Fzc2V0cy9pY29ucy9pY29uLWZvbGRlci5wbmdcIiwgZXhwbGFuYXRpb246IFwi7Y+0642UIOyVhOydtOy9mFwiIH1cbiAgICAgICAgXVxuICAgIH1cblxuICAgIC8qXG4gICAgKiDsnbTrsqTtirgg65Ox66GdXG4gICAgKi9cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgLypcbiAgICAgICAgKiDslYTsnbTsvZgg7YG066atIOydtOuypO2KuCDqtIDroKgg66mU7ISc65OcXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IGljb25BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWZhdWx0LWljb25cIik7XG4gICAgICAgIGNvbnN0IGluRm9jdXNJY29uID0gKHY6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHYuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3V0Rm9jdXNJY29ucyA9ICgpID0+IHtcbiAgICAgICAgICAgIGljb25BcmVhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodi5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2NsaWNrZWQnKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDEuIOyVhOydtOy9mCDtgbTrpq3tlojsnYQg65WMXG4gICAgICAgIGljb25BcmVhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgIHYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgb3V0Rm9jdXNJY29ucygpO1xuICAgICAgICAgICAgICAgIGluRm9jdXNJY29uKHYpOyBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gMi4g7JWE7J207L2YIOyZuOu2gCDtmZTrqbQg7YG066at7ZaI7J2EIOuVjFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tc2NyZWVuLWNvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG91dEZvY3VzSWNvbnMoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLypcbiAgICAqIOyVhOydtOy9mCDsu7Ttj6zrhIztirggXG4gICAgKi9cbiAgICBjb25zdCBpY29uVGVtcGxhdGUgPSAoaWNvbjogSUljb25zLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGA8bGlcbiAgICAgICAgICAgICAgICBjbGFzcz1cImRlZmF1bHQtaWNvblwiXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ke2ljb24uZXhwbGFuYXRpb259XG4gICAgICAgICAgICAgICAgc3R5bGU9XCJncmlkLWNvbHVtbjogMSAvIDE7Z3JpZC1yb3c6ICR7aSArIDF9IC8gJHtpICsgMn07XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JHtpY29uLmltZ1NyY30gZHJhZ2dhYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPiR7aWNvbi5uYW1lfTwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+YFxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgYDxvbFxuICAgICAgICAgICAgY2xhc3M9XCJtYWluLXNjcmVlbi1jb250YWluZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIuyVhOydtOy9mCDrpqzsiqTtirhcIlxuICAgICAgICA+XG4gICAgICAgICAgICAke3N0YXRlLmljb25zLm1hcCgoaWNvbiwgaSkgPT4gaWNvblRlbXBsYXRlKGljb24sIGkpKX1cbiAgICAgICAgPC9vbD5gXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29ucztcbiIsImZ1bmN0aW9uIEN1c3RvbVJlYWN0ICgpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBjdXJyZW50U3RhdGVLZXk6IDAsXG4gICAgICAgIHJlbmRlckNvdW50OiAwLFxuICAgIH1cblxuICAgIGxldCByb290OiBFbGVtZW50IHwgYW55ID0gbnVsbDtcbiAgICBsZXQgcm9vdENvbXBvbmVudDogRWxlbWVudCB8IGFueSA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZXM6IGFueVtdID0gW107XG5cbiAgICBmdW5jdGlvbiB1c2VTdGF0ZShpbml0U3RhdGU6IGFueSkge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnRTdGF0ZUtleSwgcmVuZGVyQ291bnQgfSA9IG9wdGlvbnM7XG4gICAgICAgIFxuICAgICAgICBpZiAoc3RhdGVzLmxlbmd0aCA9PT0gY3VycmVudFN0YXRlS2V5KSB7XG4gICAgICAgICAgICBzdGF0ZXMucHVzaChpbml0U3RhdGUpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RhdGVzW2N1cnJlbnRTdGF0ZUtleV07XG5cbiAgICAgICAgY29uc3Qgc2V0U3RhdGUgPSAobmV3U3RhdGU6IGFueSkgPT4ge1xuICAgICAgICAgIHN0YXRlc1tjdXJyZW50U3RhdGVLZXldID0gbmV3U3RhdGU7XG4gICAgICAgICAgcmVuZGVyKG51bGwsIG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5jdXJyZW50U3RhdGVLZXkgKz0gMTtcblxuICAgICAgICByZXR1cm4gWyBzdGF0ZSwgc2V0U3RhdGUgXTtcbiAgICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyIChyb290RWw6IEVsZW1lbnQgfCBhbnksIHJvb3RDb21wb25lbnRFbDogRWxlbWVudCB8IGFueSkge1xuICAgICAgICBpZiAocm9vdEVsKSB7XG4gICAgICAgICAgICByb290ID0gcm9vdEVsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAocm9vdENvbXBvbmVudEVsKSB7XG4gICAgICAgICAgICByb290Q29tcG9uZW50ID0gcm9vdENvbXBvbmVudEVsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBfcmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVib3VuY2VGcmFtZSAoY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKSB7XG4gICAgICAgIGxldCBuZXh0RnJhbWVDYWxsYmFjayA9IC0xO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKG5leHRGcmFtZUNhbGxiYWNrKTtcbiAgICAgICAgICBuZXh0RnJhbWVDYWxsYmFjayA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjaylcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICBcbiAgICBjb25zdCBfcmVuZGVyID0gZGVib3VuY2VGcmFtZSgoKSA9PiB7XG4gICAgICAgIGlmICghcm9vdCB8fCAhcm9vdENvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cocm9vdCk7XG5cbiAgICAgICAgcm9vdC5pbm5lckhUTUwgPSByb290Q29tcG9uZW50KCk7XG4gICAgICAgIG9wdGlvbnMuY3VycmVudFN0YXRlS2V5ID0gMDtcbiAgICAgICAgb3B0aW9ucy5yZW5kZXJDb3VudCArPSAxO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgdXNlU3RhdGUsIHJlbmRlciB9O1xufVxuXG5cbmNvbnN0IHsgdXNlU3RhdGUsIHJlbmRlciB9ID0gQ3VzdG9tUmVhY3QoKTtcbmV4cG9ydCB7IHVzZVN0YXRlLCByZW5kZXIgfTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tUmVhY3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9jb3JlL0N1c3RvbVJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0FwcFwiO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpO1xuaWYgKHJvb3QpIHtcbiAgICByZW5kZXIocm9vdCwgQ29udGFpbmVyKVxufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=