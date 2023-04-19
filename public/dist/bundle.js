/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/constants/components/common/icon.ts":
/*!****************************************************!*\
  !*** ./public/constants/components/common/icon.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICONINFO": () => (/* binding */ ICONINFO)
/* harmony export */ });
const ICONINFO = {
    INTERNET: {
        type: "INTERNET",
        extenstion: "",
        imgSrc: "./assets/icons/icon-internet.png",
        explanation: "인터넷 아이콘",
    },
    FOLDER: {
        type: "FOLDER",
        extenstion: "",
        imgSrc: "./assets/icons/icon-folder.png",
        explanation: "폴더 아이콘",
    },
    TXT: {
        type: "TXT",
        extenstion: "txt",
        imgSrc: "./assets/icons/icon-file-document.png",
        explanation: "텍스트 파일 아이콘",
    },
};


/***/ }),

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
    return (`
        <div class="container">
            ${(0,_components_common_Icons__WEBPACK_IMPORTED_MODULE_0__["default"])()}
            <nav class="status-container" aria-label="하단 상태 창"></nav>
        </div>
    `);
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
/* harmony import */ var _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/components/common/icon */ "./public/constants/components/common/icon.ts");
/* harmony import */ var _WindowModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WindowModal */ "./public/src/components/common/WindowModal.ts");



/*
* 아이콘 컴포넌트
*/
function Icons() {
    /*
    * 기본 아이콘 정보
    */
    const initialState = [
        {
            idx: 0,
            name: "인터넷 익스플로러",
            extenstion: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.INTERNET.extenstion,
            type: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.INTERNET.type,
            imgSrc: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.INTERNET.imgSrc,
            explanation: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.INTERNET.explanation,
            style: { gridRowStart: 1, gridColumnStart: 1 },
        },
        {
            idx: 1,
            name: "내 문서",
            extension: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.FOLDER.extenstion,
            type: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.FOLDER.type,
            imgSrc: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.FOLDER.imgSrc,
            explanation: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.FOLDER.explanation,
            style: { gridRowStart: 2, gridColumnStart: 1 },
        },
        {
            idx: 2,
            name: "파일.txt",
            extension: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.TXT.extenstion,
            type: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.TXT.type,
            imgSrc: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.TXT.imgSrc,
            explanation: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.TXT.explanation,
            style: { gridRowStart: 3, gridColumnStart: 1 },
        },
    ];
    const [icons, setIcons] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("Icons", initialState);
    const [modals, setModals] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("Icons", []);
    /*
    * 이벤트 등록
    */
    const iconClickEvent = () => {
        /*
        * 아이콘 클릭 이벤트 관련 메서드
        */
        const iconArea = document.querySelectorAll(".default-icon");
        /*
        * 아이콘 이름 관련 (이름이 길 경우 클릭 시에 풀네임)
        */
        const abbreviateIconName = (v) => {
            const iconFigcaption = v.children[0].children[1];
            const fullIconName = v.dataset.iconName || iconFigcaption.innerHTML;
            const shortName = `${fullIconName.substring(0, 8)}...`;
            if (fullIconName.length > 8) {
                iconFigcaption.innerHTML = shortName;
            }
        };
        const showFullIconName = (v) => {
            const iconFigcaption = v.children[0].children[1];
            const fullIconName = v.dataset.iconName || iconFigcaption.innerHTML;
            if (fullIconName.length > 8) {
                iconFigcaption.innerHTML = fullIconName;
            }
        };
        /*
        * 아이콘 클릭 클래스 관련 (클릭되었을 때 clicked 클래스 추가)
        */
        const inFocusIcon = (v) => {
            v.classList.add('clicked');
        };
        const outFocusIcons = () => {
            iconArea.forEach((v) => {
                if (v.classList.value.includes('clicked')) {
                    v.classList.remove('clicked');
                    abbreviateIconName(v);
                }
            });
        };
        // 1. 아이콘 클릭했을 때
        iconArea.forEach((v) => {
            v.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                outFocusIcons();
                inFocusIcon(v);
                showFullIconName(v);
            });
        });
        // 2. 아이콘 외부 화면 클릭했을 때
        const container = document.querySelector(".container");
        if (container) {
            container.addEventListener('mousedown', () => {
                outFocusIcons();
            });
        }
        // 3. 아이콘 드래그 이벤트 (.default-icon dragstart -> document dragover & drop)
        // TODO. 파일 아이콘이 폴더 위로 이동될 경우 폴더 안으로 이동되도록 수정
        // TODO. 아이콘끼리 겹치지 않도록 수정
        iconArea.forEach((v) => {
            v.addEventListener('dragstart', (dragstartEvent) => {
                var _a, _b;
                // 아이콘 index
                const iconIdx = Number.parseInt(((_a = v.getAttribute("id")) === null || _a === void 0 ? void 0 : _a.split("-")[1]) || '0');
                // 하나의 grid area의 가로/세로
                const ONE_GRID_AREA_WIDTH = 80;
                const ONE_GRID_AREA_HEIGHT = 100;
                // 기존 아이콘 그리드 column, row 시작점
                const prevGridColumnStart = Number.parseInt(v.style.gridColumnStart);
                const prevGridRowStart = Number.parseInt(v.style.gridRowStart);
                // 기존 아이콘 위치
                const prevIconPos = [dragstartEvent.clientX, dragstartEvent.clientY];
                const rootEl = document.querySelector("#root") || document.body;
                const iconDiv = getDragIconEl(v);
                let shiftX = dragstartEvent.clientX - v.getBoundingClientRect().left;
                let shiftY = dragstartEvent.clientY - v.getBoundingClientRect().top;
                (_b = dragstartEvent.dataTransfer) === null || _b === void 0 ? void 0 : _b.setDragImage(iconDiv, shiftX, shiftY);
                if (dragstartEvent.dataTransfer) {
                    dragstartEvent.dataTransfer.effectAllowed = "move";
                }
                const dragoverFn = (dragoverEvent) => {
                    dragoverEvent.preventDefault();
                };
                document.addEventListener('dragover', dragoverFn);
                document.addEventListener('drop', (dropEvent) => {
                    dropEvent.preventDefault();
                    // 클릭(mousedown) 이벤트가 적용된 엘리먼트만 이동
                    if (v.classList.value.includes('clicked')) {
                        // 드래그가 끝난 후 아이콘 위치
                        const curIconPos = [dropEvent.clientX, dropEvent.clientY];
                        // 기존 아이콘 그리드 좌표에서 몇 만큼 움직였는지
                        const movingCoordinatesX = Number.parseInt(((curIconPos[0] - prevIconPos[0]) / ONE_GRID_AREA_WIDTH).toFixed());
                        const movingCoordinatesY = Number.parseInt(((curIconPos[1] - prevIconPos[1]) / ONE_GRID_AREA_HEIGHT).toFixed());
                        // 드래그가 끝난 후 column, row 시작점
                        const gridColumnStart = prevGridColumnStart + movingCoordinatesX;
                        const gridRowStart = prevGridRowStart + movingCoordinatesY;
                        const style = { gridRowStart, gridColumnStart };
                        const newIcons = [...icons];
                        newIcons[iconIdx] = Object.assign(Object.assign({}, icons[iconIdx]), { style });
                        setIcons(newIcons);
                        document.removeEventListener('dragover', dragoverFn);
                        rootEl.removeChild(iconDiv);
                    }
                });
            });
        });
        // 4. 아이콘 더블클릭이벤트
        iconArea.forEach((v) => {
            v.addEventListener('dblclick', () => {
                var _a;
                const prevModals = modals;
                const modalIdx = prevModals.length;
                const iconImg = v.children[0].children[0].children[0].attributes[0];
                const iconFigcaption = v.children[0].children[1];
                const imgSrc = iconImg.nodeValue || '';
                const name = v.dataset.iconName || iconFigcaption.innerHTML || '';
                const explanation = v.dataset.iconExplanation || name;
                const icon = {
                    idx: Number.parseInt(((_a = v.getAttribute("id")) === null || _a === void 0 ? void 0 : _a.split("-")[1]) || '0'),
                    name,
                    imgSrc,
                    explanation,
                    style: { gridColumnStart: Number.parseInt(v.style.gridColumnStart), gridRowStart: Number.parseInt(v.style.gridRowStart) }
                };
                const windowModal = (0,_WindowModal__WEBPACK_IMPORTED_MODULE_2__["default"])({ icon, modalIdx });
                if (windowModal) {
                    const newModals = [...prevModals, windowModal];
                    setModals(newModals);
                }
            });
        });
        const addIconBtn = document.querySelector("#addIconBtn");
        addIconBtn === null || addIconBtn === void 0 ? void 0 : addIconBtn.addEventListener('click', () => {
            const newIcon = {
                idx: icons.length,
                name: "파일.txt",
                extension: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.TXT.extenstion,
                type: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.TXT.type,
                imgSrc: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.TXT.imgSrc,
                explanation: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICONINFO.TXT.explanation,
                style: { gridRowStart: icons.length + 1, gridColumnStart: 1 },
            };
            setIcons([...icons, newIcon]);
        });
    };
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEvents)([iconClickEvent]);
    /*
    * 아이콘 드래그 할 때 이미지
    */
    const getDragIconEl = (v) => {
        const rootEl = document.querySelector("#root") || document.body;
        const iconImg = v.children[0].children[0].children[0].attributes[0];
        const iconFigcaption = v.children[0].children[1];
        const imgSrc = iconImg.nodeValue || '';
        const name = v.dataset.iconName || iconFigcaption.innerHTML || '';
        const iconDiv = document.createElement('div');
        iconDiv.classList.add("default-icon");
        iconDiv.style.position = "absolute";
        iconDiv.style.width = "80px";
        iconDiv.innerHTML = getDragIconInnerElem(name, imgSrc);
        rootEl.appendChild(iconDiv);
        return iconDiv;
    };
    const getDragIconInnerElem = (iconName, iconImageSrc) => {
        return (`
            <button>
                <figure>
                    <img src="${iconImageSrc}" draggable="false">
                </figure>
                <figcaption>${iconName}</figcaption>
            </button>`);
    };
    /*
    * 아이콘 컴포넌트
    */
    const iconTemplate = (icon, i) => {
        return (`
            <li
                id="icon-${icon.idx}"
                class="default-icon"
                draggable="true"
                data-icon-name="${icon.name}"
                aria-icon-explanation="${icon.explanation}"
                aria-label="${icon.explanation}"
                style="grid-column-start: ${icon.style.gridColumnStart};grid-row-start: ${icon.style.gridRowStart};"
            >
                <button>
                    <figure>
                        <img src="${icon.imgSrc}" draggable="false">
                    </figure>
                    <figcaption>
                        ${icon.name.substring(0, 8)}
                        ${icon.name.length > 8 ? '...' : ''}
                    </figcaption>
                </button>
            </li>`);
    };
    return (`<ol
            class="main-screen-container"
            aria-label="바탕화면"
        >
            ${icons.map((icon, i) => iconTemplate(icon, i)).join('')}
            <button id="addIconBtn">추가</button>
        </ol>
        ${modals.map((modal) => modal).join('')}`);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icons);


