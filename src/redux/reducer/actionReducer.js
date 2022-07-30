import {
	SET_PRODUCTS,
	SELECTED_PRODUCT,
	REMOVE_SELECTED_PRODUCT,
	ADD_TO_CART,
	SET_USER,
} from "../constant/constant";

const initialState = {
	product: [],
	// cart: [],
	// Selected_Product: [],
};
const inState = {
	cart: [],
};

export const productReducer = (state = [], action) => {
	switch (action.type) {
		case SET_PRODUCTS:
			return action.payload;
		default:
			return state;
	}
};

export const selectedProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECTED_PRODUCT:
			return {
				...state,
				...action.payload,
			};
		case REMOVE_SELECTED_PRODUCT:
			return {};
		default:
			return state;
	}
};

export const addToCart = (state = [], action) => {
	switch (action.type) {
		case ADD_TO_CART:
			console.log("redux cart execution >>>>::::", action.type, state);
			let ans = state.concat(action.payload);
			ans = [...new Set(ans)];
			return ans;
		default:
			return state;
	}
};

export const removeProduct = (state = [], action) => {
	console.log("ini product", initialState.product);
	switch (action.type) {
		case REMOVE_SELECTED_PRODUCT:
			console.log("in remove product redux");
			return {
				...state,
			};
		default:
			return state;
	}
};

export const user = (state = null, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...action.payload,
			};
		default:
			return state;
	}
};
