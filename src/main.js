import React from 'react';
import ReactDOM from 'react-dom';
import CartApplication from './containers/CartApplication';

var store;
ReactDOM.render(<CartApplication store={store} />, document.getElementById('root'));
