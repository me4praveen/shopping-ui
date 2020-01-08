import { combineReducers } from 'redux';
import productsReducer from './Products/ProductsReducer';
import cartReducer from './Cart/CartReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});
export default rootReducer;