import * as actionTypes from "./actionTypes";
import config from "../../config/config";

/**
 * General
 */

const cartLoading = () => ({
	type: actionTypes.CART_LOADING,
});

const cartFailed = () => ({
	type: actionTypes.CART_FAILED,
});

/**
 * Get cart
 */

const cartSuccess = (payload) => ({
	type: actionTypes.CART_SUCCESS,
	products: payload,
});

export const getCart = (token) => async (dispatch) => {
	dispatch(cartLoading());

	try {
		const response = await fetch(
			config.server_url + "products/cart",
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		const data = await response.json();

		dispatch(cartSuccess(data.products));
	} catch (error) {
		console.log(error);

		dispatch(cartFailed());

		return {
			status: "error",
			body: error.message,
		};
	}
};

/**
 * PUT add cart item
 */

const addCartItemSuccess = (payload) => ({
	type: actionTypes.CART_ADD_ITEM_SUCCESS,
	id: payload,
});

export const addCartItem = (token, id) => async (dispatch) => {
	dispatch(cartLoading());

	try {
		const response = await fetch(
			config.server_url + "products/cart/add",
			{
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json;charset=utf-8",
				},
				method: "PUT",
				body: JSON.stringify({ id }),
			}
		);

		const data = await response.json();

		console.log(data);

		dispatch(addCartItemSuccess(id));
	} catch (error) {
		console.log(error);

		dispatch(cartFailed());

		return {
			status: "error",
			body: error.message,
		};
	}
};

/**
 * DELETE add cart item
 */

const removeCartItemSuccess = (payload) => ({
	type: actionTypes.CART_REMOVE_ITEM_SUCCESS,
	id: payload,
});

export const removeCartItem = (token, id) => async (dispatch) => {
	dispatch(cartLoading());

	try {
		const response = await fetch(
			config.server_url + "products/cart/delete",
			{
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json;charset=utf-8",
				},
				method: "PUT",
				body: JSON.stringify({ id }),
			}
		);

		const data = await response.json();

		console.log(data);

		dispatch(removeCartItemSuccess(id));
	} catch (error) {
		console.log(error);

		dispatch(cartFailed());

		return {
			status: "error",
			body: error.message,
		};
	}
};
