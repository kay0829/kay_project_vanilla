import { IIcons } from "../../../../types/components/common/icons";
import WindowModal from "../../../components/common/WindowModal";

/*
* 아이콘 이름 관련 (이름이 길 경우 짧게 / 클릭 시에 풀네임)
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
* 아이콘 클릭 클래스 관련 (클릭되었을 때 clicked 클래스 추가 / 삭제)
*/
const inFocusIcon = (v: Element) => {
    v.classList.add('clicked');
}

const outFocusIcons = () => {
    const iconList = document.querySelectorAll<HTMLElement>(".default-icon");

    iconList.forEach((v) => {
        if (v.classList.value.includes('clicked') ) {
            v.classList.remove('clicked');
            abbreviateIconName(v);
        }
    })
}

// 1. 아이콘 클릭했을 때
export const iconClickCallback = (e: MouseEvent, target: HTMLElement) => {
    console.log(e);
    
    e.stopPropagation();
    outFocusIcons();
    inFocusIcon(target);
    showFullIconName(target);
}

// 2. 아이콘 외부 화면 클릭했을 때
export const containerClickCallback = () => {
    outFocusIcons()
}

export const getIconIdx = (v: HTMLElement) => {
    return Number.parseInt(v.id.split("-")[1]);
}
/*
* 아이콘 드래그 할 때 이미지
*/
const getDragIconEl = (v: HTMLElement, icons: Array<IIcons>) => {
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

export const iconDragCallback = (
    dragstartEvent: DragEvent,
    target: HTMLElement,
    icons: Array<IIcons>,
    setIcons: Function,
) => {
    // 아이콘 index
    const iconIdx = Number.parseInt(target.getAttribute("id")?.split("-")[1] || '0');

    // 하나의 grid area의 가로/세로
    const ONE_GRID_AREA_WIDTH = 80;
    const ONE_GRID_AREA_HEIGHT = 100;

    // 기존 아이콘 그리드 column, row 시작점
    const prevGridColumnStart = Number.parseInt(target.style.gridColumnStart);
    const prevGridRowStart = Number.parseInt(target.style.gridRowStart);

    // 기존 아이콘 위치
    const prevIconPos = [dragstartEvent.clientX, dragstartEvent.clientY];

    const rootEl = document.querySelector("#root") || document.body;
    const iconDiv = getDragIconEl(target, icons);

    let shiftX = dragstartEvent.clientX - target.getBoundingClientRect().left;
    let shiftY = dragstartEvent.clientY - target.getBoundingClientRect().top;

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
        if (target.classList.value.includes('clicked')) {
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
            newIcons[iconIdx] = {...icons[iconIdx], style: {...icons[iconIdx].style, ...style} };
            setIcons(newIcons);

            document.removeEventListener('dragover', dragoverFn);

            rootEl.removeChild(iconDiv);
        }
    })
}

// 4. 아이콘 더블클릭이벤트
export const iconDbClickCallback = (
    _: Event,
    target: HTMLElement,
    neededState: {modalsLength: number, icons: Array<IIcons>},
    addModals: Function,
) => {
    const modalIdx = neededState.modalsLength + 1;

    const idx = getIconIdx(target);
    const dbclickedIcon = neededState.icons.filter((v: IIcons) =>  v.idx === idx);

    const windowModal = WindowModal({icon: dbclickedIcon[0], modalIdx});

    if (windowModal) {
        const value = {icon: dbclickedIcon[0], content: windowModal};
        addModals(value);
    }
}