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

    createProductPage() {
        const div = document.createElement('div');
        div.innerHTML = 'PRODUCT PAGE';
        return div;
    }

    render() {
        this.container.append(
            this.createProductPage(),
            createButton({ classNames: 'small-button small-button-red', buttonText: 'Buy' }),
            createQuantity({ max: 5, setValue: (value) => console.log(value), value: 2 }),
            createAccordeon(dogs[0].information as Array<AccordeonObject>)
        );
        return this.container;
    }
}

export default ProductPage;
