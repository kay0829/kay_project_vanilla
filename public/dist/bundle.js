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
        curStateIdx: 0,
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
        var curStateIdx = options.curStateIdx;
        if (states.length === curStateIdx) {
            states.push(initState);
        }
        var state = states[curStateIdx];
        var setState = function (newState) {
            states[curStateIdx] = newState;
            _render();
        };
        options.curStateIdx += 1;
        return [state, setState];
    };
    /*
    * CustomReact hooks 3. useEffect
    * useEffect: dependency 배열의 값들에 변경이 생겼을 경우 callback을 실행하는 메서드
    */
    var useEffect = function (callback, dependencies) {
        var curStateIdx = options.curStateIdx;
        if (states.length === curStateIdx) {
            states.push(curStateIdx);
        }
        var state = states[curStateIdx];
        var setState = function (newState) {
            states[curStateIdx] = newState;
            _render();
        };
        options.curStateIdx += 1;
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
        options.curStateIdx = 0;
        console.log('_render currentStateIdx', options.curStateIdx);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNkO0FBRTlCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0MsSUFBSSxJQUFJLEVBQUU7SUFDTix5REFBTSxDQUFDLElBQUksRUFBRSw0Q0FBUyxDQUFDO0NBQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvQXBwLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvY29tbW9uL0ljb25zLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2NvcmUvQ3VzdG9tUmVhY3QudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29ucyBmcm9tIFwiLi9jb21wb25lbnRzL2NvbW1vbi9JY29uc1wiO1xuXG5mdW5jdGlvbiBDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIChgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICR7SWNvbnMoKX1cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJzdGF0dXMtY29udGFpbmVyXCIgYXJpYS1sYWJlbD1cIu2VmOuLqCDsg4Htg5wg7LC9XCI+PC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRXZlbnRzIH0gZnJvbSBcIi4uLy4uL2NvcmUvQ3VzdG9tUmVhY3RcIjtcbmltcG9ydCB7IElJY29ucyB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9jb21wb25lbnRzL2NvbW1vbi9pY29uc1wiO1xuXG4vKlxuKiDslYTsnbTsvZgg7Lu07Y+s64SM7Yq4XG4qL1xuZnVuY3Rpb24gSWNvbnMgKCkge1xuICAgIC8qXG4gICAgKiDquLDrs7gg7JWE7J207L2YIOygleuztFxuICAgICovXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gW1xuICAgICAgICB7IG5hbWU6IFwi7J247YSw64S3XCIsIGltZ1NyYzogXCIuL2Fzc2V0cy9pY29ucy9pY29uLWludGVybmV0LnBuZ1wiLCBleHBsYW5hdGlvbjogXCLsnbjthLDrhLcg7JWE7J207L2YXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIuusuOyEnFwiLCBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1maWxlLWRvY3VtZW50LnBuZ1wiLCBleHBsYW5hdGlvbjogXCLrrLjshJwg7JWE7J207L2YXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIu2PtOuNlFwiLCBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1mb2xkZXIucG5nXCIsIGV4cGxhbmF0aW9uOiBcIu2PtOuNlCDslYTsnbTsvZhcIiB9XG4gICAgXVxuXG4gICAgY29uc3QgW2ljb25zLCBzZXRJY29uc10gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICAgIGNvbnN0IFtidG5DbGlja0NvdW50LCBzZXRCdG5DbGlja0NvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gICAgLypcbiAgICAqIOydtOuypO2KuCDrk7HroZ1cbiAgICAqL1xuICAgIGNvbnN0IGljb25DbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgICAgICAvKlxuICAgICAgICAqIOyVhOydtOy9mCDtgbTrpq0g7J2067Kk7Yq4IOq0gOugqCDrqZTshJzrk5xcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgaWNvbkFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlZmF1bHQtaWNvblwiKTtcbiAgICAgICAgY29uc3QgaW5Gb2N1c0ljb24gPSAodjogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdXRGb2N1c0ljb25zID0gKCkgPT4ge1xuICAgICAgICAgICAgaWNvbkFyZWEuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnY2xpY2tlZCcpICkge1xuICAgICAgICAgICAgICAgICAgICB2LmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gMS4g7JWE7J207L2YIO2BtOumre2WiOydhCDrlYxcbiAgICAgICAgaWNvbkFyZWEuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgICAgdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBvdXRGb2N1c0ljb25zKCk7XG4gICAgICAgICAgICAgICAgaW5Gb2N1c0ljb24odik7IFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyAyLiDslYTsnbTsvZgg7Jm467aAIO2ZlOuptCDtgbTrpq3tlojsnYQg65WMXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1zY3JlZW4tY29udGFpbmVyXCIpO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3V0Rm9jdXNJY29ucygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZEljb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEljb25CdG5cIik7XG4gICAgICAgIGlmIChhZGRJY29uQnRuKSB7XG4gICAgICAgICAgICBhZGRJY29uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0ljb25JbmZvID0geyBuYW1lOiBcIu2PtOuNlFwiLCBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1mb2xkZXIucG5nXCIsIGV4cGxhbmF0aW9uOiBcIu2PtOuNlCDslYTsnbTsvZhcIiB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0ljb25BcnIgPSBbLi4uaWNvbnMsIG5ld0ljb25JbmZvXTtcbiAgICAgICAgICAgICAgICBzZXRJY29ucyhuZXdJY29uQXJyKTtcblxuICAgICAgICAgICAgICAgIHNldEJ0bkNsaWNrQ291bnQoYnRuQ2xpY2tDb3VudCArIDEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VFdmVudHMoW2ljb25DbGlja0V2ZW50XSk7XG5cblxuICAgIC8qXG4gICAgKiDslYTsnbTsvZgg7Lu07Y+s64SM7Yq4IFxuICAgICovXG4gICAgY29uc3QgaWNvblRlbXBsYXRlID0gKGljb246IElJY29ucywgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiAoYFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJkZWZhdWx0LWljb25cIlxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9JHtpY29uLmV4cGxhbmF0aW9ufVxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZ3JpZC1jb2x1bW46IDEgLyAxO2dyaWQtcm93OiAke2kgKyAxfSAvICR7aSArIDJ9O1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7aWNvbi5pbWdTcmN9IGRyYWdnYWJsZT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj4ke2ljb24ubmFtZX08L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPmBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIGA8b2xcbiAgICAgICAgICAgIGNsYXNzPVwibWFpbi1zY3JlZW4tY29udGFpbmVyXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLrsJTtg5XtmZTrqbQg67CPIOyVhOydtOy9mCDrpqzsiqTtirhcIlxuICAgICAgICA+XG4gICAgICAgICAgICAke2ljb25zLm1hcCgoaWNvbjogSUljb25zLCBpOiBudW1iZXIpID0+IGljb25UZW1wbGF0ZShpY29uLCBpKSkuam9pbignJyl9XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWRkSWNvbkJ0blwiPuy2lOqwgDwvYnV0dG9uPlxuICAgICAgICA8L29sPmBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zO1xuIiwiLypcbiog66as7JWh7Yq4IGhvb2tzIOqwhOuLqO2eiCDqtaztmIRcbiovXG5mdW5jdGlvbiBDdXN0b21SZWFjdCAoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgY3VyU3RhdGVJZHg6IDAsXG4gICAgICAgIHJlbmRlckNvdW50OiAwLFxuICAgIH1cblxuICAgIGxldCByb290OiBFbGVtZW50IHwgYW55ID0gbnVsbDtcbiAgICBsZXQgcm9vdENvbXBvbmVudDogRWxlbWVudCB8IGFueSA9IG51bGw7XG5cbiAgICBsZXQgZXZlbnRzOiBBcnJheTxGdW5jdGlvbj4gPSBbXTtcblxuICAgIGNvbnN0IHN0YXRlczogYW55W10gPSBbXTtcblxuICAgIC8qXG4gICAgKiBDdXN0b21SZWFjdCBob29rc1xuICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICogQ3VzdG9tUmVhY3QgaG9va3MgMS4gcmVuZGVyXG4gICAgKiByZW5kZXI6IHJvb3TqsIAg65CY64qUIOyXmOumrOuovO2KuOulvCDroIzrjZTrp4HtlZjripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCByZW5kZXIgPSAocm9vdEVsOiBFbGVtZW50IHwgYW55LCByb290Q29tcG9uZW50RWw6IEVsZW1lbnQgfCBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJvb3RFbCkge1xuICAgICAgICAgICAgcm9vdCA9IHJvb3RFbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb290Q29tcG9uZW50RWwpIHtcbiAgICAgICAgICAgIHJvb3RDb21wb25lbnQgPSByb290Q29tcG9uZW50RWw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIF9yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICogQ3VzdG9tUmVhY3QgaG9va3MgMi4gdXNlRXZlbnRzXG4gICAgKiB1c2VFdmVudHM6IOy7tO2PrOuEjO2KuOulvCDrqqjrkZAg66CM642U66eB7ZWcIO2bhCDsnbTrsqTtirjrpbwg65Ox66Gd7ZWgIOyImCDsnojrj4TroZ0g64+E7JmA7KO864qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgdXNlRXZlbnRzID0gKGV2ZW50Rm5zOiBBcnJheTxGdW5jdGlvbj4pID0+IHtcbiAgICAgICAgZXZlbnRzID0gWy4uLmV2ZW50cywgLi4uZXZlbnRGbnNdO1xuICAgIH07XG5cbiAgICAvKiBcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzIDMuIHVzZVN0YXRlXG4gICAgKiB1c2VTdGF0ZTogc3RhdGUg6rSA66as7ZWY64+E66GdIOuPhOyZgOyjvOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHVzZVN0YXRlID0gKGluaXRTdGF0ZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3VyU3RhdGVJZHggfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgaWYgKHN0YXRlcy5sZW5ndGggPT09IGN1clN0YXRlSWR4KSB7XG4gICAgICAgICAgICBzdGF0ZXMucHVzaChpbml0U3RhdGUpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RhdGVzW2N1clN0YXRlSWR4XTtcblxuICAgICAgICBjb25zdCBzZXRTdGF0ZSA9IChuZXdTdGF0ZTogYW55KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZXNbY3VyU3RhdGVJZHhdID0gbmV3U3RhdGU7XG4gICAgICAgICAgICBfcmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmN1clN0YXRlSWR4ICs9IDE7XG5cbiAgICAgICAgcmV0dXJuIFsgc3RhdGUsIHNldFN0YXRlIF07XG4gICAgfVxuXG4gICAgLyogXG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAzLiB1c2VFZmZlY3RcbiAgICAqIHVzZUVmZmVjdDogZGVwZW5kZW5jeSDrsLDsl7TsnZgg6rCS65Ok7JeQIOuzgOqyveydtCDsg53qsrzsnYQg6rK97JqwIGNhbGxiYWNr7J2EIOyLpO2Wie2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHVzZUVmZmVjdCA9IChjYWxsYmFjazogRnVuY3Rpb24sIGRlcGVuZGVuY2llczogQXJyYXk8YW55PikgPT4ge1xuICAgICAgICBjb25zdCB7IGN1clN0YXRlSWR4IH0gPSBvcHRpb25zO1xuXG4gICAgICAgIGlmIChzdGF0ZXMubGVuZ3RoID09PSBjdXJTdGF0ZUlkeCkge1xuICAgICAgICAgICAgc3RhdGVzLnB1c2goY3VyU3RhdGVJZHgpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RhdGVzW2N1clN0YXRlSWR4XTtcblxuICAgICAgICBjb25zdCBzZXRTdGF0ZSA9IChuZXdTdGF0ZTogYW55KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZXNbY3VyU3RhdGVJZHhdID0gbmV3U3RhdGU7XG4gICAgICAgICAgICBfcmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmN1clN0YXRlSWR4ICs9IDE7XG5cbiAgICAgICAgcmV0dXJuIFsgc3RhdGUsIHNldFN0YXRlIF07XG4gICAgfVxuXG4gICAgLypcbiAgICAqIEN1c3RvbVJlYWN0IOuCtOu2gCDtlajsiJhcbiAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqIGRlYm91bmNlRnJhbWU6IDHstIjri7kg65SU7Iqk7ZSM66CI7J20IOyjvOyCrOycqOunjO2BvCDsi6TtlontlZjqsowg7ZWY7JesIOyngOuCmOy5nCDroIzrjZTrp4HsnYQg67Cp7KeA7ZWY6riwIOychO2VnCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IGRlYm91bmNlRnJhbWUgPSAoY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKSA9PiB7XG4gICAgICAgIGxldCBuZXh0RnJhbWVDYWxsYmFjayA9IC0xO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKG5leHRGcmFtZUNhbGxiYWNrKTtcbiAgICAgICAgICBuZXh0RnJhbWVDYWxsYmFjayA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8qXG4gICAgKiByZWdpc3RlckV2ZW50czog7J2067Kk7Yq4IO2VqOyImCDrk7HroZ3snYQg7JyE7ZW0IOyLpO2Wie2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHJlZ2lzdGVyRXZlbnRzID0gKCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKChldmVudEZuKSA9PiBldmVudEZuKCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICogX3JlbmRlcjog7Iuk7KeI7KCB7Jy866GcIOumrOyVoe2KuCDrgrTrtoDsl5DshJwg66CM642U66eB7J2EIOuLtOuLue2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IF9yZW5kZXIgPSBkZWJvdW5jZUZyYW1lKCgpID0+IHtcbiAgICAgICAgaWYgKCFyb290IHx8ICFyb290Q29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDtmZTrqbQg66CM642U66eBXG4gICAgICAgIHJvb3QuaW5uZXJIVE1MID0gcm9vdENvbXBvbmVudCgpO1xuXG4gICAgICAgIC8vIOydtOuypO2KuCDrk7HroZ1cbiAgICAgICAgcmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOuzgOyImCDstIjquLDtmZRcbiAgICAgICAgb3B0aW9ucy5jdXJTdGF0ZUlkeCA9IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKCdfcmVuZGVyIGN1cnJlbnRTdGF0ZUlkeCcsIG9wdGlvbnMuY3VyU3RhdGVJZHgpO1xuXG4gICAgICAgIGV2ZW50cyA9IFtdO1xuXG4gICAgICAgIC8vIOugjOuNlOungSDtmp/siJgg7ZmV7J24XG4gICAgICAgIG9wdGlvbnMucmVuZGVyQ291bnQgKz0gMTtcbiAgICAgICAgY29uc29sZS5sb2coJ19yZW5kZXIgcmVuZGVyQ291bnQnLCBvcHRpb25zLnJlbmRlckNvdW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHVzZUV2ZW50cywgdXNlU3RhdGUsIHJlbmRlciB9O1xufVxuXG5cbmNvbnN0IHsgcmVuZGVyLCB1c2VFdmVudHMsIHVzZVN0YXRlLCAgfSA9IEN1c3RvbVJlYWN0KCk7XG5leHBvcnQgeyByZW5kZXIsIHVzZUV2ZW50cywgdXNlU3RhdGUsICB9O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21SZWFjdDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2NvcmUvQ3VzdG9tUmVhY3RcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQXBwXCI7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIik7XG5pZiAocm9vdCkge1xuICAgIHJlbmRlcihyb290LCBDb250YWluZXIpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=