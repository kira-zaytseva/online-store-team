import { createSearch } from '../../components/search';
import { createFilter } from '../../components/filter';
import Page from '../../types/page';
import { createCatalogList } from '../../components/products-list';
import ErrorPage, { ErrorTypes } from '../error';
import { data } from '../../data/data';
import { convertQuery } from '../../helpers/convert-query';
import { routes } from '../../enums';
import { FilterInterface } from 'components/filter/types';

class CatalogPage extends Page {
    constructor(id: string) {
        super(id);
    }

    createCatalogPage(params: URLSearchParams) {
        const paramPet = params.get('pet') || null;

        console.log(params.entries());

        const entries = params.entries();
        let filterData = {} as FilterInterface;

        for (const [key, value] of entries) {
            filterData = { ...filterData, [key]: value.split(',') };
        }

        const currentPets = data.filter(({ pet, category, brand }) => {
            if (paramPet && paramPet !== pet) {
                return false;
            }

            if (filterData?.category && !filterData.category.includes(category)) {
                return false;
            }

            if (filterData?.brand && !filterData.brand.includes(brand)) {
                return false;
            }

            return true;
        });

        if (!currentPets.length) {
            return new ErrorPage('errorPage', ErrorTypes.NotFound).render();
        }

        const catalogContainer = document.createElement('div');
        catalogContainer.className = 'catalog-container';
        const catalogTitle = document.createElement('h1');
        catalogTitle.innerText = `Products for ${paramPet || 'pets'}. ${currentPets.length} found`;
        const catalogSection = document.createElement('section');
        catalogSection.className = 'catalog-section';
        const petsBg = document.createElement('img');
        petsBg.alt = '';
        petsBg.src = 'https://i.imgur.com/LZb13Y7.png';
        petsBg.className = 'pets-bg';
        catalogContainer.appendChild(createSearch());
        catalogContainer.appendChild(catalogTitle);
        catalogContainer.appendChild(catalogSection);
        catalogSection.appendChild(createFilter(filterData));
        catalogSection.appendChild(createCatalogList(currentPets));
        catalogContainer.appendChild(petsBg);
        return catalogContainer;
    }

    render() {
        const params = convertQuery(routes.CatalogPage);

        this.container.append(this.createCatalogPage(params));
        return this.container;
    }
}

export default CatalogPage;
