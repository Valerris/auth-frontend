import * as actionTypes from "./actionTypes";

/**
 * General
 */

const taskLoading = () => ({
	type: actionTypes.TASK_LOADING,
});

const taskFailed = () => ({
	type: actionTypes.TASK_FAILED,
});

/**
 * Get tasks
 */

const taskGetSuccess = (payload) => ({
	type: actionTypes.TASK_GET_SUCCESS,
	todos: payload,
});

export const getTasks = (token) => async (dispatch) => {
	dispatch(taskLoading());

	try {
		const response = await fetch("http://localhost:8080/todos", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const data = await response.json();

		dispatch(taskGetSuccess(data.tasks));
	} catch (error) {
		console.log(error);

		dispatch(taskFailed());

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

const taskAddSuccess = (task) => ({
	type: actionTypes.TASK_ADD_SUCCESS,
	task: task,
});

export const addTask = (task, token) => async (dispatch) => {
	dispatch(taskLoading());

	try {
		const response = await fetch("http://localhost:8080/todos/task", {
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				Authorization: `Bearer ${token}`,
			},
			method: "POST",
			body: JSON.stringify(task),
		});

		const data = await response.json();

		dispatch(taskAddSuccess(data.task));

		return data;
	} catch (error) {
		console.log(error);

		dispatch(taskFailed());

		return {
			status: "error",
			body: error.message,
		};
	}
};

/**
 *
 * Toggle task complition
 */

const taskToggleComplitionSuccess = (id) => ({
	type: actionTypes.TASK_TOGGLE_COMPLETION_SUCCESS,
	id,
});

export const toggleTaskComplition = (id, token) => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:8080/todos/task/${id}`, {
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				Authorization: `Bearer ${token}`,
			},
			method: "PATCH",
		});

		const data = await response.json();

		dispatch(taskToggleComplitionSuccess(id));

		console.log(data);

		return data;
	} catch (error) {
		console.log(error);

		return {
			status: "error",
			body: error.message,
		};
	}
};
