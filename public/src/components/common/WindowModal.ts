import { useEvents, useState, useEffect } from "../../core/CustomReact";

import { memoize } from 'lodash';

import store from "../../reducer/store";
import { toggleFocusModal, removeModal } from "../../reducer/modals/action";

import { IIcons } from "../../../types/components/common/icons";

interface IWindowModal {
    icon: IIcons;
    modalIdx: number;
    main?: Element;
    footer?: Element;
}

function WindowModal ({icon, modalIdx, main, footer}: IWindowModal) {
    const { dispatch, getState } = store;
    const { modals: modalsState } = getState();

    const numCriteria = Number.parseInt(icon.style.backgroundPosition.split("px")[0]);

    const [isOpen, setIsOpen] = useState(`WindowModal-${modalIdx}`, true);
    const [modalIndex, setModalIndex] = useState(`WindowModal-${modalIdx}`, modalIdx);
    
    const [modalSize, setModalSize] = useState(`WindowModal-${modalIdx}`, { width: '600px', height: '500px' });
    const [modalTranslate, setModalTranslate] = useState(`WindowModal-${modalIdx}`, { X: 100, Y: 150 });

    const [isFullSize, setIsFullSize] = useState(`WindowModal-${modalIdx}`, false);

    /*
    * 모달 이벤트
    */
    // 1. 모달 창 헤더 오른쪽(.modal-header-right) (-, ㅁ, x) 버튼을 눌렀을 때
    // 1 - 1. 최소화(-) 버튼
    const minimizeBtnEvent = () => {
        const minimizeBtn = document.querySelector<HTMLElement>(`#minimize-btn-${modalIndex}`);

        const minimizeBtnClickCallback = (e: MouseEvent) => {
            e.preventDefault();
            const windowModalContainer = document.querySelector<HTMLElement>(`#window-modal-${modalIndex}`);

            dispatch(toggleFocusModal({modalIdx, focused: false}));
            if (windowModalContainer) {
                windowModalContainer.style.display = 'none';
            }
        }

        return [minimizeBtn, 'click', minimizeBtnClickCallback]
    }

    // 1 - 2. 전체 화면(ㅁ) 버튼
    const maximizeBtnEvent = () => {
        const maximizeBtn = document.querySelector(`#maximize-btn-${modalIndex}`);

        const maximizeBtnClickCallback = (e: MouseEvent) => {
            e.preventDefault();
            const windowModalContainer = document.querySelector<HTMLElement>(`#window-modal-${modalIndex}`);
            
            if (windowModalContainer) {
                setIsFullSize(true);
                console.log("windowModalContainer", windowModalContainer.style);
                windowModalContainer.style.width = '100%';
                windowModalContainer.style.height = '100vh';
            }
        }

        return [maximizeBtn, 'click', maximizeBtnClickCallback]
    }

    // 1 - 3. 창 크기 조정(ㅁㅁ) 버튼
    const restoreDownBtnEvent = () => {
        const restoreDownBtn = document.querySelector(`#restore-down-btn-${modalIndex}`);

        const restoreDownBtnClickCallback = (e: MouseEvent) => {
            e.preventDefault();
            
            
            setIsFullSize(false);
            // setModalSize({ width: modalSize.width, height: modalSize.height });
            setModalSize({ width: '10px', height: '10px' });
            const windowModalContainer = document.querySelector<HTMLElement>(`#window-modal-${modalIndex}`);
            
            if (windowModalContainer) {
                console.log("windowModalContainer", windowModalContainer.style);
            }
        }

        return [restoreDownBtn, 'click', restoreDownBtnClickCallback]
    }

    // 1 - 4. 닫기(x) 버튼
    const _closeBtnClickEvent = (idx: number) => {
        const closeBtn = document.querySelector(`#close-btn-${idx}`);
        
        function closeBtnClickCallback (e: MouseEvent) {
            e.preventDefault();
            dispatch(removeModal({modalIdx}));
            console.log("modalStates", modalsState);
        }

        return [closeBtn, 'click', closeBtnClickCallback]
    }

    const closeBtnClickEvent = (idx: number) => {
        return _closeBtnClickEvent(idx);
    };

    const modalEvents = [
        minimizeBtnEvent,
        maximizeBtnEvent,
        restoreDownBtnEvent,
        () => closeBtnClickEvent(modalIndex),
    ];

    useEvents(modalEvents);

    // useEffect(() => {
    //     //
    // }, [modalSize.width, modalSize.height, modalTranslate.X, modalTranslate.Y])

    const modalContent = () => {
        return (
            `<div
                id="window-modal-${modalIndex}"
                class="window-modal"
                style="width: ${modalSize.width}; height: ${modalSize.height}; transform: translate(${modalTranslate.X + 40 * modalIdx}px, ${modalTranslate.Y + 40 * modalIdx}px)"
            >
                <header class="modal-header stop-drag">
                    <div class="modal-header-left">
                    <div class="sm-icon-img" style="background-position: ${numCriteria / 2}px ${numCriteria / 2}px;"></div>
                    </div>
                    <div class="modal-header-middle">
                        <p>${icon.name}</p>
                    </div>
                    <div class="modal-header-right">
                        <button
                            id="minimize-btn-${modalIndex}"
                            class="minimize-btn"
                        >
                            <svg style="width: 16px;height: 16px;fill: rgb(255, 255, 255);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,14H4V10H20" /></svg>
                        </button>
                        <button
                            id="restore-down-btn-${modalIndex}"
                            class="restore-down-btn"
                        >
                                <svg style="width: 16px;height: 16px;fill: rgb(255, 255, 255);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 18V20H4A2 2 0 0 1 2 18V8H4V18M22 6V14A2 2 0 0 1 20 16H8A2 2 0 0 1 6 14V6A2 2 0 0 1 8 4H20A2 2 0 0 1 22 6M20 6H8V14H20Z" /></svg>
                        </button>
                        <button
                            id="maximize-btn-${modalIndex}"
                            class="maximize-btn"
                        >
                                <svg style="width: 16px;height: 16px;fill: rgb(255, 255, 255);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,3H21V21H3V3M5,5V19H19V5H5Z" /></svg>
                        </button>
                        <button
                            id="close-btn-${modalIndex}"
                            class="close-btn"
                        >
                            <svg style="width: 20px;height: 20px;fill: rgb(255, 255, 255);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                        </button>
                    </div>
                </header>
                <main class="modal-main">
                    <button class="main-btn">네이버로 이동</button>
                </main>
            </div>`
        )
    }

    return (
        `${isOpen ? modalContent() : ''}`
    )
}

export default WindowModal;