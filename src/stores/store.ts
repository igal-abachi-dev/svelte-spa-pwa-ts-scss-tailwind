import {Writable, writable} from 'svelte/store';
import {Product} from '../models';

interface AppState {
    products: Writable<Product[]>;
}

const state: AppState = {
    products: writable([]),
};

const getProducts = (products: Product[]) => {
    state.products.update((old: Product[]) => products);
};

const addProduct = (product: Product) => {
    state.products.update((old: Product[]) => {
        old.unshift(product);
        return old;
    });
};

const deleteProduct = (product: Product) => {
    state.products.update((old: Product[]) => [
        ...old.filter((p) => p.id !== product.id),
    ]);
};

const updateProduct = (product: Product) => {
    state.products.update((old: Product[]) => {
        const index = old.findIndex((p) => p.id === product.id);
        old.splice(index, 1, product);
        return [...old];
    });
};

export {
    state,
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
};
