import { FilterInterface } from '../components/filter/types';
import { ActiveFilterStoreInterface } from './index';

export class ActiveFilterStore extends ActiveFilterStoreInterface {
    _activeFilters: FilterInterface;

    constructor(activeFilters: FilterInterface) {
        super(activeFilters);
        this._activeFilters = activeFilters;
    }
}
