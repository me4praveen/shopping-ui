import { FETCH_PRODUCTS } from './ProductsTypes';

export function getProducts(products){
    return {
        type: FETCH_PRODUCTS,
        payload: products
    }
}

