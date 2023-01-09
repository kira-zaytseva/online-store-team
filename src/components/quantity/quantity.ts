import { QuantityInterface } from './types';

export const createQuantity = ({ max, value, setValue }: QuantityInterface): HTMLFieldSetElement => {
    let currentValue: number = value || 0;
    const fieldsetQuantity = document.createElement('fieldset');
    fieldsetQuantity.className = 'fieldset';
    const legendQuantity = document.createElement('legend');
    legendQuantity.className = 'legend';
    fieldsetQuantity.appendChild(legendQuantity);

    const quantity = document.createElement('div');
    quantity.className = 'quantity';
    fieldsetQuantity.appendChild(quantity);

    const buttonDecrease = document.createElement('button');
    buttonDecrease.className = `quantity__btn quantity__btn--decrease`;
    buttonDecrease.type = 'button';
    quantity.appendChild(buttonDecrease);

    const quantityInput = document.createElement('input');
    quantityInput.className = 'quantity__input';
    quantityInput.value = String(currentValue);
    quantity.appendChild(quantityInput);

    const buttonIncrease = document.createElement('button');
    buttonIncrease.className = `quantity__btn quantity__btn--increase`;
    buttonIncrease.type = 'button';
    quantity.appendChild(buttonIncrease);

    buttonDecrease.addEventListener('click', () => {
        currentValue -= 1;
        setInputValue();
    });

    buttonIncrease.addEventListener('click', () => {
        currentValue += 1;
        setInputValue();
    });

    function setInputValue(): void {
        setValue(currentValue);
        quantityInput.value = String(currentValue);
        currentValue === 0 ? (buttonDecrease.disabled = true) : (buttonDecrease.disabled = false);
        currentValue >= max ? (buttonIncrease.disabled = true) : (buttonIncrease.disabled = false);
    }

    return fieldsetQuantity;
};
