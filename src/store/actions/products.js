import * as actionTypes from "./actionTypes";
import config from "../../config/config";

/**
 * General
 */

const productLoading = () => ({
	type: actionTypes.PRODUCT_LOADING,
});

const productFailed = () => ({
	type: actionTypes.PRODUCT_FAILED,
});

/**
 * Get products
 */

const productsSuccess = (payload) => ({
	type: actionTypes.PRODUCTS_SUCCESS,
	products: payload,
});

export const getProducts = (token) => async (dispatch) => {
	dispatch(productLoading());

	try {
		const response = await fetch(
			config.server_url + "products/list",
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		const data = await response.json();

		dispatch(productsSuccess(data.products));
	} catch (error) {
		console.log(error);

		dispatch(productFailed());

		return {
			status: "error",
			body: error.message,
		};
	}
};

/**
 * Get product
 */

const productSuccess = (payload) => ({
	type: actionTypes.PRODUCT_SUCCESS,
	product: payload,
});

export const getProduct = (token, id) => async (dispatch) => {
	dispatch(productLoading());

	try {
		const response = await fetch(
			config.server_url + "products/product/" + id,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		const data = await response.json();

		dispatch(productSuccess(data.product));
	} catch (error) {
		console.log(error);

		dispatch(productFailed());

		return {
			status: "error",
			body: error.message,
		};
	}
};
