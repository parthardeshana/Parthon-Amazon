import {
	SELECTED_PRODUCT,
	REMOVE_SELECTED_PRODUCT,
	SET_PRODUCTS,
	ADD_TO_CART,
	SET_USER,
} from "../constant/constant";

export const setProducts = (products) => {
	return {
		type: SET_PRODUCTS,
		payload: products,
	};
};

export const selectedProduct = (product) => {
	return {
		type: SELECTED_PRODUCT,
		payload: product,
	};
};

export const removeProduct = (id) => {
	return {
		type: REMOVE_SELECTED_PRODUCT,
		payload: id,
	};
};

export const addToCart = (id) => {
	return {
		type: ADD_TO_CART,
		payload: id,
	};
};

export const user = (user) => {
	return {
		type: SET_USER,
		payload: user,
	};
};
