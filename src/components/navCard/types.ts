type setEvent = (e: MouseEvent) => void;

export interface NavCardInterface {
    onClick?: setEvent | null;
    onHover?: setEvent | null;
    id?: number | null;
    classNames?: string;
    cardImageLink: string;
    cardTitle: string;
    cardLink: string;
}
