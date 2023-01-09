import { createModal } from '../../components/modal';
import { createButton } from '../../components/button';
import { createQuantity } from '../../components/quantity/quantity';
import Page from '../../types/page';
import CartStore from '../../store/cart';
import { cartProductInterface } from '../../store/types';
import { quantityStatus } from 'components/quantity/types';
import { events } from '../../enums';

const sale = 0;

class CartPage extends Page {
    constructor(id: string) {
        super(id);
    }

    createCartPage() {
        const currentOrderProducts = CartStore.get();
        const cartContainer = document.createElement('article');
        cartContainer.className = 'cart-container';

        const cartSection = document.createElement('section');
        cartSection.className = 'cart-section';

        const cartTitle = document.createElement('h1');
        cartTitle.className = 'cart-title';

        const cartCalculations = document.createElement('div');
        cartCalculations.className = 'calculations-block';

        const promocode = document.createElement('div');
        promocode.className = 'promocode';
        const promocodeTitle = document.createElement('label');
        promocodeTitle.id = 'promocode';
        promocodeTitle.innerText = 'Promocode';
        const promocodeInput = document.createElement('input');
        promocodeInput.id = 'promocode';
        promocodeInput.className = 'promocode-input';
        promocodeInput.placeholder = 'Enter promocode';

        const cartSum = document.createElement('div');
        cartSum.className = 'cart-sum';
        const cartSumTitle = document.createElement('p');
        cartSumTitle.className = 'sum-title';
        cartSumTitle.innerText = 'Summary';
        const productsSumInfo = document.createElement('div');
        productsSumInfo.className = 'products-sum-info';
        const sumProducts = document.createElement('span');
        const totalPrice = document.createElement('span');
        const saleInfo = document.createElement('div');
        saleInfo.className = 'sale-info';
        const saleText = document.createElement('span');
        saleText.innerText = 'Sale';
        const saleAmount = document.createElement('span');
        saleAmount.innerText = `${sale}$`;
        const paymentInfo = document.createElement('div');
        paymentInfo.className = 'payment-info';
        const paymentText = document.createElement('span');
        paymentText.innerText = 'Payable';
        const paymentAmount = document.createElement('span');

        const catBg = document.createElement('img');
        catBg.src = 'https://i.imgur.com/F8sJeSU.png';
        catBg.className = 'cart-cat-bg';

        cartContainer.appendChild(cartTitle);
        cartContainer.appendChild(cartSection);
        cartSection.appendChild(this.createCartList(currentOrderProducts));
        cartSection.appendChild(cartCalculations);
        cartCalculations.appendChild(promocode);
        promocode.appendChild(promocodeTitle);
        promocode.appendChild(promocodeInput);
        cartCalculations.appendChild(cartSum);
        cartSum.appendChild(cartSumTitle);
        cartSum.appendChild(productsSumInfo);
        productsSumInfo.appendChild(sumProducts);
        productsSumInfo.appendChild(totalPrice);
        cartSum.appendChild(saleInfo);
        saleInfo.appendChild(saleText);
        saleInfo.appendChild(saleAmount);
        cartSum.appendChild(paymentInfo);
        paymentInfo.appendChild(paymentText);
        paymentInfo.appendChild(paymentAmount);
        cartSum.appendChild(
            createButton({ buttonText: 'Buy now', onClick: () => this.container.appendChild(createModal()) })
        );
        const updateCartStats = () => {
            const currentOrderProducts = CartStore.get();
            const currentTotalPrice = currentOrderProducts.reduce((acc, rec) => acc + rec.amount * rec.price, 0);
            cartTitle.innerText = `Cart ${CartStore.getQuantity()} items`;
            totalPrice.innerText = `${currentTotalPrice}$`;
            sumProducts.innerText = `Products (${CartStore.getQuantity()})`;
            paymentAmount.innerText = `${currentTotalPrice - sale}$`;
        };
        updateCartStats();
        cartContainer.appendChild(catBg);
        window.addEventListener(events.STORE_UPDATED, updateCartStats);

        return cartContainer;
    }

    createCartList(currentOrderProducts: cartProductInterface[]) {
        const cartList = document.createElement('ul');
        cartList.className = 'cart-list';
        currentOrderProducts.forEach(({ price, amount, id, stock, title, images }) => {
            const cartItem = document.createElement('li');
            cartItem.className = 'cart-item';
            const itemImg = document.createElement('img');
            itemImg.className = 'item-img';
            itemImg.src = images[0];
            const itemInfo = document.createElement('div');
            itemInfo.className = 'item-info';
            const itemTitle = document.createElement('h2');
            itemTitle.className = 'item-title';
            itemTitle.innerText = title;
            const itemStock = document.createElement('span');
            itemStock.className = 'item-stock';
            itemStock.innerText = `${stock ? 'In stock' : 'Not available'}`;
            const rightColumn = document.createElement('div');
            rightColumn.className = 'right-column';
            const deleteItemImg = document.createElement('img');
            deleteItemImg.src = 'https://i.imgur.com/e1fZQSK.png';
            deleteItemImg.className = 'delete-img';
            const itemPrice = document.createElement('span');
            itemPrice.className = 'item-price';
            itemPrice.innerText = `${amount * price}$`;
            cartList.appendChild(cartItem);
            cartItem.appendChild(itemImg);
            cartItem.appendChild(itemInfo);
            itemInfo.appendChild(itemTitle);
            itemInfo.appendChild(itemStock);

            const setValue = (value: number, status: string) => {
                switch (status) {
                    case quantityStatus.DECREASE: {
                        CartStore.decrease(id);
                        break;
                    }
                    case quantityStatus.INCREASE: {
                        CartStore.increase(id);
                        break;
                    }
                }
            };

            const removeOrder = (e: MouseEvent) => {
                e.preventDefault;
                CartStore.remove(id);
                cartItem.remove();
            };

            const updateCartStats = () => {
                const currentOrder = CartStore.getById(id);
                if (currentOrder) {
                    const { amount, price } = currentOrder;
                    itemPrice.innerText = `${amount * price}$`;
                }
            };

            window.addEventListener(events.STORE_UPDATED, updateCartStats);

            itemInfo.appendChild(createQuantity({ max: stock, setValue, value: amount }));
            cartItem.appendChild(rightColumn);
            rightColumn.appendChild(deleteItemImg);
            rightColumn.appendChild(itemPrice);
            deleteItemImg.addEventListener('click', removeOrder);
        });

        return cartList;
    }

    render() {
        this.container.append(this.createCartPage());
        return this.container;
    }
}

export default CartPage;
