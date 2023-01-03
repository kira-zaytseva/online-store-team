export type AccordeonObject = {
    id: number;
    question: string;
    answer: string;
};

export interface AnimationInterface {
    button: null | HTMLButtonElement;
    state: string;
    animation: null | Animation;
    init: (el: HTMLButtonElement) => void;
    toggle: () => void;
    expand: () => void;
    collapse: () => void;
    animateContent: (isReversed: boolean, endState: string) => void;
}
