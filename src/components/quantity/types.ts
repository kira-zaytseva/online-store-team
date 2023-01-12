export interface QuantityInterface {
    max: number;
    value: number;
    setValue: (value: number, quantityStatus: string) => void;
}

export const enum quantityStatus {
    DECREASE = 'decrease',
    INCREASE = 'increase',
}
