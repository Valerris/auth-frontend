import * as actionTypes from "./actionTypes";

/**
 * Init tasks
 */
const tasksLoading = () => ({
	type: actionTypes.TASKS_LOADING,
});

const tasksSuccess = (payload) => ({
	type: actionTypes.TASKS_SUCCESS,
	todos: payload,
});

const tasksFailed = () => ({
	type: actionTypes.TASKS_FAILED,
});

export const initTasks = (token) => async (dispatch) => {
	dispatch(tasksLoading());

	try {
		const response = await fetch("http://localhost:8080/todos", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const data = await response.json();

		dispatch(tasksSuccess(data.tasks));
	} catch (error) {
		console.log(error);

		dispatch(tasksFailed());
	}
};

/**
 *
 * POST task
 */

const taskAddSuccess = () => ({
	type: actionTypes.TASK_ADD_SUCCESS,
});

export const postTask = (task, token) => async (dispatch) => {
	dispatch(tasksLoading());

	try {
		const response = await fetch("http://localhost:8080/todos/task", {
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				Authorization: `Bearer ${token}`,
			},
			method: "POST",
			body: JSON.stringify(task),
		});

		if (!response.ok) {
			throw new Error("Can't save task.");
		} else {
			dispatch(taskAddSuccess());
			dispatch(initTasks(token));
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);

		dispatch(tasksFailed());
	}
};

export const toggleCompleted = (id) => {};
