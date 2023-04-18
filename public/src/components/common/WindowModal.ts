import { useEvents, useState, useEffect } from "../../core/CustomReact";
import { IIcons } from "../../../types/components/common/icons";

interface IWindowModal {
    icon: IIcons;
    modalIdx: number;
    main?: Element;
    footer?: Element;
}

function WindowModal ({icon, modalIdx, main, footer}: IWindowModal) {
    const [isOpen, setIsOpen] = useState("WindowModal", true);
    const [modalIndex, setModalIndex] = useState("WindowModal", modalIdx);
    
    const [modalSize, setModalSize] = useState("WindowModal", { width: 400, height: 300 });
    const [modalTranslate, setModalTranslate] = useState("WindowModal", { X: 400, Y: 400 });

    const [isFullSize, setIsFullSize] = useState("WindowModal", false);

    useEffect(() => {
        console.log("modalIdx", modalIdx);
        const defaultTranslate = { X: modalTranslate.X + 20 * modalIdx, Y: modalTranslate.Y + 20 * modalIdx };
        setModalTranslate(defaultTranslate);
    }, [])

    useEffect(() => {
        //
    }, [modalSize.width, modalSize.height, modalTranslate.X, modalTranslate.Y])

    const modalCommonEvent = () => {
        const minimizeBtn = document.querySelector("#minimizeBtn");
        const maximizeBtn = document.querySelector("#maximizeBtn");
        const restoreDownBtn = document.querySelector("#restoreDownBtn");
        const closeBtn = document.querySelector("#closeBtn");

        if (maximizeBtn) {
            maximizeBtn.addEventListener('click', (e) => {
                e.preventDefault;
                setIsFullSize(true);
            })
        }

        if (restoreDownBtn) {
            restoreDownBtn.addEventListener('click', (e) => {
                e.preventDefault;
                setIsFullSize(false);
            })
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault;
                console.log("close ModalIdx", modalIndex);
                setIsOpen(false);
            })
        }
    }
    useEvents([modalCommonEvent]);

    const modalContent = () => {
        return (
            `<div
                id="window-modal-${modalIndex}"
                class="window-modal"
                style="width: ${modalSize.width}px; height: ${modalSize.height}px; transform: translate(${modalTranslate.X}px, ${modalTranslate.Y}px)"
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
                            : '<button id="maximizeBtn"><svg style="width: 16px;height: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-outline</title><path d="M3,3H21V21H3V3M5,5V19H19V5H5Z" /></svg></button>'
                        }
                        <button id="closeBtn">
                            <svg style="width: 16px;height: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                        </button>
                    </div>
                </header>
                <main></main>
                <footer></footer>
            </div>`
        )
    }

    return (
        `${isOpen ? modalContent() : ''}`
    )
}

export default WindowModal;