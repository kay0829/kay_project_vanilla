import { useEvents, useState } from "../../core/CustomReact";
import { IIcons } from "../../../types/components/common/icons";
import { ICONINFO } from "../../../constants/components/common/icon";
import WindowModal from "./WindowModal";

/*
* 아이콘 컴포넌트
*/
function Icons () {
    /*
    * 기본 아이콘 정보
    */
    const initialState = [
        { name: "인터넷 익스플로러", extenstion: ICONINFO.INTERNET.extenstion, type: ICONINFO.INTERNET.type, imgSrc: ICONINFO.INTERNET.imgSrc, explanation: ICONINFO.INTERNET.explanation },
        { name: "내 문서", extension: ICONINFO.FOLDER.extenstion, type: ICONINFO.FOLDER.type, imgSrc: ICONINFO.FOLDER.imgSrc, explanation: ICONINFO.FOLDER.explanation },
        { name: "파일.txt", extension: ICONINFO.TXT.extenstion, type: ICONINFO.TXT.type, imgSrc: ICONINFO.TXT.imgSrc, explanation: ICONINFO.TXT.explanation }
    ]

    const [icons, setIcons] = useState("Icons", initialState);
    const [modals, setModals] = useState("Icons", []);

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
                // 하나의 grid area의 가로/세로
                const ONE_GRID_AREA_WIDTH = 80;
                const ONE_GRID_AREA_HEIGHT = 100;

                // 기존 아이콘 그리드 column, row 시작점
                const prevGridColumnStart = Number.parseInt(v.style.gridColumnStart);
                const prevGridRowStart = Number.parseInt(v.style.gridRowStart);

                // 기존 아이콘 위치
                const prevIconPos = [dragstartEvent.clientX, dragstartEvent.clientY];

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
                        const curGridColumnStart = prevGridColumnStart + movingCoordinatesX;
                        const curGridRowStart = prevGridRowStart + movingCoordinatesY;

                        v.style.gridColumnStart = `${curGridColumnStart}`;
                        v.style.gridRowStart = `${curGridRowStart}`;

                        document.removeEventListener('dragover', dragoverFn);
                        document.body.removeChild(iconDiv);
                    }
                })
            })
        })

        // 4. 아이콘 더블클릭이벤트
        iconArea.forEach((v) => {
            v.addEventListener('dblclick', () => {
                const iconImg = v.children[0].children[0].children[0].attributes[0];
                const iconFigcaption = v.children[0].children[1];

                const imgSrc = iconImg.nodeValue || '';
                const name = v.dataset.iconName || iconFigcaption.innerHTML || '';
                const explanation = v.dataset.iconExplanation || name;
                const icon = {name, extension: "", type: "", imgSrc, explanation };

                const windowModal = WindowModal({icon});

                if (windowModal) {
                    const prevModals = modals;
                    const newModals = [...prevModals, windowModal];
                    setModals(newModals);
                }
            })
        })

        const addIconBtn = document.querySelector("#addIconBtn");
        addIconBtn?.addEventListener('click', () => {
            const newIcon = { name: "파일.txt", extension: ICONINFO.TXT.extenstion, type: ICONINFO.TXT.type, imgSrc: ICONINFO.TXT.imgSrc, explanation: ICONINFO.TXT.explanation };
            setIcons([...icons, newIcon]);
        })
    }
    useEvents([iconClickEvent]);

    /*
    * 아이콘 드래그 할 때 이미지
    */
    const getDragIconEl = (v: HTMLElement) => {
        const rootEl = document.querySelector("#root");

        const iconImg = v.children[0].children[0].children[0].attributes[0];
        const iconFigcaption = v.children[0].children[1];

        const imgSrc = iconImg.nodeValue || '';
        const name = v.dataset.iconName || iconFigcaption.innerHTML || '';
        
        const iconDiv = document.createElement('div');

        iconDiv.classList.add("default-icon");
        iconDiv.style.position = "absolute";
        iconDiv.style.width = "80px";
        iconDiv.innerHTML = getDragIconInnerElem(name, imgSrc);

        if (rootEl) {
            rootEl.appendChild(iconDiv);
        }

        return iconDiv;
    }

    const getDragIconInnerElem = (iconName: string, iconImageSrc: string) => {
        return (`
            <button>
                <figure>
                    <img src="${iconImageSrc}" draggable="false">
                </figure>
                <figcaption>${iconName}</figcaption>
            </button>`
        )
    }

    /*
    * 아이콘 컴포넌트 
    */
    const iconTemplate = (icon: IIcons, i: number) => {
        return (`
            <li
                class="default-icon"
                draggable="true"
                data-icon-name="${icon.name}"
                aria-icon-explanation="${icon.explanation}"
                aria-label="${icon.explanation}"
                style="grid-column-start: 1;grid-row-start: ${i + 1};"
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
            </li>`
        )
    }

    return (
        `<ol
            class="main-screen-container"
            aria-label="바탕화면"
        >
            ${icons.map((icon: IIcons, i: number) => iconTemplate(icon, i)).join('')}
            <button id="addIconBtn">추가</button>
        </ol>
        ${modals.map((modal: string) => modal).join('')}`
    )
}

export default Icons;
