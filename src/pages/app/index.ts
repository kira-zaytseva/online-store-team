import Page from '../../types/page';
import MainPage from '../main';
import CatalogPage from '../settings';
import CartPage from '../statistics';
import ErrorPage, { ErrorTypes } from '../error';
import Header from '../../components/header';
import { routes } from '../../enums';
import { createButton } from '../../components/button';
import { createQuantity } from '../../components/quantity/quantity';

class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId = 'current-page';
    private header: Header;

    static renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        if (currentPageHTML) {
            currentPageHTML.remove();
        }
        let page: Page | null = null;

        if (idPage === routes.MainPage) {
            page = new MainPage(idPage);
        } else if (idPage === routes.CatalogPage) {
            page = new CatalogPage(idPage);
        } else if (idPage === routes.CartPage) {
            page = new CartPage(idPage);
        } else {
            page = new ErrorPage(idPage, ErrorTypes.NotFound);
        }

        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.container.append(pageHTML);
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
        });
    }

    constructor() {
        this.header = new Header('header', 'header');
    }

    run() {
        App.container.append(
            this.header.render(),
            createButton({ classNames: 'small-button small-button-red', buttonText: 'Buy' }),
            createQuantity({ max: 5, setValue: (value) => console.log(value), value: 2 })
        );
        App.renderNewPage('main-page');
        this.enableRouteChange();
    }
}

// Main, Catalog, Cart

export default App;
