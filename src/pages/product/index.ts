import Page from '../../types/page';
import { createButton } from '../../components/button';
import { createQuantity } from '../../components/quantity/quantity';
import { createAccordeon } from '../../components/accordeon/accordeon';
import { dogs } from '../../data/data';
import { AccordeonObject } from '../../components/accordeon/types';

class ProductPage extends Page {
    constructor(id: string) {
        super(id);
    }

    createProductPage(): HTMLElement {
        const productSection = document.createElement('section');
        productSection.className = 'product-section';
        const productCard = document.createElement('section');
        productCard.className = 'product-card';
        const productImage = document.createElement('img');
        productImage.src = dogs[0].images[0];
        productImage.alt = dogs[0].title;
        productImage.className = 'product-image';
        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';
        const pageTitle = document.createElement('h1');
        pageTitle.innerHTML = dogs[0].title;
        pageTitle.className = 'product-page-title';
        const productPrice = document.createElement('span');
        productPrice.innerHTML = `${dogs[0].price}$`;
        productPrice.className = 'price';
        const productStock = document.createElement('span');
        productStock.className = 'stock';
        productStock.innerHTML = checkStock();
        const productForm = document.createElement('form');
        productForm.className = 'product-form';
        const faq = document.createElement('section');
        faq.className = 'faq';

        productSection.appendChild(productCard);
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
        productInfo.appendChild(pageTitle);
        productInfo.appendChild(productPrice);
        productInfo.appendChild(productStock);
        productInfo.appendChild(productForm);
        productForm.appendChild(createQuantity({ max: 5, setValue: (value) => console.log(value), value: 2 }));
        productForm.appendChild(createButton({ buttonText: 'Add to cart' }));
        productForm.appendChild(createButton({ buttonText: 'Buy' }));
        productSection.appendChild(faq);
        faq.appendChild(createAccordeon(dogs[0].information as Array<AccordeonObject>));
        return productSection;
    }

    render() {
        this.container.append(this.createProductPage());
        return this.container;
    }
}

function checkStock() {
    return dogs[0].stock ? 'In stock' : 'Not available';
}

export default ProductPage;
