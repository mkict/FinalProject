
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";

export function addProductToCart(item){
	return {
		type:ADD_PRODUCT_TO_CART,
		item:item
	};
}

export function removeProductFromCart(id){
	return {
		type:REMOVE_PRODUCT_FROM_CART,
		itemId:id
	};
}

