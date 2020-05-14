import * as actionTypes from "./actionTypes";

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

		dispatch(tasksSuccess(data.todos));
	} catch (error) {
		console.log(error);

		dispatch(tasksFailed());
	}
};

export const toggleCompleted = (id) => {};
