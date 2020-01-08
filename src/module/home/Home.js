import React, { useEffect } from 'react'
import ProductCard from './ProductCard/ProductCard'
import { CardColumns, CardDeck } from 'react-bootstrap';
import { FETCH_PRODUCTS_ASYNC } from '../../redux/Products/ProductsTypes';
import { connect } from 'react-redux';
import './Home.scss';

function Home(props) {
    useEffect(() => {
        props.getProducts();
    }, []);
    return (
        <div>
            <CardColumns>
                { props.products.map( product => <ProductCard key = {product.id} {...product } />)}
            </CardColumns>
            
        </div>
    )
}
// class Home extends Component {
//     componentDidMount() {
//         this.props.getProducts();
//     }
//     render() {
//         return (
//             <div>
//                 <CardColumns>
//                     { this.props.products.map( product => <ProductCard key = {product.id} {...product } />)}
//                 </CardColumns>
                
//             </div>
//         )
//     }
// }
const mapStateToProps = state => (
    {
        products: state.products.products
    }
)
const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch({type: FETCH_PRODUCTS_ASYNC})
})

export default 
connect(mapStateToProps, mapDispatchToProps)
(Home);
