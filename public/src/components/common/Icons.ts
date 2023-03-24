import { useEvents, useState } from "../../core/CustomReact";
import { IIcons } from "../../../types/components/common/icons";

/*
* 아이콘 컴포넌트
*/
function Icons () {
    /*
    * 기본 아이콘 정보
    */
    const initialState = [
        { name: "인터넷", imgSrc: "./assets/icons/icon-internet.png", explanation: "인터넷 아이콘" },
        { name: "파일이름여덟글자", imgSrc: "./assets/icons/icon-file-document.png", explanation: "문서 아이콘" },
        { name: "문서이름이아홉글자", imgSrc: "./assets/icons/icon-folder.png", explanation: "폴더 아이콘" }
    ]

    const [icons, setIcons] = useState(initialState);

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
        const abbreviateIconName = (v: Element) => {
            const iconFigcaption = v.children[0].children[1];
            const fullIconName = iconFigcaption.ariaLabel || iconFigcaption.innerHTML;
            const shortName = `${fullIconName.substring(0, 8)}...`;

            if (fullIconName.length > 8) {
                iconFigcaption.innerHTML = shortName;
            }
        }

        const showFullIconName = (v: Element) => {
            const iconFigcaption = v.children[0].children[1];
            const fullIconName = iconFigcaption.ariaLabel || iconFigcaption.innerHTML;

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
        const container = document.querySelector(".main-screen-container");
        if (container) {
            container.addEventListener('click', () => {
                outFocusIcons();
            })
        }

        // 3. 아이콘 드래그 이벤트 (.default-icon dragstart -> document dragover & drop)
        iconArea.forEach((v) => {
            v.addEventListener('dragstart', (dragstartEvent) => {
                const ONE_GRID_AREA_WIDTH = 80;
                const ONE_GRID_AREA_HEIGHT = 100;
                
                // 기존 아이콘 위치
                const prevIconPos = [dragstartEvent.clientX, dragstartEvent.clientY];

                // 기존 아이콘 그리드 column, row 시작점
                const prevGridColumnStart = Number.parseInt(v.style.gridColumnStart);
                const prevGridRowStart = Number.parseInt(v.style.gridRowStart);

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
                    }
                })
            })
        })
    }
    useEvents([iconClickEvent]);

    /*
    * 아이콘 컴포넌트 
    */
    const iconTemplate = (icon: IIcons, i: number) => {
        return (`
            <li
                class="default-icon"
                draggable="true"
                aria-label="${icon.explanation}"
                style="grid-column-start: 1;grid-row-start: ${i + 1};"
            >
                <button>
                    <figure>
                        <img src="${icon.imgSrc}" draggable="false">
                    </figure>
                    <figcaption
                        aria-label="${icon.name}"
                    >
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
            aria-label="바탕화면 및 아이콘 리스트"
        >
            ${icons.map((icon: IIcons, i: number) => iconTemplate(icon, i)).join('')}
        </ol>`
    )
}

export default Icons;
