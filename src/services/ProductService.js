import axios from 'axios';

export const getProductsAPI = () => {
    return axios.get("https://jsonplaceholder.typicode.com/photos")
}