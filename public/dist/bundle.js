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
    * CustomReact hooks
    * =========================================================================
    * CustomReact hooks 1. render
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
    * CustomReact hooks 2. useEvents
    * useEvents: 컴포넌트를 모두 렌더링한 후 이벤트를 등록할 수 있도록 도와주는 메서드
    */
    var useEvents = function (eventFns) {
        events = __spreadArray(__spreadArray([], events, true), eventFns, true);
    };
    /*
    * CustomReact hooks 3. useState
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
    * CustomReact 내부 함수
    * =========================================================================
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
    * registerEvents: 이벤트 함수 등록을 위해 실행하는 메서드
    */
    var registerEvents = function () {
        if (events.length > 0) {
            events.forEach(function (eventFn) { return eventFn(); });
        }
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
var _a = CustomReact(), render = _a.render, useEvents = _a.useEvents, useState = _a.useState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvY29tbW9uL0ljb25zLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2NvcmUvQ3VzdG9tUmVhY3QudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29ucyBmcm9tIFwiLi9jb21wb25lbnRzL2NvbW1vbi9JY29uc1wiO1xuXG5mdW5jdGlvbiBDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIChgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICR7SWNvbnMoKX1cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJzdGF0dXMtY29udGFpbmVyXCIgYXJpYS1sYWJlbD1cIu2VmOuLqCDsg4Htg5wg7LC9XCI+PC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRXZlbnRzIH0gZnJvbSBcIi4uLy4uL2NvcmUvQ3VzdG9tUmVhY3RcIjtcbmltcG9ydCB7IElJY29ucyB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9jb21wb25lbnRzL2NvbW1vbi9pY29uc1wiO1xuXG4vKlxuKiDslYTsnbTsvZgg7Lu07Y+s64SM7Yq4XG4qL1xuZnVuY3Rpb24gSWNvbnMgKCkge1xuICAgIC8qXG4gICAgKiDquLDrs7gg7JWE7J207L2YIOygleuztFxuICAgICovXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gW1xuICAgICAgICB7IG5hbWU6IFwi7J247YSw64S3XCIsIGltZ1NyYzogXCIuL2Fzc2V0cy9pY29ucy9pY29uLWludGVybmV0LnBuZ1wiLCBleHBsYW5hdGlvbjogXCLsnbjthLDrhLcg7JWE7J207L2YXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIuusuOyEnFwiLCBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1maWxlLWRvY3VtZW50LnBuZ1wiLCBleHBsYW5hdGlvbjogXCLrrLjshJwg7JWE7J207L2YXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIu2PtOuNlFwiLCBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1mb2xkZXIucG5nXCIsIGV4cGxhbmF0aW9uOiBcIu2PtOuNlCDslYTsnbTsvZhcIiB9XG4gICAgXVxuXG4gICAgY29uc3QgW2ljb25zLCBzZXRJY29uc10gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICAgIGNvbnN0IFtidG5DbGlja0NvdW50LCBzZXRCdG5DbGlja0NvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gICAgLypcbiAgICAqIOydtOuypO2KuCDrk7HroZ1cbiAgICAqL1xuICAgIGNvbnN0IGljb25DbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgICAgICAvKlxuICAgICAgICAqIOyVhOydtOy9mCDtgbTrpq0g7J2067Kk7Yq4IOq0gOugqCDrqZTshJzrk5xcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgaWNvbkFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlZmF1bHQtaWNvblwiKTtcbiAgICAgICAgY29uc3QgaW5Gb2N1c0ljb24gPSAodjogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdXRGb2N1c0ljb25zID0gKCkgPT4ge1xuICAgICAgICAgICAgaWNvbkFyZWEuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnY2xpY2tlZCcpICkge1xuICAgICAgICAgICAgICAgICAgICB2LmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gMS4g7JWE7J207L2YIO2BtOumre2WiOydhCDrlYxcbiAgICAgICAgaWNvbkFyZWEuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgICAgdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBvdXRGb2N1c0ljb25zKCk7XG4gICAgICAgICAgICAgICAgaW5Gb2N1c0ljb24odik7IFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyAyLiDslYTsnbTsvZgg7Jm467aAIO2ZlOuptCDtgbTrpq3tlojsnYQg65WMXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1zY3JlZW4tY29udGFpbmVyXCIpO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3V0Rm9jdXNJY29ucygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZEljb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEljb25CdG5cIik7XG4gICAgICAgIGlmIChhZGRJY29uQnRuKSB7XG4gICAgICAgICAgICBhZGRJY29uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0ljb25JbmZvID0geyBuYW1lOiBcIu2PtOuNlFwiLCBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1mb2xkZXIucG5nXCIsIGV4cGxhbmF0aW9uOiBcIu2PtOuNlCDslYTsnbTsvZhcIiB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0ljb25BcnIgPSBbLi4uaWNvbnMsIG5ld0ljb25JbmZvXTtcbiAgICAgICAgICAgICAgICBzZXRJY29ucyhuZXdJY29uQXJyKTtcblxuICAgICAgICAgICAgICAgIHNldEJ0bkNsaWNrQ291bnQoYnRuQ2xpY2tDb3VudCArIDEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VFdmVudHMoW2ljb25DbGlja0V2ZW50XSk7XG5cblxuICAgIC8qXG4gICAgKiDslYTsnbTsvZgg7Lu07Y+s64SM7Yq4IFxuICAgICovXG4gICAgY29uc3QgaWNvblRlbXBsYXRlID0gKGljb246IElJY29ucywgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiAoYFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJkZWZhdWx0LWljb25cIlxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9JHtpY29uLmV4cGxhbmF0aW9ufVxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZ3JpZC1jb2x1bW46IDEgLyAxO2dyaWQtcm93OiAke2kgKyAxfSAvICR7aSArIDJ9O1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7aWNvbi5pbWdTcmN9IGRyYWdnYWJsZT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj4ke2ljb24ubmFtZX08L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPmBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIGA8b2xcbiAgICAgICAgICAgIGNsYXNzPVwibWFpbi1zY3JlZW4tY29udGFpbmVyXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLrsJTtg5XtmZTrqbQg67CPIOyVhOydtOy9mCDrpqzsiqTtirhcIlxuICAgICAgICA+XG4gICAgICAgICAgICAke2ljb25zLm1hcCgoaWNvbjogSUljb25zLCBpOiBudW1iZXIpID0+IGljb25UZW1wbGF0ZShpY29uLCBpKSkuam9pbignJyl9XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWRkSWNvbkJ0blwiPuy2lOqwgDwvYnV0dG9uPlxuICAgICAgICA8L29sPmBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zO1xuIiwiLypcbiog66as7JWh7Yq4IGhvb2tzIOqwhOuLqO2eiCDqtaztmIRcbiovXG5mdW5jdGlvbiBDdXN0b21SZWFjdCAoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgY3VycmVudFN0YXRlSWR4OiAwLFxuICAgICAgICByZW5kZXJDb3VudDogMCxcbiAgICB9XG5cbiAgICBsZXQgcm9vdDogRWxlbWVudCB8IGFueSA9IG51bGw7XG4gICAgbGV0IHJvb3RDb21wb25lbnQ6IEVsZW1lbnQgfCBhbnkgPSBudWxsO1xuXG4gICAgbGV0IGV2ZW50czogQXJyYXk8RnVuY3Rpb24+ID0gW107XG5cbiAgICBjb25zdCBzdGF0ZXM6IGFueVtdID0gW107XG5cbiAgICAvKlxuICAgICogQ3VzdG9tUmVhY3QgaG9va3NcbiAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzIDEuIHJlbmRlclxuICAgICogcmVuZGVyOiByb2906rCAIOuQmOuKlCDsl5jrpqzrqLztirjrpbwg66CM642U66eB7ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgcmVuZGVyID0gKHJvb3RFbDogRWxlbWVudCB8IGFueSwgcm9vdENvbXBvbmVudEVsOiBFbGVtZW50IHwgYW55KSA9PiB7XG4gICAgICAgIGlmIChyb290RWwpIHtcbiAgICAgICAgICAgIHJvb3QgPSByb290RWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm9vdENvbXBvbmVudEVsKSB7XG4gICAgICAgICAgICByb290Q29tcG9uZW50ID0gcm9vdENvbXBvbmVudEVsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBfcmVuZGVyKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzIDIuIHVzZUV2ZW50c1xuICAgICogdXNlRXZlbnRzOiDsu7Ttj6zrhIztirjrpbwg66qo65GQIOugjOuNlOunge2VnCDtm4Qg7J2067Kk7Yq466W8IOuTseuhne2VoCDsiJgg7J6I64+E66GdIOuPhOyZgOyjvOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHVzZUV2ZW50cyA9IChldmVudEZuczogQXJyYXk8RnVuY3Rpb24+KSA9PiB7XG4gICAgICAgIGV2ZW50cyA9IFsuLi5ldmVudHMsIC4uLmV2ZW50Rm5zXTtcbiAgICB9O1xuXG4gICAgLyogXG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAzLiB1c2VTdGF0ZVxuICAgICogdXNlU3RhdGU6IHN0YXRlIOq0gOumrO2VmOuPhOuhnSDrj4TsmYDso7zripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCB1c2VTdGF0ZSA9IChpbml0U3RhdGU6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnRTdGF0ZUlkeCB9ID0gb3B0aW9ucztcblxuICAgICAgICBpZiAoc3RhdGVzLmxlbmd0aCA9PT0gY3VycmVudFN0YXRlSWR4KSB7XG4gICAgICAgICAgICBzdGF0ZXMucHVzaChpbml0U3RhdGUpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RhdGVzW2N1cnJlbnRTdGF0ZUlkeF07XG5cbiAgICAgICAgY29uc3Qgc2V0U3RhdGUgPSAobmV3U3RhdGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgc3RhdGVzW2N1cnJlbnRTdGF0ZUlkeF0gPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIF9yZW5kZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuY3VycmVudFN0YXRlSWR4ICs9IDE7XG5cbiAgICAgICAgcmV0dXJuIFsgc3RhdGUsIHNldFN0YXRlIF07XG4gICAgfVxuXG4gICAgLypcbiAgICAqIEN1c3RvbVJlYWN0IOuCtOu2gCDtlajsiJhcbiAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqIGRlYm91bmNlRnJhbWU6IDHstIjri7kg65SU7Iqk7ZSM66CI7J20IOyjvOyCrOycqOunjO2BvCDsi6TtlontlZjqsowg7ZWY7JesIOyngOuCmOy5nCDroIzrjZTrp4HsnYQg67Cp7KeA7ZWY6riwIOychO2VnCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IGRlYm91bmNlRnJhbWUgPSAoY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKSA9PiB7XG4gICAgICAgIGxldCBuZXh0RnJhbWVDYWxsYmFjayA9IC0xO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKG5leHRGcmFtZUNhbGxiYWNrKTtcbiAgICAgICAgICBuZXh0RnJhbWVDYWxsYmFjayA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8qXG4gICAgKiByZWdpc3RlckV2ZW50czog7J2067Kk7Yq4IO2VqOyImCDrk7HroZ3snYQg7JyE7ZW0IOyLpO2Wie2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHJlZ2lzdGVyRXZlbnRzID0gKCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKChldmVudEZuKSA9PiBldmVudEZuKCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICogX3JlbmRlcjog7Iuk7KeI7KCB7Jy866GcIOumrOyVoe2KuCDrgrTrtoDsl5DshJwg66CM642U66eB7J2EIOuLtOuLue2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IF9yZW5kZXIgPSBkZWJvdW5jZUZyYW1lKCgpID0+IHtcbiAgICAgICAgaWYgKCFyb290IHx8ICFyb290Q29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDtmZTrqbQg66CM642U66eBXG4gICAgICAgIHJvb3QuaW5uZXJIVE1MID0gcm9vdENvbXBvbmVudCgpO1xuXG4gICAgICAgIC8vIOydtOuypO2KuCDrk7HroZ1cbiAgICAgICAgcmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOuzgOyImCDstIjquLDtmZRcbiAgICAgICAgb3B0aW9ucy5jdXJyZW50U3RhdGVJZHggPSAwO1xuICAgICAgICBjb25zb2xlLmxvZygnX3JlbmRlciBjdXJyZW50U3RhdGVJZHgnLCBvcHRpb25zLmN1cnJlbnRTdGF0ZUlkeCk7XG5cbiAgICAgICAgZXZlbnRzID0gW107XG5cbiAgICAgICAgLy8g66CM642U66eBIO2an+yImCDtmZXsnbhcbiAgICAgICAgb3B0aW9ucy5yZW5kZXJDb3VudCArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZygnX3JlbmRlciByZW5kZXJDb3VudCcsIG9wdGlvbnMucmVuZGVyQ291bnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgdXNlRXZlbnRzLCB1c2VTdGF0ZSwgcmVuZGVyIH07XG59XG5cblxuY29uc3QgeyByZW5kZXIsIHVzZUV2ZW50cywgdXNlU3RhdGUsICB9ID0gQ3VzdG9tUmVhY3QoKTtcbmV4cG9ydCB7IHJlbmRlciwgdXNlRXZlbnRzLCB1c2VTdGF0ZSwgIH07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVJlYWN0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vY29yZS9DdXN0b21SZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9BcHBcIjtcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKTtcbmlmIChyb290KSB7XG4gICAgcmVuZGVyKHJvb3QsIENvbnRhaW5lcilcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==