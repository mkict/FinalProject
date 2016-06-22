import React from 'react';
import Cart from '../components/CartList';
import Product from '../components/ProductList';
import cartReducer from '../reducers/cartReducer';
import {addProductToCart} from '../actions/cartAction';
import { Provider } from 'react-redux';

export default class CartApplication extends React.Component {
    render() {
        return (
        	<div>
        		<Cart/>
        		<Product/>
        	</div>
        );
    }
}