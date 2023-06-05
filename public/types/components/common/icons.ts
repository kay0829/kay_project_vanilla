export interface IIcons {
    idx: number;
    name: string;
    extension?: string;
    type?: string;
    imgSrc?: string;
    explanation: string;
    style: { gridRowStart: number, gridColumnStart: number, backgroundPosition: string }
}