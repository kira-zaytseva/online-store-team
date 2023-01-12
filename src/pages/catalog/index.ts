import { createSearch } from '../../components/search';
import { createFilter } from '../../components/filter';
import Page from '../../models/page';
import { createCatalogList } from '../../components/products-list';
import { convertQuery } from '../../helpers/convertQuery';
import { Routes } from '../../types';
import { FilterInterface } from 'components/filter/types';
import { getCurrentPets } from '../../helpers/getCurrentPets';

class CatalogPage extends Page {
    constructor(id: string) {
        super(id);
    }

    createCatalogPage(params: URLSearchParams) {
        const paramPet = params.get('pet') || null;

        const entries = params.entries();
        let filterData = {} as FilterInterface;

        for (const [key, value] of entries) {
            filterData = { ...filterData, [key]: value.split(',') };
        }

        const currentPets = getCurrentPets(filterData);

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
        const notFound = document.createElement('p');
        notFound.className = 'not-found-text';
        notFound.innerText = 'Products not found. Try enother filter';
        catalogContainer.appendChild(createSearch());
        catalogContainer.appendChild(catalogTitle);
        catalogContainer.appendChild(catalogSection);
        catalogSection.appendChild(createFilter(filterData));
        catalogSection.appendChild(currentPets.length ? createCatalogList(currentPets) : notFound);
        catalogContainer.appendChild(petsBg);
        return catalogContainer;
    }

    render() {
        const params = convertQuery(Routes.CatalogPage);

        this.container.append(this.createCatalogPage(params));
        return this.container;
    }
}

export default CatalogPage;
