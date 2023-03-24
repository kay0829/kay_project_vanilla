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
                if (dragstartEvent.dataTransfer) {
                    dragstartEvent.dataTransfer.effectAllowed = "move";
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUU5QyxTQUFTLFNBQVM7SUFDZCxPQUFPLENBQUMsMkRBRUUsb0VBQUssRUFBRSwrSEFHaEIsQ0FBQztBQUNOLENBQUM7QUFFRCxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYb0M7QUFHN0Q7O0VBRUU7QUFDRixTQUFTLEtBQUs7SUFDVjs7TUFFRTtJQUNGLElBQU0sWUFBWSxHQUFHO1FBQ2pCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsa0NBQWtDLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRTtRQUNuRixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLHVDQUF1QyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUU7UUFDNUYsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxnQ0FBZ0MsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFO0tBQ3pGO0lBRUssU0FBb0IsMkRBQVEsQ0FBQyxZQUFZLENBQUMsRUFBekMsS0FBSyxVQUFFLFFBQVEsUUFBMEIsQ0FBQztJQUVqRDs7TUFFRTtJQUNGLElBQU0sY0FBYyxHQUFHO1FBQ25COztVQUVFO1FBQ0YsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFjLGVBQWUsQ0FBQyxDQUFDO1FBRXpFOztVQUVFO1FBQ0YsSUFBTSxrQkFBa0IsR0FBRyxVQUFDLENBQVU7WUFDbEMsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDLFNBQVMsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDO1lBQzFFLElBQU0sU0FBUyxHQUFHLFVBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQUssQ0FBQztZQUV2RCxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QixjQUFjLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzthQUN4QztRQUNMLENBQUM7UUFFRCxJQUFNLGdCQUFnQixHQUFHLFVBQUMsQ0FBVTtZQUNoQyxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFNLFlBQVksR0FBRyxjQUFjLENBQUMsU0FBUyxJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUM7WUFFMUUsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekIsY0FBYyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7YUFDM0M7UUFDTCxDQUFDO1FBRUQ7O1VBRUU7UUFDRixJQUFNLFdBQVcsR0FBRyxVQUFDLENBQVU7WUFDM0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVELElBQU0sYUFBYSxHQUFHO1lBQ2xCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFHO29CQUN4QyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDOUIsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3pCO1lBQ0wsQ0FBQyxDQUFDO1FBQ04sQ0FBQztRQUVELGdCQUFnQjtRQUNoQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLGFBQWEsRUFBRSxDQUFDO2dCQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBRUYsc0JBQXNCO1FBQ3RCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNuRSxJQUFJLFNBQVMsRUFBRTtZQUNYLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hDLGFBQWEsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQztTQUNMO1FBRUQsdUVBQXVFO1FBQ3ZFLHNCQUFzQjtRQUN0Qiw2Q0FBNkM7UUFDN0MseUJBQXlCO1FBQ3pCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFDLGNBQWM7Z0JBQzNDLElBQUksY0FBYyxDQUFDLFlBQVksRUFBRTtvQkFDN0IsY0FBYyxDQUFDLFlBQVksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO2lCQUN0RDtnQkFFRCxJQUFNLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztnQkFDL0IsSUFBTSxvQkFBb0IsR0FBRyxHQUFHLENBQUM7Z0JBRWpDLFlBQVk7Z0JBQ1osSUFBTSxXQUFXLEdBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFckUsNkJBQTZCO2dCQUM3QixJQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDckUsSUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBRS9ELElBQU0sVUFBVSxHQUFHLFVBQUMsYUFBd0I7b0JBQ3hDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkMsQ0FBQztnQkFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUVsRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFVBQUMsU0FBUztvQkFDeEMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUUzQixrQ0FBa0M7b0JBQ2xDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO3dCQUN2QyxtQkFBbUI7d0JBQ25CLElBQU0sVUFBVSxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBRTFELDZCQUE2Qjt3QkFDN0IsSUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO3dCQUMvRyxJQUFNLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7d0JBRWhILDRCQUE0Qjt3QkFDNUIsSUFBTSxrQkFBa0IsR0FBRyxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQzt3QkFDcEUsSUFBTSxlQUFlLEdBQUcsZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7d0JBRTlELENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFVBQUcsa0JBQWtCLENBQUUsQ0FBQzt3QkFDbEQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsVUFBRyxlQUFlLENBQUUsQ0FBQzt3QkFFNUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztxQkFDeEQ7Z0JBQ0wsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELDREQUFTLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRTVCOztNQUVFO0lBQ0YsSUFBTSxZQUFZLEdBQUcsVUFBQyxJQUFZLEVBQUUsQ0FBUztRQUN6QyxPQUFPLENBQUMsc0lBSWMsSUFBSSxDQUFDLFdBQVcsOEVBQ2dCLENBQUMsR0FBRyxDQUFDLDRIQUkvQixJQUFJLENBQUMsTUFBTSwySUFHVCxJQUFJLENBQUMsSUFBSSxnRUFFckIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyx1Q0FDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsc0ZBR3pDLENBQ1Q7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUNILHFMQUlNLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFZLEVBQUUsQ0FBUyxJQUFLLG1CQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFDdEUsQ0FDVDtBQUNMLENBQUM7QUFFRCxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1S3JCOztFQUVFO0FBQ0YsU0FBUyxXQUFXO0lBQ2hCLElBQU0sT0FBTyxHQUFHO1FBQ1osV0FBVyxFQUFFLENBQUM7UUFDZCxZQUFZLEVBQUUsQ0FBQztRQUNmLFdBQVcsRUFBRSxDQUFDO0tBQ2pCO0lBRUQsSUFBSSxJQUFJLEdBQWtCLElBQUksQ0FBQztJQUMvQixJQUFJLGFBQWEsR0FBa0IsSUFBSSxDQUFDO0lBRXhDLElBQUksTUFBTSxHQUFvQixFQUFFLENBQUM7SUFFakMsSUFBTSxNQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ3pCLElBQU0sa0JBQWtCLEdBQVUsRUFBRSxDQUFDO0lBRXJDOzs7OztNQUtFO0lBQ0YsSUFBTSxNQUFNLEdBQUcsVUFBQyxNQUFxQixFQUFFLGVBQThCO1FBQ2pFLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxHQUFHLE1BQU0sQ0FBQztTQUNqQjtRQUVELElBQUksZUFBZSxFQUFFO1lBQ2pCLGFBQWEsR0FBRyxlQUFlLENBQUM7U0FDbkM7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRDs7O01BR0U7SUFDRixJQUFNLFNBQVMsR0FBRyxVQUFDLFFBQXlCO1FBQ3hDLE1BQU0sbUNBQU8sTUFBTSxTQUFLLFFBQVEsT0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQztJQUVGOzs7TUFHRTtJQUNGLElBQU0sUUFBUSxHQUFHLFVBQUMsU0FBYztRQUNwQixlQUFXLEdBQUssT0FBTyxZQUFaLENBQWE7UUFFaEMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFCO1FBRUQsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWxDLElBQU0sUUFBUSxHQUFHLFVBQUMsUUFBYTtZQUMzQixNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDO1lBQy9CLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUVELE9BQU8sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBRXpCLE9BQU8sQ0FBRSxLQUFLLEVBQUUsUUFBUSxDQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7TUFHRTtJQUNGLElBQU0sU0FBUyxHQUFHLFVBQUMsUUFBa0IsRUFBRSxZQUF3QjtRQUNuRCxnQkFBWSxHQUFLLE9BQU8sYUFBWixDQUFhO1FBRWpDLElBQUksa0JBQWtCLENBQUMsTUFBTSxLQUFLLFlBQVksRUFBRTtZQUM1QyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFNLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVwRCxvREFBb0Q7UUFDcEQsOEJBQThCO1FBQzlCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLFVBQVUsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6QyxnREFBZ0Q7WUFDaEQsZ0NBQWdDO1lBQ2hDLGlFQUFpRTtZQUNqRSxVQUFVLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNoQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDO1NBQ0w7UUFFRCxJQUFJLFVBQVUsRUFBRTtZQUNaLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxHQUFHLFlBQVksQ0FBQztZQUNoRCxRQUFRLEVBQUUsQ0FBQztTQUNkO1FBRUQsT0FBTyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixJQUFNLGFBQWEsR0FBRyxVQUFDLFFBQThCO1FBQ2pELElBQUksaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0IsT0FBTztZQUNMLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDeEMsaUJBQWlCLEdBQUcscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGOztNQUVFO0lBQ0YsSUFBTSxjQUFjLEdBQUc7UUFDbkIsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTyxJQUFLLGNBQU8sRUFBRSxFQUFULENBQVMsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFFRDs7TUFFRTtJQUNGLElBQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3pCLE9BQU87U0FDVjtRQUVELFNBQVM7UUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsRUFBRSxDQUFDO1FBRWpDLFNBQVM7UUFDVCxjQUFjLEVBQUUsQ0FBQztRQUVqQixTQUFTO1FBQ1QsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFeEQsT0FBTyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFMUQsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVaLFlBQVk7UUFDWixPQUFPLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sRUFBRSxNQUFNLFVBQUUsU0FBUyxhQUFFLFFBQVEsWUFBRSxTQUFTLGFBQUUsQ0FBQztBQUN0RCxDQUFDO0FBR0ssU0FBNkMsV0FBVyxFQUFFLEVBQXhELE1BQU0sY0FBRSxTQUFTLGlCQUFFLFFBQVEsZ0JBQUUsU0FBUyxlQUFrQixDQUFDO0FBQ2Y7QUFFbEQsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7O1VDOUozQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNkO0FBRTlCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0MsSUFBSSxJQUFJLEVBQUU7SUFDTix5REFBTSxDQUFDLElBQUksRUFBRSw0Q0FBUyxDQUFDO0NBQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvQXBwLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvY29tbW9uL0ljb25zLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2NvcmUvQ3VzdG9tUmVhY3QudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29ucyBmcm9tIFwiLi9jb21wb25lbnRzL2NvbW1vbi9JY29uc1wiO1xuXG5mdW5jdGlvbiBDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIChgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICR7SWNvbnMoKX1cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJzdGF0dXMtY29udGFpbmVyXCIgYXJpYS1sYWJlbD1cIu2VmOuLqCDsg4Htg5wg7LC9XCI+PC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCJpbXBvcnQgeyB1c2VFdmVudHMsIHVzZVN0YXRlIH0gZnJvbSBcIi4uLy4uL2NvcmUvQ3VzdG9tUmVhY3RcIjtcbmltcG9ydCB7IElJY29ucyB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9jb21wb25lbnRzL2NvbW1vbi9pY29uc1wiO1xuXG4vKlxuKiDslYTsnbTsvZgg7Lu07Y+s64SM7Yq4XG4qL1xuZnVuY3Rpb24gSWNvbnMgKCkge1xuICAgIC8qXG4gICAgKiDquLDrs7gg7JWE7J207L2YIOygleuztFxuICAgICovXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gW1xuICAgICAgICB7IG5hbWU6IFwi7J247YSw64S3XCIsIGltZ1NyYzogXCIuL2Fzc2V0cy9pY29ucy9pY29uLWludGVybmV0LnBuZ1wiLCBleHBsYW5hdGlvbjogXCLsnbjthLDrhLcg7JWE7J207L2YXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIu2MjOydvOydtOumhOyXrOuNn+q4gOyekFwiLCBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1maWxlLWRvY3VtZW50LnBuZ1wiLCBleHBsYW5hdGlvbjogXCLrrLjshJwg7JWE7J207L2YXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIuusuOyEnOydtOumhOydtOyVhO2Zieq4gOyekFwiLCBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1mb2xkZXIucG5nXCIsIGV4cGxhbmF0aW9uOiBcIu2PtOuNlCDslYTsnbTsvZhcIiB9XG4gICAgXVxuXG4gICAgY29uc3QgW2ljb25zLCBzZXRJY29uc10gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuXG4gICAgLypcbiAgICAqIOydtOuypO2KuCDrk7HroZ1cbiAgICAqL1xuICAgIGNvbnN0IGljb25DbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgICAgICAvKlxuICAgICAgICAqIOyVhOydtOy9mCDtgbTrpq0g7J2067Kk7Yq4IOq0gOugqCDrqZTshJzrk5xcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgaWNvbkFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5kZWZhdWx0LWljb25cIik7XG5cbiAgICAgICAgLypcbiAgICAgICAgKiDslYTsnbTsvZgg7J2066aEIOq0gOugqCAo7J2066aE7J20IOq4uCDqsr3smrAg7YG066atIOyLnOyXkCDtkoDrhKTsnoQpXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IGFiYnJldmlhdGVJY29uTmFtZSA9ICh2OiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpY29uRmlnY2FwdGlvbiA9IHYuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV07XG4gICAgICAgICAgICBjb25zdCBmdWxsSWNvbk5hbWUgPSBpY29uRmlnY2FwdGlvbi5hcmlhTGFiZWwgfHwgaWNvbkZpZ2NhcHRpb24uaW5uZXJIVE1MO1xuICAgICAgICAgICAgY29uc3Qgc2hvcnROYW1lID0gYCR7ZnVsbEljb25OYW1lLnN1YnN0cmluZygwLCA4KX0uLi5gO1xuXG4gICAgICAgICAgICBpZiAoZnVsbEljb25OYW1lLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgICAgICAgICBpY29uRmlnY2FwdGlvbi5pbm5lckhUTUwgPSBzaG9ydE5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG93RnVsbEljb25OYW1lID0gKHY6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGljb25GaWdjYXB0aW9uID0gdi5jaGlsZHJlblswXS5jaGlsZHJlblsxXTtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxJY29uTmFtZSA9IGljb25GaWdjYXB0aW9uLmFyaWFMYWJlbCB8fCBpY29uRmlnY2FwdGlvbi5pbm5lckhUTUw7XG5cbiAgICAgICAgICAgIGlmIChmdWxsSWNvbk5hbWUubGVuZ3RoID4gOCkge1xuICAgICAgICAgICAgICAgIGljb25GaWdjYXB0aW9uLmlubmVySFRNTCA9IGZ1bGxJY29uTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICog7JWE7J207L2YIO2BtOumrSDtgbTrnpjsiqQg6rSA66CoICjtgbTrpq3rkJjsl4jsnYQg65WMIGNsaWNrZWQg7YG0656Y7IqkIOy2lOqwgClcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgaW5Gb2N1c0ljb24gPSAodjogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdXRGb2N1c0ljb25zID0gKCkgPT4ge1xuICAgICAgICAgICAgaWNvbkFyZWEuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnY2xpY2tlZCcpICkge1xuICAgICAgICAgICAgICAgICAgICB2LmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYWJicmV2aWF0ZUljb25OYW1lKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyAxLiDslYTsnbTsvZgg7YG066at7ZaI7J2EIOuVjFxuICAgICAgICBpY29uQXJlYS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICB2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBvdXRGb2N1c0ljb25zKCk7XG4gICAgICAgICAgICAgICAgaW5Gb2N1c0ljb24odik7XG4gICAgICAgICAgICAgICAgc2hvd0Z1bGxJY29uTmFtZSh2KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gMi4g7JWE7J207L2YIOyZuOu2gCDtmZTrqbQg7YG066at7ZaI7J2EIOuVjFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tc2NyZWVuLWNvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG91dEZvY3VzSWNvbnMoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyAzLiDslYTsnbTsvZgg65Oc656Y6re4IOydtOuypO2KuCAoLmRlZmF1bHQtaWNvbiBkcmFnc3RhcnQgLT4gZG9jdW1lbnQgZHJhZ292ZXIgJiBkcm9wKVxuICAgICAgICAvLyBUT0RPLiDrk5zrnpjqt7gg7J2066+47KeAIOuwsOqyvSDsoJzqsbBcbiAgICAgICAgLy8gVE9ETy4g7YyM7J28IOyVhOydtOy9mOydtCDtj7TrjZQg7JyE66GcIOydtOuPmeuQoCDqsr3smrAg7Y+0642UIOyViOycvOuhnCDsnbTrj5nrkJjrj4TroZ0g7IiY7KCVXG4gICAgICAgIC8vIFRPRE8uIOyVhOydtOy9mOuBvOumrCDqsrnsuZjsp4Ag7JWK64+E66GdIOyImOyglVxuICAgICAgICBpY29uQXJlYS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICB2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChkcmFnc3RhcnRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkcmFnc3RhcnRFdmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZHJhZ3N0YXJ0RXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBPTkVfR1JJRF9BUkVBX1dJRFRIID0gODA7XG4gICAgICAgICAgICAgICAgY29uc3QgT05FX0dSSURfQVJFQV9IRUlHSFQgPSAxMDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8g6riw7KG0IOyVhOydtOy9mCDsnITsuZhcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2SWNvblBvcyA9IFtkcmFnc3RhcnRFdmVudC5jbGllbnRYLCBkcmFnc3RhcnRFdmVudC5jbGllbnRZXTtcblxuICAgICAgICAgICAgICAgIC8vIOq4sOyhtCDslYTsnbTsvZgg6re466as65OcIGNvbHVtbiwgcm93IOyLnOyekeygkFxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZHcmlkQ29sdW1uU3RhcnQgPSBOdW1iZXIucGFyc2VJbnQodi5zdHlsZS5ncmlkQ29sdW1uU3RhcnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZHcmlkUm93U3RhcnQgPSBOdW1iZXIucGFyc2VJbnQodi5zdHlsZS5ncmlkUm93U3RhcnQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZHJhZ292ZXJGbiA9IChkcmFnb3ZlckV2ZW50OiBEcmFnRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZHJhZ292ZXJFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ292ZXJGbik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChkcm9wRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZHJvcEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g7YG066atKG1vdXNlZG93bikg7J2067Kk7Yq46rCAIOyggeyaqeuQnCDsl5jrpqzrqLztirjrp4wg7J2064+ZXG4gICAgICAgICAgICAgICAgICAgIGlmICh2LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnY2xpY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDrk5zrnpjqt7jqsIAg64Gd64KcIO2bhCDslYTsnbTsvZgg7JyE7LmYXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJJY29uUG9zID0gW2Ryb3BFdmVudC5jbGllbnRYLCBkcm9wRXZlbnQuY2xpZW50WV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOq4sOyhtCDslYTsnbTsvZgg6re466as65OcIOyijO2RnOyXkOyEnCDrqocg66eM7YG8IOybgOyngeyYgOuKlOyngFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92aW5nQ29vcmRpbmF0ZXNYID0gTnVtYmVyLnBhcnNlSW50KCgoY3VySWNvblBvc1swXSAtIHByZXZJY29uUG9zWzBdKSAvIE9ORV9HUklEX0FSRUFfV0lEVEgpLnRvRml4ZWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZpbmdDb29yZGluYXRlc1kgPSBOdW1iZXIucGFyc2VJbnQoKChjdXJJY29uUG9zWzFdIC0gcHJldkljb25Qb3NbMV0pIC8gT05FX0dSSURfQVJFQV9IRUlHSFQpLnRvRml4ZWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuTnOuemOq3uOqwgCDrgZ3rgpwg7ZuEIGNvbHVtbiwgcm93IOyLnOyekeygkFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyR3JpZENvbHVtblN0YXJ0ID0gcHJldkdyaWRDb2x1bW5TdGFydCArIG1vdmluZ0Nvb3JkaW5hdGVzWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1ckdyaWRSb3dTdGFydCA9IHByZXZHcmlkUm93U3RhcnQgKyBtb3ZpbmdDb29yZGluYXRlc1k7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHYuc3R5bGUuZ3JpZENvbHVtblN0YXJ0ID0gYCR7Y3VyR3JpZENvbHVtblN0YXJ0fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2LnN0eWxlLmdyaWRSb3dTdGFydCA9IGAke2N1ckdyaWRSb3dTdGFydH1gO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdvdmVyRm4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHVzZUV2ZW50cyhbaWNvbkNsaWNrRXZlbnRdKTtcblxuICAgIC8qXG4gICAgKiDslYTsnbTsvZgg7Lu07Y+s64SM7Yq4IFxuICAgICovXG4gICAgY29uc3QgaWNvblRlbXBsYXRlID0gKGljb246IElJY29ucywgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiAoYFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJkZWZhdWx0LWljb25cIlxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCIke2ljb24uZXhwbGFuYXRpb259XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImdyaWQtY29sdW1uLXN0YXJ0OiAxO2dyaWQtcm93LXN0YXJ0OiAke2kgKyAxfTtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aWNvbi5pbWdTcmN9XCIgZHJhZ2dhYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiJHtpY29uLm5hbWV9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpY29uLm5hbWUuc3Vic3RyaW5nKDAsIDgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpY29uLm5hbWUubGVuZ3RoID4gOCA/ICcuLi4nIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+YFxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgYDxvbFxuICAgICAgICAgICAgY2xhc3M9XCJtYWluLXNjcmVlbi1jb250YWluZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIuuwlO2Dle2ZlOuptCDrsI8g7JWE7J207L2YIOumrOyKpO2KuFwiXG4gICAgICAgID5cbiAgICAgICAgICAgICR7aWNvbnMubWFwKChpY29uOiBJSWNvbnMsIGk6IG51bWJlcikgPT4gaWNvblRlbXBsYXRlKGljb24sIGkpKS5qb2luKCcnKX1cbiAgICAgICAgPC9vbD5gXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29ucztcbiIsIi8qXG4qIOumrOyVoe2KuCBob29rcyDqsITri6jtnogg6rWs7ZiEXG4qL1xuZnVuY3Rpb24gQ3VzdG9tUmVhY3QgKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGN1clN0YXRlSWR4OiAwLFxuICAgICAgICBjdXJFZmZlY3RJZHg6IDAsXG4gICAgICAgIHJlbmRlckNvdW50OiAwLFxuICAgIH1cblxuICAgIGxldCByb290OiBFbGVtZW50IHwgYW55ID0gbnVsbDtcbiAgICBsZXQgcm9vdENvbXBvbmVudDogRWxlbWVudCB8IGFueSA9IG51bGw7XG5cbiAgICBsZXQgZXZlbnRzOiBBcnJheTxGdW5jdGlvbj4gPSBbXTtcblxuICAgIGNvbnN0IHN0YXRlczogYW55W10gPSBbXTtcbiAgICBjb25zdCBlZmZlY3REZXBlbmRlbmNpZXM6IGFueVtdID0gW107XG5cbiAgICAvKlxuICAgICogQ3VzdG9tUmVhY3QgaG9va3NcbiAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzIDEuIHJlbmRlclxuICAgICogcmVuZGVyOiByb2906rCAIOuQmOuKlCDsl5jrpqzrqLztirjrpbwg66CM642U66eB7ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgcmVuZGVyID0gKHJvb3RFbDogRWxlbWVudCB8IGFueSwgcm9vdENvbXBvbmVudEVsOiBFbGVtZW50IHwgYW55KSA9PiB7XG4gICAgICAgIGlmIChyb290RWwpIHtcbiAgICAgICAgICAgIHJvb3QgPSByb290RWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm9vdENvbXBvbmVudEVsKSB7XG4gICAgICAgICAgICByb290Q29tcG9uZW50ID0gcm9vdENvbXBvbmVudEVsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBfcmVuZGVyKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzIDIuIHVzZUV2ZW50c1xuICAgICogdXNlRXZlbnRzOiDsu7Ttj6zrhIztirjrpbwg66qo65GQIOugjOuNlOunge2VnCDtm4Qg7J2067Kk7Yq466W8IOuTseuhne2VoCDsiJgg7J6I64+E66GdIOuPhOyZgOyjvOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHVzZUV2ZW50cyA9IChldmVudEZuczogQXJyYXk8RnVuY3Rpb24+KSA9PiB7XG4gICAgICAgIGV2ZW50cyA9IFsuLi5ldmVudHMsIC4uLmV2ZW50Rm5zXTtcbiAgICB9O1xuXG4gICAgLyogXG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAzLiB1c2VTdGF0ZVxuICAgICogdXNlU3RhdGU6IHN0YXRlIOq0gOumrO2VmOuPhOuhnSDrj4TsmYDso7zripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCB1c2VTdGF0ZSA9IChpbml0U3RhdGU6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCB7IGN1clN0YXRlSWR4IH0gPSBvcHRpb25zO1xuXG4gICAgICAgIGlmIChzdGF0ZXMubGVuZ3RoID09PSBjdXJTdGF0ZUlkeCkge1xuICAgICAgICAgICAgc3RhdGVzLnB1c2goaW5pdFN0YXRlKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0YXRlc1tjdXJTdGF0ZUlkeF07XG5cbiAgICAgICAgY29uc3Qgc2V0U3RhdGUgPSAobmV3U3RhdGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgc3RhdGVzW2N1clN0YXRlSWR4XSA9IG5ld1N0YXRlO1xuICAgICAgICAgICAgX3JlbmRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5jdXJTdGF0ZUlkeCArPSAxO1xuXG4gICAgICAgIHJldHVybiBbIHN0YXRlLCBzZXRTdGF0ZSBdO1xuICAgIH1cblxuICAgIC8qIFxuICAgICogQ3VzdG9tUmVhY3QgaG9va3MgMy4gdXNlRWZmZWN0XG4gICAgKiB1c2VFZmZlY3Q6IGRlcGVuZGVuY3kg67Cw7Je07J2YIOqwkuuTpOyXkCDrs4Dqsr3snbQg7IOd6rK87J2EIOqyveyasCBjYWxsYmFja+ydhCDsi6TtlontlZjripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCB1c2VFZmZlY3QgPSAoY2FsbGJhY2s6IEZ1bmN0aW9uLCBkZXBlbmRlbmNpZXM6IEFycmF5PGFueT4pID0+IHtcbiAgICAgICAgY29uc3QgeyBjdXJFZmZlY3RJZHggfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgaWYgKGVmZmVjdERlcGVuZGVuY2llcy5sZW5ndGggPT09IGN1ckVmZmVjdElkeCkge1xuICAgICAgICAgICAgZWZmZWN0RGVwZW5kZW5jaWVzLnB1c2goZGVwZW5kZW5jaWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlcGVuZGVuY3kgPSBlZmZlY3REZXBlbmRlbmNpZXNbY3VyRWZmZWN0SWR4XTtcblxuICAgICAgICAvLyBkZXBlbmRlbmN56rCAIOyXhuydhCDqsr3smrAgY2FsbGJhY2sg67CU66GcIOyLpO2WiSAobW91bnQg65CY7JeI7J2EIOuVjCDsi6TtlokpXG4gICAgICAgIC8vIGV4LiB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKVxuICAgICAgICBsZXQgaGFzQ2hhbmdlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKGRlcGVuZGVuY3kgJiYgZGVwZW5kZW5jaWVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgLy8gQXJyYXkucHJvdG90eXBlLnNvbWU6IO2MkOuzhCDtlajsiJgg7KCB7Ja064+EIO2VmOuCmOudvOuPhCDthrXqs7ztlZjripTsp4Ag7LK07YGsXG4gICAgICAgICAgICAvLyBPYmplY3QuaXM6IOuRkCDqsJzsnZgg7YyM652866+47YSw6rCAIOuPmeydvO2VnOyngCDssrTtgaxcbiAgICAgICAgICAgIC8vIOymiSwg6riw7KG0IGRlcGVuZGVuY3nsmYAg7IOI66GcIOuwm+ydgCBkZXBlbmRlbmN5IOyCrOydtOyXkCDssKjsnbTqsIAg7ZWY64KY652864+EIOyeiOuKlCDqsr3smrAgdHJ1ZeulvCDrsJjtmZhcbiAgICAgICAgICAgIGhhc0NoYW5nZWQgPSBkZXBlbmRlbmNpZXMuc29tZSgodiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhT2JqZWN0LmlzKHYsIGRlcGVuZGVuY3lbaV0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICBlZmZlY3REZXBlbmRlbmNpZXNbY3VyRWZmZWN0SWR4XSA9IGRlcGVuZGVuY2llcztcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmN1ckVmZmVjdElkeCArPSAxO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBDdXN0b21SZWFjdCDrgrTrtoAg7ZWo7IiYXG4gICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKiBkZWJvdW5jZUZyYW1lOiAx7LSI64u5IOuUlOyKpO2UjOugiOydtCDso7zsgqzsnKjrp4ztgbwg7Iuk7ZaJ7ZWY6rKMIO2VmOyXrCDsp4DrgpjsuZwg66CM642U66eB7J2EIOuwqeyngO2VmOq4sCDsnITtlZwg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCBkZWJvdW5jZUZyYW1lID0gKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjaykgPT4ge1xuICAgICAgICBsZXQgbmV4dEZyYW1lQ2FsbGJhY2sgPSAtMTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShuZXh0RnJhbWVDYWxsYmFjayk7XG4gICAgICAgICAgbmV4dEZyYW1lQ2FsbGJhY2sgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvKlxuICAgICogcmVnaXN0ZXJFdmVudHM6IOydtOuypO2KuCDtlajsiJgg65Ox66Gd7J2EIOychO2VtCDsi6TtlontlZjripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCByZWdpc3RlckV2ZW50cyA9ICgpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaCgoZXZlbnRGbikgPT4gZXZlbnRGbigpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAqIF9yZW5kZXI6IOyLpOyniOyggeycvOuhnCDrpqzslaHtirgg64K067aA7JeQ7IScIOugjOuNlOungeydhCDri7Tri7ntlZjripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCBfcmVuZGVyID0gZGVib3VuY2VGcmFtZSgoKSA9PiB7XG4gICAgICAgIGlmICghcm9vdCB8fCAhcm9vdENvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g7ZmU66m0IOugjOuNlOungVxuICAgICAgICByb290LmlubmVySFRNTCA9IHJvb3RDb21wb25lbnQoKTtcblxuICAgICAgICAvLyDsnbTrsqTtirgg65Ox66GdXG4gICAgICAgIHJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgICAgIFxuICAgICAgICAvLyDrs4DsiJgg7LSI6riw7ZmUXG4gICAgICAgIG9wdGlvbnMuY3VyU3RhdGVJZHggPSAwO1xuICAgICAgICBjb25zb2xlLmxvZygnX3JlbmRlciBjdXJTdGF0ZUlkeCcsIG9wdGlvbnMuY3VyU3RhdGVJZHgpO1xuXG4gICAgICAgIG9wdGlvbnMuY3VyRWZmZWN0SWR4ID0gMDtcbiAgICAgICAgY29uc29sZS5sb2coJ19yZW5kZXIgY3VyRWZmZWN0SWR4Jywgb3B0aW9ucy5jdXJFZmZlY3RJZHgpO1xuXG4gICAgICAgIGV2ZW50cyA9IFtdO1xuXG4gICAgICAgIC8vIOugjOuNlOungSDtmp/siJgg7ZmV7J24XG4gICAgICAgIG9wdGlvbnMucmVuZGVyQ291bnQgKz0gMTtcbiAgICAgICAgY29uc29sZS5sb2coJ19yZW5kZXIgcmVuZGVyQ291bnQnLCBvcHRpb25zLnJlbmRlckNvdW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHJlbmRlciwgdXNlRXZlbnRzLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH07XG59XG5cblxuY29uc3QgeyByZW5kZXIsIHVzZUV2ZW50cywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ID0gQ3VzdG9tUmVhY3QoKTtcbmV4cG9ydCB7IHJlbmRlciwgdXNlRXZlbnRzLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVJlYWN0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vY29yZS9DdXN0b21SZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9BcHBcIjtcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKTtcbmlmIChyb290KSB7XG4gICAgcmVuZGVyKHJvb3QsIENvbnRhaW5lcilcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==