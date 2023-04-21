import { useEvents, useState } from "../../core/CustomReact";

import store from "../../reducer/store";
import { addModal } from "../../reducer/modals/action";


import { IIcons } from "../../../types/components/common/icons";
import { MODAL } from "../../../types/reducer/index";
import { DEFAULT_ICON } from "../../../constants/components/common/icon";
import WindowModal from "./WindowModal";

/*
* 아이콘 컴포넌트
*/
function Icons () {
    const { dispatch, getState } = store;
    const { modals: modalsState } = getState();

    const [icons, setIcons] = useState("Icons", DEFAULT_ICON);

    /*
    * 이벤트 등록
    */
    const iconClickEvent = () => {
        /*
        * 아이콘 클릭 이벤트 관련 메서드
        */
        const iconArea = document.querySelectorAll<HTMLElement>(".default-icon");

        /*
        * 아이콘 이름 관련 (이름이 길 경우 클릭 시에 풀네임)
        */
        const abbreviateIconName = (v: HTMLElement) => {
            const iconFigcaption = v.children[0].children[1];

            const fullIconName = v.dataset.iconName || iconFigcaption.innerHTML;
            const shortName = `${fullIconName.substring(0, 8)}...`;

            if (fullIconName.length > 8) {
                iconFigcaption.innerHTML = shortName;
            }
        }

        const showFullIconName = (v: HTMLElement) => {
            const iconFigcaption = v.children[0].children[1];
            const fullIconName = v.dataset.iconName || iconFigcaption.innerHTML;

            if (fullIconName.length > 8) {
                iconFigcaption.innerHTML = fullIconName;
            }
        }

        /*
        * 아이콘 클릭 클래스 관련 (클릭되었을 때 clicked 클래스 추가)
        */
        const inFocusIcon = (v: Element) => {
            v.classList.add('clicked');
        }

        const outFocusIcons = () => {
            iconArea.forEach((v) => {
                if (v.classList.value.includes('clicked') ) {
                    v.classList.remove('clicked');
                    abbreviateIconName(v);
                }
            })
        }

        // 1. 아이콘 클릭했을 때
        iconArea.forEach((v) => {
            v.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                outFocusIcons();
                inFocusIcon(v);
                showFullIconName(v);
            })
        })

        // 2. 아이콘 외부 화면 클릭했을 때
        const container = document.querySelector(".container");
        if (container) {
            container.addEventListener('mousedown', () => {
                outFocusIcons();
            })
        }

        // 3. 아이콘 드래그 이벤트 (.default-icon dragstart -> document dragover & drop)
        // TODO. 파일 아이콘이 폴더 위로 이동될 경우 폴더 안으로 이동되도록 수정
        // TODO. 아이콘끼리 겹치지 않도록 수정
        iconArea.forEach((v) => {
            v.addEventListener('dragstart', (dragstartEvent) => {
                // 아이콘 index
                const iconIdx = Number.parseInt(v.getAttribute("id")?.split("-")[1] || '0');

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

                dragstartEvent.dataTransfer?.setDragImage(iconDiv, shiftX, shiftY);

                if (dragstartEvent.dataTransfer) {
                    dragstartEvent.dataTransfer.effectAllowed = "move";
                }

                const dragoverFn = (dragoverEvent: DragEvent) => {
                    dragoverEvent.preventDefault();
                }

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
                        newIcons[iconIdx] = {...icons[iconIdx], style };
                        setIcons(newIcons);

                        document.removeEventListener('dragover', dragoverFn);

                        rootEl.removeChild(iconDiv);
                    }
                })
            })
        })

        // 4. 아이콘 더블클릭이벤트
        iconArea.forEach((v) => {
            v.addEventListener('dblclick', () => {
                const prevModals = modalsState.modals;
                const modalIdx = prevModals.length;

                const idx = getIconIdx(v);
                const dbclickedIcon = icons.filter((v: IIcons) =>  v.idx === idx);

                const windowModal = WindowModal({icon: dbclickedIcon[0], modalIdx});

                if (windowModal) {
                    dispatch(addModal({icon: dbclickedIcon[0], content: windowModal}));
                }
            })
        })
    }
    useEvents([iconClickEvent]);

    const getIconIdx = (v: HTMLElement) => {
        return Number.parseInt(v.id.split("-")[1]);
    }
    /*
    * 아이콘 드래그 할 때 이미지
    */
    const getDragIconEl = (v: HTMLElement) => {
        const rootEl = document.querySelector("#root") || document.body;

        const idx = getIconIdx(v);
        const draggedIcon = icons.filter((v: IIcons) =>  v.idx === idx);
        
        const iconDiv = document.createElement('div');

        iconDiv.classList.add("default-icon");
        const cssText = "position: absolute;width: 80px;top:-100px;left:-100px;"
        iconDiv.style.cssText = cssText;
        iconDiv.innerHTML = getDragIconInnerElem(draggedIcon[0].name);

        rootEl.appendChild(iconDiv);

        return iconDiv;
    }

    const getDragIconInnerElem = (iconName: string) => {
        return (`
            <button>
                <figure style="background-image: url('./assets/icons/windows-xp-icons-md.png');background-position: -48px -48px;"></figure>
                <figcaption>${iconName}</figcaption>
            </button>`
        )
    }

    /*
    * 아이콘 컴포넌트 
    */
    const iconTemplate = (icon: IIcons) => {
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
                    <figure style="background-position: ${icon.style.backgroundPosition}"></figure>
                    <figcaption>
                        ${icon.name.substring(0, 8)}
                        ${icon.name.length > 8 ? '...' : ''}
                    </figcaption>
                </button>
            </li>`
        )
    }

    return (
        `<ol
            class="main-screen-container"
            aria-label="바탕화면"
        >
            ${icons.map((icon: IIcons) => iconTemplate(icon)).join('')}
        </ol>
        <div>${modalsState.modals.map((v: MODAL) => v.content).join('')}</div>`
    )
}

export default Icons;
