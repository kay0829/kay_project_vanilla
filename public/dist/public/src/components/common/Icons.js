import { useEvents, useState } from "../../core/CustomReact";
import { configureStore } from '@reduxjs/toolkit';
import { ICON_INFO, DEFAULT_ICON } from "../../../constants/components/common/icon";
import WindowModal from "./WindowModal";
import modalsReducer from "../../reducer/modals/reducer";
import { addModal } from "../../reducer/modals/action";
/*
* 아이콘 컴포넌트
*/
function Icons() {
    const { dispatch, getState } = configureStore({ reducer: modalsReducer });
    const [icons, setIcons] = useState("Icons", DEFAULT_ICON);
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
                const prevModals = getState().modals;
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
                const windowModal = WindowModal({ icon, modalIdx });
                if (windowModal) {
                    dispatch(addModal(windowModal));
                }
            });
        });
        const addIconBtn = document.querySelector("#addIconBtn");
        addIconBtn === null || addIconBtn === void 0 ? void 0 : addIconBtn.addEventListener('click', () => {
            const newIcon = {
                idx: icons.length,
                name: "파일.txt",
                extension: ICON_INFO.TXT.extenstion,
                type: ICON_INFO.TXT.type,
                imgSrc: ICON_INFO.TXT.imgSrc,
                explanation: ICON_INFO.TXT.explanation,
                style: { gridRowStart: icons.length + 1, gridColumnStart: 1 },
            };
            setIcons([...icons, newIcon]);
        });
    };
    useEvents([iconClickEvent]);
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
    const iconTemplate = (icon) => {
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
            ${icons.map((icon) => iconTemplate(icon)).join('')}
            <button id="addIconBtn">추가</button>
        </ol>
        <div>${getState().modals.map((modal) => modal).join('')}</div>`);
}
export default Icons;
//# sourceMappingURL=Icons.js.map