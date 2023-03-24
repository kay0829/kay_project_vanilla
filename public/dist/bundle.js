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

/*
* 아이콘 컴포넌트
*/
function Icons() {
    /*
    * 기본 아이콘 정보
    */
    var initialState = [
        { name: "인터넷", imgSrc: "./assets/icons/icon-internet.png", explanation: "인터넷 아이콘" },
        { name: "파일이름여덟글자", imgSrc: "./assets/icons/icon-file-document.png", explanation: "문서 아이콘" },
        { name: "문서이름이아홉글자", imgSrc: "./assets/icons/icon-folder.png", explanation: "폴더 아이콘" }
    ];
    var _a = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState), icons = _a[0], setIcons = _a[1];
    /*
    * 이벤트 등록
    */
    var iconClickEvent = function () {
        /*
        * 아이콘 클릭 이벤트 관련 메서드
        */
        var iconArea = document.querySelectorAll(".default-icon");
        /*
        * 아이콘 이름 관련 (이름이 길 경우 클릭 시에 풀네임)
        */
        var abbreviateIconName = function (v) {
            var iconFigcaption = v.children[0].children[1];
            var fullIconName = iconFigcaption.ariaLabel || iconFigcaption.innerHTML;
            var shortName = "".concat(fullIconName.substring(0, 8), "...");
            if (fullIconName.length > 8) {
                iconFigcaption.innerHTML = shortName;
            }
        };
        var showFullIconName = function (v) {
            var iconFigcaption = v.children[0].children[1];
            var fullIconName = iconFigcaption.ariaLabel || iconFigcaption.innerHTML;
            if (fullIconName.length > 8) {
                iconFigcaption.innerHTML = fullIconName;
            }
        };
        /*
        * 아이콘 클릭 클래스 관련 (클릭되었을 때 clicked 클래스 추가)
        */
        var inFocusIcon = function (v) {
            v.classList.add('clicked');
        };
        var outFocusIcons = function () {
            iconArea.forEach(function (v) {
                if (v.classList.value.includes('clicked')) {
                    v.classList.remove('clicked');
                    abbreviateIconName(v);
                }
            });
        };
        // 1. 아이콘 클릭했을 때
        iconArea.forEach(function (v) {
            v.addEventListener('mousedown', function (e) {
                e.stopPropagation();
                outFocusIcons();
                inFocusIcon(v);
                showFullIconName(v);
            });
        });
        // 2. 아이콘 외부 화면 클릭했을 때
        var container = document.querySelector(".main-screen-container");
        if (container) {
            container.addEventListener('click', function () {
                outFocusIcons();
            });
        }
        // 3. 아이콘 드래그 이벤트 (.default-icon dragstart -> document dragover & drop)
        iconArea.forEach(function (v) {
            v.addEventListener('dragstart', function (dragstartEvent) {
                var ONE_GRID_AREA_WIDTH = 80;
                var ONE_GRID_AREA_HEIGHT = 100;
                // 기존 아이콘 위치
                var prevIconPos = [dragstartEvent.clientX, dragstartEvent.clientY];
                // 기존 아이콘 그리드 column, row 시작점
                var prevGridColumnStart = Number.parseInt(v.style.gridColumnStart);
                var prevGridRowStart = Number.parseInt(v.style.gridRowStart);
                var dragoverFn = function (dragoverEvent) {
                    dragoverEvent.preventDefault();
                };
                document.addEventListener('dragover', dragoverFn);
                document.addEventListener('drop', function (dropEvent) {
                    dropEvent.preventDefault();
                    // 클릭(mousedown) 이벤트가 적용된 엘리먼트만 이동
                    if (v.classList.value.includes('clicked')) {
                        // 드래그가 끝난 후 아이콘 위치
                        var curIconPos = [dropEvent.clientX, dropEvent.clientY];
                        // 기존 아이콘 그리드 좌표에서 몇 만큼 움직였는지
                        var movingCoordinatesX = Number.parseInt(((curIconPos[0] - prevIconPos[0]) / ONE_GRID_AREA_WIDTH).toFixed());
                        var movingCoordinatesY = Number.parseInt(((curIconPos[1] - prevIconPos[1]) / ONE_GRID_AREA_HEIGHT).toFixed());
                        // 드래그가 끝난 후 column, row 시작점
                        var curGridColumnStart = prevGridColumnStart + movingCoordinatesX;
                        var curGridRowStart = prevGridRowStart + movingCoordinatesY;
                        v.style.gridColumnStart = "".concat(curGridColumnStart);
                        v.style.gridRowStart = "".concat(curGridRowStart);
                        document.removeEventListener('dragover', dragoverFn);
                    }
                });
            });
        });
    };
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEvents)([iconClickEvent]);
    /*
    * 아이콘 컴포넌트
    */
    var iconTemplate = function (icon, i) {
        return ("\n            <li\n                class=\"default-icon\"\n                draggable=\"true\"\n                aria-label=\"".concat(icon.explanation, "\"\n                style=\"grid-column-start: 1;grid-row-start: ").concat(i + 1, ";\"\n            >\n                <button>\n                    <figure>\n                        <img src=\"").concat(icon.imgSrc, "\" draggable=\"false\">\n                    </figure>\n                    <figcaption\n                        aria-label=\"").concat(icon.name, "\"\n                    >\n                        ").concat(icon.name.substring(0, 8), "\n                        ").concat(icon.name.length > 8 ? '...' : '', "\n                    </figcaption>\n                </button>\n            </li>"));
    };
    return ("<ol\n            class=\"main-screen-container\"\n            aria-label=\"\uBC14\uD0D5\uD654\uBA74 \uBC0F \uC544\uC774\uCF58 \uB9AC\uC2A4\uD2B8\"\n        >\n            ".concat(icons.map(function (icon, i) { return iconTemplate(icon, i); }).join(''), "\n        </ol>"));
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
        if (effectDependencies.length === curEffectIdx) {
            effectDependencies.push(dependencies);
        }
        var dependency = effectDependencies[curEffectIdx];
        // dependency가 없을 경우 callback 바로 실행 (mount 되었을 때 실행)
        // ex. useEffect(() => {}, [])
        var hasChanged = true;
        if (dependency && dependencies.length !== 0) {
            // Array.prototype.some: 판별 함수 적어도 하나라도 통과하는지 체크
            // Object.is: 두 개의 파라미터가 동일한지 체크
            // 즉, 기존 dependency와 새로 받은 dependency 사이에 차이가 하나라도 있는 경우 true를 반환
            hasChanged = dependencies.some(function (v, i) {
                return !Object.is(v, dependency[i]);
            });
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUxRCxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVosWUFBWTtRQUNaLE9BQU8sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxFQUFFLE1BQU0sVUFBRSxTQUFTLGFBQUUsUUFBUSxZQUFFLFNBQVMsYUFBRSxDQUFDO0FBQ3RELENBQUM7QUFHSyxTQUE2QyxXQUFXLEVBQUUsRUFBeEQsTUFBTSxjQUFFLFNBQVMsaUJBQUUsUUFBUSxnQkFBRSxTQUFTLGVBQWtCLENBQUM7QUFDZjtBQUVsRCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7VUM5SjNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ2Q7QUFFOUIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QyxJQUFJLElBQUksRUFBRTtJQUNOLHlEQUFNLENBQUMsSUFBSSxFQUFFLDRDQUFTLENBQUM7Q0FDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9BcHAudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9jb21tb24vSWNvbnMudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvY29yZS9DdXN0b21SZWFjdC50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEljb25zIGZyb20gXCIuL2NvbXBvbmVudHMvY29tbW9uL0ljb25zXCI7XG5cbmZ1bmN0aW9uIENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgJHtJY29ucygpfVxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cInN0YXR1cy1jb250YWluZXJcIiBhcmlhLWxhYmVsPVwi7ZWY64uoIOyDge2DnCDssL1cIj48L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyIsImltcG9ydCB7IHVzZUV2ZW50cywgdXNlU3RhdGUgfSBmcm9tIFwiLi4vLi4vY29yZS9DdXN0b21SZWFjdFwiO1xuaW1wb3J0IHsgSUljb25zIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL2NvbXBvbmVudHMvY29tbW9uL2ljb25zXCI7XG5cbi8qXG4qIOyVhOydtOy9mCDsu7Ttj6zrhIztirhcbiovXG5mdW5jdGlvbiBJY29ucyAoKSB7XG4gICAgLypcbiAgICAqIOq4sOuzuCDslYTsnbTsvZgg7KCV67O0XG4gICAgKi9cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSBbXG4gICAgICAgIHsgbmFtZTogXCLsnbjthLDrhLdcIiwgaW1nU3JjOiBcIi4vYXNzZXRzL2ljb25zL2ljb24taW50ZXJuZXQucG5nXCIsIGV4cGxhbmF0aW9uOiBcIuyduO2EsOuEtyDslYTsnbTsvZhcIiB9LFxuICAgICAgICB7IG5hbWU6IFwi7YyM7J287J2066aE7Jes642f6riA7J6QXCIsIGltZ1NyYzogXCIuL2Fzc2V0cy9pY29ucy9pY29uLWZpbGUtZG9jdW1lbnQucG5nXCIsIGV4cGxhbmF0aW9uOiBcIuusuOyEnCDslYTsnbTsvZhcIiB9LFxuICAgICAgICB7IG5hbWU6IFwi66y47ISc7J2066aE7J207JWE7ZmJ6riA7J6QXCIsIGltZ1NyYzogXCIuL2Fzc2V0cy9pY29ucy9pY29uLWZvbGRlci5wbmdcIiwgZXhwbGFuYXRpb246IFwi7Y+0642UIOyVhOydtOy9mFwiIH1cbiAgICBdXG5cbiAgICBjb25zdCBbaWNvbnMsIHNldEljb25zXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbiAgICAvKlxuICAgICog7J2067Kk7Yq4IOuTseuhnVxuICAgICovXG4gICAgY29uc3QgaWNvbkNsaWNrRXZlbnQgPSAoKSA9PiB7XG4gICAgICAgIC8qXG4gICAgICAgICog7JWE7J207L2YIO2BtOumrSDsnbTrsqTtirgg6rSA66CoIOuplOyEnOuTnFxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBpY29uQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiLmRlZmF1bHQtaWNvblwiKTtcblxuICAgICAgICAvKlxuICAgICAgICAqIOyVhOydtOy9mCDsnbTrpoQg6rSA66CoICjsnbTrpoTsnbQg6ri4IOqyveyasCDtgbTrpq0g7Iuc7JeQIO2SgOuEpOyehClcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgYWJicmV2aWF0ZUljb25OYW1lID0gKHY6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGljb25GaWdjYXB0aW9uID0gdi5jaGlsZHJlblswXS5jaGlsZHJlblsxXTtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxJY29uTmFtZSA9IGljb25GaWdjYXB0aW9uLmFyaWFMYWJlbCB8fCBpY29uRmlnY2FwdGlvbi5pbm5lckhUTUw7XG4gICAgICAgICAgICBjb25zdCBzaG9ydE5hbWUgPSBgJHtmdWxsSWNvbk5hbWUuc3Vic3RyaW5nKDAsIDgpfS4uLmA7XG5cbiAgICAgICAgICAgIGlmIChmdWxsSWNvbk5hbWUubGVuZ3RoID4gOCkge1xuICAgICAgICAgICAgICAgIGljb25GaWdjYXB0aW9uLmlubmVySFRNTCA9IHNob3J0TmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNob3dGdWxsSWNvbk5hbWUgPSAodjogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWNvbkZpZ2NhcHRpb24gPSB2LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgY29uc3QgZnVsbEljb25OYW1lID0gaWNvbkZpZ2NhcHRpb24uYXJpYUxhYmVsIHx8IGljb25GaWdjYXB0aW9uLmlubmVySFRNTDtcblxuICAgICAgICAgICAgaWYgKGZ1bGxJY29uTmFtZS5sZW5ndGggPiA4KSB7XG4gICAgICAgICAgICAgICAgaWNvbkZpZ2NhcHRpb24uaW5uZXJIVE1MID0gZnVsbEljb25OYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiDslYTsnbTsvZgg7YG066atIO2BtOuemOyKpCDqtIDroKggKO2BtOumreuQmOyXiOydhCDrlYwgY2xpY2tlZCDtgbTrnpjsiqQg7LaU6rCAKVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBpbkZvY3VzSWNvbiA9ICh2OiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB2LmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG91dEZvY3VzSWNvbnMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpY29uQXJlYS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHYuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdjbGlja2VkJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIHYuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICBhYmJyZXZpYXRlSWNvbk5hbWUodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDEuIOyVhOydtOy9mCDtgbTrpq3tlojsnYQg65WMXG4gICAgICAgIGljb25BcmVhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgIHYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIG91dEZvY3VzSWNvbnMoKTtcbiAgICAgICAgICAgICAgICBpbkZvY3VzSWNvbih2KTtcbiAgICAgICAgICAgICAgICBzaG93RnVsbEljb25OYW1lKHYpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyAyLiDslYTsnbTsvZgg7Jm467aAIO2ZlOuptCDtgbTrpq3tlojsnYQg65WMXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1zY3JlZW4tY29udGFpbmVyXCIpO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3V0Rm9jdXNJY29ucygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDMuIOyVhOydtOy9mCDrk5zrnpjqt7gg7J2067Kk7Yq4ICguZGVmYXVsdC1pY29uIGRyYWdzdGFydCAtPiBkb2N1bWVudCBkcmFnb3ZlciAmIGRyb3ApXG4gICAgICAgIGljb25BcmVhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgIHYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGRyYWdzdGFydEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgT05FX0dSSURfQVJFQV9XSURUSCA9IDgwO1xuICAgICAgICAgICAgICAgIGNvbnN0IE9ORV9HUklEX0FSRUFfSEVJR0hUID0gMTAwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIOq4sOyhtCDslYTsnbTsvZgg7JyE7LmYXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkljb25Qb3MgPSBbZHJhZ3N0YXJ0RXZlbnQuY2xpZW50WCwgZHJhZ3N0YXJ0RXZlbnQuY2xpZW50WV07XG5cbiAgICAgICAgICAgICAgICAvLyDquLDsobQg7JWE7J207L2YIOq3uOumrOuTnCBjb2x1bW4sIHJvdyDsi5zsnpHsoJBcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2R3JpZENvbHVtblN0YXJ0ID0gTnVtYmVyLnBhcnNlSW50KHYuc3R5bGUuZ3JpZENvbHVtblN0YXJ0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2R3JpZFJvd1N0YXJ0ID0gTnVtYmVyLnBhcnNlSW50KHYuc3R5bGUuZ3JpZFJvd1N0YXJ0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdvdmVyRm4gPSAoZHJhZ292ZXJFdmVudDogRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRyYWdvdmVyRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdvdmVyRm4pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZHJvcEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3BFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIO2BtOumrShtb3VzZWRvd24pIOydtOuypO2KuOqwgCDsoIHsmqnrkJwg7JeY66as66i87Yq466eMIOydtOuPmVxuICAgICAgICAgICAgICAgICAgICBpZiAodi5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2NsaWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g65Oc656Y6re46rCAIOuBneuCnCDtm4Qg7JWE7J207L2YIOychOy5mFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VySWNvblBvcyA9IFtkcm9wRXZlbnQuY2xpZW50WCwgZHJvcEV2ZW50LmNsaWVudFldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDquLDsobQg7JWE7J207L2YIOq3uOumrOuTnCDsooztkZzsl5DshJwg66qHIOunjO2BvCDsm4Dsp4HsmIDripTsp4BcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmluZ0Nvb3JkaW5hdGVzWCA9IE51bWJlci5wYXJzZUludCgoKGN1ckljb25Qb3NbMF0gLSBwcmV2SWNvblBvc1swXSkgLyBPTkVfR1JJRF9BUkVBX1dJRFRIKS50b0ZpeGVkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92aW5nQ29vcmRpbmF0ZXNZID0gTnVtYmVyLnBhcnNlSW50KCgoY3VySWNvblBvc1sxXSAtIHByZXZJY29uUG9zWzFdKSAvIE9ORV9HUklEX0FSRUFfSEVJR0hUKS50b0ZpeGVkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDrk5zrnpjqt7jqsIAg64Gd64KcIO2bhCBjb2x1bW4sIHJvdyDsi5zsnpHsoJBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1ckdyaWRDb2x1bW5TdGFydCA9IHByZXZHcmlkQ29sdW1uU3RhcnQgKyBtb3ZpbmdDb29yZGluYXRlc1g7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJHcmlkUm93U3RhcnQgPSBwcmV2R3JpZFJvd1N0YXJ0ICsgbW92aW5nQ29vcmRpbmF0ZXNZO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnN0eWxlLmdyaWRDb2x1bW5TdGFydCA9IGAke2N1ckdyaWRDb2x1bW5TdGFydH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgdi5zdHlsZS5ncmlkUm93U3RhcnQgPSBgJHtjdXJHcmlkUm93U3RhcnR9YDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnb3ZlckZuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICB1c2VFdmVudHMoW2ljb25DbGlja0V2ZW50XSk7XG5cbiAgICAvKlxuICAgICog7JWE7J207L2YIOy7tO2PrOuEjO2KuCBcbiAgICAqL1xuICAgIGNvbnN0IGljb25UZW1wbGF0ZSA9IChpY29uOiBJSWNvbnMsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gKGBcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZGVmYXVsdC1pY29uXCJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiJHtpY29uLmV4cGxhbmF0aW9ufVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJncmlkLWNvbHVtbi1zdGFydDogMTtncmlkLXJvdy1zdGFydDogJHtpICsgMX07XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ljb24uaW1nU3JjfVwiIGRyYWdnYWJsZT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIiR7aWNvbi5uYW1lfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7aWNvbi5uYW1lLnN1YnN0cmluZygwLCA4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICR7aWNvbi5uYW1lLmxlbmd0aCA+IDggPyAnLi4uJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPmBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIGA8b2xcbiAgICAgICAgICAgIGNsYXNzPVwibWFpbi1zY3JlZW4tY29udGFpbmVyXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLrsJTtg5XtmZTrqbQg67CPIOyVhOydtOy9mCDrpqzsiqTtirhcIlxuICAgICAgICA+XG4gICAgICAgICAgICAke2ljb25zLm1hcCgoaWNvbjogSUljb25zLCBpOiBudW1iZXIpID0+IGljb25UZW1wbGF0ZShpY29uLCBpKSkuam9pbignJyl9XG4gICAgICAgIDwvb2w+YFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvbnM7XG4iLCIvKlxuKiDrpqzslaHtirggaG9va3Mg6rCE64uo7Z6IIOq1rO2YhFxuKi9cbmZ1bmN0aW9uIEN1c3RvbVJlYWN0ICgpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBjdXJTdGF0ZUlkeDogMCxcbiAgICAgICAgY3VyRWZmZWN0SWR4OiAwLFxuICAgICAgICByZW5kZXJDb3VudDogMCxcbiAgICB9XG5cbiAgICBsZXQgcm9vdDogRWxlbWVudCB8IGFueSA9IG51bGw7XG4gICAgbGV0IHJvb3RDb21wb25lbnQ6IEVsZW1lbnQgfCBhbnkgPSBudWxsO1xuXG4gICAgbGV0IGV2ZW50czogQXJyYXk8RnVuY3Rpb24+ID0gW107XG5cbiAgICBjb25zdCBzdGF0ZXM6IGFueVtdID0gW107XG4gICAgY29uc3QgZWZmZWN0RGVwZW5kZW5jaWVzOiBhbnlbXSA9IFtdO1xuXG4gICAgLypcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzXG4gICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAxLiByZW5kZXJcbiAgICAqIHJlbmRlcjogcm9vdOqwgCDrkJjripQg7JeY66as66i87Yq466W8IOugjOuNlOunge2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHJlbmRlciA9IChyb290RWw6IEVsZW1lbnQgfCBhbnksIHJvb3RDb21wb25lbnRFbDogRWxlbWVudCB8IGFueSkgPT4ge1xuICAgICAgICBpZiAocm9vdEVsKSB7XG4gICAgICAgICAgICByb290ID0gcm9vdEVsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3RDb21wb25lbnRFbCkge1xuICAgICAgICAgICAgcm9vdENvbXBvbmVudCA9IHJvb3RDb21wb25lbnRFbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgX3JlbmRlcigpO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAyLiB1c2VFdmVudHNcbiAgICAqIHVzZUV2ZW50czog7Lu07Y+s64SM7Yq466W8IOuqqOuRkCDroIzrjZTrp4HtlZwg7ZuEIOydtOuypO2KuOulvCDrk7HroZ3tlaAg7IiYIOyeiOuPhOuhnSDrj4TsmYDso7zripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCB1c2VFdmVudHMgPSAoZXZlbnRGbnM6IEFycmF5PEZ1bmN0aW9uPikgPT4ge1xuICAgICAgICBldmVudHMgPSBbLi4uZXZlbnRzLCAuLi5ldmVudEZuc107XG4gICAgfTtcblxuICAgIC8qIFxuICAgICogQ3VzdG9tUmVhY3QgaG9va3MgMy4gdXNlU3RhdGVcbiAgICAqIHVzZVN0YXRlOiBzdGF0ZSDqtIDrpqztlZjrj4TroZ0g64+E7JmA7KO864qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgdXNlU3RhdGUgPSAoaW5pdFN0YXRlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgeyBjdXJTdGF0ZUlkeCB9ID0gb3B0aW9ucztcblxuICAgICAgICBpZiAoc3RhdGVzLmxlbmd0aCA9PT0gY3VyU3RhdGVJZHgpIHtcbiAgICAgICAgICAgIHN0YXRlcy5wdXNoKGluaXRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdGF0ZXNbY3VyU3RhdGVJZHhdO1xuXG4gICAgICAgIGNvbnN0IHNldFN0YXRlID0gKG5ld1N0YXRlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHN0YXRlc1tjdXJTdGF0ZUlkeF0gPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIF9yZW5kZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuY3VyU3RhdGVJZHggKz0gMTtcblxuICAgICAgICByZXR1cm4gWyBzdGF0ZSwgc2V0U3RhdGUgXTtcbiAgICB9XG5cbiAgICAvKiBcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzIDMuIHVzZUVmZmVjdFxuICAgICogdXNlRWZmZWN0OiBkZXBlbmRlbmN5IOuwsOyXtOydmCDqsJLrk6Tsl5Ag67OA6rK97J20IOyDneqyvOydhCDqsr3smrAgY2FsbGJhY2vsnYQg7Iuk7ZaJ7ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgdXNlRWZmZWN0ID0gKGNhbGxiYWNrOiBGdW5jdGlvbiwgZGVwZW5kZW5jaWVzOiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3VyRWZmZWN0SWR4IH0gPSBvcHRpb25zO1xuXG4gICAgICAgIGlmIChlZmZlY3REZXBlbmRlbmNpZXMubGVuZ3RoID09PSBjdXJFZmZlY3RJZHgpIHtcbiAgICAgICAgICAgIGVmZmVjdERlcGVuZGVuY2llcy5wdXNoKGRlcGVuZGVuY2llcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZXBlbmRlbmN5ID0gZWZmZWN0RGVwZW5kZW5jaWVzW2N1ckVmZmVjdElkeF07XG5cbiAgICAgICAgLy8gZGVwZW5kZW5jeeqwgCDsl4bsnYQg6rK97JqwIGNhbGxiYWNrIOuwlOuhnCDsi6TtlokgKG1vdW50IOuQmOyXiOydhCDrlYwg7Iuk7ZaJKVxuICAgICAgICAvLyBleC4gdXNlRWZmZWN0KCgpID0+IHt9LCBbXSlcbiAgICAgICAgbGV0IGhhc0NoYW5nZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChkZXBlbmRlbmN5ICYmIGRlcGVuZGVuY2llcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIC8vIEFycmF5LnByb3RvdHlwZS5zb21lOiDtjJDrs4Qg7ZWo7IiYIOyggeyWtOuPhCDtlZjrgpjrnbzrj4Qg7Ya16rO87ZWY64qU7KeAIOyytO2BrFxuICAgICAgICAgICAgLy8gT2JqZWN0LmlzOiDrkZAg6rCc7J2YIO2MjOudvOuvuO2EsOqwgCDrj5nsnbztlZzsp4Ag7LK07YGsXG4gICAgICAgICAgICAvLyDspoksIOq4sOyhtCBkZXBlbmRlbmN57JmAIOyDiOuhnCDrsJvsnYAgZGVwZW5kZW5jeSDsgqzsnbTsl5Ag7LCo7J206rCAIO2VmOuCmOudvOuPhCDsnojripQg6rK97JqwIHRydWXrpbwg67CY7ZmYXG4gICAgICAgICAgICBoYXNDaGFuZ2VkID0gZGVwZW5kZW5jaWVzLnNvbWUoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIU9iamVjdC5pcyh2LCBkZXBlbmRlbmN5W2ldKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzQ2hhbmdlZCkge1xuICAgICAgICAgICAgZWZmZWN0RGVwZW5kZW5jaWVzW2N1ckVmZmVjdElkeF0gPSBkZXBlbmRlbmNpZXM7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5jdXJFZmZlY3RJZHggKz0gMTtcbiAgICB9XG5cbiAgICAvKlxuICAgICogQ3VzdG9tUmVhY3Qg64K067aAIO2VqOyImFxuICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICogZGVib3VuY2VGcmFtZTogMey0iOuLuSDrlJTsiqTtlIzroIjsnbQg7KO87IKs7Jyo66eM7YG8IOyLpO2Wie2VmOqyjCDtlZjsl6wg7KeA64KY7LmcIOugjOuNlOungeydhCDrsKnsp4DtlZjquLAg7JyE7ZWcIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgZGVib3VuY2VGcmFtZSA9IChjYWxsYmFjazogRnJhbWVSZXF1ZXN0Q2FsbGJhY2spID0+IHtcbiAgICAgICAgbGV0IG5leHRGcmFtZUNhbGxiYWNrID0gLTE7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUobmV4dEZyYW1lQ2FsbGJhY2spO1xuICAgICAgICAgIG5leHRGcmFtZUNhbGxiYWNrID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLypcbiAgICAqIHJlZ2lzdGVyRXZlbnRzOiDsnbTrsqTtirgg7ZWo7IiYIOuTseuhneydhCDsnITtlbQg7Iuk7ZaJ7ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgcmVnaXN0ZXJFdmVudHMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChldmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goKGV2ZW50Rm4pID0+IGV2ZW50Rm4oKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgKiBfcmVuZGVyOiDsi6Tsp4jsoIHsnLzroZwg66as7JWh7Yq4IOuCtOu2gOyXkOyEnCDroIzrjZTrp4HsnYQg64u064u57ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgX3JlbmRlciA9IGRlYm91bmNlRnJhbWUoKCkgPT4ge1xuICAgICAgICBpZiAoIXJvb3QgfHwgIXJvb3RDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIO2ZlOuptCDroIzrjZTrp4FcbiAgICAgICAgcm9vdC5pbm5lckhUTUwgPSByb290Q29tcG9uZW50KCk7XG5cbiAgICAgICAgLy8g7J2067Kk7Yq4IOuTseuhnVxuICAgICAgICByZWdpc3RlckV2ZW50cygpO1xuICAgICAgICBcbiAgICAgICAgLy8g67OA7IiYIOy0iOq4sO2ZlFxuICAgICAgICBvcHRpb25zLmN1clN0YXRlSWR4ID0gMDtcbiAgICAgICAgY29uc29sZS5sb2coJ19yZW5kZXIgY3VyU3RhdGVJZHgnLCBvcHRpb25zLmN1clN0YXRlSWR4KTtcblxuICAgICAgICBvcHRpb25zLmN1ckVmZmVjdElkeCA9IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKCdfcmVuZGVyIGN1ckVmZmVjdElkeCcsIG9wdGlvbnMuY3VyRWZmZWN0SWR4KTtcblxuICAgICAgICBldmVudHMgPSBbXTtcblxuICAgICAgICAvLyDroIzrjZTrp4Eg7Zqf7IiYIO2ZleyduFxuICAgICAgICBvcHRpb25zLnJlbmRlckNvdW50ICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKCdfcmVuZGVyIHJlbmRlckNvdW50Jywgb3B0aW9ucy5yZW5kZXJDb3VudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyByZW5kZXIsIHVzZUV2ZW50cywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9O1xufVxuXG5cbmNvbnN0IHsgcmVuZGVyLCB1c2VFdmVudHMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IEN1c3RvbVJlYWN0KCk7XG5leHBvcnQgeyByZW5kZXIsIHVzZUV2ZW50cywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21SZWFjdDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2NvcmUvQ3VzdG9tUmVhY3RcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQXBwXCI7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIik7XG5pZiAocm9vdCkge1xuICAgIHJlbmRlcihyb290LCBDb250YWluZXIpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=