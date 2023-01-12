import { createDualSlider } from '../../components/dual-slider';
import { createCheckbox } from '../../components/checkbox';
import { data } from '../../data/data';
import { createButton } from '../../components/button';
import { FilterInterface } from './types';
import { Routes } from '../../types';
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

    const onSubmit = (e?: SubmitEvent) => {
        e?.preventDefault();
        const currentFilterData = store.get();
        const params = new URLSearchParams();
        Object.keys(currentFilterData).forEach((key) => {
            const currentFilter = currentFilterData[key as keyof FilterInterface] || null;
            if (currentFilter) {
                params.set(key, currentFilter.join(','));
            }
        });

        const query = params.toString();
        window.location.href = `${window.location.pathname}#${Routes.CatalogPage}?${query}`;
    };

    const removeAllFilters = () => {
        store.removeAll();
        onSubmit();
    };

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        copyLinkBtn.innerText = 'Copied';
        setTimeout(() => {
            copyLinkBtn.innerText = 'Copy link';
        }, 1000);
    };

    const copyLinkBtn = createButton({ buttonText: 'Copy link', type: 'button', onClick: copyLink });

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
    filterForm.appendChild(createButton({ buttonText: 'Reset', type: 'button', onClick: removeAllFilters }));
    filterForm.appendChild(copyLinkBtn);
    return filterForm;
};
