import { useEvents, useState } from "../../core/CustomReact";

import store from "../../reducer/store";
import { addModal } from "../../reducer/modals/action";


import { IIcons } from "../../../types/components/common/icons";
import { MODAL } from "../../../types/reducer/index";
import { DEFAULT_ICON } from "../../../constants/components/common/icon";

import { iconClickCallback, containerClickCallback, iconDragCallback, iconDbClickCallback } from "../../utils/components/common/icons-event-helper";

/*
* 아이콘 컴포넌트
*/
function Icons () {
    const { dispatch, getState } = store;
    const { modals: modalsState } = getState();

    const [icons, setIcons] = useState("Icons", DEFAULT_ICON);

    /*
    * 아이콘 이벤트
    */
    // 1. 아이콘 클릭했을 때
    const iconClickEvent = () => {
        const iconList = document.querySelectorAll<HTMLElement>(".default-icon");

        return [Array.from(iconList), 'mousedown', iconClickCallback];
    }

    // 2. 아이콘 외부 화면 클릭했을 때
    const containerClickEvent = () => {
        const container = document.querySelector(".container");
        
        return [container, 'mousedown', containerClickCallback];
    }

    // 3. 아이콘 드래그 이벤트 (.default-icon dragstart -> document dragover & drop)
    // TODO. 파일 아이콘이 폴더 위로 이동될 경우 폴더 안으로 이동되도록 수정
    // TODO. 아이콘끼리 겹치지 않도록 수정
    const iconDragEvent = () => {
        const iconList = document.querySelectorAll<HTMLElement>(".default-icon");

        return [Array.from(iconList), 'dragstart', iconDragCallback, icons, setIcons];
    }

    // 4. 아이콘 더블클릭이벤트
    const iconDbClickEvent = () => {
        // return [Array.from(iconList), 'dblclick', iconDbClickCallback, icons];
        const iconList = document.querySelectorAll<HTMLElement>(".default-icon");
        const neededState = { modalsLength: modalsState.modals.length, icons };
        const setNeededState = (value: MODAL) => dispatch(addModal(value));

        return [Array.from(iconList), 'dblclick', iconDbClickCallback, neededState, setNeededState];
    }

    const iconEvents = [
        iconClickEvent,
        containerClickEvent,
        iconDragEvent,
        iconDbClickEvent,
    ];
    useEvents(iconEvents);

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
