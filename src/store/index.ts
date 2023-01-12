import { data } from '../data/data';
import { PetsInterface } from '../data/types';
import { FilterInterface } from '../components/filter/types';
import { STORE_UPDATED } from '../constants';

const ORDER = 'order';

export abstract class ActiveFilterStoreInterface {
    protected _activeFilters: FilterInterface;

    constructor(activeFilters: FilterInterface) {
        this._activeFilters = activeFilters;
    }

    add = (name: keyof FilterInterface, value: string) => {
        const currentData = this._activeFilters[name];
        if (currentData) {
            this._activeFilters[name] = [...currentData, value];
        } else {
            this._activeFilters[name] = [value];
        }
    };

    remove = (name: keyof FilterInterface, value: string) => {
        const currentData = this._activeFilters[name];
        if (currentData) {
            const preparedData = currentData?.filter((el) => el !== value);
            if (preparedData.length) {
                this._activeFilters[name] = preparedData;
            } else {
                delete this._activeFilters[name];
            }
        }
    };

    removeAll = () => {
        this._activeFilters = {};
    };

    get = () => {
        return this._activeFilters;
    };
}

const StoreEvent = new CustomEvent(STORE_UPDATED);

export abstract class CartStoreInterface {
    protected _orderInfo: cartProductInterface[];

    constructor() {
        this._orderInfo = this.getStorage();
    }

    get = () => {
        return this._orderInfo;
    };

    getQuantity = () => {
        return this.get().reduce((acc, rec) => acc + rec.amount, 0);
    };

    getById = (productId: number) => {
        const currentProduct = this.get().find(({ id }) => productId === id);
        return currentProduct || null;
    };

    set = (orders: cartProductInterface[]) => {
        this._orderInfo = orders;
    };

    prepareProductCartById = (currentProducts: cartProductInterface[], id: number) => {
        return currentProducts.map((el) => {
            if (el.id === id) {
                return { ...el, amount: el.amount + 1 };
            }
            return el;
        });
    };

    increase = (orderId: number) => {
        const currentProducts = this.get();
        const currentProductCart = currentProducts.find(({ id }) => id === orderId) || null;
        const currentData = data.find(({ id }) => id === orderId) as PetsInterface;

        const preparedProducts = currentProductCart
            ? this.prepareProductCartById(currentProducts, orderId)
            : [...currentProducts, { ...currentData, amount: 1 }];

        this.addToStorage(preparedProducts);
    };

    decrease = (orderId: number) => {
        const currentProducts = this.get();
        const preparedProductCart = currentProducts.reduce((acc, rec) => {
            if (rec.id === orderId) {
                const currentAmount = rec.amount - 1;
                if (currentAmount <= 0) {
                    return acc;
                }
                return [...acc, { ...rec, amount: currentAmount }];
            }
            return [...acc, rec];
        }, [] as cartProductInterface[]);

        this.addToStorage(preparedProductCart);
    };

    addToStorage = (orders: cartProductInterface[]) => {
        this.set(orders);
        localStorage.setItem(ORDER, JSON.stringify(orders));
        window.dispatchEvent(StoreEvent);
    };

    removeFromStorage = () => {
        localStorage.removeItem(ORDER);
    };

    removeAll = () => {
        this.addToStorage([]);
    };

    getStorage = (): cartProductInterface[] | [] => {
        return JSON.parse(localStorage.getItem(ORDER) || '[]') as cartProductInterface[] | [];
    };

    remove = (orderId: number) => {
        const currentProducts = this.get();
        const currentProductCart = currentProducts.find(({ id }) => id === orderId) || null;

        const updatedProducts = currentProductCart
            ? currentProducts.filter(({ id }) => id !== orderId)
            : currentProducts;

        this.addToStorage(updatedProducts);
    };
}

export interface cartProductInterface extends PetsInterface {
    id: number;
    amount: number;
    price: number;
}
