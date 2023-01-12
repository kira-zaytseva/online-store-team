import Page from '../../models/page';
import { createButton } from '../../components/button';
import { createAccordeon } from '../../components/accordeon/accordeon';
import { data } from '../../data/data';
import { AccordeonObject } from '../../components/accordeon/types';
import { createBreadcrumbs } from '../../components/breadcrumbs/index';
import ErrorPage, { ErrorTypes } from '../error';
import { Routes } from '../../types';
import { convertQuery } from '../../helpers/convertQuery';
import { createModal } from '../../components/modal';
import CartStore from '../../store/cart';

class ProductPage extends Page {
    constructor(id: string) {
        super(id);
    }

    createProductPage(params: URLSearchParams): HTMLElement {
        const cartStore = CartStore;

        const paramPet = params.get('pet') || null;
        const paramId = Number(params.get('id'));
        const currentPet = data.find(({ id, pet }) => id === paramId && paramPet === pet) || null;

        if (!currentPet) {
            return new ErrorPage('errorPage', ErrorTypes.NotFound).render();
        }

        const productSection = document.createElement('article');
        productSection.className = 'product-section';
        const productCard = document.createElement('section');
        productCard.className = 'product-card';

        const imagesGallery = document.createElement('div');
        imagesGallery.className = 'images-gallery';
        const productMainImage = document.createElement('img');
        productMainImage.src = currentPet.images[0];
        productMainImage.alt = currentPet.title;
        productMainImage.className = 'product-image';
        const productAdditionalImages = document.createElement('div');
        productAdditionalImages.className = 'additional-images';
        currentPet.images.forEach((image) => {
            const productImages = document.createElement('img');
            productImages.src = image;
            productImages.className = 'product-images';
            productImages.addEventListener('click', () => (productMainImage.src = image));
            productAdditionalImages.appendChild(productImages);
        });
        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';
        const pageTitle = document.createElement('h1');
        pageTitle.innerHTML = currentPet.title;
        pageTitle.className = 'product-page-title';
        const productPrice = document.createElement('span');
        productPrice.innerHTML = `${currentPet.price}$`;
        productPrice.className = 'price';
        const productStock = document.createElement('span');
        productStock.className = 'stock';
        productStock.innerHTML = this.checkStock(currentPet.stock);
        const productForm = document.createElement('form');
        productForm.className = 'product-form';
        const faq = document.createElement('section');
        faq.className = 'faq';

        productSection.appendChild(
            createBreadcrumbs({
                name: currentPet.title,
                pet: currentPet.pet,
                category: currentPet.category,
                page: Routes.CatalogPage,
            })
        );

        const addToCart = (e: MouseEvent) => {
            e.preventDefault();
            cartStore.increase(currentPet.id);
            addBtn.style.display = 'none';
            removeBtn.style.display = 'block';
        };

        const removeFromCart = (e: MouseEvent) => {
            e.preventDefault();
            cartStore.remove(currentPet.id);
            removeBtn.style.display = 'none';
            addBtn.style.display = 'block';
        };

        productSection.appendChild(productCard);
        productCard.appendChild(imagesGallery);
        imagesGallery.appendChild(productMainImage);
        imagesGallery.appendChild(productAdditionalImages);
        productCard.appendChild(productInfo);
        productInfo.appendChild(pageTitle);
        productInfo.appendChild(productPrice);
        productInfo.appendChild(productStock);
        productInfo.appendChild(productForm);
        const addBtn = createButton({ buttonText: 'Add to cart', onClick: addToCart });
        const removeBtn = createButton({
            buttonText: 'Drop from cart',
            classNames: 'remove-btn',
            onClick: removeFromCart,
        });

        const checkExistence = () => Boolean(cartStore.getById(currentPet.id));

        if (checkExistence()) {
            addBtn.style.display = 'none';
            removeBtn.style.display = 'block';
        }

        productForm.appendChild(addBtn);
        productForm.appendChild(removeBtn);
        const openModal = (e: MouseEvent) => {
            e.preventDefault();

            if (!checkExistence()) {
                cartStore.increase(currentPet.id);
            }

            createModal();
            window.location.href = `${window.location.pathname}#${Routes.CartPage}`;
        };
        productForm.appendChild(createButton({ buttonText: 'Buy', onClick: openModal }));
        productSection.appendChild(faq);
        faq.appendChild(createAccordeon(currentPet.information as Array<AccordeonObject>));
        return productSection;
    }

    checkStock(stock: number) {
        return stock ? 'In stock' : 'Not available';
    }

    render() {
        const params = convertQuery(Routes.ProductPage);

        this.container.append(this.createProductPage(params));
        return this.container;
    }
}

export default ProductPage;
