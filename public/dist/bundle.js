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

/*
* 아이콘 컴포넌트
*/
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
    return ("<ol\n            class=\"main-screen-container\"\n            aria-label=\"\uBC14\uD0D5\uD654\uBA74 \uBC0F \uC544\uC774\uCF58 \uB9AC\uC2A4\uD2B8\"\n        >\n            ".concat(icons.map(function (icon, i) { return iconTemplate(icon, i); }).join(''), "\n            <button id=\"addIconBtn\">\uCD94\uAC00</button>\n        </ol>"));
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
/*
* 리액트 hooks 간단히 구현
*/
function CustomReact() {
    var options = {
        currentStateIdx: 0,
        renderCount: 0,
    };
    var root = null;
    var rootComponent = null;
    var events = [];
    var states = [];
    /*
    * CustomReact hooks 1. useEvents
    * useEvents: 컴포넌트를 모두 렌더링한 후 이벤트를 등록할 수 있도록 도와주는 메서드
    */
    var useEvents = function (eventFns) {
        events = __spreadArray(__spreadArray([], events, true), eventFns, true);
    };
    var registerEvents = function () {
        if (events.length > 0) {
            events.forEach(function (eventFn) { return eventFn(); });
        }
    };
    /*
    * CustomReact hooks 2. useState
    * useState: state 관리하도록 도와주는 메서드
    */
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
    /*
    * CustomReact hooks 3. render
    * render: root가 되는 엘리먼트를 렌더링하는 메서드
    */
    var render = function (rootEl, rootComponentEl) {
        if (rootEl) {
            root = rootEl;
        }
        if (rootComponentEl) {
            rootComponent = rootComponentEl;
        }
        _render();
    };
    /*
    * debounceFrame: 1초당 디스플레이 주사율만큼 실행하게 하여 지나친 렌더링을 방지하기 위한 메서드
    */
    var debounceFrame = function (callback) {
        var nextFrameCallback = -1;
        return function () {
            cancelAnimationFrame(nextFrameCallback);
            nextFrameCallback = requestAnimationFrame(callback);
        };
    };
    /*
    * _render: 실질적으로 리액트 내부에서 렌더링을 담당하는 메서드
    */
    var _render = debounceFrame(function () {
        if (!root || !rootComponent) {
            return;
        }
        // 화면 렌더링
        root.innerHTML = rootComponent();
        // 이벤트 등록
        registerEvents();
        // 변수 초기화
        options.currentStateIdx = 0;
        console.log('_render currentStateIdx', options.currentStateIdx);
        events = [];
        // 렌더링 횟수 확인
        options.renderCount += 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCxjQUFjLEVBQUUsQ0FBQztRQUVqQixTQUFTO1FBQ1QsT0FBTyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFaEUsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVaLFlBQVk7UUFDWixPQUFPLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sRUFBRSxTQUFTLGFBQUUsUUFBUSxZQUFFLE1BQU0sVUFBRSxDQUFDO0FBQzNDLENBQUM7QUFHSyxTQUFrQyxXQUFXLEVBQUUsRUFBN0MsU0FBUyxpQkFBRSxRQUFRLGdCQUFFLE1BQU0sWUFBa0IsQ0FBQztBQUNmO0FBRXZDLGlFQUFlLFdBQVcsRUFBQzs7Ozs7OztVQ2hIM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDZDtBQUU5QixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLElBQUksSUFBSSxFQUFFO0lBQ04seURBQU0sQ0FBQyxJQUFJLEVBQUUsNENBQVMsQ0FBQztDQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL0FwcC50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9jb21wb25lbnRzL2NvbW1vbi9JY29ucy50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9jb3JlL0N1c3RvbVJlYWN0LnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSWNvbnMgZnJvbSBcIi4vY29tcG9uZW50cy9jb21tb24vSWNvbnNcIjtcblxuZnVuY3Rpb24gQ29udGFpbmVyKCkge1xuICAgIHJldHVybiAoYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAke0ljb25zKCl9XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwic3RhdHVzLWNvbnRhaW5lclwiIGFyaWEtbGFiZWw9XCLtlZjri6gg7IOB7YOcIOywvVwiPjwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUV2ZW50cyB9IGZyb20gXCIuLi8uLi9jb3JlL0N1c3RvbVJlYWN0XCI7XG5pbXBvcnQgeyBJSWNvbnMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvY29tcG9uZW50cy9jb21tb24vaWNvbnNcIjtcblxuLypcbiog7JWE7J207L2YIOy7tO2PrOuEjO2KuFxuKi9cbmZ1bmN0aW9uIEljb25zICgpIHtcbiAgICAvKlxuICAgICog6riw67O4IOyVhOydtOy9mCDsoJXrs7RcbiAgICAqL1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IFtcbiAgICAgICAgeyBuYW1lOiBcIuyduO2EsOuEt1wiLCBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1pbnRlcm5ldC5wbmdcIiwgZXhwbGFuYXRpb246IFwi7J247YSw64S3IOyVhOydtOy9mFwiIH0sXG4gICAgICAgIHsgbmFtZTogXCLrrLjshJxcIiwgaW1nU3JjOiBcIi4vYXNzZXRzL2ljb25zL2ljb24tZmlsZS1kb2N1bWVudC5wbmdcIiwgZXhwbGFuYXRpb246IFwi66y47IScIOyVhOydtOy9mFwiIH0sXG4gICAgICAgIHsgbmFtZTogXCLtj7TrjZRcIiwgaW1nU3JjOiBcIi4vYXNzZXRzL2ljb25zL2ljb24tZm9sZGVyLnBuZ1wiLCBleHBsYW5hdGlvbjogXCLtj7TrjZQg7JWE7J207L2YXCIgfVxuICAgIF1cblxuICAgIGNvbnN0IFtpY29ucywgc2V0SWNvbnNdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgICBjb25zdCBbYnRuQ2xpY2tDb3VudCwgc2V0QnRuQ2xpY2tDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIC8qXG4gICAgKiDsnbTrsqTtirgg65Ox66GdXG4gICAgKi9cbiAgICBjb25zdCBpY29uQ2xpY2tFdmVudCA9ICgpID0+IHtcbiAgICAgICAgLypcbiAgICAgICAgKiDslYTsnbTsvZgg7YG066atIOydtOuypO2KuCDqtIDroKgg66mU7ISc65OcXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IGljb25BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWZhdWx0LWljb25cIik7XG4gICAgICAgIGNvbnN0IGluRm9jdXNJY29uID0gKHY6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHYuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3V0Rm9jdXNJY29ucyA9ICgpID0+IHtcbiAgICAgICAgICAgIGljb25BcmVhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodi5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2NsaWNrZWQnKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDEuIOyVhOydtOy9mCDtgbTrpq3tlojsnYQg65WMXG4gICAgICAgIGljb25BcmVhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgIHYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgb3V0Rm9jdXNJY29ucygpO1xuICAgICAgICAgICAgICAgIGluRm9jdXNJY29uKHYpOyBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gMi4g7JWE7J207L2YIOyZuOu2gCDtmZTrqbQg7YG066at7ZaI7J2EIOuVjFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tc2NyZWVuLWNvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG91dEZvY3VzSWNvbnMoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGRJY29uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRJY29uQnRuXCIpO1xuICAgICAgICBpZiAoYWRkSWNvbkJ0bikge1xuICAgICAgICAgICAgYWRkSWNvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJY29uSW5mbyA9IHsgbmFtZTogXCLtj7TrjZRcIiwgaW1nU3JjOiBcIi4vYXNzZXRzL2ljb25zL2ljb24tZm9sZGVyLnBuZ1wiLCBleHBsYW5hdGlvbjogXCLtj7TrjZQg7JWE7J207L2YXCIgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJY29uQXJyID0gWy4uLmljb25zLCBuZXdJY29uSW5mb107XG4gICAgICAgICAgICAgICAgc2V0SWNvbnMobmV3SWNvbkFycik7XG5cbiAgICAgICAgICAgICAgICBzZXRCdG5DbGlja0NvdW50KGJ0bkNsaWNrQ291bnQgKyAxKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRXZlbnRzKFtpY29uQ2xpY2tFdmVudF0pO1xuXG5cbiAgICAvKlxuICAgICog7JWE7J207L2YIOy7tO2PrOuEjO2KuCBcbiAgICAqL1xuICAgIGNvbnN0IGljb25UZW1wbGF0ZSA9IChpY29uOiBJSWNvbnMsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gKGBcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZGVmYXVsdC1pY29uXCJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSR7aWNvbi5leHBsYW5hdGlvbn1cbiAgICAgICAgICAgICAgICBzdHlsZT1cImdyaWQtY29sdW1uOiAxIC8gMTtncmlkLXJvdzogJHtpICsgMX0gLyAke2kgKyAyfTtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0ke2ljb24uaW1nU3JjfSBkcmFnZ2FibGU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+JHtpY29uLm5hbWV9PC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5gXG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICBgPG9sXG4gICAgICAgICAgICBjbGFzcz1cIm1haW4tc2NyZWVuLWNvbnRhaW5lclwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwi67CU7YOV7ZmU66m0IOuwjyDslYTsnbTsvZgg66as7Iqk7Yq4XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgJHtpY29ucy5tYXAoKGljb246IElJY29ucywgaTogbnVtYmVyKSA9PiBpY29uVGVtcGxhdGUoaWNvbiwgaSkpLmpvaW4oJycpfVxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFkZEljb25CdG5cIj7stpTqsIA8L2J1dHRvbj5cbiAgICAgICAgPC9vbD5gXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29ucztcbiIsIi8qXG4qIOumrOyVoe2KuCBob29rcyDqsITri6jtnogg6rWs7ZiEXG4qL1xuZnVuY3Rpb24gQ3VzdG9tUmVhY3QgKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGN1cnJlbnRTdGF0ZUlkeDogMCxcbiAgICAgICAgcmVuZGVyQ291bnQ6IDAsXG4gICAgfVxuXG4gICAgbGV0IHJvb3Q6IEVsZW1lbnQgfCBhbnkgPSBudWxsO1xuICAgIGxldCByb290Q29tcG9uZW50OiBFbGVtZW50IHwgYW55ID0gbnVsbDtcblxuICAgIGxldCBldmVudHM6IEFycmF5PEZ1bmN0aW9uPiA9IFtdO1xuXG4gICAgY29uc3Qgc3RhdGVzOiBhbnlbXSA9IFtdO1xuXG4gICAgLypcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzIDEuIHVzZUV2ZW50c1xuICAgICogdXNlRXZlbnRzOiDsu7Ttj6zrhIztirjrpbwg66qo65GQIOugjOuNlOunge2VnCDtm4Qg7J2067Kk7Yq466W8IOuTseuhne2VoCDsiJgg7J6I64+E66GdIOuPhOyZgOyjvOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHVzZUV2ZW50cyA9IChldmVudEZuczogQXJyYXk8RnVuY3Rpb24+KSA9PiB7XG4gICAgICAgIGV2ZW50cyA9IFsuLi5ldmVudHMsIC4uLmV2ZW50Rm5zXTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVnaXN0ZXJFdmVudHMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChldmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goKGV2ZW50Rm4pID0+IGV2ZW50Rm4oKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIFxuICAgICogQ3VzdG9tUmVhY3QgaG9va3MgMi4gdXNlU3RhdGVcbiAgICAqIHVzZVN0YXRlOiBzdGF0ZSDqtIDrpqztlZjrj4TroZ0g64+E7JmA7KO864qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgdXNlU3RhdGUgPSAoaW5pdFN0YXRlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgeyBjdXJyZW50U3RhdGVJZHggfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgaWYgKHN0YXRlcy5sZW5ndGggPT09IGN1cnJlbnRTdGF0ZUlkeCkge1xuICAgICAgICAgICAgc3RhdGVzLnB1c2goaW5pdFN0YXRlKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0YXRlc1tjdXJyZW50U3RhdGVJZHhdO1xuXG4gICAgICAgIGNvbnN0IHNldFN0YXRlID0gKG5ld1N0YXRlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHN0YXRlc1tjdXJyZW50U3RhdGVJZHhdID0gbmV3U3RhdGU7XG4gICAgICAgICAgICBfcmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmN1cnJlbnRTdGF0ZUlkeCArPSAxO1xuXG4gICAgICAgIHJldHVybiBbIHN0YXRlLCBzZXRTdGF0ZSBdO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAzLiByZW5kZXJcbiAgICAqIHJlbmRlcjogcm9vdOqwgCDrkJjripQg7JeY66as66i87Yq466W8IOugjOuNlOunge2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHJlbmRlciA9IChyb290RWw6IEVsZW1lbnQgfCBhbnksIHJvb3RDb21wb25lbnRFbDogRWxlbWVudCB8IGFueSkgPT4ge1xuICAgICAgICBpZiAocm9vdEVsKSB7XG4gICAgICAgICAgICByb290ID0gcm9vdEVsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3RDb21wb25lbnRFbCkge1xuICAgICAgICAgICAgcm9vdENvbXBvbmVudCA9IHJvb3RDb21wb25lbnRFbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgX3JlbmRlcigpO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBkZWJvdW5jZUZyYW1lOiAx7LSI64u5IOuUlOyKpO2UjOugiOydtCDso7zsgqzsnKjrp4ztgbwg7Iuk7ZaJ7ZWY6rKMIO2VmOyXrCDsp4DrgpjsuZwg66CM642U66eB7J2EIOuwqeyngO2VmOq4sCDsnITtlZwg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCBkZWJvdW5jZUZyYW1lID0gKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjaykgPT4ge1xuICAgICAgICBsZXQgbmV4dEZyYW1lQ2FsbGJhY2sgPSAtMTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShuZXh0RnJhbWVDYWxsYmFjayk7XG4gICAgICAgICAgbmV4dEZyYW1lQ2FsbGJhY2sgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvKlxuICAgICogX3JlbmRlcjog7Iuk7KeI7KCB7Jy866GcIOumrOyVoe2KuCDrgrTrtoDsl5DshJwg66CM642U66eB7J2EIOuLtOuLue2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IF9yZW5kZXIgPSBkZWJvdW5jZUZyYW1lKCgpID0+IHtcbiAgICAgICAgaWYgKCFyb290IHx8ICFyb290Q29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDtmZTrqbQg66CM642U66eBXG4gICAgICAgIHJvb3QuaW5uZXJIVE1MID0gcm9vdENvbXBvbmVudCgpO1xuXG4gICAgICAgIC8vIOydtOuypO2KuCDrk7HroZ1cbiAgICAgICAgcmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOuzgOyImCDstIjquLDtmZRcbiAgICAgICAgb3B0aW9ucy5jdXJyZW50U3RhdGVJZHggPSAwO1xuICAgICAgICBjb25zb2xlLmxvZygnX3JlbmRlciBjdXJyZW50U3RhdGVJZHgnLCBvcHRpb25zLmN1cnJlbnRTdGF0ZUlkeCk7XG5cbiAgICAgICAgZXZlbnRzID0gW107XG5cbiAgICAgICAgLy8g66CM642U66eBIO2an+yImCDtmZXsnbhcbiAgICAgICAgb3B0aW9ucy5yZW5kZXJDb3VudCArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZygnX3JlbmRlciByZW5kZXJDb3VudCcsIG9wdGlvbnMucmVuZGVyQ291bnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgdXNlRXZlbnRzLCB1c2VTdGF0ZSwgcmVuZGVyIH07XG59XG5cblxuY29uc3QgeyB1c2VFdmVudHMsIHVzZVN0YXRlLCByZW5kZXIgfSA9IEN1c3RvbVJlYWN0KCk7XG5leHBvcnQgeyB1c2VFdmVudHMsIHVzZVN0YXRlLCByZW5kZXIgfTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tUmVhY3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9jb3JlL0N1c3RvbVJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0FwcFwiO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpO1xuaWYgKHJvb3QpIHtcbiAgICByZW5kZXIocm9vdCwgQ29udGFpbmVyKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9