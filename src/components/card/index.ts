import { createButton } from '../../components/button';
import { CardInterface } from './types';
import { routes } from '../../enums';
import CartStore from '../../store/cart';

export const createCard = ({ title, image, price, pet, id }: CardInterface): HTMLElement => {
    const cartStore = CartStore;

    const changeLocation = () => {
        window.location.href = `/#${routes.ProductPage}?pet=${pet}&id=${id}`;
    };

    const addToCart = (e: MouseEvent) => {
        e.preventDefault();
        cartStore.increase(id);
        addBtn.style.display = 'none';
        removeBtn.style.display = 'block';
    };

    const removeFromCart = (e: MouseEvent) => {
        e.preventDefault();
        cartStore.remove(id);
        removeBtn.style.display = 'none';
        addBtn.style.display = 'block';
    };

    const card = document.createElement('div');
    card.className = 'card';
    const cardImg = document.createElement('img');
    cardImg.src = image;
    cardImg.alt = title;
    cardImg.className = `card-img`;
    const cardInfo = document.createElement('div');
    cardInfo.className = 'card-info';
    const cardTitle = document.createElement('h2');
    cardTitle.innerText = title;
    cardTitle.className = 'card-title';
    const cardPrice = document.createElement('span');
    cardPrice.className = 'card-price';
    cardPrice.innerText = `${price}$`;
    const addBtn = createButton({ buttonText: 'Add to cart', classNames: 'card-btn', onClick: addToCart });
    const removeBtn = createButton({
        buttonText: 'Drop from cart',
        classNames: 'card-btn remove-btn',
        onClick: removeFromCart,
    });
    const isExisted = Boolean(cartStore.getById(id));

    if (isExisted) {
        addBtn.style.display = 'none';
        removeBtn.style.display = 'block';
    }

    card.appendChild(cardImg);
    card.appendChild(cardInfo);
    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(cardPrice);
    card.appendChild(addBtn);
    card.appendChild(removeBtn);
    card.appendChild(createButton({ buttonText: 'More info', classNames: 'card-btn', onClick: changeLocation }));
    return card;
};
