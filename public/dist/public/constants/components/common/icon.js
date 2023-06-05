export const ICON_INFO = {
    INTERNET: {
        type: "INTERNET",
        extenstion: "",
        imgSrc: "./assets/icons/icon-internet.png",
        explanation: "인터넷 아이콘",
    },
    FOLDER: {
        type: "FOLDER",
        extenstion: "",
        imgSrc: "./assets/icons/icon-folder.png",
        explanation: "폴더 아이콘",
    },
    TXT: {
        type: "TXT",
        extenstion: "txt",
        imgSrc: "./assets/icons/icon-file-document.png",
        explanation: "텍스트 파일 아이콘",
    },
};
/*
* 기본 아이콘 정보
*/
export const DEFAULT_ICON = [
    {
        idx: 0,
        name: "인터넷 익스플로러",
        extenstion: ICON_INFO.INTERNET.extenstion,
        type: ICON_INFO.INTERNET.type,
        imgSrc: ICON_INFO.INTERNET.imgSrc,
        explanation: ICON_INFO.INTERNET.explanation,
        style: { gridRowStart: 1, gridColumnStart: 1 },
    },
    {
        idx: 1,
        name: "내 문서",
        extension: ICON_INFO.FOLDER.extenstion,
        type: ICON_INFO.FOLDER.type,
        imgSrc: ICON_INFO.FOLDER.imgSrc,
        explanation: ICON_INFO.FOLDER.explanation,
        style: { gridRowStart: 2, gridColumnStart: 1 },
    },
    {
        idx: 2,
        name: "파일.txt",
        extension: ICON_INFO.TXT.extenstion,
        type: ICON_INFO.TXT.type,
        imgSrc: ICON_INFO.TXT.imgSrc,
        explanation: ICON_INFO.TXT.explanation,
        style: { gridRowStart: 3, gridColumnStart: 1 },
    },
];
//# sourceMappingURL=icon.js.map