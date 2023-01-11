import { FilterInterface } from '../components/filter/types';
import { data } from '../data/data';

export const getCurrentPets = (filterData: FilterInterface) =>
    data.filter(({ pet, category, brand }) => {
        if (filterData?.pet && !filterData.pet.includes(pet)) {
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
