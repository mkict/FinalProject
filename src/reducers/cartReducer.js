import {ADD_PRODUCT_TO_CART,REMOVE_PRODUCT_FROM_CART} from '../actions/cartAction';
const InitialState = {
	cartList:[]
};

export default function cartReducer(state = InitialState,actions){
	switch(actions.type){
		case ADD_PRODUCT_TO_CART:
			return {...state,cartList:[...state.cartList,actions.item]};
		case REMOVE_PRODUCT_FROM_CART:
			break;
		default:
			return state;
	}

}