/***/ }),

/***/ "./public/src/components/common/WindowModal.ts":
/*!*****************************************************!*\
  !*** ./public/src/components/common/WindowModal.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_CustomReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/CustomReact */ "./public/src/core/CustomReact.ts");

function WindowModal({ icon, modalIdx, main, footer }) {
    const [isOpen, setIsOpen] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", true);
    const [modalIndex, setModalIndex] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", modalIdx);
    const [modalSize, setModalSize] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", { width: 400, height: 300 });
    const [modalTranslate, setModalTranslate] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", { X: 400, Y: 400 });
    const [isFullSize, setIsFullSize] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", false);
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        console.log("modalIdx", modalIdx);
        const defaultTranslate = { X: modalTranslate.X + 20 * modalIdx, Y: modalTranslate.Y + 20 * modalIdx };
        setModalTranslate(defaultTranslate);
    }, []);
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        //
    }, [modalSize.width, modalSize.height, modalTranslate.X, modalTranslate.Y]);
    const modalCommonEvent = () => {
        const minimizeBtn = document.querySelector("#minimizeBtn");
        const maximizeBtn = document.querySelector("#maximizeBtn");
        const restoreDownBtn = document.querySelector("#restoreDownBtn");
        const closeBtn = document.querySelector("#closeBtn");
        if (maximizeBtn) {
            maximizeBtn.addEventListener('click', (e) => {
                e.preventDefault;
                setIsFullSize(true);
            });
        }
        if (restoreDownBtn) {
            restoreDownBtn.addEventListener('click', (e) => {
                e.preventDefault;
                setIsFullSize(false);
            });
        }
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault;
                console.log("close ModalIdx", modalIndex);
                setIsOpen(false);
            });
        }
    };
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEvents)([modalCommonEvent]);
    const modalContent = () => {
        return (`<div
                id="window-modal-${modalIndex}"
                class="window-modal"
                style="width: ${modalSize.width}px; height: ${modalSize.height}px; transform: translate(${modalTranslate.X}px, ${modalTranslate.Y}px)"
            >
                <header class="modal-header stop-drag">
                    <div class="modal-header-left">
                        <img src="${icon.imgSrc}" />
                    </div>
                    <div class="modal-header-middle">
                        <p>${icon.name}</p>
                    </div>
                    <div class="modal-header-right">
                        <button id="minimizeBtn">
                            <svg style="width: 16px;height: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-minimize</title><path d="M20,14H4V10H20" /></svg>
                        </button>
                        ${isFullSize
            ? '<button id="restoreDownBtn"><svg style="width: 16px;height: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dock-window</title><path d="M18 18V20H4A2 2 0 0 1 2 18V8H4V18M22 6V14A2 2 0 0 1 20 16H8A2 2 0 0 1 6 14V6A2 2 0 0 1 8 4H20A2 2 0 0 1 22 6M20 6H8V14H20Z" /></svg></button>'
            : '<button id="maximizeBtn"><svg style="width: 16px;height: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-outline</title><path d="M3,3H21V21H3V3M5,5V19H19V5H5Z" /></svg></button>'}
                        <button id="closeBtn">
                            <svg style="width: 16px;height: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                        </button>
                    </div>
                </header>
                <main></main>
                <footer></footer>
            </div>`);
    };
    return (`${isOpen ? modalContent() : ''}`);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WindowModal);


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
/*
* 리액트 hooks 간단히 구현
*/
function CustomReact() {
    let root = null;
    let rootComponent = null;
    const states = new Map();
    const curStatesIdx = new Map();
    let events = [];
    let mountEffects = [];
    const effectDependencies = [];
    const options = {
        curEffectIdx: 0,
        renderCount: 0,
    };
    /*
    * CustomReact hooks
    * =========================================================================
    * CustomReact hooks 1. render
    * render: root가 되는 엘리먼트를 렌더링하는 메서드
    */
    const render = (rootEl, rootComponentEl) => {
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
    const useEvents = (eventFns) => {
        console.log('useEvents', eventFns);
        events = [...events, ...eventFns];
    };
    /**
    * CustomReact hooks 3. useState
    * useState: state 관리하도록 도와주는 메서드
    * 클로저(함수 선언시의 스코프를 기억하는 자바스크립트의 특징)를 활용
    * @param {string} caller useState를 호출한 컴포넌트(함수)명
    * @param {any} initState 초기화할 state
    */
    const useState = (caller, initState) => {
        if (!states.get(caller)) {
            states.set(caller, []);
            curStatesIdx.set(caller, 0);
        }
        const curStateIdx = curStatesIdx.get(caller);
        if (!states.get(caller)[curStateIdx]) {
            states.get(caller)[curStateIdx] = initState;
        }
        const state = states.get(caller)[curStateIdx];
        const setState = (newState) => {
            states.get(caller)[curStateIdx] = newState;
            console.log('setState', caller, curStateIdx, newState);
            _render();
        };
        curStatesIdx.set(caller, curStateIdx + 1);
        return [state, setState];
    };
    /*
    * CustomReact hooks 4. useEffect
    * useEffect: dependency 배열의 값들에 변경이 생겼을 경우 callback을 실행하는 메서드
    */
    const useEffect = (callback, dependencies) => {
        // 1. dependency가 없을 경우 callback 바로 실행 (mount 되었을 때 실행)
        // ex. useEffect(() => {}, [])
        if (dependencies.length === 0) {
            mountEffects.push(callback);
            return;
        }
        // 2. dependency가 있을 경우 dependency 변경 시에만 callback 실행
        // ex. useEffect(() => {}, [a, b, ..., z])
        const { curEffectIdx } = options;
        if (effectDependencies.length === curEffectIdx) {
            effectDependencies.push(dependencies);
        }
        console.log("effectDependencies", effectDependencies);
        const dependency = effectDependencies[curEffectIdx];
        let hasChanged = true;
        if (dependency) {
            // Array.prototype.some: 판별 함수 적어도 하나라도 통과하는지 체크
            // Object.is: 두 개의 파라미터가 동일한지 체크
            // 즉, 기존 dependency와 새로 받은 dependency 사이에 차이가 하나라도 있는 경우 true를 반환
            hasChanged = dependencies.some((v, i) => {
                return !Object.is(v, dependency[i]);
            });
        }
        console.log("hasChanged", hasChanged);
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
    const debounceFrame = (callback) => {
        let nextFrameCallback = -1;
        return () => {
            cancelAnimationFrame(nextFrameCallback);
            nextFrameCallback = requestAnimationFrame(callback);
        };
    };
    /*
    * registerEvents: 이벤트 함수 등록을 위해 실행하는 메서드
    */
    const registerEvents = () => {
        if (events.length > 0) {
            console.log('events', events);
            events.forEach((eventFn) => eventFn());
        }
    };
    /*
    * executeMountEffects: mount 시 실행할 메서드들을 실행하는 메서드
    */
    const executeMountEffects = () => {
        if (mountEffects.length > 0) {
            console.log('executeMountEffects', mountEffects);
            mountEffects.forEach((mountEfFn) => mountEfFn());
        }
    };
    /*
    * _render: 실질적으로 리액트 내부에서 렌더링을 담당하는 메서드
    */
    const _render = debounceFrame(() => {
        if (!root || !rootComponent) {
            return;
        }
        // 화면 렌더링
        root.innerHTML = rootComponent();
        // 이벤트 등록
        registerEvents();
        // 마운트 시 실행시킬 콜백 함수 실행
        executeMountEffects();
        // 변수 초기화
        const callersName = [];
        for (const [key, _] of states) {
            callersName.push(key);
        }
        callersName.forEach((caller) => {
            curStatesIdx.set(caller, 0);
        });
        console.log(states.entries());
        console.log(curStatesIdx.entries());
        options.curEffectIdx = 0;
        console.log('_render curEffectIdx', options.curEffectIdx);
        events = [];
        mountEffects = [];
        // 렌더링 횟수 확인
        options.renderCount += 1;
        console.log('_render renderCount', options.renderCount);
    });
    return { render, useEvents, useState, useEffect };
}
const { render, useEvents, useState, useEffect } = CustomReact();

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


const root = document.querySelector("#root");
if (root) {
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.render)(root, _App__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTFELE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLFlBQVk7UUFDWixPQUFPLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQztBQUN0RCxDQUFDO0FBR0QsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLFdBQVcsRUFBRSxDQUFDO0FBQ2Y7QUFFbEQsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7O1VDek0zQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNkO0FBRTlCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0MsSUFBSSxJQUFJLEVBQUU7SUFDTix5REFBTSxDQUFDLElBQUksRUFBRSw0Q0FBUyxDQUFDO0NBQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9jb25zdGFudHMvY29tcG9uZW50cy9jb21tb24vaWNvbi50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9BcHAudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9jb21tb24vSWNvbnMudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9jb21tb24vV2luZG93TW9kYWwudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvY29yZS9DdXN0b21SZWFjdC50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IElDT05JTkZPID0ge1xuICAgIElOVEVSTkVUOiB7XG4gICAgICAgIHR5cGU6IFwiSU5URVJORVRcIixcbiAgICAgICAgZXh0ZW5zdGlvbjogXCJcIixcbiAgICAgICAgaW1nU3JjOiBcIi4vYXNzZXRzL2ljb25zL2ljb24taW50ZXJuZXQucG5nXCIsXG4gICAgICAgIGV4cGxhbmF0aW9uOiBcIuyduO2EsOuEtyDslYTsnbTsvZhcIixcbiAgICB9LFxuICAgIEZPTERFUjoge1xuICAgICAgICB0eXBlOiBcIkZPTERFUlwiLFxuICAgICAgICBleHRlbnN0aW9uOiBcIlwiLFxuICAgICAgICBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1mb2xkZXIucG5nXCIsXG4gICAgICAgIGV4cGxhbmF0aW9uOiBcIu2PtOuNlCDslYTsnbTsvZhcIixcbiAgICB9LFxuICAgIFRYVDoge1xuICAgICAgICB0eXBlOiBcIlRYVFwiLFxuICAgICAgICBleHRlbnN0aW9uOiBcInR4dFwiLFxuICAgICAgICBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1maWxlLWRvY3VtZW50LnBuZ1wiLFxuICAgICAgICBleHBsYW5hdGlvbjogXCLthY3siqTtirgg7YyM7J28IOyVhOydtOy9mFwiLFxuICAgIH0sXG59IiwiaW1wb3J0IEljb25zIGZyb20gXCIuL2NvbXBvbmVudHMvY29tbW9uL0ljb25zXCI7XG5cbmZ1bmN0aW9uIENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgJHtJY29ucygpfVxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cInN0YXR1cy1jb250YWluZXJcIiBhcmlhLWxhYmVsPVwi7ZWY64uoIOyDge2DnCDssL1cIj48L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyIsImltcG9ydCB7IHVzZUV2ZW50cywgdXNlU3RhdGUgfSBmcm9tIFwiLi4vLi4vY29yZS9DdXN0b21SZWFjdFwiO1xuaW1wb3J0IHsgSUljb25zIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL2NvbXBvbmVudHMvY29tbW9uL2ljb25zXCI7XG5pbXBvcnQgeyBJQ09OSU5GTyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvY29tcG9uZW50cy9jb21tb24vaWNvblwiO1xuaW1wb3J0IFdpbmRvd01vZGFsIGZyb20gXCIuL1dpbmRvd01vZGFsXCI7XG5cbi8qXG4qIOyVhOydtOy9mCDsu7Ttj6zrhIztirhcbiovXG5mdW5jdGlvbiBJY29ucyAoKSB7XG4gICAgLypcbiAgICAqIOq4sOuzuCDslYTsnbTsvZgg7KCV67O0XG4gICAgKi9cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkeDogMCxcbiAgICAgICAgICAgIG5hbWU6IFwi7J247YSw64S3IOydteyKpO2UjOuhnOufrFwiLFxuICAgICAgICAgICAgZXh0ZW5zdGlvbjogSUNPTklORk8uSU5URVJORVQuZXh0ZW5zdGlvbixcbiAgICAgICAgICAgIHR5cGU6IElDT05JTkZPLklOVEVSTkVULnR5cGUsXG4gICAgICAgICAgICBpbWdTcmM6IElDT05JTkZPLklOVEVSTkVULmltZ1NyYyxcbiAgICAgICAgICAgIGV4cGxhbmF0aW9uOiBJQ09OSU5GTy5JTlRFUk5FVC5leHBsYW5hdGlvbixcbiAgICAgICAgICAgIHN0eWxlOiB7IGdyaWRSb3dTdGFydDogMSwgZ3JpZENvbHVtblN0YXJ0OiAxIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBpZHg6IDEsXG4gICAgICAgICAgICBuYW1lOiBcIuuCtCDrrLjshJxcIixcbiAgICAgICAgICAgIGV4dGVuc2lvbjogSUNPTklORk8uRk9MREVSLmV4dGVuc3Rpb24sXG4gICAgICAgICAgICB0eXBlOiBJQ09OSU5GTy5GT0xERVIudHlwZSxcbiAgICAgICAgICAgIGltZ1NyYzogSUNPTklORk8uRk9MREVSLmltZ1NyYyxcbiAgICAgICAgICAgIGV4cGxhbmF0aW9uOiBJQ09OSU5GTy5GT0xERVIuZXhwbGFuYXRpb24sXG4gICAgICAgICAgICBzdHlsZTogeyBncmlkUm93U3RhcnQ6IDIsIGdyaWRDb2x1bW5TdGFydDogMSB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZHg6IDIsXG4gICAgICAgICAgICBuYW1lOiBcIu2MjOydvC50eHRcIixcbiAgICAgICAgICAgIGV4dGVuc2lvbjogSUNPTklORk8uVFhULmV4dGVuc3Rpb24sXG4gICAgICAgICAgICB0eXBlOiBJQ09OSU5GTy5UWFQudHlwZSxcbiAgICAgICAgICAgIGltZ1NyYzogSUNPTklORk8uVFhULmltZ1NyYyxcbiAgICAgICAgICAgIGV4cGxhbmF0aW9uOiBJQ09OSU5GTy5UWFQuZXhwbGFuYXRpb24sXG4gICAgICAgICAgICBzdHlsZTogeyBncmlkUm93U3RhcnQ6IDMsIGdyaWRDb2x1bW5TdGFydDogMSB9LFxuICAgICAgICB9LFxuICAgIF1cblxuICAgIGNvbnN0IFtpY29ucywgc2V0SWNvbnNdID0gdXNlU3RhdGUoXCJJY29uc1wiLCBpbml0aWFsU3RhdGUpO1xuICAgIGNvbnN0IFttb2RhbHMsIHNldE1vZGFsc10gPSB1c2VTdGF0ZShcIkljb25zXCIsIFtdKTtcblxuICAgIC8qXG4gICAgKiDsnbTrsqTtirgg65Ox66GdXG4gICAgKi9cbiAgICBjb25zdCBpY29uQ2xpY2tFdmVudCA9ICgpID0+IHtcbiAgICAgICAgLypcbiAgICAgICAgKiDslYTsnbTsvZgg7YG066atIOydtOuypO2KuCDqtIDroKgg66mU7ISc65OcXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IGljb25BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuZGVmYXVsdC1pY29uXCIpO1xuXG4gICAgICAgIC8qXG4gICAgICAgICog7JWE7J207L2YIOydtOumhCDqtIDroKggKOydtOumhOydtCDquLgg6rK97JqwIO2BtOumrSDsi5zsl5Ag7ZKA64Sk7J6EKVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBhYmJyZXZpYXRlSWNvbk5hbWUgPSAodjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGljb25GaWdjYXB0aW9uID0gdi5jaGlsZHJlblswXS5jaGlsZHJlblsxXTtcblxuICAgICAgICAgICAgY29uc3QgZnVsbEljb25OYW1lID0gdi5kYXRhc2V0Lmljb25OYW1lIHx8IGljb25GaWdjYXB0aW9uLmlubmVySFRNTDtcbiAgICAgICAgICAgIGNvbnN0IHNob3J0TmFtZSA9IGAke2Z1bGxJY29uTmFtZS5zdWJzdHJpbmcoMCwgOCl9Li4uYDtcblxuICAgICAgICAgICAgaWYgKGZ1bGxJY29uTmFtZS5sZW5ndGggPiA4KSB7XG4gICAgICAgICAgICAgICAgaWNvbkZpZ2NhcHRpb24uaW5uZXJIVE1MID0gc2hvcnROYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hvd0Z1bGxJY29uTmFtZSA9ICh2OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWNvbkZpZ2NhcHRpb24gPSB2LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgY29uc3QgZnVsbEljb25OYW1lID0gdi5kYXRhc2V0Lmljb25OYW1lIHx8IGljb25GaWdjYXB0aW9uLmlubmVySFRNTDtcblxuICAgICAgICAgICAgaWYgKGZ1bGxJY29uTmFtZS5sZW5ndGggPiA4KSB7XG4gICAgICAgICAgICAgICAgaWNvbkZpZ2NhcHRpb24uaW5uZXJIVE1MID0gZnVsbEljb25OYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiDslYTsnbTsvZgg7YG066atIO2BtOuemOyKpCDqtIDroKggKO2BtOumreuQmOyXiOydhCDrlYwgY2xpY2tlZCDtgbTrnpjsiqQg7LaU6rCAKVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBpbkZvY3VzSWNvbiA9ICh2OiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB2LmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG91dEZvY3VzSWNvbnMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpY29uQXJlYS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHYuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdjbGlja2VkJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIHYuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICBhYmJyZXZpYXRlSWNvbk5hbWUodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDEuIOyVhOydtOy9mCDtgbTrpq3tlojsnYQg65WMXG4gICAgICAgIGljb25BcmVhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgIHYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIG91dEZvY3VzSWNvbnMoKTtcbiAgICAgICAgICAgICAgICBpbkZvY3VzSWNvbih2KTtcbiAgICAgICAgICAgICAgICBzaG93RnVsbEljb25OYW1lKHYpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyAyLiDslYTsnbTsvZgg7Jm467aAIO2ZlOuptCDtgbTrpq3tlojsnYQg65WMXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG91dEZvY3VzSWNvbnMoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyAzLiDslYTsnbTsvZgg65Oc656Y6re4IOydtOuypO2KuCAoLmRlZmF1bHQtaWNvbiBkcmFnc3RhcnQgLT4gZG9jdW1lbnQgZHJhZ292ZXIgJiBkcm9wKVxuICAgICAgICAvLyBUT0RPLiDtjIzsnbwg7JWE7J207L2Y7J20IO2PtOuNlCDsnITroZwg7J2064+Z65CgIOqyveyasCDtj7TrjZQg7JWI7Jy866GcIOydtOuPmeuQmOuPhOuhnSDsiJjsoJVcbiAgICAgICAgLy8gVE9ETy4g7JWE7J207L2Y64G866asIOqyuey5mOyngCDslYrrj4TroZ0g7IiY7KCVXG4gICAgICAgIGljb25BcmVhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgIHYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGRyYWdzdGFydEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g7JWE7J207L2YIGluZGV4XG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbklkeCA9IE51bWJlci5wYXJzZUludCh2LmdldEF0dHJpYnV0ZShcImlkXCIpPy5zcGxpdChcIi1cIilbMV0gfHwgJzAnKTtcblxuICAgICAgICAgICAgICAgIC8vIO2VmOuCmOydmCBncmlkIGFyZWHsnZgg6rCA66GcL+yEuOuhnFxuICAgICAgICAgICAgICAgIGNvbnN0IE9ORV9HUklEX0FSRUFfV0lEVEggPSA4MDtcbiAgICAgICAgICAgICAgICBjb25zdCBPTkVfR1JJRF9BUkVBX0hFSUdIVCA9IDEwMDtcblxuICAgICAgICAgICAgICAgIC8vIOq4sOyhtCDslYTsnbTsvZgg6re466as65OcIGNvbHVtbiwgcm93IOyLnOyekeygkFxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZHcmlkQ29sdW1uU3RhcnQgPSBOdW1iZXIucGFyc2VJbnQodi5zdHlsZS5ncmlkQ29sdW1uU3RhcnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZHcmlkUm93U3RhcnQgPSBOdW1iZXIucGFyc2VJbnQodi5zdHlsZS5ncmlkUm93U3RhcnQpO1xuXG4gICAgICAgICAgICAgICAgLy8g6riw7KG0IOyVhOydtOy9mCDsnITsuZhcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2SWNvblBvcyA9IFtkcmFnc3RhcnRFdmVudC5jbGllbnRYLCBkcmFnc3RhcnRFdmVudC5jbGllbnRZXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJvb3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKSB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgICAgICAgICAgIGNvbnN0IGljb25EaXYgPSBnZXREcmFnSWNvbkVsKHYpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHNoaWZ0WCA9IGRyYWdzdGFydEV2ZW50LmNsaWVudFggLSB2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgICAgICAgICAgbGV0IHNoaWZ0WSA9IGRyYWdzdGFydEV2ZW50LmNsaWVudFkgLSB2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICAgICAgICAgICAgICAgIGRyYWdzdGFydEV2ZW50LmRhdGFUcmFuc2Zlcj8uc2V0RHJhZ0ltYWdlKGljb25EaXYsIHNoaWZ0WCwgc2hpZnRZKTtcblxuICAgICAgICAgICAgICAgIGlmIChkcmFnc3RhcnRFdmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZHJhZ3N0YXJ0RXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkcmFnb3ZlckZuID0gKGRyYWdvdmVyRXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkcmFnb3ZlckV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnb3ZlckZuKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGRyb3BFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkcm9wRXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDtgbTrpq0obW91c2Vkb3duKSDsnbTrsqTtirjqsIAg7KCB7Jqp65CcIOyXmOumrOuovO2KuOunjCDsnbTrj5lcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdjbGlja2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuTnOuemOq3uOqwgCDrgZ3rgpwg7ZuEIOyVhOydtOy9mCDsnITsuZhcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1ckljb25Qb3MgPSBbZHJvcEV2ZW50LmNsaWVudFgsIGRyb3BFdmVudC5jbGllbnRZXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6riw7KG0IOyVhOydtOy9mCDqt7jrpqzrk5wg7KKM7ZGc7JeQ7IScIOuqhyDrp4ztgbwg7JuA7KeB7JiA64qU7KeAXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZpbmdDb29yZGluYXRlc1ggPSBOdW1iZXIucGFyc2VJbnQoKChjdXJJY29uUG9zWzBdIC0gcHJldkljb25Qb3NbMF0pIC8gT05FX0dSSURfQVJFQV9XSURUSCkudG9GaXhlZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmluZ0Nvb3JkaW5hdGVzWSA9IE51bWJlci5wYXJzZUludCgoKGN1ckljb25Qb3NbMV0gLSBwcmV2SWNvblBvc1sxXSkgLyBPTkVfR1JJRF9BUkVBX0hFSUdIVCkudG9GaXhlZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g65Oc656Y6re46rCAIOuBneuCnCDtm4QgY29sdW1uLCByb3cg7Iuc7J6R7KCQXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmlkQ29sdW1uU3RhcnQgPSBwcmV2R3JpZENvbHVtblN0YXJ0ICsgbW92aW5nQ29vcmRpbmF0ZXNYO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JpZFJvd1N0YXJ0ID0gcHJldkdyaWRSb3dTdGFydCArIG1vdmluZ0Nvb3JkaW5hdGVzWTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB7IGdyaWRSb3dTdGFydCwgZ3JpZENvbHVtblN0YXJ0IH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0ljb25zID0gWy4uLmljb25zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ljb25zW2ljb25JZHhdID0gey4uLmljb25zW2ljb25JZHhdLCBzdHlsZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SWNvbnMobmV3SWNvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdvdmVyRm4pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByb290RWwucmVtb3ZlQ2hpbGQoaWNvbkRpdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyA0LiDslYTsnbTsvZgg642U67iU7YG066at7J2067Kk7Yq4XG4gICAgICAgIGljb25BcmVhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgIHYuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldk1vZGFscyA9IG1vZGFscztcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbElkeCA9IHByZXZNb2RhbHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbkltZyA9IHYuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYXR0cmlidXRlc1swXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uRmlnY2FwdGlvbiA9IHYuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpbWdTcmMgPSBpY29uSW1nLm5vZGVWYWx1ZSB8fCAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gdi5kYXRhc2V0Lmljb25OYW1lIHx8IGljb25GaWdjYXB0aW9uLmlubmVySFRNTCB8fCAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBleHBsYW5hdGlvbiA9IHYuZGF0YXNldC5pY29uRXhwbGFuYXRpb24gfHwgbmFtZTtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0ge1xuICAgICAgICAgICAgICAgICAgICBpZHg6IE51bWJlci5wYXJzZUludCh2LmdldEF0dHJpYnV0ZShcImlkXCIpPy5zcGxpdChcIi1cIilbMV0gfHwgJzAnKSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaW1nU3JjLFxuICAgICAgICAgICAgICAgICAgICBleHBsYW5hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgZ3JpZENvbHVtblN0YXJ0OiBOdW1iZXIucGFyc2VJbnQodi5zdHlsZS5ncmlkQ29sdW1uU3RhcnQpLCBncmlkUm93U3RhcnQ6IE51bWJlci5wYXJzZUludCh2LnN0eWxlLmdyaWRSb3dTdGFydCkgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25zdCB3aW5kb3dNb2RhbCA9IFdpbmRvd01vZGFsKHtpY29uLCBtb2RhbElkeH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd01vZGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld01vZGFscyA9IFsuLi5wcmV2TW9kYWxzLCB3aW5kb3dNb2RhbF07XG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFscyhuZXdNb2RhbHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgYWRkSWNvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkSWNvbkJ0blwiKTtcbiAgICAgICAgYWRkSWNvbkJ0bj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdJY29uID0ge1xuICAgICAgICAgICAgICAgIGlkeDogaWNvbnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwi7YyM7J28LnR4dFwiLFxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogSUNPTklORk8uVFhULmV4dGVuc3Rpb24sXG4gICAgICAgICAgICAgICAgdHlwZTogSUNPTklORk8uVFhULnR5cGUsXG4gICAgICAgICAgICAgICAgaW1nU3JjOiBJQ09OSU5GTy5UWFQuaW1nU3JjLFxuICAgICAgICAgICAgICAgIGV4cGxhbmF0aW9uOiBJQ09OSU5GTy5UWFQuZXhwbGFuYXRpb24sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtncmlkUm93U3RhcnQ6IGljb25zLmxlbmd0aCArIDEsIGdyaWRDb2x1bW5TdGFydDogMX0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2V0SWNvbnMoWy4uLmljb25zLCBuZXdJY29uXSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHVzZUV2ZW50cyhbaWNvbkNsaWNrRXZlbnRdKTtcblxuICAgIC8qXG4gICAgKiDslYTsnbTsvZgg65Oc656Y6re4IO2VoCDrlYwg7J2066+47KeAXG4gICAgKi9cbiAgICBjb25zdCBnZXREcmFnSWNvbkVsID0gKHY6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHJvb3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKSB8fCBkb2N1bWVudC5ib2R5O1xuXG4gICAgICAgIGNvbnN0IGljb25JbWcgPSB2LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmF0dHJpYnV0ZXNbMF07XG4gICAgICAgIGNvbnN0IGljb25GaWdjYXB0aW9uID0gdi5jaGlsZHJlblswXS5jaGlsZHJlblsxXTtcblxuICAgICAgICBjb25zdCBpbWdTcmMgPSBpY29uSW1nLm5vZGVWYWx1ZSB8fCAnJztcbiAgICAgICAgY29uc3QgbmFtZSA9IHYuZGF0YXNldC5pY29uTmFtZSB8fCBpY29uRmlnY2FwdGlvbi5pbm5lckhUTUwgfHwgJyc7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaWNvbkRpdi5jbGFzc0xpc3QuYWRkKFwiZGVmYXVsdC1pY29uXCIpO1xuICAgICAgICBpY29uRGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICBpY29uRGl2LnN0eWxlLndpZHRoID0gXCI4MHB4XCI7XG4gICAgICAgIGljb25EaXYuaW5uZXJIVE1MID0gZ2V0RHJhZ0ljb25Jbm5lckVsZW0obmFtZSwgaW1nU3JjKTtcblxuICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoaWNvbkRpdik7XG5cbiAgICAgICAgcmV0dXJuIGljb25EaXY7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RHJhZ0ljb25Jbm5lckVsZW0gPSAoaWNvbk5hbWU6IHN0cmluZywgaWNvbkltYWdlU3JjOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIChgXG4gICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpY29uSW1hZ2VTcmN9XCIgZHJhZ2dhYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj4ke2ljb25OYW1lfTwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPmBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8qXG4gICAgKiDslYTsnbTsvZgg7Lu07Y+s64SM7Yq4IFxuICAgICovXG4gICAgY29uc3QgaWNvblRlbXBsYXRlID0gKGljb246IElJY29ucywgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiAoYFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgaWQ9XCJpY29uLSR7aWNvbi5pZHh9XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImRlZmF1bHQtaWNvblwiXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgZGF0YS1pY29uLW5hbWU9XCIke2ljb24ubmFtZX1cIlxuICAgICAgICAgICAgICAgIGFyaWEtaWNvbi1leHBsYW5hdGlvbj1cIiR7aWNvbi5leHBsYW5hdGlvbn1cIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCIke2ljb24uZXhwbGFuYXRpb259XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImdyaWQtY29sdW1uLXN0YXJ0OiAke2ljb24uc3R5bGUuZ3JpZENvbHVtblN0YXJ0fTtncmlkLXJvdy1zdGFydDogJHtpY29uLnN0eWxlLmdyaWRSb3dTdGFydH07XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ljb24uaW1nU3JjfVwiIGRyYWdnYWJsZT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7aWNvbi5uYW1lLnN1YnN0cmluZygwLCA4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICR7aWNvbi5uYW1lLmxlbmd0aCA+IDggPyAnLi4uJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPmBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIGA8b2xcbiAgICAgICAgICAgIGNsYXNzPVwibWFpbi1zY3JlZW4tY29udGFpbmVyXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLrsJTtg5XtmZTrqbRcIlxuICAgICAgICA+XG4gICAgICAgICAgICAke2ljb25zLm1hcCgoaWNvbjogSUljb25zLCBpOiBudW1iZXIpID0+IGljb25UZW1wbGF0ZShpY29uLCBpKSkuam9pbignJyl9XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWRkSWNvbkJ0blwiPuy2lOqwgDwvYnV0dG9uPlxuICAgICAgICA8L29sPlxuICAgICAgICAke21vZGFscy5tYXAoKG1vZGFsOiBzdHJpbmcpID0+IG1vZGFsKS5qb2luKCcnKX1gXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29ucztcbiIsImltcG9ydCB7IHVzZUV2ZW50cywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCIuLi8uLi9jb3JlL0N1c3RvbVJlYWN0XCI7XG5pbXBvcnQgeyBJSWNvbnMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvY29tcG9uZW50cy9jb21tb24vaWNvbnNcIjtcblxuaW50ZXJmYWNlIElXaW5kb3dNb2RhbCB7XG4gICAgaWNvbjogSUljb25zO1xuICAgIG1vZGFsSWR4OiBudW1iZXI7XG4gICAgbWFpbj86IEVsZW1lbnQ7XG4gICAgZm9vdGVyPzogRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gV2luZG93TW9kYWwgKHtpY29uLCBtb2RhbElkeCwgbWFpbiwgZm9vdGVyfTogSVdpbmRvd01vZGFsKSB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKFwiV2luZG93TW9kYWxcIiwgdHJ1ZSk7XG4gICAgY29uc3QgW21vZGFsSW5kZXgsIHNldE1vZGFsSW5kZXhdID0gdXNlU3RhdGUoXCJXaW5kb3dNb2RhbFwiLCBtb2RhbElkeCk7XG4gICAgXG4gICAgY29uc3QgW21vZGFsU2l6ZSwgc2V0TW9kYWxTaXplXSA9IHVzZVN0YXRlKFwiV2luZG93TW9kYWxcIiwgeyB3aWR0aDogNDAwLCBoZWlnaHQ6IDMwMCB9KTtcbiAgICBjb25zdCBbbW9kYWxUcmFuc2xhdGUsIHNldE1vZGFsVHJhbnNsYXRlXSA9IHVzZVN0YXRlKFwiV2luZG93TW9kYWxcIiwgeyBYOiA0MDAsIFk6IDQwMCB9KTtcblxuICAgIGNvbnN0IFtpc0Z1bGxTaXplLCBzZXRJc0Z1bGxTaXplXSA9IHVzZVN0YXRlKFwiV2luZG93TW9kYWxcIiwgZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtb2RhbElkeFwiLCBtb2RhbElkeCk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRUcmFuc2xhdGUgPSB7IFg6IG1vZGFsVHJhbnNsYXRlLlggKyAyMCAqIG1vZGFsSWR4LCBZOiBtb2RhbFRyYW5zbGF0ZS5ZICsgMjAgKiBtb2RhbElkeCB9O1xuICAgICAgICBzZXRNb2RhbFRyYW5zbGF0ZShkZWZhdWx0VHJhbnNsYXRlKTtcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vXG4gICAgfSwgW21vZGFsU2l6ZS53aWR0aCwgbW9kYWxTaXplLmhlaWdodCwgbW9kYWxUcmFuc2xhdGUuWCwgbW9kYWxUcmFuc2xhdGUuWV0pXG5cbiAgICBjb25zdCBtb2RhbENvbW1vbkV2ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtaW5pbWl6ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWluaW1pemVCdG5cIik7XG4gICAgICAgIGNvbnN0IG1heGltaXplQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXhpbWl6ZUJ0blwiKTtcbiAgICAgICAgY29uc3QgcmVzdG9yZURvd25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3RvcmVEb3duQnRuXCIpO1xuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VCdG5cIik7XG5cbiAgICAgICAgaWYgKG1heGltaXplQnRuKSB7XG4gICAgICAgICAgICBtYXhpbWl6ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgICAgICAgICBzZXRJc0Z1bGxTaXplKHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0b3JlRG93bkJ0bikge1xuICAgICAgICAgICAgcmVzdG9yZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgICAgICAgICAgICAgc2V0SXNGdWxsU2l6ZShmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsb3NlQnRuKSB7XG4gICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsb3NlIE1vZGFsSWR4XCIsIG1vZGFsSW5kZXgpO1xuICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHVzZUV2ZW50cyhbbW9kYWxDb21tb25FdmVudF0pO1xuXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgYDxkaXZcbiAgICAgICAgICAgICAgICBpZD1cIndpbmRvdy1tb2RhbC0ke21vZGFsSW5kZXh9XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIndpbmRvdy1tb2RhbFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogJHttb2RhbFNpemUud2lkdGh9cHg7IGhlaWdodDogJHttb2RhbFNpemUuaGVpZ2h0fXB4OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgke21vZGFsVHJhbnNsYXRlLlh9cHgsICR7bW9kYWxUcmFuc2xhdGUuWX1weClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtb2RhbC1oZWFkZXIgc3RvcC1kcmFnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXItbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ljb24uaW1nU3JjfVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtpY29uLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1pbmltaXplQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cIndpZHRoOiAxNnB4O2hlaWdodDogMTZweDtcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT53aW5kb3ctbWluaW1pemU8L3RpdGxlPjxwYXRoIGQ9XCJNMjAsMTRINFYxMEgyMFwiIC8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7aXNGdWxsU2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJzxidXR0b24gaWQ9XCJyZXN0b3JlRG93bkJ0blwiPjxzdmcgc3R5bGU9XCJ3aWR0aDogMTZweDtoZWlnaHQ6IDE2cHg7XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZG9jay13aW5kb3c8L3RpdGxlPjxwYXRoIGQ9XCJNMTggMThWMjBINEEyIDIgMCAwIDEgMiAxOFY4SDRWMThNMjIgNlYxNEEyIDIgMCAwIDEgMjAgMTZIOEEyIDIgMCAwIDEgNiAxNFY2QTIgMiAwIDAgMSA4IDRIMjBBMiAyIDAgMCAxIDIyIDZNMjAgNkg4VjE0SDIwWlwiIC8+PC9zdmc+PC9idXR0b24+J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzxidXR0b24gaWQ9XCJtYXhpbWl6ZUJ0blwiPjxzdmcgc3R5bGU9XCJ3aWR0aDogMTZweDtoZWlnaHQ6IDE2cHg7XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+c3F1YXJlLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMywzSDIxVjIxSDNWM001LDVWMTlIMTlWNUg1WlwiIC8+PC9zdmc+PC9idXR0b24+J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cIndpZHRoOiAxNnB4O2hlaWdodDogMTZweDtcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT53aW5kb3ctY2xvc2U8L3RpdGxlPjxwYXRoIGQ9XCJNMTMuNDYsMTJMMTksMTcuNTRWMTlIMTcuNTRMMTIsMTMuNDZMNi40NiwxOUg1VjE3LjU0TDEwLjU0LDEyTDUsNi40NlY1SDYuNDZMMTIsMTAuNTRMMTcuNTQsNUgxOVY2LjQ2TDEzLjQ2LDEyWlwiIC8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPG1haW4+PC9tYWluPlxuICAgICAgICAgICAgICAgIDxmb290ZXI+PC9mb290ZXI+XG4gICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICBgJHtpc09wZW4gPyBtb2RhbENvbnRlbnQoKSA6ICcnfWBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvd01vZGFsOyIsIi8qXG4qIOumrOyVoe2KuCBob29rcyDqsITri6jtnogg6rWs7ZiEXG4qL1xuZnVuY3Rpb24gQ3VzdG9tUmVhY3QgKCkge1xuICAgIGxldCByb290OiBFbGVtZW50IHwgYW55ID0gbnVsbDtcbiAgICBsZXQgcm9vdENvbXBvbmVudDogRWxlbWVudCB8IGFueSA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgY3VyU3RhdGVzSWR4ID0gbmV3IE1hcCgpO1xuXG4gICAgbGV0IGV2ZW50czogQXJyYXk8RnVuY3Rpb24+ID0gW107XG5cbiAgICBsZXQgbW91bnRFZmZlY3RzOiBBcnJheTxGdW5jdGlvbj4gPSBbXTtcblxuICAgIGNvbnN0IGVmZmVjdERlcGVuZGVuY2llczogYW55W10gPSBbXTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGN1ckVmZmVjdElkeDogMCxcbiAgICAgICAgcmVuZGVyQ291bnQ6IDAsXG4gICAgfVxuXG4gICAgLypcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzXG4gICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAxLiByZW5kZXJcbiAgICAqIHJlbmRlcjogcm9vdOqwgCDrkJjripQg7JeY66as66i87Yq466W8IOugjOuNlOunge2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHJlbmRlciA9IChyb290RWw6IEVsZW1lbnQgfCBhbnksIHJvb3RDb21wb25lbnRFbDogRWxlbWVudCB8IGFueSkgPT4ge1xuICAgICAgICBpZiAocm9vdEVsKSB7XG4gICAgICAgICAgICByb290ID0gcm9vdEVsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3RDb21wb25lbnRFbCkge1xuICAgICAgICAgICAgcm9vdENvbXBvbmVudCA9IHJvb3RDb21wb25lbnRFbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgX3JlbmRlcigpO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAyLiB1c2VFdmVudHNcbiAgICAqIHVzZUV2ZW50czog7Lu07Y+s64SM7Yq466W8IOuqqOuRkCDroIzrjZTrp4HtlZwg7ZuEIOydtOuypO2KuOulvCDrk7HroZ3tlaAg7IiYIOyeiOuPhOuhnSDrj4TsmYDso7zripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCB1c2VFdmVudHMgPSAoZXZlbnRGbnM6IEFycmF5PEZ1bmN0aW9uPikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndXNlRXZlbnRzJywgZXZlbnRGbnMpO1xuICAgICAgICBldmVudHMgPSBbLi4uZXZlbnRzLCAuLi5ldmVudEZuc107XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzIDMuIHVzZVN0YXRlXG4gICAgKiB1c2VTdGF0ZTogc3RhdGUg6rSA66as7ZWY64+E66GdIOuPhOyZgOyjvOuKlCDrqZTshJzrk5xcbiAgICAqIO2BtOuhnOyggCjtlajsiJgg7ISg7Ja47Iuc7J2YIOyKpOy9lO2UhOulvCDquLDslrXtlZjripQg7J6Q67CU7Iqk7YGs66a97Yq47J2YIO2KueynlSnrpbwg7Zmc7JqpXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gY2FsbGVyIHVzZVN0YXRl66W8IO2YuOy2nO2VnCDsu7Ttj6zrhIztirgo7ZWo7IiYKeuqhVxuICAgICogQHBhcmFtIHthbnl9IGluaXRTdGF0ZSDstIjquLDtmZTtlaAgc3RhdGVcbiAgICAqL1xuICAgIGNvbnN0IHVzZVN0YXRlID0gKGNhbGxlcjogc3RyaW5nLCBpbml0U3RhdGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAoIXN0YXRlcy5nZXQoY2FsbGVyKSkge1xuICAgICAgICAgICAgc3RhdGVzLnNldChjYWxsZXIsIFtdKTtcbiAgICAgICAgICAgIGN1clN0YXRlc0lkeC5zZXQoY2FsbGVyLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJTdGF0ZUlkeCA9IGN1clN0YXRlc0lkeC5nZXQoY2FsbGVyKTtcblxuICAgICAgICBpZiAoIXN0YXRlcy5nZXQoY2FsbGVyKVtjdXJTdGF0ZUlkeF0pIHtcbiAgICAgICAgICAgIHN0YXRlcy5nZXQoY2FsbGVyKVtjdXJTdGF0ZUlkeF0gPSBpbml0U3RhdGU7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdGF0ZXMuZ2V0KGNhbGxlcilbY3VyU3RhdGVJZHhdO1xuXG4gICAgICAgIGNvbnN0IHNldFN0YXRlID0gKG5ld1N0YXRlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHN0YXRlcy5nZXQoY2FsbGVyKVtjdXJTdGF0ZUlkeF0gPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXRTdGF0ZScsIGNhbGxlciwgY3VyU3RhdGVJZHgsIG5ld1N0YXRlKTtcblxuICAgICAgICAgICAgX3JlbmRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VyU3RhdGVzSWR4LnNldChjYWxsZXIsIGN1clN0YXRlSWR4ICsgMSk7XG4gICAgICAgIHJldHVybiBbIHN0YXRlLCBzZXRTdGF0ZSBdO1xuICAgIH1cblxuICAgIC8qIFxuICAgICogQ3VzdG9tUmVhY3QgaG9va3MgNC4gdXNlRWZmZWN0XG4gICAgKiB1c2VFZmZlY3Q6IGRlcGVuZGVuY3kg67Cw7Je07J2YIOqwkuuTpOyXkCDrs4Dqsr3snbQg7IOd6rK87J2EIOqyveyasCBjYWxsYmFja+ydhCDsi6TtlontlZjripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCB1c2VFZmZlY3QgPSAoY2FsbGJhY2s6IEZ1bmN0aW9uLCBkZXBlbmRlbmNpZXM6IEFycmF5PGFueT4pID0+IHtcbiAgICAgICAgLy8gMS4gZGVwZW5kZW5jeeqwgCDsl4bsnYQg6rK97JqwIGNhbGxiYWNrIOuwlOuhnCDsi6TtlokgKG1vdW50IOuQmOyXiOydhCDrlYwg7Iuk7ZaJKVxuICAgICAgICAvLyBleC4gdXNlRWZmZWN0KCgpID0+IHt9LCBbXSlcbiAgICAgICAgaWYgKGRlcGVuZGVuY2llcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIG1vdW50RWZmZWN0cy5wdXNoKGNhbGxiYWNrKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMi4gZGVwZW5kZW5jeeqwgCDsnojsnYQg6rK97JqwIGRlcGVuZGVuY3kg67OA6rK9IOyLnOyXkOunjCBjYWxsYmFjayDsi6TtlolcbiAgICAgICAgLy8gZXguIHVzZUVmZmVjdCgoKSA9PiB7fSwgW2EsIGIsIC4uLiwgel0pXG4gICAgICAgIGNvbnN0IHsgY3VyRWZmZWN0SWR4IH0gPSBvcHRpb25zO1xuXG4gICAgICAgIGlmIChlZmZlY3REZXBlbmRlbmNpZXMubGVuZ3RoID09PSBjdXJFZmZlY3RJZHgpIHtcbiAgICAgICAgICAgIGVmZmVjdERlcGVuZGVuY2llcy5wdXNoKGRlcGVuZGVuY2llcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJlZmZlY3REZXBlbmRlbmNpZXNcIiwgZWZmZWN0RGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBjb25zdCBkZXBlbmRlbmN5ID0gZWZmZWN0RGVwZW5kZW5jaWVzW2N1ckVmZmVjdElkeF07XG5cbiAgICAgICAgbGV0IGhhc0NoYW5nZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChkZXBlbmRlbmN5KSB7XG4gICAgICAgICAgICAvLyBBcnJheS5wcm90b3R5cGUuc29tZTog7YyQ67OEIO2VqOyImCDsoIHslrTrj4Qg7ZWY64KY652864+EIO2GteqzvO2VmOuKlOyngCDssrTtgaxcbiAgICAgICAgICAgIC8vIE9iamVjdC5pczog65GQIOqwnOydmCDtjIzrnbzrr7jthLDqsIAg64+Z7J287ZWc7KeAIOyytO2BrFxuICAgICAgICAgICAgLy8g7KaJLCDquLDsobQgZGVwZW5kZW5jeeyZgCDsg4jroZwg67Cb7J2AIGRlcGVuZGVuY3kg7IKs7J207JeQIOywqOydtOqwgCDtlZjrgpjrnbzrj4Qg7J6I64qUIOqyveyasCB0cnVl66W8IOuwmO2ZmFxuICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IGRlcGVuZGVuY2llcy5zb21lKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFPYmplY3QuaXModiwgZGVwZW5kZW5jeVtpXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGFzQ2hhbmdlZFwiLCBoYXNDaGFuZ2VkKTtcblxuICAgICAgICBpZiAoaGFzQ2hhbmdlZCkge1xuICAgICAgICAgICAgZWZmZWN0RGVwZW5kZW5jaWVzW2N1ckVmZmVjdElkeF0gPSBkZXBlbmRlbmNpZXM7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5jdXJFZmZlY3RJZHggKz0gMTtcbiAgICB9XG5cbiAgICAvKlxuICAgICogQ3VzdG9tUmVhY3Qg64K067aAIO2VqOyImFxuICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICogZGVib3VuY2VGcmFtZTogMey0iOuLuSDrlJTsiqTtlIzroIjsnbQg7KO87IKs7Jyo66eM7YG8IOyLpO2Wie2VmOqyjCDtlZjsl6wg7KeA64KY7LmcIOugjOuNlOungeydhCDrsKnsp4DtlZjquLAg7JyE7ZWcIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgZGVib3VuY2VGcmFtZSA9IChjYWxsYmFjazogRnJhbWVSZXF1ZXN0Q2FsbGJhY2spID0+IHtcbiAgICAgICAgbGV0IG5leHRGcmFtZUNhbGxiYWNrID0gLTE7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUobmV4dEZyYW1lQ2FsbGJhY2spO1xuICAgICAgICAgIG5leHRGcmFtZUNhbGxiYWNrID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLypcbiAgICAqIHJlZ2lzdGVyRXZlbnRzOiDsnbTrsqTtirgg7ZWo7IiYIOuTseuhneydhCDsnITtlbQg7Iuk7ZaJ7ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgcmVnaXN0ZXJFdmVudHMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChldmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50cycsIGV2ZW50cyk7XG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaCgoZXZlbnRGbikgPT4gZXZlbnRGbigpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgKiBleGVjdXRlTW91bnRFZmZlY3RzOiBtb3VudCDsi5wg7Iuk7ZaJ7ZWgIOuplOyEnOuTnOuTpOydhCDsi6TtlontlZjripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCBleGVjdXRlTW91bnRFZmZlY3RzID0gKCkgPT4ge1xuICAgICAgICBpZiAobW91bnRFZmZlY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGVjdXRlTW91bnRFZmZlY3RzJywgbW91bnRFZmZlY3RzKTtcbiAgICAgICAgICAgIG1vdW50RWZmZWN0cy5mb3JFYWNoKChtb3VudEVmRm4pID0+IG1vdW50RWZGbigpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgKiBfcmVuZGVyOiDsi6Tsp4jsoIHsnLzroZwg66as7JWh7Yq4IOuCtOu2gOyXkOyEnCDroIzrjZTrp4HsnYQg64u064u57ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgX3JlbmRlciA9IGRlYm91bmNlRnJhbWUoKCkgPT4ge1xuICAgICAgICBpZiAoIXJvb3QgfHwgIXJvb3RDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIO2ZlOuptCDroIzrjZTrp4FcbiAgICAgICAgcm9vdC5pbm5lckhUTUwgPSByb290Q29tcG9uZW50KCk7XG5cbiAgICAgICAgLy8g7J2067Kk7Yq4IOuTseuhnVxuICAgICAgICByZWdpc3RlckV2ZW50cygpO1xuICAgICAgICAvLyDrp4jsmrTtirgg7IucIOyLpO2WieyLnO2CrCDsvZzrsLEg7ZWo7IiYIOyLpO2WiVxuICAgICAgICBleGVjdXRlTW91bnRFZmZlY3RzKCk7XG4gICAgICAgIFxuICAgICAgICAvLyDrs4DsiJgg7LSI6riw7ZmUXG4gICAgICAgIGNvbnN0IGNhbGxlcnNOYW1lID0gW107XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgX10gb2Ygc3RhdGVzKSB7XG4gICAgICAgICAgICBjYWxsZXJzTmFtZS5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGVyc05hbWUuZm9yRWFjaCgoY2FsbGVyKSA9PiB7XG4gICAgICAgICAgICBjdXJTdGF0ZXNJZHguc2V0KGNhbGxlciwgMCk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlcy5lbnRyaWVzKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJTdGF0ZXNJZHguZW50cmllcygpKTtcblxuICAgICAgICBvcHRpb25zLmN1ckVmZmVjdElkeCA9IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKCdfcmVuZGVyIGN1ckVmZmVjdElkeCcsIG9wdGlvbnMuY3VyRWZmZWN0SWR4KTtcblxuICAgICAgICBldmVudHMgPSBbXTtcbiAgICAgICAgbW91bnRFZmZlY3RzID0gW107XG5cbiAgICAgICAgLy8g66CM642U66eBIO2an+yImCDtmZXsnbhcbiAgICAgICAgb3B0aW9ucy5yZW5kZXJDb3VudCArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZygnX3JlbmRlciByZW5kZXJDb3VudCcsIG9wdGlvbnMucmVuZGVyQ291bnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgcmVuZGVyLCB1c2VFdmVudHMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfTtcbn1cblxuXG5jb25zdCB7IHJlbmRlciwgdXNlRXZlbnRzLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSBDdXN0b21SZWFjdCgpO1xuZXhwb3J0IHsgcmVuZGVyLCB1c2VFdmVudHMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tUmVhY3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9jb3JlL0N1c3RvbVJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0FwcFwiO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpO1xuaWYgKHJvb3QpIHtcbiAgICByZW5kZXIocm9vdCwgQ29udGFpbmVyKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9