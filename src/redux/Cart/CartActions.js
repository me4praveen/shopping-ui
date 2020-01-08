import { ADD_TO_CART, FETCH_CART_PRODUCTS } from './CartTypes';

export getCartProducts(products){
    return {
        type: FETCH_CART_PRODUCTS,
        payload: products
    }
}

export addToCart(product){
    return {
        type: ADD_TO_CART,
        payload: product
    }
}