import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../utils/updateObj";

const initialState = {
	products: [],
	product: null,
	loading: false,
};

const productLoading = (state, action) =>
	updateObject(state, {
		loading: true,
	});

const productFailed = (state, action) =>
	updateObject(state, {
		loading: false,
	});

const productsSuccess = (state, { products }) =>
	updateObject(state, {
		products,
		loading: false,
	});

const productSuccess = (state, { product }) =>
	updateObject(state, {
		product,
		loading: false,
	});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PRODUCT_LOADING:
			return productLoading(state, action);
		case actionTypes.PRODUCT_FAILED:
			return productFailed(state, action);
		case actionTypes.PRODUCTS_SUCCESS:
			return productsSuccess(state, action);
		case actionTypes.PRODUCT_SUCCESS:
			return productSuccess(state, action);

		default:
			return state;
	}
};

export default reducer;
