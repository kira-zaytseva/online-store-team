import { ButtonInterface } from './types';

export const createButton = ({
    onClick = null,
    onHover = null,
    classNames = '',
    id = null,
    buttonText,
    type,
}: ButtonInterface): HTMLButtonElement => {
    const button = document.createElement('button');
    button.innerHTML = buttonText;
    button.className = `button ${classNames}`;
    !!id && button.setAttribute('data-id', String(id));
    !!type && button.setAttribute('type', type);
    !!onClick && button.addEventListener('click', onClick);
    !!onHover && button.addEventListener('mouseover', onHover);

    return button;
};
