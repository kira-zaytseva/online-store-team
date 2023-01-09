import { createDualSlider } from '../../components/dual-slider';
import { createCheckbox } from '../../components/checkbox';
import { data } from '../../data/data';
import { createButton } from '../../components/button';
import { FilterInterface } from './types';
import { routes } from '../../enums';
import { ActiveFilterStore } from '../../store/filter';

const petSet = new Set(data.map(({ pet }) => pet));
const brandSet = new Set(data.map(({ brand }) => brand));
const categorySet = new Set(data.map(({ category }) => category));
const priceArr = data.map(({ price }) => price);
const stockArr = data.map(({ stock }) => stock);

export const createFilter = (filterData: FilterInterface): HTMLFormElement => {
    const filterForm = document.createElement('form');
    filterForm.id = 'filterForm';
    filterForm.className = 'filter-form';
    const store = new ActiveFilterStore(filterData);

    const onSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        const currentFilterData = store.get();
        const params = new URLSearchParams();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Object.keys(currentFilterData).forEach((key) => params.set(key, currentFilterData[key]?.join(',')));

        const query = params.toString();
        window.location.href = `/#${routes.CatalogPage}?${query}`;
    };

    const preparedCategory = Array.from(categorySet).map((category) => ({
        isActive: Boolean(filterData && filterData?.category && filterData.category.includes(category)),
        value: category,
    }));

    const preparedBrand = Array.from(brandSet).map((brand) => ({
        isActive: Boolean(filterData && filterData?.brand && filterData.brand.includes(brand)),
        value: brand,
    }));

    const preparedPet = Array.from(petSet).map((pet) => ({
        isActive: Boolean(filterData && filterData?.pet && filterData.pet.includes(pet)),
        value: pet,
    }));

    filterForm.addEventListener('submit', onSubmit);

    filterForm.appendChild(createCheckbox({ title: 'Pet', checkboxId: 'pet', checkboxSet: preparedPet, store }));

    filterForm.appendChild(
        createCheckbox({ title: 'Category', checkboxId: 'category', checkboxSet: preparedCategory, store })
    );

    filterForm.appendChild(createCheckbox({ title: 'Brand', checkboxId: 'brand', checkboxSet: preparedBrand, store }));

    filterForm.appendChild(
        createDualSlider({ title: 'Price', sliderMax: Math.max(...priceArr), sliderMin: Math.min(...priceArr) })
    );
    filterForm.appendChild(
        createDualSlider({ title: 'Stock', sliderMax: Math.max(...stockArr), sliderMin: Math.min(...stockArr) })
    );
    filterForm.appendChild(createButton({ buttonText: 'Search', type: 'submit' }));
    return filterForm;
};
