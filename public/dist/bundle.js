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
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        console.log('hi~! I am mounted');
    }, []);
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        console.log('buttonClickCount changed to', btnClickCount);
    }, [btnClickCount]);
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        console.log('new icon info', icons[icons.length - 1]);
    }, [icons]);
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
/* harmony export */   "useEffect": () => (/* binding */ useEffect),
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
        curEffectIdx: 0,
        renderCount: 0,
    };
    var root = null;
    var rootComponent = null;
    var events = [];
    var states = [];
    var effectDependencies = [];
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
        var curEffectIdx = options.curEffectIdx;
        console.log('curEffectIdx', curEffectIdx);
        console.log('effectDependencies.length === curEffectIdx', effectDependencies.length === curEffectIdx);
        if (effectDependencies.length === curEffectIdx) {
            effectDependencies.push(dependencies);
        }
        var dependency = effectDependencies[curEffectIdx];
        console.log('existed dependency', dependency);
        console.log('new dependencies', dependencies);
        // dependency가 없을 경우 callback 바로 실행 (mount 되었을 때 실행)
        // ex. useEffect(() => {}, [])
        var hasChanged = true;
        if (dependency && dependencies.length !== 0) {
            // Array.prototype.some: 판별 함수 적어도 하나라도 통과하는지 체크
            // Object.is: 두 개의 파라미터가 동일한지 체크
            // 즉, 기존 dependency와 새로 받은 dependency 사이에 차이가 하나라도 있는 경우 true를 반환
            hasChanged = dependencies.some(function (v, i) {
                console.log('hasChanged?', !Object.is(v, dependency[i]));
                return !Object.is(v, dependency[i]);
            });
        }
        console.log('hasChanged', hasChanged);
        if (hasChanged) {
            effectDependencies[curEffectIdx] = dependencies;
            callback();
        }
        options.curEffectIdx += 1;
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
        console.log('_render curStateIdx', options.curStateIdx);
        options.curEffectIdx = 0;
        console.log('_render curEffectIdx', options.curEffectIdx);
        events = [];
        // 렌더링 횟수 확인
        options.renderCount += 1;
        console.log('_render renderCount', options.renderCount);
    });
    return { render: render, useEvents: useEvents, useState: useState, useEffect: useEffect };
}
var _a = CustomReact(), render = _a.render, useEvents = _a.useEvents, useState = _a.useState, useEffect = _a.useEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQzVELENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxFQUFFLE1BQU0sVUFBRSxTQUFTLGFBQUUsUUFBUSxZQUFFLFNBQVMsYUFBRSxDQUFDO0FBQ3RELENBQUM7QUFHSyxTQUE2QyxXQUFXLEVBQUUsRUFBeEQsTUFBTSxjQUFFLFNBQVMsaUJBQUUsUUFBUSxnQkFBRSxTQUFTLGVBQWtCLENBQUM7QUFDZjtBQUVsRCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7VUNuSzNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ2Q7QUFFOUIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QyxJQUFJLElBQUksRUFBRTtJQUNOLHlEQUFNLENBQUMsSUFBSSxFQUFFLDRDQUFTLENBQUM7Q0FDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9BcHAudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9jb21tb24vSWNvbnMudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvY29yZS9DdXN0b21SZWFjdC50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEljb25zIGZyb20gXCIuL2NvbXBvbmVudHMvY29tbW9uL0ljb25zXCI7XG5cbmZ1bmN0aW9uIENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgJHtJY29ucygpfVxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cInN0YXR1cy1jb250YWluZXJcIiBhcmlhLWxhYmVsPVwi7ZWY64uoIOyDge2DnCDssL1cIj48L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyIsImltcG9ydCB7IHVzZUV2ZW50cywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCIuLi8uLi9jb3JlL0N1c3RvbVJlYWN0XCI7XG5pbXBvcnQgeyBJSWNvbnMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvY29tcG9uZW50cy9jb21tb24vaWNvbnNcIjtcblxuLypcbiog7JWE7J207L2YIOy7tO2PrOuEjO2KuFxuKi9cbmZ1bmN0aW9uIEljb25zICgpIHtcbiAgICAvKlxuICAgICog6riw67O4IOyVhOydtOy9mCDsoJXrs7RcbiAgICAqL1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IFtcbiAgICAgICAgeyBuYW1lOiBcIuyduO2EsOuEt1wiLCBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1pbnRlcm5ldC5wbmdcIiwgZXhwbGFuYXRpb246IFwi7J247YSw64S3IOyVhOydtOy9mFwiIH0sXG4gICAgICAgIHsgbmFtZTogXCLrrLjshJxcIiwgaW1nU3JjOiBcIi4vYXNzZXRzL2ljb25zL2ljb24tZmlsZS1kb2N1bWVudC5wbmdcIiwgZXhwbGFuYXRpb246IFwi66y47IScIOyVhOydtOy9mFwiIH0sXG4gICAgICAgIHsgbmFtZTogXCLtj7TrjZRcIiwgaW1nU3JjOiBcIi4vYXNzZXRzL2ljb25zL2ljb24tZm9sZGVyLnBuZ1wiLCBleHBsYW5hdGlvbjogXCLtj7TrjZQg7JWE7J207L2YXCIgfVxuICAgIF1cblxuICAgIGNvbnN0IFtpY29ucywgc2V0SWNvbnNdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgICBjb25zdCBbYnRuQ2xpY2tDb3VudCwgc2V0QnRuQ2xpY2tDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoaX4hIEkgYW0gbW91bnRlZCcpO1xuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2J1dHRvbkNsaWNrQ291bnQgY2hhbmdlZCB0bycsIGJ0bkNsaWNrQ291bnQpO1xuICAgIH0sIFtidG5DbGlja0NvdW50XSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCduZXcgaWNvbiBpbmZvJywgaWNvbnNbaWNvbnMubGVuZ3RoIC0gMV0pO1xuICAgIH0sIFtpY29uc10pXG5cbiAgICAvKlxuICAgICog7J2067Kk7Yq4IOuTseuhnVxuICAgICovXG4gICAgY29uc3QgaWNvbkNsaWNrRXZlbnQgPSAoKSA9PiB7XG4gICAgICAgIC8qXG4gICAgICAgICog7JWE7J207L2YIO2BtOumrSDsnbTrsqTtirgg6rSA66CoIOuplOyEnOuTnFxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBpY29uQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVmYXVsdC1pY29uXCIpO1xuICAgICAgICBjb25zdCBpbkZvY3VzSWNvbiA9ICh2OiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB2LmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG91dEZvY3VzSWNvbnMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpY29uQXJlYS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHYuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdjbGlja2VkJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIHYuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyAxLiDslYTsnbTsvZgg7YG066at7ZaI7J2EIOuVjFxuICAgICAgICBpY29uQXJlYS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICB2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIG91dEZvY3VzSWNvbnMoKTtcbiAgICAgICAgICAgICAgICBpbkZvY3VzSWNvbih2KTsgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIDIuIOyVhOydtOy9mCDsmbjrtoAg7ZmU66m0IO2BtOumre2WiOydhCDrlYxcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXNjcmVlbi1jb250YWluZXJcIik7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBvdXRGb2N1c0ljb25zKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkSWNvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkSWNvbkJ0blwiKTtcbiAgICAgICAgaWYgKGFkZEljb25CdG4pIHtcbiAgICAgICAgICAgIGFkZEljb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SWNvbkluZm8gPSB7IG5hbWU6IFwi7Y+0642UXCIsIGltZ1NyYzogXCIuL2Fzc2V0cy9pY29ucy9pY29uLWZvbGRlci5wbmdcIiwgZXhwbGFuYXRpb246IFwi7Y+0642UIOyVhOydtOy9mFwiIH07XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SWNvbkFyciA9IFsuLi5pY29ucywgbmV3SWNvbkluZm9dO1xuICAgICAgICAgICAgICAgIHNldEljb25zKG5ld0ljb25BcnIpO1xuXG4gICAgICAgICAgICAgICAgc2V0QnRuQ2xpY2tDb3VudChidG5DbGlja0NvdW50ICsgMSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHVzZUV2ZW50cyhbaWNvbkNsaWNrRXZlbnRdKTtcblxuXG4gICAgLypcbiAgICAqIOyVhOydtOy9mCDsu7Ttj6zrhIztirggXG4gICAgKi9cbiAgICBjb25zdCBpY29uVGVtcGxhdGUgPSAoaWNvbjogSUljb25zLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIChgXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBjbGFzcz1cImRlZmF1bHQtaWNvblwiXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ke2ljb24uZXhwbGFuYXRpb259XG4gICAgICAgICAgICAgICAgc3R5bGU9XCJncmlkLWNvbHVtbjogMSAvIDE7Z3JpZC1yb3c6ICR7aSArIDF9IC8gJHtpICsgMn07XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JHtpY29uLmltZ1NyY30gZHJhZ2dhYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPiR7aWNvbi5uYW1lfTwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+YFxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgYDxvbFxuICAgICAgICAgICAgY2xhc3M9XCJtYWluLXNjcmVlbi1jb250YWluZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIuuwlO2Dle2ZlOuptCDrsI8g7JWE7J207L2YIOumrOyKpO2KuFwiXG4gICAgICAgID5cbiAgICAgICAgICAgICR7aWNvbnMubWFwKChpY29uOiBJSWNvbnMsIGk6IG51bWJlcikgPT4gaWNvblRlbXBsYXRlKGljb24sIGkpKS5qb2luKCcnKX1cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGRJY29uQnRuXCI+7LaU6rCAPC9idXR0b24+XG4gICAgICAgIDwvb2w+YFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvbnM7XG4iLCIvKlxuKiDrpqzslaHtirggaG9va3Mg6rCE64uo7Z6IIOq1rO2YhFxuKi9cbmZ1bmN0aW9uIEN1c3RvbVJlYWN0ICgpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBjdXJTdGF0ZUlkeDogMCxcbiAgICAgICAgY3VyRWZmZWN0SWR4OiAwLFxuICAgICAgICByZW5kZXJDb3VudDogMCxcbiAgICB9XG5cbiAgICBsZXQgcm9vdDogRWxlbWVudCB8IGFueSA9IG51bGw7XG4gICAgbGV0IHJvb3RDb21wb25lbnQ6IEVsZW1lbnQgfCBhbnkgPSBudWxsO1xuXG4gICAgbGV0IGV2ZW50czogQXJyYXk8RnVuY3Rpb24+ID0gW107XG5cbiAgICBjb25zdCBzdGF0ZXM6IGFueVtdID0gW107XG4gICAgY29uc3QgZWZmZWN0RGVwZW5kZW5jaWVzOiBhbnlbXSA9IFtdO1xuXG4gICAgLypcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzXG4gICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAxLiByZW5kZXJcbiAgICAqIHJlbmRlcjogcm9vdOqwgCDrkJjripQg7JeY66as66i87Yq466W8IOugjOuNlOunge2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHJlbmRlciA9IChyb290RWw6IEVsZW1lbnQgfCBhbnksIHJvb3RDb21wb25lbnRFbDogRWxlbWVudCB8IGFueSkgPT4ge1xuICAgICAgICBpZiAocm9vdEVsKSB7XG4gICAgICAgICAgICByb290ID0gcm9vdEVsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3RDb21wb25lbnRFbCkge1xuICAgICAgICAgICAgcm9vdENvbXBvbmVudCA9IHJvb3RDb21wb25lbnRFbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgX3JlbmRlcigpO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAyLiB1c2VFdmVudHNcbiAgICAqIHVzZUV2ZW50czog7Lu07Y+s64SM7Yq466W8IOuqqOuRkCDroIzrjZTrp4HtlZwg7ZuEIOydtOuypO2KuOulvCDrk7HroZ3tlaAg7IiYIOyeiOuPhOuhnSDrj4TsmYDso7zripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCB1c2VFdmVudHMgPSAoZXZlbnRGbnM6IEFycmF5PEZ1bmN0aW9uPikgPT4ge1xuICAgICAgICBldmVudHMgPSBbLi4uZXZlbnRzLCAuLi5ldmVudEZuc107XG4gICAgfTtcblxuICAgIC8qIFxuICAgICogQ3VzdG9tUmVhY3QgaG9va3MgMy4gdXNlU3RhdGVcbiAgICAqIHVzZVN0YXRlOiBzdGF0ZSDqtIDrpqztlZjrj4TroZ0g64+E7JmA7KO864qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgdXNlU3RhdGUgPSAoaW5pdFN0YXRlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgeyBjdXJTdGF0ZUlkeCB9ID0gb3B0aW9ucztcblxuICAgICAgICBpZiAoc3RhdGVzLmxlbmd0aCA9PT0gY3VyU3RhdGVJZHgpIHtcbiAgICAgICAgICAgIHN0YXRlcy5wdXNoKGluaXRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdGF0ZXNbY3VyU3RhdGVJZHhdO1xuXG4gICAgICAgIGNvbnN0IHNldFN0YXRlID0gKG5ld1N0YXRlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHN0YXRlc1tjdXJTdGF0ZUlkeF0gPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIF9yZW5kZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuY3VyU3RhdGVJZHggKz0gMTtcblxuICAgICAgICByZXR1cm4gWyBzdGF0ZSwgc2V0U3RhdGUgXTtcbiAgICB9XG5cbiAgICAvKiBcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzIDMuIHVzZUVmZmVjdFxuICAgICogdXNlRWZmZWN0OiBkZXBlbmRlbmN5IOuwsOyXtOydmCDqsJLrk6Tsl5Ag67OA6rK97J20IOyDneqyvOydhCDqsr3smrAgY2FsbGJhY2vsnYQg7Iuk7ZaJ7ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgdXNlRWZmZWN0ID0gKGNhbGxiYWNrOiBGdW5jdGlvbiwgZGVwZW5kZW5jaWVzOiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3VyRWZmZWN0SWR4IH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zb2xlLmxvZygnY3VyRWZmZWN0SWR4JywgY3VyRWZmZWN0SWR4KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnZWZmZWN0RGVwZW5kZW5jaWVzLmxlbmd0aCA9PT0gY3VyRWZmZWN0SWR4JywgZWZmZWN0RGVwZW5kZW5jaWVzLmxlbmd0aCA9PT0gY3VyRWZmZWN0SWR4KTtcbiAgICAgICAgaWYgKGVmZmVjdERlcGVuZGVuY2llcy5sZW5ndGggPT09IGN1ckVmZmVjdElkeCkge1xuICAgICAgICAgICAgZWZmZWN0RGVwZW5kZW5jaWVzLnB1c2goZGVwZW5kZW5jaWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlcGVuZGVuY3kgPSBlZmZlY3REZXBlbmRlbmNpZXNbY3VyRWZmZWN0SWR4XTtcbiAgICAgICAgY29uc29sZS5sb2coJ2V4aXN0ZWQgZGVwZW5kZW5jeScsIGRlcGVuZGVuY3kpO1xuICAgICAgICBjb25zb2xlLmxvZygnbmV3IGRlcGVuZGVuY2llcycsIGRlcGVuZGVuY2llcyk7XG4gICAgICAgIC8vIGRlcGVuZGVuY3nqsIAg7JeG7J2EIOqyveyasCBjYWxsYmFjayDrsJTroZwg7Iuk7ZaJIChtb3VudCDrkJjsl4jsnYQg65WMIOyLpO2WiSlcbiAgICAgICAgLy8gZXguIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pXG4gICAgICAgIGxldCBoYXNDaGFuZ2VkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoZGVwZW5kZW5jeSAmJiBkZXBlbmRlbmNpZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBBcnJheS5wcm90b3R5cGUuc29tZTog7YyQ67OEIO2VqOyImCDsoIHslrTrj4Qg7ZWY64KY652864+EIO2GteqzvO2VmOuKlOyngCDssrTtgaxcbiAgICAgICAgICAgIC8vIE9iamVjdC5pczog65GQIOqwnOydmCDtjIzrnbzrr7jthLDqsIAg64+Z7J287ZWc7KeAIOyytO2BrFxuICAgICAgICAgICAgLy8g7KaJLCDquLDsobQgZGVwZW5kZW5jeeyZgCDsg4jroZwg67Cb7J2AIGRlcGVuZGVuY3kg7IKs7J207JeQIOywqOydtOqwgCDtlZjrgpjrnbzrj4Qg7J6I64qUIOqyveyasCB0cnVl66W8IOuwmO2ZmFxuICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IGRlcGVuZGVuY2llcy5zb21lKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhc0NoYW5nZWQ/JywgIU9iamVjdC5pcyh2LCBkZXBlbmRlbmN5W2ldKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFPYmplY3QuaXModiwgZGVwZW5kZW5jeVtpXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2hhc0NoYW5nZWQnLCBoYXNDaGFuZ2VkKTtcbiAgICAgICAgaWYgKGhhc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIGVmZmVjdERlcGVuZGVuY2llc1tjdXJFZmZlY3RJZHhdID0gZGVwZW5kZW5jaWVzO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuY3VyRWZmZWN0SWR4ICs9IDE7XG4gICAgfVxuXG4gICAgLypcbiAgICAqIEN1c3RvbVJlYWN0IOuCtOu2gCDtlajsiJhcbiAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqIGRlYm91bmNlRnJhbWU6IDHstIjri7kg65SU7Iqk7ZSM66CI7J20IOyjvOyCrOycqOunjO2BvCDsi6TtlontlZjqsowg7ZWY7JesIOyngOuCmOy5nCDroIzrjZTrp4HsnYQg67Cp7KeA7ZWY6riwIOychO2VnCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IGRlYm91bmNlRnJhbWUgPSAoY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKSA9PiB7XG4gICAgICAgIGxldCBuZXh0RnJhbWVDYWxsYmFjayA9IC0xO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKG5leHRGcmFtZUNhbGxiYWNrKTtcbiAgICAgICAgICBuZXh0RnJhbWVDYWxsYmFjayA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8qXG4gICAgKiByZWdpc3RlckV2ZW50czog7J2067Kk7Yq4IO2VqOyImCDrk7HroZ3snYQg7JyE7ZW0IOyLpO2Wie2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHJlZ2lzdGVyRXZlbnRzID0gKCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKChldmVudEZuKSA9PiBldmVudEZuKCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICogX3JlbmRlcjog7Iuk7KeI7KCB7Jy866GcIOumrOyVoe2KuCDrgrTrtoDsl5DshJwg66CM642U66eB7J2EIOuLtOuLue2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IF9yZW5kZXIgPSBkZWJvdW5jZUZyYW1lKCgpID0+IHtcbiAgICAgICAgaWYgKCFyb290IHx8ICFyb290Q29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDtmZTrqbQg66CM642U66eBXG4gICAgICAgIHJvb3QuaW5uZXJIVE1MID0gcm9vdENvbXBvbmVudCgpO1xuXG4gICAgICAgIC8vIOydtOuypO2KuCDrk7HroZ1cbiAgICAgICAgcmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOuzgOyImCDstIjquLDtmZRcbiAgICAgICAgb3B0aW9ucy5jdXJTdGF0ZUlkeCA9IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKCdfcmVuZGVyIGN1clN0YXRlSWR4Jywgb3B0aW9ucy5jdXJTdGF0ZUlkeCk7XG5cbiAgICAgICAgb3B0aW9ucy5jdXJFZmZlY3RJZHggPSAwO1xuICAgICAgICBjb25zb2xlLmxvZygnX3JlbmRlciBjdXJFZmZlY3RJZHgnLCBvcHRpb25zLmN1ckVmZmVjdElkeCk7XG5cbiAgICAgICAgZXZlbnRzID0gW107XG5cbiAgICAgICAgLy8g66CM642U66eBIO2an+yImCDtmZXsnbhcbiAgICAgICAgb3B0aW9ucy5yZW5kZXJDb3VudCArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZygnX3JlbmRlciByZW5kZXJDb3VudCcsIG9wdGlvbnMucmVuZGVyQ291bnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgcmVuZGVyLCB1c2VFdmVudHMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfTtcbn1cblxuXG5jb25zdCB7IHJlbmRlciwgdXNlRXZlbnRzLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSBDdXN0b21SZWFjdCgpO1xuZXhwb3J0IHsgcmVuZGVyLCB1c2VFdmVudHMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tUmVhY3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9jb3JlL0N1c3RvbVJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0FwcFwiO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpO1xuaWYgKHJvb3QpIHtcbiAgICByZW5kZXIocm9vdCwgQ29udGFpbmVyKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9