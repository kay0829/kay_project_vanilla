import { useEvents, useState, useEffect } from "../../core/CustomReact";
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
        { name: "문서", imgSrc: "./assets/icons/icon-file-document.png", explanation: "문서 아이콘" },
        { name: "폴더", imgSrc: "./assets/icons/icon-folder.png", explanation: "폴더 아이콘" }
    ]

    const [icons, setIcons] = useState(initialState);
    const [btnClickCount, setBtnClickCount] = useState(0);

    useEffect(() => {
        console.log('hi~! I am mounted');
    }, [])

    useEffect(() => {
        console.log('buttonClickCount changed to', btnClickCount);
    }, [btnClickCount])

    useEffect(() => {
        console.log('new icon info', icons[icons.length - 1]);
    }, [icons])

    /*
    * 이벤트 등록
    */
    const iconClickEvent = () => {
        /*
        * 아이콘 클릭 이벤트 관련 메서드
        */
        const iconArea = document.querySelectorAll(".default-icon");
        const inFocusIcon = (v: Element) => {
            v.classList.add('clicked');
        }

        const outFocusIcons = () => {
            iconArea.forEach((v) => {
                if (v.classList.value.includes('clicked') ) {
                    v.classList.remove('clicked');
                }
            })
        }

        // 1. 아이콘 클릭했을 때
        iconArea.forEach((v) => {
            v.addEventListener('click', (e) => {
                e.stopPropagation();
                outFocusIcons();
                inFocusIcon(v); 
            })
        })

        // 2. 아이콘 외부 화면 클릭했을 때
        const container = document.querySelector(".main-screen-container");
        if (container) {
            container.addEventListener('click', () => {
                outFocusIcons();
            })
        }

        const addIconBtn = document.querySelector("#addIconBtn");
        if (addIconBtn) {
            addIconBtn.addEventListener('click', () => {
                const newIconInfo = { name: "폴더", imgSrc: "./assets/icons/icon-folder.png", explanation: "폴더 아이콘" };
                const newIconArr = [...icons, newIconInfo];
                setIcons(newIconArr);

                setBtnClickCount(btnClickCount + 1);
            })
        }
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
                aria-label=${icon.explanation}
                style="grid-column: 1 / 1;grid-row: ${i + 1} / ${i + 2};"
            >
                <button>
                    <figure>
                        <img src=${icon.imgSrc} draggable="false">
                    </figure>
                    <figcaption>${icon.name}</figcaption>
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
            <button id="addIconBtn">추가</button>
        </ol>`
    )
}

export default Icons;
