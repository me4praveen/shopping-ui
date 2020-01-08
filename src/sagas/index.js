import { takeEvery, put, call } from 'redux-saga/effects';
import {  FETCH_PRODUCTS_ASYNC } from '../redux/Products/ProductsTypes';
import { getProducts } from '../redux/Products/ProductsActions';
import { getProductsAPI } from '../services/ProductService';

function *fetchProducts() {
        const products = [
            {
                "id": "1",
                "name": "Mac",
                "type": "Electronics",
                "subtype": "Laptop",
                "make": "Apple",
                "model": "Pro",
                "year": 2019,
                "price": 2000,
                "curr": "USD",
                "sym": "$",
                "img": "https://unsplash.com/photos/iv22jzrqkFg/download?force=true"
    
            },
            {
                "id": "2",
                "name": "Mac",
                "type": "Electronics",
                "subtype": "Laptop",
                "make": "Apple",
                "model": "Pro",
                "year": 2019,
                "price": 2000,
                "curr": "USD",
                "sym": "$",
                "img": "https://unsplash.com/photos/iv22jzrqkFg/download?force=true"
    
            },
            {
                "id": "3",
                "name": "Mac",
                "type": "Electronics",
                "subtype": "Laptop",
                "make": "Apple",
                "model": "Pro",
                "year": 2019,
                "price": 2000,
                "curr": "USD",
                "sym": "$",
                "img": "https://unsplash.com/photos/iv22jzrqkFg/download?force=true"
    
            },
            {
                "id": "4",
                "name": "Mac",
                "type": "Electronics",
                "subtype": "Laptop",
                "make": "Apple",
                "model": "Pro",
                "year": 2019,
                "price": 2000,
                "curr": "USD",
                "sym": "$",
                "img": "https://unsplash.com/photos/iv22jzrqkFg/download?force=true"
    
            }
        
    
        ];
    try{
        let res = yield call (getProductsAPI);
        // yield put(getProducts(res));
        yield put(getProducts(products.concat(products,products)));
    } catch (e){
        console.log(e)
        // yield put(getProducts(products.concat(products,products)))
    }
    
}

function *rootSaga(){
    yield takeEvery(FETCH_PRODUCTS_ASYNC, fetchProducts)
}

export default rootSaga;