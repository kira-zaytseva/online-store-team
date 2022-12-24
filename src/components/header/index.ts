import Component from '../../types/component';
import { routes } from '../../pages/app';

const Buttons = [
    {
        id: routes.MainPage,
        text: 'Main Page',
    },
    {
        id: routes.SettingsPage,
        text: 'Settings Page',
    },
    {
        id: routes.StatisticsPage,
        text: 'Statistics Page',
    },
];

class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderPageButtons() {
        const pageButtons = document.createElement('div');
        Buttons.forEach((button) => {
            const buttonHTML = document.createElement('a');
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerText = button.text;
            pageButtons.append(buttonHTML);
        });
        this.container.append(pageButtons);
    }

    render() {
        this.renderPageButtons();
        return this.container;
    }
}

export default Header;
