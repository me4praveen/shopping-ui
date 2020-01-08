import { ADD_TO_CART, FETCH_CART_PRODUCTS } from './CartTypes';
const initialState = {
    products: []
}

export default (state = initialState, action) => {

    switch(action.type){

        case FETCH_CART_PRODUCTS: 
            return {...state, products: action.payload }
        case ADD_TO_CART: 
            return state.products.some(product => product.id === action.payload.id) ? {...state }: {...state, products: [...state.products, action.payload]};

        default: 
            return {...state };

        return {...state };
    }

}