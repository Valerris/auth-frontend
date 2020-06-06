import * as actionTypes from "./actionTypes";
import config from "../../config/config";

/**
 * General
 */

const productsLoading = () => ({
	type: actionTypes.PRODUCTS_LOADING,
});

const productsFailed = () => ({
	type: actionTypes.PRODUCTS_FAILED,
});

/**
 * Get tasks
 */

const productsGetSuccess = (payload) => ({
	type: actionTypes.TASK_GET_SUCCESS,
	todos: payload,
});

export const getProducts = (token) => async (dispatch) => {
	dispatch(productsLoading());

	try {
		const response = await fetch(config.server_url + "products", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const data = await response.json();

		dispatch(productsGetSuccess(data.tasks));
	} catch (error) {
		console.log(error);

		dispatch(productsFailed());

		return {
			status: "error",
			body: error.message,
		};
	}
};

/**
 *
 * POST task
 */

// const taskAddSuccess = (task) => ({
// 	type: actionTypes.TASK_ADD_SUCCESS,
// 	task: task,
// });

// export const addTask = (task, token) => async (dispatch) => {
// 	try {
// 		const response = await fetch(config.server_url + "todos/task", {
// 			headers: {
// 				"Content-Type": "application/json; charset=utf-8",
// 				Authorization: `Bearer ${token}`,
// 			},
// 			method: "POST",
// 			body: JSON.stringify(task),
// 		});

// 		const data = await response.json();

// 		dispatch(taskAddSuccess(data.task));

// 		return data;
// 	} catch (error) {
// 		console.log(error);

// 		return {
// 			status: "error",
// 			body: error.message,
// 		};
// 	}
// };
