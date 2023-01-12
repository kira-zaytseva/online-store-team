import { Routes } from '../../types';
import Component from '../../models/component';
import CartStore from '../../store/cart';
import { STORE_UPDATED } from '../../constants';
class Header extends Component {
    headerContainer: HTMLDivElement;
    constructor(tagName: string, className: string) {
        super(tagName, className);
        this.headerContainer = document.createElement('div');
        this.headerContainer.className = 'header__container container';
        this.container.append(this.headerContainer);
    }

    renderHeaderContainer() {
        const leftColumn = document.createElement('div');
        const rightColumn = document.createElement('div');
        leftColumn.className = 'column';
        rightColumn.className = 'column';

        const phoneNumber = '111111';
        const phoneLink = document.createElement('a');
        phoneLink.className = 'phone-link';
        phoneLink.href = `tel:+${phoneNumber}`;

        const phoneNumberIcon = new Image();
        phoneNumberIcon.src = 'https://i.imgur.com/6um6pVN.png';

        phoneLink.append(phoneNumberIcon, phoneNumber);

        const workingTime = document.createElement('p');
        workingTime.textContent = '9:00 - 21:00';

        const logoIcon = new Image();
        logoIcon.src = 'https://i.imgur.com/GANB9C7.png';
        logoIcon.className = 'main-page-logo';

        const mainPageLogo = document.createElement('a');
        mainPageLogo.href = `#${Routes.MainPage}`;
        mainPageLogo.appendChild(logoIcon);

        const catalogPage = document.createElement('a');
        catalogPage.href = `#${Routes.CatalogPage}`;
        catalogPage.textContent = 'Catalog';
        catalogPage.className = 'catalog-link';

        const cartPageIcon = new Image();
        cartPageIcon.src = 'https://i.imgur.com/fCVCI57.png';

        const cartLink = document.createElement('a');
        cartLink.href = `#${Routes.CartPage}`;
        cartLink.appendChild(cartPageIcon);
        cartLink.className = 'cart-icon';

        const stats = document.createElement('div');
        stats.className = 'flex';
        const quantity = document.createElement('span');
        quantity.className = 'selected-items';

        const totalBill = document.createElement('span');
        stats.append(quantity, totalBill);

        leftColumn.append(mainPageLogo, catalogPage);
        rightColumn.append(phoneLink, workingTime, cartLink, stats);

        this.headerContainer.append(leftColumn, rightColumn);
        const updateCartStats = () => {
            const currentOrderProducts = CartStore.get();
            const currentTotalPrice = currentOrderProducts.reduce((acc, rec) => acc + rec.amount * rec.price, 0);
            quantity.textContent = String(CartStore.getQuantity());
            totalBill.textContent = `${currentTotalPrice}$`;
        };

        updateCartStats();

        window.addEventListener(STORE_UPDATED, updateCartStats);
    }

    render() {
        this.renderHeaderContainer();
        return this.container;
    }
}

export default Header;
