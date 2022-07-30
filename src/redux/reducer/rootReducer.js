import { combineReducers } from "redux";
import {
	productReducer,
	selectedProductReducer,
	addToCart,
	user,
	removeProduct,
} from "./actionReducer";

const reducers = combineReducers({
	allProducts: productReducer,
	product: selectedProductReducer,
	cart: addToCart,
	user,
	removeProduct,
});

export default reducers;
