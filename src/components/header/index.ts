import { routes } from '../../enums';
import Component from '../../types/component';
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
        mainPageLogo.href = `#${routes.MainPage}`;
        mainPageLogo.appendChild(logoIcon);

        const catalogPage = document.createElement('a');
        catalogPage.href = `#${routes.CatalogPage}`;
        catalogPage.textContent = 'Catalog';

        const cartPageIcon = new Image();
        cartPageIcon.src = 'https://i.imgur.com/fCVCI57.png';

        const cartLink = document.createElement('a');
        cartLink.href = `#${routes.CartPage}`;
        cartLink.appendChild(cartPageIcon);

        const stats = document.createElement('div');
        stats.className = 'flex';
        const quantity = document.createElement('span');
        quantity.className = 'selected-items';
        quantity.textContent = '10';

        const totalBill = document.createElement('span');
        totalBill.textContent = '100$';
        stats.append(quantity, totalBill);

        leftColumn.append(mainPageLogo, catalogPage);
        rightColumn.append(phoneLink, workingTime, cartLink, stats);

        this.headerContainer.append(leftColumn, rightColumn);
    }

    render() {
        this.renderHeaderContainer();
        return this.container;
    }
}

export default Header;
