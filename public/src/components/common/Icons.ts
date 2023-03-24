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
                aria-label=${icon.explanation}
                style="grid-column: 1 / 1;grid-row: ${i + 1} / ${i + 2};"
            >
                <button>
                    <figure>
                        <img src=${icon.imgSrc} draggable="false">
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
