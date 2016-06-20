import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './CartList';
import Product from './ProductList';
ReactDOM.render(<Cart />, document.getElementById('CartList'));
ReactDOM.render(<Product />, document.getElementById('ProductList'));
