import { NavCardInterface } from './types';

export const createNavCard = ({
    onClick = null,
    onHover = null,
    classNames = '',
    id = null,
    cardImageLink,
    cardTitle,
    cardLink,
}: NavCardInterface): HTMLAnchorElement => {
    const navCard = document.createElement('a');
    const navCardTitle = document.createElement('span');
    const navCardImg = document.createElement('img');
    navCard.href = cardLink;
    navCard.className = `nav-card ${classNames}`;
    navCardTitle.innerHTML = cardTitle;
    navCardTitle.className = 'nav-card-title';
    navCardImg.src = cardImageLink;
    navCardImg.className = 'nav-card-img';
    navCard.appendChild(navCardTitle);
    navCard.appendChild(navCardImg);
    !!id && navCard.setAttribute('data-id', String(id));
    !!onClick && navCard.addEventListener('click', onClick);
    !!onHover && navCard.addEventListener('mouseover', onHover);

    return navCard;
};
