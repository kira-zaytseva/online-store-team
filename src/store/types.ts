import { FilterInterface } from '../components/filter/types';

export abstract class ActiveFilterStoreInterface {
    protected _activeFilters: FilterInterface;

    constructor(activeFilters: FilterInterface) {
        this._activeFilters = activeFilters;
    }

    add = (name: keyof FilterInterface, value: string) => {
        const currentData = this._activeFilters[name];
        if (currentData) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this._activeFilters[name] = [...currentData, value];
        } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this._activeFilters[name] = [value];
        }
    };

    remove = (name: keyof FilterInterface, value: string) => {
        const currentData = this._activeFilters[name];
        if (currentData) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const preparedData = currentData?.filter((el) => el !== value);
            if (preparedData.length) {
                this._activeFilters[name] = preparedData;
            } else {
                delete this._activeFilters[name];
            }
        }
    };

    get = () => {
        return this._activeFilters;
    };
}

enum storageKeys {
    ORDER = 'order',
}

export abstract class CartStoreInterface {
    protected _orderInfo: cartProductInterface[];

    constructor() {
        this._orderInfo = this.getStorage();
    }

    get = () => {
        return this._orderInfo;
    };

    getById = (productId: number) => {
        const cuurentProduct = this.get().find(({ id }) => productId === id);
        return cuurentProduct || null;
    };

    set = (orders: cartProductInterface[]) => {
        this._orderInfo = orders;
    };

    increase = (order: cartProductInterface) => {
        let currentProducts = this.get();
        const currentProductCart = currentProducts.find(({ id }) => id === order.id) || null;
        if (currentProductCart) {
            currentProductCart.amount = currentProductCart.amount + order.amount;
            currentProducts = currentProducts.map((el) => {
                if (el.id === order.id) {
                    return currentProductCart;
                }
                return el;
            });
        } else {
            currentProducts.push(order);
        }

        this.addToStorage(currentProducts);
    };

    decrease = (order: cartProductInterface) => {
        let currentProducts = this.get();
        const currentProductCart = currentProducts.find(({ id }) => id === order.id) || null;
        if (currentProductCart) {
            currentProductCart.amount = currentProductCart.amount - order.amount;
            currentProducts = currentProducts.reduce((acc, rec) => {
                if (rec.id === currentProductCart.id) {
                    if (currentProductCart.amount <= 0) {
                        return acc;
                    }
                    return [...acc, currentProductCart];
                }
                return [...acc, rec];
            }, [] as cartProductInterface[]);
        }

        this.addToStorage(currentProducts);
    };

    addToStorage = (orders: cartProductInterface[]) => {
        this.set(orders);
        localStorage.setItem(storageKeys.ORDER, JSON.stringify(orders));
    };

    removeFromStorage = () => {
        localStorage.removeItem(storageKeys.ORDER);
    };

    getStorage = (): cartProductInterface[] | [] => {
        return JSON.parse(localStorage.getItem(storageKeys.ORDER) || '[]') as cartProductInterface[] | [];
    };

    remove = (order: cartProductInterface) => {
        let currentProducts = this.get();
        const currentProductCart = currentProducts.find(({ id }) => id === order.id) || null;

        if (currentProductCart) {
            currentProducts = currentProducts.filter(({ id }) => id !== order.id);
        }

        this.addToStorage(currentProducts);
    };
}

export interface cartProductInterface {
    id: number;
    amount: number;
}
