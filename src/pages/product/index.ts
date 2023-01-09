import Page from '../../types/page';
import { createButton } from '../../components/button';
import { createQuantity } from '../../components/quantity/quantity';
import { createAccordeon } from '../../components/accordeon/accordeon';
import { data } from '../../data/data';
import { AccordeonObject } from '../../components/accordeon/types';
import { createBreadcrumbs } from '../../components/breadcrumbs/index';
import ErrorPage, { ErrorTypes } from '../error';
import { routes } from '../../enums';
import { convertQuery } from '../../helpers/convert-query';
import { createModal } from '../../components/modal';

class ProductPage extends Page {
    constructor(id: string) {
        super(id);
    }

    createProductPage(params: URLSearchParams): HTMLElement {
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
                page: routes.CatalogPage,
            })
        );
        productSection.appendChild(productCard);
        productCard.appendChild(imagesGallery);
        imagesGallery.appendChild(productMainImage);
        imagesGallery.appendChild(productAdditionalImages);
        productCard.appendChild(productInfo);
        productInfo.appendChild(pageTitle);
        productInfo.appendChild(productPrice);
        productInfo.appendChild(productStock);
        productInfo.appendChild(productForm);
        productForm.appendChild(createQuantity({ max: 5, setValue: (value) => console.log(value), value: 2 }));
        productForm.appendChild(createButton({ buttonText: 'Add to cart' }));
        productForm.appendChild(
            createButton({ buttonText: 'Buy', onClick: () => this.container.appendChild(createModal()) })
        );
        productSection.appendChild(faq);
        faq.appendChild(createAccordeon(currentPet.information as Array<AccordeonObject>));
        return productSection;
    }

    checkStock(stock: number) {
        return stock ? 'In stock' : 'Not available';
    }

    render() {
        const params = convertQuery(routes.ProductPage);

        console.log(params.get('pet')); // 'data'
        this.container.append(this.createProductPage(params));
        return this.container;
    }
}

export default ProductPage;
