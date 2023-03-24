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
        // TODO. 드래그 이미지 배경 제거
        // TODO. 파일 아이콘이 폴더 위로 이동될 경우 폴더 안으로 이동되도록 수정
        // TODO. 아이콘끼리 겹치지 않도록 수정
        iconArea.forEach(function (v) {
            v.addEventListener('dragstart', function (dragstartEvent) {
                var _a;
                // 하나의 grid area의 가로/세로
                var ONE_GRID_AREA_WIDTH = 80;
                var ONE_GRID_AREA_HEIGHT = 100;
                // 기존 아이콘 그리드 column, row 시작점
                var prevGridColumnStart = Number.parseInt(v.style.gridColumnStart);
                var prevGridRowStart = Number.parseInt(v.style.gridRowStart);
                // 기존 아이콘 위치
                var prevIconPos = [dragstartEvent.clientX, dragstartEvent.clientY];
                var iconDiv = getDragIconEl(v);
                var shiftX = dragstartEvent.clientX - v.getBoundingClientRect().left;
                var shiftY = dragstartEvent.clientY - v.getBoundingClientRect().top;
                (_a = dragstartEvent.dataTransfer) === null || _a === void 0 ? void 0 : _a.setDragImage(iconDiv, shiftX, shiftY);
                if (dragstartEvent.dataTransfer) {
                    dragstartEvent.dataTransfer.effectAllowed = "move";
                }
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
                        document.body.removeChild(iconDiv);
                    }
                });
            });
        });
    };
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEvents)([iconClickEvent]);
    /*
    * 아이콘 드래그 할 때 이미지
    */
    var getDragIconEl = function (v) {
        var imgSrc = v.children[0].children[0].children[0].attributes[0].nodeValue || '';
        var iconName = v.children[0].children[1].ariaLabel || v.children[0].children[1].innerHTML;
        var iconDiv = document.createElement('div');
        iconDiv.classList.add("default-icon");
        iconDiv.style.position = "absolute";
        iconDiv.style.width = "80px";
        iconDiv.innerHTML = getDragIconInnerElem(iconName, imgSrc);
        document.body.appendChild(iconDiv);
        return iconDiv;
    };
    var getDragIconInnerElem = function (iconName, iconImageSrc) {
        return ("\n            <button>\n                <figure>\n                    <img src=\"".concat(iconImageSrc, "\" draggable=\"false\">\n                </figure>\n                <figcaption>").concat(iconName, "</figcaption>\n            </button>"));
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNkO0FBRTlCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0MsSUFBSSxJQUFJLEVBQUU7SUFDTix5REFBTSxDQUFDLElBQUksRUFBRSw0Q0FBUyxDQUFDO0NBQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvQXBwLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvY29tbW9uL0ljb25zLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2NvcmUvQ3VzdG9tUmVhY3QudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29ucyBmcm9tIFwiLi9jb21wb25lbnRzL2NvbW1vbi9JY29uc1wiO1xuXG5mdW5jdGlvbiBDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIChgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICR7SWNvbnMoKX1cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJzdGF0dXMtY29udGFpbmVyXCIgYXJpYS1sYWJlbD1cIu2VmOuLqCDsg4Htg5wg7LC9XCI+PC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCJpbXBvcnQgeyB1c2VFdmVudHMsIHVzZVN0YXRlIH0gZnJvbSBcIi4uLy4uL2NvcmUvQ3VzdG9tUmVhY3RcIjtcbmltcG9ydCB7IElJY29ucyB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9jb21wb25lbnRzL2NvbW1vbi9pY29uc1wiO1xuXG4vKlxuKiDslYTsnbTsvZgg7Lu07Y+s64SM7Yq4XG4qL1xuZnVuY3Rpb24gSWNvbnMgKCkge1xuICAgIC8qXG4gICAgKiDquLDrs7gg7JWE7J207L2YIOygleuztFxuICAgICovXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gW1xuICAgICAgICB7IG5hbWU6IFwi7J247YSw64S3XCIsIGltZ1NyYzogXCIuL2Fzc2V0cy9pY29ucy9pY29uLWludGVybmV0LnBuZ1wiLCBleHBsYW5hdGlvbjogXCLsnbjthLDrhLcg7JWE7J207L2YXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIu2MjOydvOydtOumhOyXrOuNn+q4gOyekFwiLCBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1maWxlLWRvY3VtZW50LnBuZ1wiLCBleHBsYW5hdGlvbjogXCLrrLjshJwg7JWE7J207L2YXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIuusuOyEnOydtOumhOydtOyVhO2Zieq4gOyekFwiLCBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1mb2xkZXIucG5nXCIsIGV4cGxhbmF0aW9uOiBcIu2PtOuNlCDslYTsnbTsvZhcIiB9XG4gICAgXVxuXG4gICAgY29uc3QgW2ljb25zLCBzZXRJY29uc10gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuXG4gICAgLypcbiAgICAqIOydtOuypO2KuCDrk7HroZ1cbiAgICAqL1xuICAgIGNvbnN0IGljb25DbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgICAgICAvKlxuICAgICAgICAqIOyVhOydtOy9mCDtgbTrpq0g7J2067Kk7Yq4IOq0gOugqCDrqZTshJzrk5xcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgaWNvbkFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5kZWZhdWx0LWljb25cIik7XG5cbiAgICAgICAgLypcbiAgICAgICAgKiDslYTsnbTsvZgg7J2066aEIOq0gOugqCAo7J2066aE7J20IOq4uCDqsr3smrAg7YG066atIOyLnOyXkCDtkoDrhKTsnoQpXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IGFiYnJldmlhdGVJY29uTmFtZSA9ICh2OiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpY29uRmlnY2FwdGlvbiA9IHYuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV07XG4gICAgICAgICAgICBjb25zdCBmdWxsSWNvbk5hbWUgPSBpY29uRmlnY2FwdGlvbi5hcmlhTGFiZWwgfHwgaWNvbkZpZ2NhcHRpb24uaW5uZXJIVE1MO1xuICAgICAgICAgICAgY29uc3Qgc2hvcnROYW1lID0gYCR7ZnVsbEljb25OYW1lLnN1YnN0cmluZygwLCA4KX0uLi5gO1xuXG4gICAgICAgICAgICBpZiAoZnVsbEljb25OYW1lLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgICAgICAgICBpY29uRmlnY2FwdGlvbi5pbm5lckhUTUwgPSBzaG9ydE5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG93RnVsbEljb25OYW1lID0gKHY6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGljb25GaWdjYXB0aW9uID0gdi5jaGlsZHJlblswXS5jaGlsZHJlblsxXTtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxJY29uTmFtZSA9IGljb25GaWdjYXB0aW9uLmFyaWFMYWJlbCB8fCBpY29uRmlnY2FwdGlvbi5pbm5lckhUTUw7XG5cbiAgICAgICAgICAgIGlmIChmdWxsSWNvbk5hbWUubGVuZ3RoID4gOCkge1xuICAgICAgICAgICAgICAgIGljb25GaWdjYXB0aW9uLmlubmVySFRNTCA9IGZ1bGxJY29uTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICog7JWE7J207L2YIO2BtOumrSDtgbTrnpjsiqQg6rSA66CoICjtgbTrpq3rkJjsl4jsnYQg65WMIGNsaWNrZWQg7YG0656Y7IqkIOy2lOqwgClcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgaW5Gb2N1c0ljb24gPSAodjogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdXRGb2N1c0ljb25zID0gKCkgPT4ge1xuICAgICAgICAgICAgaWNvbkFyZWEuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnY2xpY2tlZCcpICkge1xuICAgICAgICAgICAgICAgICAgICB2LmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYWJicmV2aWF0ZUljb25OYW1lKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyAxLiDslYTsnbTsvZgg7YG066at7ZaI7J2EIOuVjFxuICAgICAgICBpY29uQXJlYS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICB2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBvdXRGb2N1c0ljb25zKCk7XG4gICAgICAgICAgICAgICAgaW5Gb2N1c0ljb24odik7XG4gICAgICAgICAgICAgICAgc2hvd0Z1bGxJY29uTmFtZSh2KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gMi4g7JWE7J207L2YIOyZuOu2gCDtmZTrqbQg7YG066at7ZaI7J2EIOuVjFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tc2NyZWVuLWNvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG91dEZvY3VzSWNvbnMoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyAzLiDslYTsnbTsvZgg65Oc656Y6re4IOydtOuypO2KuCAoLmRlZmF1bHQtaWNvbiBkcmFnc3RhcnQgLT4gZG9jdW1lbnQgZHJhZ292ZXIgJiBkcm9wKVxuICAgICAgICAvLyBUT0RPLiDrk5zrnpjqt7gg7J2066+47KeAIOuwsOqyvSDsoJzqsbBcbiAgICAgICAgLy8gVE9ETy4g7YyM7J28IOyVhOydtOy9mOydtCDtj7TrjZQg7JyE66GcIOydtOuPmeuQoCDqsr3smrAg7Y+0642UIOyViOycvOuhnCDsnbTrj5nrkJjrj4TroZ0g7IiY7KCVXG4gICAgICAgIC8vIFRPRE8uIOyVhOydtOy9mOuBvOumrCDqsrnsuZjsp4Ag7JWK64+E66GdIOyImOyglVxuICAgICAgICBpY29uQXJlYS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICB2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChkcmFnc3RhcnRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIO2VmOuCmOydmCBncmlkIGFyZWHsnZgg6rCA66GcL+yEuOuhnFxuICAgICAgICAgICAgICAgIGNvbnN0IE9ORV9HUklEX0FSRUFfV0lEVEggPSA4MDtcbiAgICAgICAgICAgICAgICBjb25zdCBPTkVfR1JJRF9BUkVBX0hFSUdIVCA9IDEwMDtcblxuICAgICAgICAgICAgICAgIC8vIOq4sOyhtCDslYTsnbTsvZgg6re466as65OcIGNvbHVtbiwgcm93IOyLnOyekeygkFxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZHcmlkQ29sdW1uU3RhcnQgPSBOdW1iZXIucGFyc2VJbnQodi5zdHlsZS5ncmlkQ29sdW1uU3RhcnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZHcmlkUm93U3RhcnQgPSBOdW1iZXIucGFyc2VJbnQodi5zdHlsZS5ncmlkUm93U3RhcnQpO1xuXG4gICAgICAgICAgICAgICAgLy8g6riw7KG0IOyVhOydtOy9mCDsnITsuZhcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2SWNvblBvcyA9IFtkcmFnc3RhcnRFdmVudC5jbGllbnRYLCBkcmFnc3RhcnRFdmVudC5jbGllbnRZXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25EaXYgPSBnZXREcmFnSWNvbkVsKHYpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHNoaWZ0WCA9IGRyYWdzdGFydEV2ZW50LmNsaWVudFggLSB2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgICAgICAgICAgbGV0IHNoaWZ0WSA9IGRyYWdzdGFydEV2ZW50LmNsaWVudFkgLSB2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICAgICAgICAgICAgICAgIGRyYWdzdGFydEV2ZW50LmRhdGFUcmFuc2Zlcj8uc2V0RHJhZ0ltYWdlKGljb25EaXYsIHNoaWZ0WCwgc2hpZnRZKTtcblxuICAgICAgICAgICAgICAgIGlmIChkcmFnc3RhcnRFdmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZHJhZ3N0YXJ0RXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkcmFnb3ZlckZuID0gKGRyYWdvdmVyRXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkcmFnb3ZlckV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnb3ZlckZuKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGRyb3BFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkcm9wRXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDtgbTrpq0obW91c2Vkb3duKSDsnbTrsqTtirjqsIAg7KCB7Jqp65CcIOyXmOumrOuovO2KuOunjCDsnbTrj5lcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdjbGlja2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuTnOuemOq3uOqwgCDrgZ3rgpwg7ZuEIOyVhOydtOy9mCDsnITsuZhcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1ckljb25Qb3MgPSBbZHJvcEV2ZW50LmNsaWVudFgsIGRyb3BFdmVudC5jbGllbnRZXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6riw7KG0IOyVhOydtOy9mCDqt7jrpqzrk5wg7KKM7ZGc7JeQ7IScIOuqhyDrp4ztgbwg7JuA7KeB7JiA64qU7KeAXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZpbmdDb29yZGluYXRlc1ggPSBOdW1iZXIucGFyc2VJbnQoKChjdXJJY29uUG9zWzBdIC0gcHJldkljb25Qb3NbMF0pIC8gT05FX0dSSURfQVJFQV9XSURUSCkudG9GaXhlZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmluZ0Nvb3JkaW5hdGVzWSA9IE51bWJlci5wYXJzZUludCgoKGN1ckljb25Qb3NbMV0gLSBwcmV2SWNvblBvc1sxXSkgLyBPTkVfR1JJRF9BUkVBX0hFSUdIVCkudG9GaXhlZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g65Oc656Y6re46rCAIOuBneuCnCDtm4QgY29sdW1uLCByb3cg7Iuc7J6R7KCQXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJHcmlkQ29sdW1uU3RhcnQgPSBwcmV2R3JpZENvbHVtblN0YXJ0ICsgbW92aW5nQ29vcmRpbmF0ZXNYO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyR3JpZFJvd1N0YXJ0ID0gcHJldkdyaWRSb3dTdGFydCArIG1vdmluZ0Nvb3JkaW5hdGVzWTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdi5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgPSBgJHtjdXJHcmlkQ29sdW1uU3RhcnR9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYuc3R5bGUuZ3JpZFJvd1N0YXJ0ID0gYCR7Y3VyR3JpZFJvd1N0YXJ0fWA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ292ZXJGbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGljb25EaXYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHVzZUV2ZW50cyhbaWNvbkNsaWNrRXZlbnRdKTtcblxuICAgIC8qXG4gICAgKiDslYTsnbTsvZgg65Oc656Y6re4IO2VoCDrlYwg7J2066+47KeAXG4gICAgKi9cbiAgICBjb25zdCBnZXREcmFnSWNvbkVsID0gKHY6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgaW1nU3JjID0gdi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hdHRyaWJ1dGVzWzBdLm5vZGVWYWx1ZSB8fCAnJztcbiAgICAgICAgY29uc3QgaWNvbk5hbWUgPSB2LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmFyaWFMYWJlbCB8fCB2LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmlubmVySFRNTDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBpY29uRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWZhdWx0LWljb25cIik7XG4gICAgICAgIGljb25EaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIGljb25EaXYuc3R5bGUud2lkdGggPSBcIjgwcHhcIjtcbiAgICAgICAgaWNvbkRpdi5pbm5lckhUTUwgPSBnZXREcmFnSWNvbklubmVyRWxlbShpY29uTmFtZSwgaW1nU3JjKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGljb25EaXYpO1xuXG4gICAgICAgIHJldHVybiBpY29uRGl2O1xuICAgIH1cblxuICAgIGNvbnN0IGdldERyYWdJY29uSW5uZXJFbGVtID0gKGljb25OYW1lOiBzdHJpbmcsIGljb25JbWFnZVNyYzogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiAoYFxuICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aWNvbkltYWdlU3JjfVwiIGRyYWdnYWJsZT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+JHtpY29uTmFtZX08L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5gXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvKlxuICAgICog7JWE7J207L2YIOy7tO2PrOuEjO2KuCBcbiAgICAqL1xuICAgIGNvbnN0IGljb25UZW1wbGF0ZSA9IChpY29uOiBJSWNvbnMsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gKGBcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZGVmYXVsdC1pY29uXCJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiJHtpY29uLmV4cGxhbmF0aW9ufVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJncmlkLWNvbHVtbi1zdGFydDogMTtncmlkLXJvdy1zdGFydDogJHtpICsgMX07XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ljb24uaW1nU3JjfVwiIGRyYWdnYWJsZT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIiR7aWNvbi5uYW1lfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7aWNvbi5uYW1lLnN1YnN0cmluZygwLCA4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICR7aWNvbi5uYW1lLmxlbmd0aCA+IDggPyAnLi4uJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPmBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIGA8b2xcbiAgICAgICAgICAgIGNsYXNzPVwibWFpbi1zY3JlZW4tY29udGFpbmVyXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLrsJTtg5XtmZTrqbQg67CPIOyVhOydtOy9mCDrpqzsiqTtirhcIlxuICAgICAgICA+XG4gICAgICAgICAgICAke2ljb25zLm1hcCgoaWNvbjogSUljb25zLCBpOiBudW1iZXIpID0+IGljb25UZW1wbGF0ZShpY29uLCBpKSkuam9pbignJyl9XG4gICAgICAgIDwvb2w+YFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvbnM7XG4iLCIvKlxuKiDrpqzslaHtirggaG9va3Mg6rCE64uo7Z6IIOq1rO2YhFxuKi9cbmZ1bmN0aW9uIEN1c3RvbVJlYWN0ICgpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBjdXJTdGF0ZUlkeDogMCxcbiAgICAgICAgY3VyRWZmZWN0SWR4OiAwLFxuICAgICAgICByZW5kZXJDb3VudDogMCxcbiAgICB9XG5cbiAgICBsZXQgcm9vdDogRWxlbWVudCB8IGFueSA9IG51bGw7XG4gICAgbGV0IHJvb3RDb21wb25lbnQ6IEVsZW1lbnQgfCBhbnkgPSBudWxsO1xuXG4gICAgbGV0IGV2ZW50czogQXJyYXk8RnVuY3Rpb24+ID0gW107XG5cbiAgICBjb25zdCBzdGF0ZXM6IGFueVtdID0gW107XG4gICAgY29uc3QgZWZmZWN0RGVwZW5kZW5jaWVzOiBhbnlbXSA9IFtdO1xuXG4gICAgLypcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzXG4gICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAxLiByZW5kZXJcbiAgICAqIHJlbmRlcjogcm9vdOqwgCDrkJjripQg7JeY66as66i87Yq466W8IOugjOuNlOunge2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHJlbmRlciA9IChyb290RWw6IEVsZW1lbnQgfCBhbnksIHJvb3RDb21wb25lbnRFbDogRWxlbWVudCB8IGFueSkgPT4ge1xuICAgICAgICBpZiAocm9vdEVsKSB7XG4gICAgICAgICAgICByb290ID0gcm9vdEVsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3RDb21wb25lbnRFbCkge1xuICAgICAgICAgICAgcm9vdENvbXBvbmVudCA9IHJvb3RDb21wb25lbnRFbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgX3JlbmRlcigpO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAyLiB1c2VFdmVudHNcbiAgICAqIHVzZUV2ZW50czog7Lu07Y+s64SM7Yq466W8IOuqqOuRkCDroIzrjZTrp4HtlZwg7ZuEIOydtOuypO2KuOulvCDrk7HroZ3tlaAg7IiYIOyeiOuPhOuhnSDrj4TsmYDso7zripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCB1c2VFdmVudHMgPSAoZXZlbnRGbnM6IEFycmF5PEZ1bmN0aW9uPikgPT4ge1xuICAgICAgICBldmVudHMgPSBbLi4uZXZlbnRzLCAuLi5ldmVudEZuc107XG4gICAgfTtcblxuICAgIC8qIFxuICAgICogQ3VzdG9tUmVhY3QgaG9va3MgMy4gdXNlU3RhdGVcbiAgICAqIHVzZVN0YXRlOiBzdGF0ZSDqtIDrpqztlZjrj4TroZ0g64+E7JmA7KO864qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgdXNlU3RhdGUgPSAoaW5pdFN0YXRlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgeyBjdXJTdGF0ZUlkeCB9ID0gb3B0aW9ucztcblxuICAgICAgICBpZiAoc3RhdGVzLmxlbmd0aCA9PT0gY3VyU3RhdGVJZHgpIHtcbiAgICAgICAgICAgIHN0YXRlcy5wdXNoKGluaXRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdGF0ZXNbY3VyU3RhdGVJZHhdO1xuXG4gICAgICAgIGNvbnN0IHNldFN0YXRlID0gKG5ld1N0YXRlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHN0YXRlc1tjdXJTdGF0ZUlkeF0gPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIF9yZW5kZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuY3VyU3RhdGVJZHggKz0gMTtcblxuICAgICAgICByZXR1cm4gWyBzdGF0ZSwgc2V0U3RhdGUgXTtcbiAgICB9XG5cbiAgICAvKiBcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzIDMuIHVzZUVmZmVjdFxuICAgICogdXNlRWZmZWN0OiBkZXBlbmRlbmN5IOuwsOyXtOydmCDqsJLrk6Tsl5Ag67OA6rK97J20IOyDneqyvOydhCDqsr3smrAgY2FsbGJhY2vsnYQg7Iuk7ZaJ7ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgdXNlRWZmZWN0ID0gKGNhbGxiYWNrOiBGdW5jdGlvbiwgZGVwZW5kZW5jaWVzOiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3VyRWZmZWN0SWR4IH0gPSBvcHRpb25zO1xuXG4gICAgICAgIGlmIChlZmZlY3REZXBlbmRlbmNpZXMubGVuZ3RoID09PSBjdXJFZmZlY3RJZHgpIHtcbiAgICAgICAgICAgIGVmZmVjdERlcGVuZGVuY2llcy5wdXNoKGRlcGVuZGVuY2llcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZXBlbmRlbmN5ID0gZWZmZWN0RGVwZW5kZW5jaWVzW2N1ckVmZmVjdElkeF07XG5cbiAgICAgICAgLy8gZGVwZW5kZW5jeeqwgCDsl4bsnYQg6rK97JqwIGNhbGxiYWNrIOuwlOuhnCDsi6TtlokgKG1vdW50IOuQmOyXiOydhCDrlYwg7Iuk7ZaJKVxuICAgICAgICAvLyBleC4gdXNlRWZmZWN0KCgpID0+IHt9LCBbXSlcbiAgICAgICAgbGV0IGhhc0NoYW5nZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChkZXBlbmRlbmN5ICYmIGRlcGVuZGVuY2llcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIC8vIEFycmF5LnByb3RvdHlwZS5zb21lOiDtjJDrs4Qg7ZWo7IiYIOyggeyWtOuPhCDtlZjrgpjrnbzrj4Qg7Ya16rO87ZWY64qU7KeAIOyytO2BrFxuICAgICAgICAgICAgLy8gT2JqZWN0LmlzOiDrkZAg6rCc7J2YIO2MjOudvOuvuO2EsOqwgCDrj5nsnbztlZzsp4Ag7LK07YGsXG4gICAgICAgICAgICAvLyDspoksIOq4sOyhtCBkZXBlbmRlbmN57JmAIOyDiOuhnCDrsJvsnYAgZGVwZW5kZW5jeSDsgqzsnbTsl5Ag7LCo7J206rCAIO2VmOuCmOudvOuPhCDsnojripQg6rK97JqwIHRydWXrpbwg67CY7ZmYXG4gICAgICAgICAgICBoYXNDaGFuZ2VkID0gZGVwZW5kZW5jaWVzLnNvbWUoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIU9iamVjdC5pcyh2LCBkZXBlbmRlbmN5W2ldKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzQ2hhbmdlZCkge1xuICAgICAgICAgICAgZWZmZWN0RGVwZW5kZW5jaWVzW2N1ckVmZmVjdElkeF0gPSBkZXBlbmRlbmNpZXM7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5jdXJFZmZlY3RJZHggKz0gMTtcbiAgICB9XG5cbiAgICAvKlxuICAgICogQ3VzdG9tUmVhY3Qg64K067aAIO2VqOyImFxuICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICogZGVib3VuY2VGcmFtZTogMey0iOuLuSDrlJTsiqTtlIzroIjsnbQg7KO87IKs7Jyo66eM7YG8IOyLpO2Wie2VmOqyjCDtlZjsl6wg7KeA64KY7LmcIOugjOuNlOungeydhCDrsKnsp4DtlZjquLAg7JyE7ZWcIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgZGVib3VuY2VGcmFtZSA9IChjYWxsYmFjazogRnJhbWVSZXF1ZXN0Q2FsbGJhY2spID0+IHtcbiAgICAgICAgbGV0IG5leHRGcmFtZUNhbGxiYWNrID0gLTE7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUobmV4dEZyYW1lQ2FsbGJhY2spO1xuICAgICAgICAgIG5leHRGcmFtZUNhbGxiYWNrID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLypcbiAgICAqIHJlZ2lzdGVyRXZlbnRzOiDsnbTrsqTtirgg7ZWo7IiYIOuTseuhneydhCDsnITtlbQg7Iuk7ZaJ7ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgcmVnaXN0ZXJFdmVudHMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChldmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goKGV2ZW50Rm4pID0+IGV2ZW50Rm4oKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgKiBfcmVuZGVyOiDsi6Tsp4jsoIHsnLzroZwg66as7JWh7Yq4IOuCtOu2gOyXkOyEnCDroIzrjZTrp4HsnYQg64u064u57ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgX3JlbmRlciA9IGRlYm91bmNlRnJhbWUoKCkgPT4ge1xuICAgICAgICBpZiAoIXJvb3QgfHwgIXJvb3RDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIO2ZlOuptCDroIzrjZTrp4FcbiAgICAgICAgcm9vdC5pbm5lckhUTUwgPSByb290Q29tcG9uZW50KCk7XG5cbiAgICAgICAgLy8g7J2067Kk7Yq4IOuTseuhnVxuICAgICAgICByZWdpc3RlckV2ZW50cygpO1xuICAgICAgICBcbiAgICAgICAgLy8g67OA7IiYIOy0iOq4sO2ZlFxuICAgICAgICBvcHRpb25zLmN1clN0YXRlSWR4ID0gMDtcbiAgICAgICAgY29uc29sZS5sb2coJ19yZW5kZXIgY3VyU3RhdGVJZHgnLCBvcHRpb25zLmN1clN0YXRlSWR4KTtcblxuICAgICAgICBvcHRpb25zLmN1ckVmZmVjdElkeCA9IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKCdfcmVuZGVyIGN1ckVmZmVjdElkeCcsIG9wdGlvbnMuY3VyRWZmZWN0SWR4KTtcblxuICAgICAgICBldmVudHMgPSBbXTtcblxuICAgICAgICAvLyDroIzrjZTrp4Eg7Zqf7IiYIO2ZleyduFxuICAgICAgICBvcHRpb25zLnJlbmRlckNvdW50ICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKCdfcmVuZGVyIHJlbmRlckNvdW50Jywgb3B0aW9ucy5yZW5kZXJDb3VudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyByZW5kZXIsIHVzZUV2ZW50cywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9O1xufVxuXG5cbmNvbnN0IHsgcmVuZGVyLCB1c2VFdmVudHMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IEN1c3RvbVJlYWN0KCk7XG5leHBvcnQgeyByZW5kZXIsIHVzZUV2ZW50cywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21SZWFjdDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2NvcmUvQ3VzdG9tUmVhY3RcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQXBwXCI7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIik7XG5pZiAocm9vdCkge1xuICAgIHJlbmRlcihyb290LCBDb250YWluZXIpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=