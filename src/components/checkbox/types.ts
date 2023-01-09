import { ActiveFilterStoreInterface } from '../../store/types';
import { FilterInterface } from '../filter/types';

export interface CheckboxInterface {
    title: string;
    checkboxId: keyof FilterInterface;
    checkboxSet: Array<{ value: string; isActive: boolean }>;
    store: ActiveFilterStoreInterface;
}
