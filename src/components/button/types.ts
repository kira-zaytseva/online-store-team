type setEvent = (e: MouseEvent) => void;

export interface ButtonInterface {
    onClick?: setEvent | null;
    onHover?: setEvent | null;
    classNames?: string;
    id?: number | null;
    buttonText: string;
    type?: string;
}
