import { routes } from '../../enums';
import Component from '../../types/component';

const Buttons = [
    {
        id: routes.MainPage,
        text: 'Main Page',
    },
    {
        id: routes.CatalogPage,
        text: 'Catalog Page',
    },
    {
        id: routes.CartPage,
        text: 'Cart Page',
    },
];

class Header extends Component {
    headerContainer: HTMLDivElement;
    constructor(tagName: string, className: string) {
        super(tagName, className);
        this.headerContainer = document.createElement('div');
        this.headerContainer.className = 'header__container container';
        this.container.append(this.headerContainer);
    }

    renderPageButtons() {
        const leftColumn = document.createElement('div');
        const rightColumn = document.createElement('div');
        leftColumn.className = 'column';
        rightColumn.className = 'column';
        // const pageButtons = document.createElement('div');
        const htmlButtons: (string | Node)[] = [];
        Buttons.forEach((button) => {
            const buttonHTML = document.createElement('a');
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerText = button.text;
            htmlButtons.push(buttonHTML);
        });
        const phoneNumber = document.createElement('div');
        const phoneNumberIcon = document.createElement('img');

        phoneNumber.append(phoneNumberIcon, '111111');

        const workingTime = document.createElement('p');
        workingTime.textContent = '9:00 - 21:00';

        leftColumn.append(htmlButtons[0], htmlButtons[1]);
        rightColumn.append(phoneNumber, workingTime, htmlButtons[2]);

        this.headerContainer.append(leftColumn, rightColumn);
    }

    render() {
        this.renderPageButtons();
        return this.container;
    }
}

export default Header;
