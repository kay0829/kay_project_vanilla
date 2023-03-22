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
/* harmony import */ var _components_common_Icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/Icons */ "./public/src/components/common/Icons.ts");

function Container() {
    return ("\n        <div class=\"container\">\n            ".concat((0,_components_common_Icons__WEBPACK_IMPORTED_MODULE_0__["default"])(), "\n            <nav class=\"status-container\" aria-label=\"\uD558\uB2E8 \uC0C1\uD0DC \uCC3D\"></nav>\n        </div>\n    "));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ "./public/src/components/common/Icons.ts":
/*!***********************************************!*\
  !*** ./public/src/components/common/Icons.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_CustomReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/CustomReact */ "./public/src/core/CustomReact.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

function Icons() {
    /*
    * 기본 아이콘 정보
    */
    var initialState = [
        { name: "인터넷", imgSrc: "./assets/icons/icon-internet.png", explanation: "인터넷 아이콘" },
        { name: "문서", imgSrc: "./assets/icons/icon-file-document.png", explanation: "문서 아이콘" },
        { name: "폴더", imgSrc: "./assets/icons/icon-folder.png", explanation: "폴더 아이콘" }
    ];
    var _a = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState), icons = _a[0], setIcons = _a[1];
    var _b = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)(0), btnClickCount = _b[0], setBtnClickCount = _b[1];
    /*
    * 이벤트 등록
    */
    var iconClickEvent = function () {
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
        var addIconBtn = document.querySelector("#addIconBtn");
        if (addIconBtn) {
            addIconBtn.addEventListener('click', function () {
                var newIconInfo = { name: "폴더", imgSrc: "./assets/icons/icon-folder.png", explanation: "폴더 아이콘" };
                var newIconArr = __spreadArray(__spreadArray([], icons, true), [newIconInfo], false);
                setIcons(newIconArr);
                setBtnClickCount(btnClickCount + 1);
            });
        }
    };
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEvents)([iconClickEvent]);
    /*
    * 아이콘 컴포넌트
    */
    var iconTemplate = function (icon, i) {
        return ("\n            <li\n                class=\"default-icon\"\n                draggable=\"true\"\n                aria-label=".concat(icon.explanation, "\n                style=\"grid-column: 1 / 1;grid-row: ").concat(i + 1, " / ").concat(i + 2, ";\"\n            >\n                <button>\n                    <figure>\n                        <img src=").concat(icon.imgSrc, " draggable=\"false\">\n                    </figure>\n                    <figcaption>").concat(icon.name, "</figcaption>\n                </button>\n            </li>"));
    };
    return ("<ol\n            class=\"main-screen-container\"\n            aria-label=\"\uC544\uC774\uCF58 \uB9AC\uC2A4\uD2B8\"\n        >\n            ".concat(icons.map(function (icon, i) { return iconTemplate(icon, i); }).join(''), "\n            <button id=\"addIconBtn\">\uCD94\uAC00</button>\n        </ol>"));
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
/* harmony export */   "useEvents": () => (/* binding */ useEvents),
/* harmony export */   "useState": () => (/* binding */ useState)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function CustomReact() {
    var options = {
        currentStateIdx: 0,
        renderCount: 0,
    };
    var root = null;
    var rootComponent = null;
    var events = [];
    var states = [];
    var useEvents = function (eventFns) {
        events = __spreadArray(__spreadArray([], events, true), eventFns, true);
    };
    var registerEvents = function () {
        if (events.length > 0) {
            events.forEach(function (eventFn) { return eventFn(); });
        }
    };
    var useState = function (initState) {
        var currentStateIdx = options.currentStateIdx;
        if (states.length === currentStateIdx) {
            states.push(initState);
        }
        var state = states[currentStateIdx];
        var setState = function (newState) {
            states[currentStateIdx] = newState;
            _render();
        };
        options.currentStateIdx += 1;
        return [state, setState];
    };
    var render = function (rootEl, rootComponentEl) {
        if (rootEl) {
            root = rootEl;
        }
        if (rootComponentEl) {
            rootComponent = rootComponentEl;
        }
        _render();
    };
    var debounceFrame = function (callback) {
        var nextFrameCallback = -1;
        return function () {
            cancelAnimationFrame(nextFrameCallback);
            nextFrameCallback = requestAnimationFrame(callback);
        };
    };
    var _render = debounceFrame(function () {
        if (!root || !rootComponent) {
            return;
        }
        root.innerHTML = rootComponent();
        options.currentStateIdx = 0;
        options.renderCount += 1;
        registerEvents();
        console.log('_render currentStateIdx', options.currentStateIdx);
        console.log('_render renderCount', options.renderCount);
    });
    return { useEvents: useEvents, useState: useState, render: render };
}
var _a = CustomReact(), useEvents = _a.useEvents, useState = _a.useState, render = _a.render;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxFQUFFLFNBQVMsYUFBRSxRQUFRLFlBQUUsTUFBTSxVQUFFLENBQUM7QUFDM0MsQ0FBQztBQUdLLFNBQWtDLFdBQVcsRUFBRSxFQUE3QyxTQUFTLGlCQUFFLFFBQVEsZ0JBQUUsTUFBTSxZQUFrQixDQUFDO0FBQ2Y7QUFFdkMsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7O1VDckYzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNkO0FBRTlCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0MsSUFBSSxJQUFJLEVBQUU7SUFDTix5REFBTSxDQUFDLElBQUksRUFBRSw0Q0FBUyxDQUFDO0NBQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvQXBwLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvY29tbW9uL0ljb25zLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2NvcmUvQ3VzdG9tUmVhY3QudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29ucyBmcm9tIFwiLi9jb21wb25lbnRzL2NvbW1vbi9JY29uc1wiO1xuXG5mdW5jdGlvbiBDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIChgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICR7SWNvbnMoKX1cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJzdGF0dXMtY29udGFpbmVyXCIgYXJpYS1sYWJlbD1cIu2VmOuLqCDsg4Htg5wg7LC9XCI+PC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRXZlbnRzIH0gZnJvbSBcIi4uLy4uL2NvcmUvQ3VzdG9tUmVhY3RcIjtcbmltcG9ydCB7IElJY29ucyB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9jb21wb25lbnRzL2ljb25zXCI7XG5cbmZ1bmN0aW9uIEljb25zICgpIHtcbiAgICAvKlxuICAgICog6riw67O4IOyVhOydtOy9mCDsoJXrs7RcbiAgICAqL1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IFtcbiAgICAgICAgeyBuYW1lOiBcIuyduO2EsOuEt1wiLCBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1pbnRlcm5ldC5wbmdcIiwgZXhwbGFuYXRpb246IFwi7J247YSw64S3IOyVhOydtOy9mFwiIH0sXG4gICAgICAgIHsgbmFtZTogXCLrrLjshJxcIiwgaW1nU3JjOiBcIi4vYXNzZXRzL2ljb25zL2ljb24tZmlsZS1kb2N1bWVudC5wbmdcIiwgZXhwbGFuYXRpb246IFwi66y47IScIOyVhOydtOy9mFwiIH0sXG4gICAgICAgIHsgbmFtZTogXCLtj7TrjZRcIiwgaW1nU3JjOiBcIi4vYXNzZXRzL2ljb25zL2ljb24tZm9sZGVyLnBuZ1wiLCBleHBsYW5hdGlvbjogXCLtj7TrjZQg7JWE7J207L2YXCIgfVxuICAgIF1cblxuICAgIGNvbnN0IFtpY29ucywgc2V0SWNvbnNdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgICBjb25zdCBbYnRuQ2xpY2tDb3VudCwgc2V0QnRuQ2xpY2tDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIC8qXG4gICAgKiDsnbTrsqTtirgg65Ox66GdXG4gICAgKi9cbiAgICBjb25zdCBpY29uQ2xpY2tFdmVudCA9ICgpID0+IHtcbiAgICAgICAgLypcbiAgICAgICAgKiDslYTsnbTsvZgg7YG066atIOydtOuypO2KuCDqtIDroKgg66mU7ISc65OcXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IGljb25BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWZhdWx0LWljb25cIik7XG4gICAgICAgIGNvbnN0IGluRm9jdXNJY29uID0gKHY6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHYuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3V0Rm9jdXNJY29ucyA9ICgpID0+IHtcbiAgICAgICAgICAgIGljb25BcmVhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodi5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2NsaWNrZWQnKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDEuIOyVhOydtOy9mCDtgbTrpq3tlojsnYQg65WMXG4gICAgICAgIGljb25BcmVhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgIHYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgb3V0Rm9jdXNJY29ucygpO1xuICAgICAgICAgICAgICAgIGluRm9jdXNJY29uKHYpOyBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gMi4g7JWE7J207L2YIOyZuOu2gCDtmZTrqbQg7YG066at7ZaI7J2EIOuVjFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tc2NyZWVuLWNvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG91dEZvY3VzSWNvbnMoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGRJY29uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRJY29uQnRuXCIpO1xuICAgICAgICBpZiAoYWRkSWNvbkJ0bikge1xuICAgICAgICAgICAgYWRkSWNvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJY29uSW5mbyA9IHsgbmFtZTogXCLtj7TrjZRcIiwgaW1nU3JjOiBcIi4vYXNzZXRzL2ljb25zL2ljb24tZm9sZGVyLnBuZ1wiLCBleHBsYW5hdGlvbjogXCLtj7TrjZQg7JWE7J207L2YXCIgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJY29uQXJyID0gWy4uLmljb25zLCBuZXdJY29uSW5mb107XG4gICAgICAgICAgICAgICAgc2V0SWNvbnMobmV3SWNvbkFycik7XG5cbiAgICAgICAgICAgICAgICBzZXRCdG5DbGlja0NvdW50KGJ0bkNsaWNrQ291bnQgKyAxKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRXZlbnRzKFtpY29uQ2xpY2tFdmVudF0pO1xuXG5cbiAgICAvKlxuICAgICog7JWE7J207L2YIOy7tO2PrOuEjO2KuCBcbiAgICAqL1xuICAgIGNvbnN0IGljb25UZW1wbGF0ZSA9IChpY29uOiBJSWNvbnMsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gKGBcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZGVmYXVsdC1pY29uXCJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSR7aWNvbi5leHBsYW5hdGlvbn1cbiAgICAgICAgICAgICAgICBzdHlsZT1cImdyaWQtY29sdW1uOiAxIC8gMTtncmlkLXJvdzogJHtpICsgMX0gLyAke2kgKyAyfTtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0ke2ljb24uaW1nU3JjfSBkcmFnZ2FibGU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+JHtpY29uLm5hbWV9PC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5gXG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICBgPG9sXG4gICAgICAgICAgICBjbGFzcz1cIm1haW4tc2NyZWVuLWNvbnRhaW5lclwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwi7JWE7J207L2YIOumrOyKpO2KuFwiXG4gICAgICAgID5cbiAgICAgICAgICAgICR7aWNvbnMubWFwKChpY29uOiBJSWNvbnMsIGk6IG51bWJlcikgPT4gaWNvblRlbXBsYXRlKGljb24sIGkpKS5qb2luKCcnKX1cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGRJY29uQnRuXCI+7LaU6rCAPC9idXR0b24+XG4gICAgICAgIDwvb2w+YFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvbnM7XG4iLCJmdW5jdGlvbiBDdXN0b21SZWFjdCAoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgY3VycmVudFN0YXRlSWR4OiAwLFxuICAgICAgICByZW5kZXJDb3VudDogMCxcbiAgICB9XG5cbiAgICBsZXQgcm9vdDogRWxlbWVudCB8IGFueSA9IG51bGw7XG4gICAgbGV0IHJvb3RDb21wb25lbnQ6IEVsZW1lbnQgfCBhbnkgPSBudWxsO1xuXG4gICAgbGV0IGV2ZW50czogQXJyYXk8RnVuY3Rpb24+ID0gW107XG5cbiAgICBjb25zdCBzdGF0ZXM6IGFueVtdID0gW107XG5cbiAgICBjb25zdCB1c2VFdmVudHMgPSAoZXZlbnRGbnM6IEFycmF5PEZ1bmN0aW9uPikgPT4ge1xuICAgICAgICBldmVudHMgPSBbLi4uZXZlbnRzLCAuLi5ldmVudEZuc107XG4gICAgfTtcblxuICAgIGNvbnN0IHJlZ2lzdGVyRXZlbnRzID0gKCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKChldmVudEZuKSA9PiBldmVudEZuKCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB1c2VTdGF0ZSA9IChpbml0U3RhdGU6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnRTdGF0ZUlkeCB9ID0gb3B0aW9ucztcblxuICAgICAgICBpZiAoc3RhdGVzLmxlbmd0aCA9PT0gY3VycmVudFN0YXRlSWR4KSB7XG4gICAgICAgICAgICBzdGF0ZXMucHVzaChpbml0U3RhdGUpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RhdGVzW2N1cnJlbnRTdGF0ZUlkeF07XG5cbiAgICAgICAgY29uc3Qgc2V0U3RhdGUgPSAobmV3U3RhdGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgc3RhdGVzW2N1cnJlbnRTdGF0ZUlkeF0gPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIF9yZW5kZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuY3VycmVudFN0YXRlSWR4ICs9IDE7XG5cbiAgICAgICAgcmV0dXJuIFsgc3RhdGUsIHNldFN0YXRlIF07XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyID0gKHJvb3RFbDogRWxlbWVudCB8IGFueSwgcm9vdENvbXBvbmVudEVsOiBFbGVtZW50IHwgYW55KSA9PiB7XG4gICAgICAgIGlmIChyb290RWwpIHtcbiAgICAgICAgICAgIHJvb3QgPSByb290RWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm9vdENvbXBvbmVudEVsKSB7XG4gICAgICAgICAgICByb290Q29tcG9uZW50ID0gcm9vdENvbXBvbmVudEVsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBfcmVuZGVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVib3VuY2VGcmFtZSA9IChjYWxsYmFjazogRnJhbWVSZXF1ZXN0Q2FsbGJhY2spID0+IHtcbiAgICAgICAgbGV0IG5leHRGcmFtZUNhbGxiYWNrID0gLTE7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUobmV4dEZyYW1lQ2FsbGJhY2spO1xuICAgICAgICAgIG5leHRGcmFtZUNhbGxiYWNrID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgY29uc3QgX3JlbmRlciA9IGRlYm91bmNlRnJhbWUoKCkgPT4ge1xuICAgICAgICBpZiAoIXJvb3QgfHwgIXJvb3RDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvb3QuaW5uZXJIVE1MID0gcm9vdENvbXBvbmVudCgpO1xuICAgICAgICBcbiAgICAgICAgb3B0aW9ucy5jdXJyZW50U3RhdGVJZHggPSAwO1xuICAgICAgICBvcHRpb25zLnJlbmRlckNvdW50ICs9IDE7XG5cbiAgICAgICAgcmVnaXN0ZXJFdmVudHMoKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnX3JlbmRlciBjdXJyZW50U3RhdGVJZHgnLCBvcHRpb25zLmN1cnJlbnRTdGF0ZUlkeCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdfcmVuZGVyIHJlbmRlckNvdW50Jywgb3B0aW9ucy5yZW5kZXJDb3VudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyB1c2VFdmVudHMsIHVzZVN0YXRlLCByZW5kZXIgfTtcbn1cblxuXG5jb25zdCB7IHVzZUV2ZW50cywgdXNlU3RhdGUsIHJlbmRlciB9ID0gQ3VzdG9tUmVhY3QoKTtcbmV4cG9ydCB7IHVzZUV2ZW50cywgdXNlU3RhdGUsIHJlbmRlciB9O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21SZWFjdDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2NvcmUvQ3VzdG9tUmVhY3RcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQXBwXCI7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIik7XG5pZiAocm9vdCkge1xuICAgIHJlbmRlcihyb290LCBDb250YWluZXIpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=