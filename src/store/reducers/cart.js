import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../utils/updateObj";

const initialState = {
	products: [],
	loading: false,
};

const cartLoading = (state, action) =>
	updateObject(state, {
		loading: true,
	});

const cartFailed = (state, action) =>
	updateObject(state, {
		loading: false,
	});

const cartSuccess = (state, { products }) =>
	updateObject(state, {
		products,
		loading: false,
	});

const cartItemAddSuccess = (state, { id }) => {
	const updProducts = [...state.products];

	const idx = updProducts.findIndex(
		(item) => item.productId._id.toString() === id.toString()
	);

	if (idx >= 0) {
		updProducts[idx].quantity += 1;
	}

	return updateObject(state, {
		products: updProducts,
		loading: false,
	});
};

const cartItemDeleteSuccess = (state, { id }) => {
	let updProducts = [...state.products];

	const idx = updProducts.findIndex(
		(item) => item.productId._id.toString() === id.toString()
	);

	if (idx >= 0) {
		let qty = +updProducts[idx].quantity;
		qty -= 1;

		if (qty === 0) {
			updProducts = updProducts.filter(
				(item) =>
					item._id.toString() !== updProducts[idx]._id.toString()
			);
		} else {
			updProducts[idx].quantity = qty;
		}
	}

	return updateObject(state, {
		products: updProducts,
		loading: false,
	});
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CART_LOADING:
			return cartLoading(state, action);
		case actionTypes.CART_FAILED:
			return cartFailed(state, action);
		case actionTypes.CART_SUCCESS:
			return cartSuccess(state, action);
		case actionTypes.CART_ADD_ITEM_SUCCESS:
			return cartItemAddSuccess(state, action);
		case actionTypes.CART_REMOVE_ITEM_SUCCESS:
			return cartItemDeleteSuccess(state, action);
		default:
			return state;
	}
};

export default reducer;
