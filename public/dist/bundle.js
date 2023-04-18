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
                style: { gridRowStart: 1, gridColumnStart: 3 },
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
    const [modalWidth, setModalWidth] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", 400);
    const [modalHeight, setModalHeight] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", 300);
    const [modalTranslatX, setModalTranslatX] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", 400);
    const [modalTranslatY, setModalTranslatY] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", 400);
    const [isFullSize, setIsFullSize] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", false);
    // useEffect(() => {
    //     const cssText = `width: ${modalWidth}px;height: ${modalHeight}px; transform: translate(${modalTranslatX}px, ${modalTranslatY}px)`;
    //     const windowModal = document.querySelector<HTMLElement>(`#window-modal-${modalIndex}`);
    //     console.dir(windowModal);
    //     if (windowModal) {
    //         console.log('cssText', cssText);
    //         windowModal.style.cssText = cssText;
    //     }
    // }, [])
    // useEffect(() => {
    //     const cssText = `width: ${modalWidth}px;height: ${modalHeight}px; transform: translate(${modalTranslatX}px, ${modalTranslatY}px)`;
    //     const windowModal = document.querySelector<HTMLElement>(`#window-modal-${modalIndex}`);
    //     console.dir(windowModal);
    //     if (windowModal) {
    //         windowModal.style.cssText = cssText;
    //     }
    // }, [modalWidth, modalHeight, modalTranslatX, modalTranslatY])
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
                style="width: ${modalWidth}px; height: ${modalHeight}px; transform: translate(${modalTranslatX}px, ${modalTranslatY}px)"
            >
                <header class="modal-header">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0lBQzVELENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO0FBQ3RELENBQUM7QUFHRCxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsV0FBVyxFQUFFLENBQUM7QUFDZjtBQUVsRCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7VUN6TTNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ2Q7QUFFOUIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QyxJQUFJLElBQUksRUFBRTtJQUNOLHlEQUFNLENBQUMsSUFBSSxFQUFFLDRDQUFTLENBQUM7Q0FDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL2NvbnN0YW50cy9jb21wb25lbnRzL2NvbW1vbi9pY29uLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL0FwcC50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9jb21wb25lbnRzL2NvbW1vbi9JY29ucy50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9jb21wb25lbnRzL2NvbW1vbi9XaW5kb3dNb2RhbC50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9jb3JlL0N1c3RvbVJlYWN0LnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgSUNPTklORk8gPSB7XG4gICAgSU5URVJORVQ6IHtcbiAgICAgICAgdHlwZTogXCJJTlRFUk5FVFwiLFxuICAgICAgICBleHRlbnN0aW9uOiBcIlwiLFxuICAgICAgICBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1pbnRlcm5ldC5wbmdcIixcbiAgICAgICAgZXhwbGFuYXRpb246IFwi7J247YSw64S3IOyVhOydtOy9mFwiLFxuICAgIH0sXG4gICAgRk9MREVSOiB7XG4gICAgICAgIHR5cGU6IFwiRk9MREVSXCIsXG4gICAgICAgIGV4dGVuc3Rpb246IFwiXCIsXG4gICAgICAgIGltZ1NyYzogXCIuL2Fzc2V0cy9pY29ucy9pY29uLWZvbGRlci5wbmdcIixcbiAgICAgICAgZXhwbGFuYXRpb246IFwi7Y+0642UIOyVhOydtOy9mFwiLFxuICAgIH0sXG4gICAgVFhUOiB7XG4gICAgICAgIHR5cGU6IFwiVFhUXCIsXG4gICAgICAgIGV4dGVuc3Rpb246IFwidHh0XCIsXG4gICAgICAgIGltZ1NyYzogXCIuL2Fzc2V0cy9pY29ucy9pY29uLWZpbGUtZG9jdW1lbnQucG5nXCIsXG4gICAgICAgIGV4cGxhbmF0aW9uOiBcIu2FjeyKpO2KuCDtjIzsnbwg7JWE7J207L2YXCIsXG4gICAgfSxcbn0iLCJpbXBvcnQgSWNvbnMgZnJvbSBcIi4vY29tcG9uZW50cy9jb21tb24vSWNvbnNcIjtcblxuZnVuY3Rpb24gQ29udGFpbmVyKCkge1xuICAgIHJldHVybiAoYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAke0ljb25zKCl9XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwic3RhdHVzLWNvbnRhaW5lclwiIGFyaWEtbGFiZWw9XCLtlZjri6gg7IOB7YOcIOywvVwiPjwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7IiwiaW1wb3J0IHsgdXNlRXZlbnRzLCB1c2VTdGF0ZSB9IGZyb20gXCIuLi8uLi9jb3JlL0N1c3RvbVJlYWN0XCI7XG5pbXBvcnQgeyBJSWNvbnMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvY29tcG9uZW50cy9jb21tb24vaWNvbnNcIjtcbmltcG9ydCB7IElDT05JTkZPIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9jb21wb25lbnRzL2NvbW1vbi9pY29uXCI7XG5pbXBvcnQgV2luZG93TW9kYWwgZnJvbSBcIi4vV2luZG93TW9kYWxcIjtcblxuLypcbiog7JWE7J207L2YIOy7tO2PrOuEjO2KuFxuKi9cbmZ1bmN0aW9uIEljb25zICgpIHtcbiAgICAvKlxuICAgICog6riw67O4IOyVhOydtOy9mCDsoJXrs7RcbiAgICAqL1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWR4OiAwLFxuICAgICAgICAgICAgbmFtZTogXCLsnbjthLDrhLcg7J217Iqk7ZSM66Gc65+sXCIsXG4gICAgICAgICAgICBleHRlbnN0aW9uOiBJQ09OSU5GTy5JTlRFUk5FVC5leHRlbnN0aW9uLFxuICAgICAgICAgICAgdHlwZTogSUNPTklORk8uSU5URVJORVQudHlwZSxcbiAgICAgICAgICAgIGltZ1NyYzogSUNPTklORk8uSU5URVJORVQuaW1nU3JjLFxuICAgICAgICAgICAgZXhwbGFuYXRpb246IElDT05JTkZPLklOVEVSTkVULmV4cGxhbmF0aW9uLFxuICAgICAgICAgICAgc3R5bGU6IHsgZ3JpZFJvd1N0YXJ0OiAxLCBncmlkQ29sdW1uU3RhcnQ6IDEgfSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIGlkeDogMSxcbiAgICAgICAgICAgIG5hbWU6IFwi64K0IOusuOyEnFwiLFxuICAgICAgICAgICAgZXh0ZW5zaW9uOiBJQ09OSU5GTy5GT0xERVIuZXh0ZW5zdGlvbixcbiAgICAgICAgICAgIHR5cGU6IElDT05JTkZPLkZPTERFUi50eXBlLFxuICAgICAgICAgICAgaW1nU3JjOiBJQ09OSU5GTy5GT0xERVIuaW1nU3JjLFxuICAgICAgICAgICAgZXhwbGFuYXRpb246IElDT05JTkZPLkZPTERFUi5leHBsYW5hdGlvbixcbiAgICAgICAgICAgIHN0eWxlOiB7IGdyaWRSb3dTdGFydDogMiwgZ3JpZENvbHVtblN0YXJ0OiAxIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkeDogMixcbiAgICAgICAgICAgIG5hbWU6IFwi7YyM7J28LnR4dFwiLFxuICAgICAgICAgICAgZXh0ZW5zaW9uOiBJQ09OSU5GTy5UWFQuZXh0ZW5zdGlvbixcbiAgICAgICAgICAgIHR5cGU6IElDT05JTkZPLlRYVC50eXBlLFxuICAgICAgICAgICAgaW1nU3JjOiBJQ09OSU5GTy5UWFQuaW1nU3JjLFxuICAgICAgICAgICAgZXhwbGFuYXRpb246IElDT05JTkZPLlRYVC5leHBsYW5hdGlvbixcbiAgICAgICAgICAgIHN0eWxlOiB7IGdyaWRSb3dTdGFydDogMywgZ3JpZENvbHVtblN0YXJ0OiAxIH0sXG4gICAgICAgIH0sXG4gICAgXVxuXG4gICAgY29uc3QgW2ljb25zLCBzZXRJY29uc10gPSB1c2VTdGF0ZShcIkljb25zXCIsIGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgW21vZGFscywgc2V0TW9kYWxzXSA9IHVzZVN0YXRlKFwiSWNvbnNcIiwgW10pO1xuXG4gICAgLypcbiAgICAqIOydtOuypO2KuCDrk7HroZ1cbiAgICAqL1xuICAgIGNvbnN0IGljb25DbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgICAgICAvKlxuICAgICAgICAqIOyVhOydtOy9mCDtgbTrpq0g7J2067Kk7Yq4IOq0gOugqCDrqZTshJzrk5xcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgaWNvbkFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5kZWZhdWx0LWljb25cIik7XG5cbiAgICAgICAgLypcbiAgICAgICAgKiDslYTsnbTsvZgg7J2066aEIOq0gOugqCAo7J2066aE7J20IOq4uCDqsr3smrAg7YG066atIOyLnOyXkCDtkoDrhKTsnoQpXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IGFiYnJldmlhdGVJY29uTmFtZSA9ICh2OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWNvbkZpZ2NhcHRpb24gPSB2LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdO1xuXG4gICAgICAgICAgICBjb25zdCBmdWxsSWNvbk5hbWUgPSB2LmRhdGFzZXQuaWNvbk5hbWUgfHwgaWNvbkZpZ2NhcHRpb24uaW5uZXJIVE1MO1xuICAgICAgICAgICAgY29uc3Qgc2hvcnROYW1lID0gYCR7ZnVsbEljb25OYW1lLnN1YnN0cmluZygwLCA4KX0uLi5gO1xuXG4gICAgICAgICAgICBpZiAoZnVsbEljb25OYW1lLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgICAgICAgICBpY29uRmlnY2FwdGlvbi5pbm5lckhUTUwgPSBzaG9ydE5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG93RnVsbEljb25OYW1lID0gKHY6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpY29uRmlnY2FwdGlvbiA9IHYuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV07XG4gICAgICAgICAgICBjb25zdCBmdWxsSWNvbk5hbWUgPSB2LmRhdGFzZXQuaWNvbk5hbWUgfHwgaWNvbkZpZ2NhcHRpb24uaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICBpZiAoZnVsbEljb25OYW1lLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgICAgICAgICBpY29uRmlnY2FwdGlvbi5pbm5lckhUTUwgPSBmdWxsSWNvbk5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIOyVhOydtOy9mCDtgbTrpq0g7YG0656Y7IqkIOq0gOugqCAo7YG066at65CY7JeI7J2EIOuVjCBjbGlja2VkIO2BtOuemOyKpCDstpTqsIApXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IGluRm9jdXNJY29uID0gKHY6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHYuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3V0Rm9jdXNJY29ucyA9ICgpID0+IHtcbiAgICAgICAgICAgIGljb25BcmVhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodi5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2NsaWNrZWQnKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGFiYnJldmlhdGVJY29uTmFtZSh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gMS4g7JWE7J207L2YIO2BtOumre2WiOydhCDrlYxcbiAgICAgICAgaWNvbkFyZWEuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgICAgdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgb3V0Rm9jdXNJY29ucygpO1xuICAgICAgICAgICAgICAgIGluRm9jdXNJY29uKHYpO1xuICAgICAgICAgICAgICAgIHNob3dGdWxsSWNvbk5hbWUodik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIDIuIOyVhOydtOy9mCDsmbjrtoAg7ZmU66m0IO2BtOumre2WiOydhCDrlYxcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3V0Rm9jdXNJY29ucygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDMuIOyVhOydtOy9mCDrk5zrnpjqt7gg7J2067Kk7Yq4ICguZGVmYXVsdC1pY29uIGRyYWdzdGFydCAtPiBkb2N1bWVudCBkcmFnb3ZlciAmIGRyb3ApXG4gICAgICAgIC8vIFRPRE8uIO2MjOydvCDslYTsnbTsvZjsnbQg7Y+0642UIOychOuhnCDsnbTrj5nrkKAg6rK97JqwIO2PtOuNlCDslYjsnLzroZwg7J2064+Z65CY64+E66GdIOyImOyglVxuICAgICAgICAvLyBUT0RPLiDslYTsnbTsvZjrgbzrpqwg6rK57LmY7KeAIOyViuuPhOuhnSDsiJjsoJVcbiAgICAgICAgaWNvbkFyZWEuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgICAgdi5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZHJhZ3N0YXJ0RXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDslYTsnbTsvZggaW5kZXhcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uSWR4ID0gTnVtYmVyLnBhcnNlSW50KHYuZ2V0QXR0cmlidXRlKFwiaWRcIik/LnNwbGl0KFwiLVwiKVsxXSB8fCAnMCcpO1xuXG4gICAgICAgICAgICAgICAgLy8g7ZWY64KY7J2YIGdyaWQgYXJlYeydmCDqsIDroZwv7IS466GcXG4gICAgICAgICAgICAgICAgY29uc3QgT05FX0dSSURfQVJFQV9XSURUSCA9IDgwO1xuICAgICAgICAgICAgICAgIGNvbnN0IE9ORV9HUklEX0FSRUFfSEVJR0hUID0gMTAwO1xuXG4gICAgICAgICAgICAgICAgLy8g6riw7KG0IOyVhOydtOy9mCDqt7jrpqzrk5wgY29sdW1uLCByb3cg7Iuc7J6R7KCQXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkdyaWRDb2x1bW5TdGFydCA9IE51bWJlci5wYXJzZUludCh2LnN0eWxlLmdyaWRDb2x1bW5TdGFydCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkdyaWRSb3dTdGFydCA9IE51bWJlci5wYXJzZUludCh2LnN0eWxlLmdyaWRSb3dTdGFydCk7XG5cbiAgICAgICAgICAgICAgICAvLyDquLDsobQg7JWE7J207L2YIOychOy5mFxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZJY29uUG9zID0gW2RyYWdzdGFydEV2ZW50LmNsaWVudFgsIGRyYWdzdGFydEV2ZW50LmNsaWVudFldO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpIHx8IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbkRpdiA9IGdldERyYWdJY29uRWwodik7XG5cbiAgICAgICAgICAgICAgICBsZXQgc2hpZnRYID0gZHJhZ3N0YXJ0RXZlbnQuY2xpZW50WCAtIHYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgICAgICAgICBsZXQgc2hpZnRZID0gZHJhZ3N0YXJ0RXZlbnQuY2xpZW50WSAtIHYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuXG4gICAgICAgICAgICAgICAgZHJhZ3N0YXJ0RXZlbnQuZGF0YVRyYW5zZmVyPy5zZXREcmFnSW1hZ2UoaWNvbkRpdiwgc2hpZnRYLCBzaGlmdFkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRyYWdzdGFydEV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgICAgICAgICAgICBkcmFnc3RhcnRFdmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdvdmVyRm4gPSAoZHJhZ292ZXJFdmVudDogRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRyYWdvdmVyRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdvdmVyRm4pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZHJvcEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3BFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIO2BtOumrShtb3VzZWRvd24pIOydtOuypO2KuOqwgCDsoIHsmqnrkJwg7JeY66as66i87Yq466eMIOydtOuPmVxuICAgICAgICAgICAgICAgICAgICBpZiAodi5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2NsaWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g65Oc656Y6re46rCAIOuBneuCnCDtm4Qg7JWE7J207L2YIOychOy5mFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VySWNvblBvcyA9IFtkcm9wRXZlbnQuY2xpZW50WCwgZHJvcEV2ZW50LmNsaWVudFldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDquLDsobQg7JWE7J207L2YIOq3uOumrOuTnCDsooztkZzsl5DshJwg66qHIOunjO2BvCDsm4Dsp4HsmIDripTsp4BcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmluZ0Nvb3JkaW5hdGVzWCA9IE51bWJlci5wYXJzZUludCgoKGN1ckljb25Qb3NbMF0gLSBwcmV2SWNvblBvc1swXSkgLyBPTkVfR1JJRF9BUkVBX1dJRFRIKS50b0ZpeGVkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92aW5nQ29vcmRpbmF0ZXNZID0gTnVtYmVyLnBhcnNlSW50KCgoY3VySWNvblBvc1sxXSAtIHByZXZJY29uUG9zWzFdKSAvIE9ORV9HUklEX0FSRUFfSEVJR0hUKS50b0ZpeGVkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDrk5zrnpjqt7jqsIAg64Gd64KcIO2bhCBjb2x1bW4sIHJvdyDsi5zsnpHsoJBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRDb2x1bW5TdGFydCA9IHByZXZHcmlkQ29sdW1uU3RhcnQgKyBtb3ZpbmdDb29yZGluYXRlc1g7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmlkUm93U3RhcnQgPSBwcmV2R3JpZFJvd1N0YXJ0ICsgbW92aW5nQ29vcmRpbmF0ZXNZO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHsgZ3JpZFJvd1N0YXJ0LCBncmlkQ29sdW1uU3RhcnQgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3SWNvbnMgPSBbLi4uaWNvbnNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SWNvbnNbaWNvbklkeF0gPSB7Li4uaWNvbnNbaWNvbklkeF0sIHN0eWxlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJY29ucyhuZXdJY29ucyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ292ZXJGbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChpY29uRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIDQuIOyVhOydtOy9mCDrjZTruJTtgbTrpq3snbTrsqTtirhcbiAgICAgICAgaWNvbkFyZWEuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgICAgdi5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2TW9kYWxzID0gbW9kYWxzO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsSWR4ID0gcHJldk1vZGFscy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpY29uSW1nID0gdi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hdHRyaWJ1dGVzWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGljb25GaWdjYXB0aW9uID0gdi5jaGlsZHJlblswXS5jaGlsZHJlblsxXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGltZ1NyYyA9IGljb25JbWcubm9kZVZhbHVlIHx8ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB2LmRhdGFzZXQuaWNvbk5hbWUgfHwgaWNvbkZpZ2NhcHRpb24uaW5uZXJIVE1MIHx8ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGxhbmF0aW9uID0gdi5kYXRhc2V0Lmljb25FeHBsYW5hdGlvbiB8fCBuYW1lO1xuICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkeDogTnVtYmVyLnBhcnNlSW50KHYuZ2V0QXR0cmlidXRlKFwiaWRcIik/LnNwbGl0KFwiLVwiKVsxXSB8fCAnMCcpLFxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBpbWdTcmMsXG4gICAgICAgICAgICAgICAgICAgIGV4cGxhbmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBncmlkQ29sdW1uU3RhcnQ6IE51bWJlci5wYXJzZUludCh2LnN0eWxlLmdyaWRDb2x1bW5TdGFydCksIGdyaWRSb3dTdGFydDogTnVtYmVyLnBhcnNlSW50KHYuc3R5bGUuZ3JpZFJvd1N0YXJ0KSB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHdpbmRvd01vZGFsID0gV2luZG93TW9kYWwoe2ljb24sIG1vZGFsSWR4fSk7XG5cbiAgICAgICAgICAgICAgICBpZiAod2luZG93TW9kYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TW9kYWxzID0gWy4uLnByZXZNb2RhbHMsIHdpbmRvd01vZGFsXTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWxzKG5ld01vZGFscyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBhZGRJY29uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRJY29uQnRuXCIpO1xuICAgICAgICBhZGRJY29uQnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0ljb24gPSB7XG4gICAgICAgICAgICAgICAgaWR4OiBpY29ucy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgbmFtZTogXCLtjIzsnbwudHh0XCIsXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiBJQ09OSU5GTy5UWFQuZXh0ZW5zdGlvbixcbiAgICAgICAgICAgICAgICB0eXBlOiBJQ09OSU5GTy5UWFQudHlwZSxcbiAgICAgICAgICAgICAgICBpbWdTcmM6IElDT05JTkZPLlRYVC5pbWdTcmMsXG4gICAgICAgICAgICAgICAgZXhwbGFuYXRpb246IElDT05JTkZPLlRYVC5leHBsYW5hdGlvbixcbiAgICAgICAgICAgICAgICBzdHlsZToge2dyaWRSb3dTdGFydDogMSwgZ3JpZENvbHVtblN0YXJ0OiAzfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXRJY29ucyhbLi4uaWNvbnMsIG5ld0ljb25dKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgdXNlRXZlbnRzKFtpY29uQ2xpY2tFdmVudF0pO1xuXG4gICAgLypcbiAgICAqIOyVhOydtOy9mCDrk5zrnpjqt7gg7ZWgIOuVjCDsnbTrr7jsp4BcbiAgICAqL1xuICAgIGNvbnN0IGdldERyYWdJY29uRWwgPSAodjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgcm9vdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpIHx8IGRvY3VtZW50LmJvZHk7XG5cbiAgICAgICAgY29uc3QgaWNvbkltZyA9IHYuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYXR0cmlidXRlc1swXTtcbiAgICAgICAgY29uc3QgaWNvbkZpZ2NhcHRpb24gPSB2LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdO1xuXG4gICAgICAgIGNvbnN0IGltZ1NyYyA9IGljb25JbWcubm9kZVZhbHVlIHx8ICcnO1xuICAgICAgICBjb25zdCBuYW1lID0gdi5kYXRhc2V0Lmljb25OYW1lIHx8IGljb25GaWdjYXB0aW9uLmlubmVySFRNTCB8fCAnJztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBpY29uRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWZhdWx0LWljb25cIik7XG4gICAgICAgIGljb25EaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIGljb25EaXYuc3R5bGUud2lkdGggPSBcIjgwcHhcIjtcbiAgICAgICAgaWNvbkRpdi5pbm5lckhUTUwgPSBnZXREcmFnSWNvbklubmVyRWxlbShuYW1lLCBpbWdTcmMpO1xuXG4gICAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChpY29uRGl2KTtcblxuICAgICAgICByZXR1cm4gaWNvbkRpdjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXREcmFnSWNvbklubmVyRWxlbSA9IChpY29uTmFtZTogc3RyaW5nLCBpY29uSW1hZ2VTcmM6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gKGBcbiAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ljb25JbWFnZVNyY31cIiBkcmFnZ2FibGU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPiR7aWNvbk5hbWV9PC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgPC9idXR0b24+YFxuICAgICAgICApXG4gICAgfVxuXG4gICAgLypcbiAgICAqIOyVhOydtOy9mCDsu7Ttj6zrhIztirggXG4gICAgKi9cbiAgICBjb25zdCBpY29uVGVtcGxhdGUgPSAoaWNvbjogSUljb25zLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIChgXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBpZD1cImljb24tJHtpY29uLmlkeH1cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZGVmYXVsdC1pY29uXCJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBkYXRhLWljb24tbmFtZT1cIiR7aWNvbi5uYW1lfVwiXG4gICAgICAgICAgICAgICAgYXJpYS1pY29uLWV4cGxhbmF0aW9uPVwiJHtpY29uLmV4cGxhbmF0aW9ufVwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIiR7aWNvbi5leHBsYW5hdGlvbn1cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZ3JpZC1jb2x1bW4tc3RhcnQ6ICR7aWNvbi5zdHlsZS5ncmlkQ29sdW1uU3RhcnR9O2dyaWQtcm93LXN0YXJ0OiAke2ljb24uc3R5bGUuZ3JpZFJvd1N0YXJ0fTtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aWNvbi5pbWdTcmN9XCIgZHJhZ2dhYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpY29uLm5hbWUuc3Vic3RyaW5nKDAsIDgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpY29uLm5hbWUubGVuZ3RoID4gOCA/ICcuLi4nIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+YFxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgYDxvbFxuICAgICAgICAgICAgY2xhc3M9XCJtYWluLXNjcmVlbi1jb250YWluZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIuuwlO2Dle2ZlOuptFwiXG4gICAgICAgID5cbiAgICAgICAgICAgICR7aWNvbnMubWFwKChpY29uOiBJSWNvbnMsIGk6IG51bWJlcikgPT4gaWNvblRlbXBsYXRlKGljb24sIGkpKS5qb2luKCcnKX1cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGRJY29uQnRuXCI+7LaU6rCAPC9idXR0b24+XG4gICAgICAgIDwvb2w+XG4gICAgICAgICR7bW9kYWxzLm1hcCgobW9kYWw6IHN0cmluZykgPT4gbW9kYWwpLmpvaW4oJycpfWBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zO1xuIiwiaW1wb3J0IHsgdXNlRXZlbnRzLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcIi4uLy4uL2NvcmUvQ3VzdG9tUmVhY3RcIjtcbmltcG9ydCB7IElJY29ucyB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9jb21wb25lbnRzL2NvbW1vbi9pY29uc1wiO1xuXG5pbnRlcmZhY2UgSVdpbmRvd01vZGFsIHtcbiAgICBpY29uOiBJSWNvbnM7XG4gICAgbW9kYWxJZHg6IG51bWJlcjtcbiAgICBtYWluPzogRWxlbWVudDtcbiAgICBmb290ZXI/OiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBXaW5kb3dNb2RhbCAoe2ljb24sIG1vZGFsSWR4LCBtYWluLCBmb290ZXJ9OiBJV2luZG93TW9kYWwpIHtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoXCJXaW5kb3dNb2RhbFwiLCB0cnVlKTtcbiAgICBjb25zdCBbbW9kYWxJbmRleCwgc2V0TW9kYWxJbmRleF0gPSB1c2VTdGF0ZShcIldpbmRvd01vZGFsXCIsIG1vZGFsSWR4KTtcbiAgICBcbiAgICBjb25zdCBbbW9kYWxXaWR0aCwgc2V0TW9kYWxXaWR0aF0gPSB1c2VTdGF0ZShcIldpbmRvd01vZGFsXCIsIDQwMCk7XG4gICAgY29uc3QgW21vZGFsSGVpZ2h0LCBzZXRNb2RhbEhlaWdodF0gPSB1c2VTdGF0ZShcIldpbmRvd01vZGFsXCIsIDMwMCk7XG4gICAgY29uc3QgW21vZGFsVHJhbnNsYXRYLCBzZXRNb2RhbFRyYW5zbGF0WF0gPSB1c2VTdGF0ZShcIldpbmRvd01vZGFsXCIsIDQwMCk7XG4gICAgY29uc3QgW21vZGFsVHJhbnNsYXRZLCBzZXRNb2RhbFRyYW5zbGF0WV0gPSB1c2VTdGF0ZShcIldpbmRvd01vZGFsXCIsIDQwMCk7XG5cbiAgICBjb25zdCBbaXNGdWxsU2l6ZSwgc2V0SXNGdWxsU2l6ZV0gPSB1c2VTdGF0ZShcIldpbmRvd01vZGFsXCIsIGZhbHNlKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGNzc1RleHQgPSBgd2lkdGg6ICR7bW9kYWxXaWR0aH1weDtoZWlnaHQ6ICR7bW9kYWxIZWlnaHR9cHg7IHRyYW5zZm9ybTogdHJhbnNsYXRlKCR7bW9kYWxUcmFuc2xhdFh9cHgsICR7bW9kYWxUcmFuc2xhdFl9cHgpYDtcbiAgICAgICAgXG4gICAgLy8gICAgIGNvbnN0IHdpbmRvd01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oYCN3aW5kb3ctbW9kYWwtJHttb2RhbEluZGV4fWApO1xuICAgIC8vICAgICBjb25zb2xlLmRpcih3aW5kb3dNb2RhbCk7XG5cbiAgICAvLyAgICAgaWYgKHdpbmRvd01vZGFsKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnY3NzVGV4dCcsIGNzc1RleHQpO1xuICAgIC8vICAgICAgICAgd2luZG93TW9kYWwuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9LCBbXSlcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGNzc1RleHQgPSBgd2lkdGg6ICR7bW9kYWxXaWR0aH1weDtoZWlnaHQ6ICR7bW9kYWxIZWlnaHR9cHg7IHRyYW5zZm9ybTogdHJhbnNsYXRlKCR7bW9kYWxUcmFuc2xhdFh9cHgsICR7bW9kYWxUcmFuc2xhdFl9cHgpYDtcblxuICAgIC8vICAgICBjb25zdCB3aW5kb3dNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KGAjd2luZG93LW1vZGFsLSR7bW9kYWxJbmRleH1gKTtcbiAgICAvLyAgICAgY29uc29sZS5kaXIod2luZG93TW9kYWwpO1xuXG4gICAgLy8gICAgIGlmICh3aW5kb3dNb2RhbCkge1xuICAgIC8vICAgICAgICAgd2luZG93TW9kYWwuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9LCBbbW9kYWxXaWR0aCwgbW9kYWxIZWlnaHQsIG1vZGFsVHJhbnNsYXRYLCBtb2RhbFRyYW5zbGF0WV0pXG5cbiAgICBjb25zdCBtb2RhbENvbW1vbkV2ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtaW5pbWl6ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWluaW1pemVCdG5cIik7XG4gICAgICAgIGNvbnN0IG1heGltaXplQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXhpbWl6ZUJ0blwiKTtcbiAgICAgICAgY29uc3QgcmVzdG9yZURvd25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3RvcmVEb3duQnRuXCIpO1xuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VCdG5cIik7XG5cbiAgICAgICAgaWYgKG1heGltaXplQnRuKSB7XG4gICAgICAgICAgICBtYXhpbWl6ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgICAgICAgICBzZXRJc0Z1bGxTaXplKHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0b3JlRG93bkJ0bikge1xuICAgICAgICAgICAgcmVzdG9yZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgICAgICAgICAgICAgc2V0SXNGdWxsU2l6ZShmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsb3NlQnRuKSB7XG4gICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsb3NlIE1vZGFsSWR4XCIsIG1vZGFsSW5kZXgpO1xuICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHVzZUV2ZW50cyhbbW9kYWxDb21tb25FdmVudF0pO1xuXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgYDxkaXZcbiAgICAgICAgICAgICAgICBpZD1cIndpbmRvdy1tb2RhbC0ke21vZGFsSW5kZXh9XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIndpbmRvdy1tb2RhbFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogJHttb2RhbFdpZHRofXB4OyBoZWlnaHQ6ICR7bW9kYWxIZWlnaHR9cHg7IHRyYW5zZm9ybTogdHJhbnNsYXRlKCR7bW9kYWxUcmFuc2xhdFh9cHgsICR7bW9kYWxUcmFuc2xhdFl9cHgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXItbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ljb24uaW1nU3JjfVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtpY29uLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1pbmltaXplQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cIndpZHRoOiAxNnB4O2hlaWdodDogMTZweDtcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT53aW5kb3ctbWluaW1pemU8L3RpdGxlPjxwYXRoIGQ9XCJNMjAsMTRINFYxMEgyMFwiIC8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7aXNGdWxsU2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJzxidXR0b24gaWQ9XCJyZXN0b3JlRG93bkJ0blwiPjxzdmcgc3R5bGU9XCJ3aWR0aDogMTZweDtoZWlnaHQ6IDE2cHg7XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZG9jay13aW5kb3c8L3RpdGxlPjxwYXRoIGQ9XCJNMTggMThWMjBINEEyIDIgMCAwIDEgMiAxOFY4SDRWMThNMjIgNlYxNEEyIDIgMCAwIDEgMjAgMTZIOEEyIDIgMCAwIDEgNiAxNFY2QTIgMiAwIDAgMSA4IDRIMjBBMiAyIDAgMCAxIDIyIDZNMjAgNkg4VjE0SDIwWlwiIC8+PC9zdmc+PC9idXR0b24+J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzxidXR0b24gaWQ9XCJtYXhpbWl6ZUJ0blwiPjxzdmcgc3R5bGU9XCJ3aWR0aDogMTZweDtoZWlnaHQ6IDE2cHg7XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+c3F1YXJlLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMywzSDIxVjIxSDNWM001LDVWMTlIMTlWNUg1WlwiIC8+PC9zdmc+PC9idXR0b24+J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cIndpZHRoOiAxNnB4O2hlaWdodDogMTZweDtcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT53aW5kb3ctY2xvc2U8L3RpdGxlPjxwYXRoIGQ9XCJNMTMuNDYsMTJMMTksMTcuNTRWMTlIMTcuNTRMMTIsMTMuNDZMNi40NiwxOUg1VjE3LjU0TDEwLjU0LDEyTDUsNi40NlY1SDYuNDZMMTIsMTAuNTRMMTcuNTQsNUgxOVY2LjQ2TDEzLjQ2LDEyWlwiIC8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPG1haW4+PC9tYWluPlxuICAgICAgICAgICAgICAgIDxmb290ZXI+PC9mb290ZXI+XG4gICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICBgJHtpc09wZW4gPyBtb2RhbENvbnRlbnQoKSA6ICcnfWBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvd01vZGFsOyIsIi8qXG4qIOumrOyVoe2KuCBob29rcyDqsITri6jtnogg6rWs7ZiEXG4qL1xuZnVuY3Rpb24gQ3VzdG9tUmVhY3QgKCkge1xuICAgIGxldCByb290OiBFbGVtZW50IHwgYW55ID0gbnVsbDtcbiAgICBsZXQgcm9vdENvbXBvbmVudDogRWxlbWVudCB8IGFueSA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZXMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgY3VyU3RhdGVzSWR4ID0gbmV3IE1hcCgpO1xuXG4gICAgbGV0IGV2ZW50czogQXJyYXk8RnVuY3Rpb24+ID0gW107XG5cbiAgICBsZXQgbW91bnRFZmZlY3RzOiBBcnJheTxGdW5jdGlvbj4gPSBbXTtcblxuICAgIGNvbnN0IGVmZmVjdERlcGVuZGVuY2llczogYW55W10gPSBbXTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGN1ckVmZmVjdElkeDogMCxcbiAgICAgICAgcmVuZGVyQ291bnQ6IDAsXG4gICAgfVxuXG4gICAgLypcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzXG4gICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAxLiByZW5kZXJcbiAgICAqIHJlbmRlcjogcm9vdOqwgCDrkJjripQg7JeY66as66i87Yq466W8IOugjOuNlOunge2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHJlbmRlciA9IChyb290RWw6IEVsZW1lbnQgfCBhbnksIHJvb3RDb21wb25lbnRFbDogRWxlbWVudCB8IGFueSkgPT4ge1xuICAgICAgICBpZiAocm9vdEVsKSB7XG4gICAgICAgICAgICByb290ID0gcm9vdEVsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3RDb21wb25lbnRFbCkge1xuICAgICAgICAgICAgcm9vdENvbXBvbmVudCA9IHJvb3RDb21wb25lbnRFbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgX3JlbmRlcigpO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAyLiB1c2VFdmVudHNcbiAgICAqIHVzZUV2ZW50czog7Lu07Y+s64SM7Yq466W8IOuqqOuRkCDroIzrjZTrp4HtlZwg7ZuEIOydtOuypO2KuOulvCDrk7HroZ3tlaAg7IiYIOyeiOuPhOuhnSDrj4TsmYDso7zripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCB1c2VFdmVudHMgPSAoZXZlbnRGbnM6IEFycmF5PEZ1bmN0aW9uPikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndXNlRXZlbnRzJywgZXZlbnRGbnMpO1xuICAgICAgICBldmVudHMgPSBbLi4uZXZlbnRzLCAuLi5ldmVudEZuc107XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzIDMuIHVzZVN0YXRlXG4gICAgKiB1c2VTdGF0ZTogc3RhdGUg6rSA66as7ZWY64+E66GdIOuPhOyZgOyjvOuKlCDrqZTshJzrk5xcbiAgICAqIO2BtOuhnOyggCjtlajsiJgg7ISg7Ja47Iuc7J2YIOyKpOy9lO2UhOulvCDquLDslrXtlZjripQg7J6Q67CU7Iqk7YGs66a97Yq47J2YIO2KueynlSnrpbwg7Zmc7JqpXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gY2FsbGVyIHVzZVN0YXRl66W8IO2YuOy2nO2VnCDsu7Ttj6zrhIztirgo7ZWo7IiYKeuqhVxuICAgICogQHBhcmFtIHthbnl9IGluaXRTdGF0ZSDstIjquLDtmZTtlaAgc3RhdGVcbiAgICAqL1xuICAgIGNvbnN0IHVzZVN0YXRlID0gKGNhbGxlcjogc3RyaW5nLCBpbml0U3RhdGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAoIXN0YXRlcy5nZXQoY2FsbGVyKSkge1xuICAgICAgICAgICAgc3RhdGVzLnNldChjYWxsZXIsIFtdKTtcbiAgICAgICAgICAgIGN1clN0YXRlc0lkeC5zZXQoY2FsbGVyLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJTdGF0ZUlkeCA9IGN1clN0YXRlc0lkeC5nZXQoY2FsbGVyKTtcblxuICAgICAgICBpZiAoIXN0YXRlcy5nZXQoY2FsbGVyKVtjdXJTdGF0ZUlkeF0pIHtcbiAgICAgICAgICAgIHN0YXRlcy5nZXQoY2FsbGVyKVtjdXJTdGF0ZUlkeF0gPSBpbml0U3RhdGU7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdGF0ZXMuZ2V0KGNhbGxlcilbY3VyU3RhdGVJZHhdO1xuXG4gICAgICAgIGNvbnN0IHNldFN0YXRlID0gKG5ld1N0YXRlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHN0YXRlcy5nZXQoY2FsbGVyKVtjdXJTdGF0ZUlkeF0gPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXRTdGF0ZScsIGNhbGxlciwgY3VyU3RhdGVJZHgsIG5ld1N0YXRlKTtcblxuICAgICAgICAgICAgX3JlbmRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VyU3RhdGVzSWR4LnNldChjYWxsZXIsIGN1clN0YXRlSWR4ICsgMSk7XG4gICAgICAgIHJldHVybiBbIHN0YXRlLCBzZXRTdGF0ZSBdO1xuICAgIH1cblxuICAgIC8qIFxuICAgICogQ3VzdG9tUmVhY3QgaG9va3MgNC4gdXNlRWZmZWN0XG4gICAgKiB1c2VFZmZlY3Q6IGRlcGVuZGVuY3kg67Cw7Je07J2YIOqwkuuTpOyXkCDrs4Dqsr3snbQg7IOd6rK87J2EIOqyveyasCBjYWxsYmFja+ydhCDsi6TtlontlZjripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCB1c2VFZmZlY3QgPSAoY2FsbGJhY2s6IEZ1bmN0aW9uLCBkZXBlbmRlbmNpZXM6IEFycmF5PGFueT4pID0+IHtcbiAgICAgICAgLy8gMS4gZGVwZW5kZW5jeeqwgCDsl4bsnYQg6rK97JqwIGNhbGxiYWNrIOuwlOuhnCDsi6TtlokgKG1vdW50IOuQmOyXiOydhCDrlYwg7Iuk7ZaJKVxuICAgICAgICAvLyBleC4gdXNlRWZmZWN0KCgpID0+IHt9LCBbXSlcbiAgICAgICAgaWYgKGRlcGVuZGVuY2llcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIG1vdW50RWZmZWN0cy5wdXNoKGNhbGxiYWNrKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMi4gZGVwZW5kZW5jeeqwgCDsnojsnYQg6rK97JqwIGRlcGVuZGVuY3kg67OA6rK9IOyLnOyXkOunjCBjYWxsYmFjayDsi6TtlolcbiAgICAgICAgLy8gZXguIHVzZUVmZmVjdCgoKSA9PiB7fSwgW2EsIGIsIC4uLiwgel0pXG4gICAgICAgIGNvbnN0IHsgY3VyRWZmZWN0SWR4IH0gPSBvcHRpb25zO1xuXG4gICAgICAgIGlmIChlZmZlY3REZXBlbmRlbmNpZXMubGVuZ3RoID09PSBjdXJFZmZlY3RJZHgpIHtcbiAgICAgICAgICAgIGVmZmVjdERlcGVuZGVuY2llcy5wdXNoKGRlcGVuZGVuY2llcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJlZmZlY3REZXBlbmRlbmNpZXNcIiwgZWZmZWN0RGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBjb25zdCBkZXBlbmRlbmN5ID0gZWZmZWN0RGVwZW5kZW5jaWVzW2N1ckVmZmVjdElkeF07XG5cbiAgICAgICAgbGV0IGhhc0NoYW5nZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChkZXBlbmRlbmN5KSB7XG4gICAgICAgICAgICAvLyBBcnJheS5wcm90b3R5cGUuc29tZTog7YyQ67OEIO2VqOyImCDsoIHslrTrj4Qg7ZWY64KY652864+EIO2GteqzvO2VmOuKlOyngCDssrTtgaxcbiAgICAgICAgICAgIC8vIE9iamVjdC5pczog65GQIOqwnOydmCDtjIzrnbzrr7jthLDqsIAg64+Z7J287ZWc7KeAIOyytO2BrFxuICAgICAgICAgICAgLy8g7KaJLCDquLDsobQgZGVwZW5kZW5jeeyZgCDsg4jroZwg67Cb7J2AIGRlcGVuZGVuY3kg7IKs7J207JeQIOywqOydtOqwgCDtlZjrgpjrnbzrj4Qg7J6I64qUIOqyveyasCB0cnVl66W8IOuwmO2ZmFxuICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IGRlcGVuZGVuY2llcy5zb21lKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFPYmplY3QuaXModiwgZGVwZW5kZW5jeVtpXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGFzQ2hhbmdlZFwiLCBoYXNDaGFuZ2VkKTtcblxuICAgICAgICBpZiAoaGFzQ2hhbmdlZCkge1xuICAgICAgICAgICAgZWZmZWN0RGVwZW5kZW5jaWVzW2N1ckVmZmVjdElkeF0gPSBkZXBlbmRlbmNpZXM7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5jdXJFZmZlY3RJZHggKz0gMTtcbiAgICB9XG5cbiAgICAvKlxuICAgICogQ3VzdG9tUmVhY3Qg64K067aAIO2VqOyImFxuICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICogZGVib3VuY2VGcmFtZTogMey0iOuLuSDrlJTsiqTtlIzroIjsnbQg7KO87IKs7Jyo66eM7YG8IOyLpO2Wie2VmOqyjCDtlZjsl6wg7KeA64KY7LmcIOugjOuNlOungeydhCDrsKnsp4DtlZjquLAg7JyE7ZWcIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgZGVib3VuY2VGcmFtZSA9IChjYWxsYmFjazogRnJhbWVSZXF1ZXN0Q2FsbGJhY2spID0+IHtcbiAgICAgICAgbGV0IG5leHRGcmFtZUNhbGxiYWNrID0gLTE7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUobmV4dEZyYW1lQ2FsbGJhY2spO1xuICAgICAgICAgIG5leHRGcmFtZUNhbGxiYWNrID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLypcbiAgICAqIHJlZ2lzdGVyRXZlbnRzOiDsnbTrsqTtirgg7ZWo7IiYIOuTseuhneydhCDsnITtlbQg7Iuk7ZaJ7ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgcmVnaXN0ZXJFdmVudHMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChldmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50cycsIGV2ZW50cyk7XG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaCgoZXZlbnRGbikgPT4gZXZlbnRGbigpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgKiBleGVjdXRlTW91bnRFZmZlY3RzOiBtb3VudCDsi5wg7Iuk7ZaJ7ZWgIOuplOyEnOuTnOuTpOydhCDsi6TtlontlZjripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCBleGVjdXRlTW91bnRFZmZlY3RzID0gKCkgPT4ge1xuICAgICAgICBpZiAobW91bnRFZmZlY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGVjdXRlTW91bnRFZmZlY3RzJywgbW91bnRFZmZlY3RzKTtcbiAgICAgICAgICAgIG1vdW50RWZmZWN0cy5mb3JFYWNoKChtb3VudEVmRm4pID0+IG1vdW50RWZGbigpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgKiBfcmVuZGVyOiDsi6Tsp4jsoIHsnLzroZwg66as7JWh7Yq4IOuCtOu2gOyXkOyEnCDroIzrjZTrp4HsnYQg64u064u57ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgX3JlbmRlciA9IGRlYm91bmNlRnJhbWUoKCkgPT4ge1xuICAgICAgICBpZiAoIXJvb3QgfHwgIXJvb3RDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIO2ZlOuptCDroIzrjZTrp4FcbiAgICAgICAgcm9vdC5pbm5lckhUTUwgPSByb290Q29tcG9uZW50KCk7XG5cbiAgICAgICAgLy8g7J2067Kk7Yq4IOuTseuhnVxuICAgICAgICByZWdpc3RlckV2ZW50cygpO1xuICAgICAgICAvLyDrp4jsmrTtirgg7IucIOyLpO2WieyLnO2CrCDsvZzrsLEg7ZWo7IiYIOyLpO2WiVxuICAgICAgICBleGVjdXRlTW91bnRFZmZlY3RzKCk7XG4gICAgICAgIFxuICAgICAgICAvLyDrs4DsiJgg7LSI6riw7ZmUXG4gICAgICAgIGNvbnN0IGNhbGxlcnNOYW1lID0gW107XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgX10gb2Ygc3RhdGVzKSB7XG4gICAgICAgICAgICBjYWxsZXJzTmFtZS5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGVyc05hbWUuZm9yRWFjaCgoY2FsbGVyKSA9PiB7XG4gICAgICAgICAgICBjdXJTdGF0ZXNJZHguc2V0KGNhbGxlciwgMCk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlcy5lbnRyaWVzKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJTdGF0ZXNJZHguZW50cmllcygpKTtcblxuICAgICAgICBvcHRpb25zLmN1ckVmZmVjdElkeCA9IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKCdfcmVuZGVyIGN1ckVmZmVjdElkeCcsIG9wdGlvbnMuY3VyRWZmZWN0SWR4KTtcblxuICAgICAgICBldmVudHMgPSBbXTtcbiAgICAgICAgbW91bnRFZmZlY3RzID0gW107XG5cbiAgICAgICAgLy8g66CM642U66eBIO2an+yImCDtmZXsnbhcbiAgICAgICAgb3B0aW9ucy5yZW5kZXJDb3VudCArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZygnX3JlbmRlciByZW5kZXJDb3VudCcsIG9wdGlvbnMucmVuZGVyQ291bnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgcmVuZGVyLCB1c2VFdmVudHMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfTtcbn1cblxuXG5jb25zdCB7IHJlbmRlciwgdXNlRXZlbnRzLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSBDdXN0b21SZWFjdCgpO1xuZXhwb3J0IHsgcmVuZGVyLCB1c2VFdmVudHMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tUmVhY3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9jb3JlL0N1c3RvbVJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0FwcFwiO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpO1xuaWYgKHJvb3QpIHtcbiAgICByZW5kZXIocm9vdCwgQ29udGFpbmVyKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9