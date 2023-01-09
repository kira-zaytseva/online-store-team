import Page from '../../types/page';
import MainPage from '../main';
import CatalogPage from '../catalog';
import ProductPage from '../product';
import CartPage from '../cart';
import ErrorPage, { ErrorTypes } from '../error';
import Header from '../../components/header';
import { Footer } from '../../components/footer';
import { routes } from '../../enums';

class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId = 'current-page';
    private header: Header;
    private footer: Footer;
    private mainWrapper: HTMLElement;

    constructor() {
        this.header = new Header('header', 'header');
        this.footer = new Footer('footer', 'footer');
        this.mainWrapper = document.createElement('main');
    }

    renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);

        if (currentPageHTML) {
            currentPageHTML.remove();
        }

        let page: Page | null = null;

        if (idPage === routes.MainPage) {
            page = new MainPage(idPage);
        } else if (idPage.includes(routes.CatalogPage)) {
            page = new CatalogPage(idPage);
        } else if (idPage === routes.CartPage) {
            page = new CartPage(idPage);
        } else if (idPage.includes(routes.ProductPage)) {
            page = new ProductPage(idPage);
        } else {
            page = new ErrorPage(idPage, ErrorTypes.NotFound);
        }

        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            this.mainWrapper.append(pageHTML);
            // App.container.append(pageHTML);
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            this.renderNewPage(hash);
        });
    }

    run() {
        App.container.append(this.header.render());
        App.container.append(this.mainWrapper);
        const hash = window.location.hash.slice(1) || 'main-page';
        this.renderNewPage(hash);
        this.enableRouteChange();
        App.container.append(this.footer.render());
    }
}

// Main, Catalog, Cart

export default App;
