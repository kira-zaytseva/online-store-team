import { PetsInterface } from '../../data/types';
import { createCard } from '../../components/card';

export const createCatalogList = (data: PetsInterface[]): HTMLElement => {
    const catalogList = document.createElement('section');
    catalogList.className = 'catalog-list';
    data.forEach(({ title, price, images, pet, id }) =>
        catalogList.appendChild(createCard({ title, price, image: images[0], pet, id }))
    );

    return catalogList;
};
