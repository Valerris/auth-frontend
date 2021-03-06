import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../utils/updateObj";

const initialState = {
	todos: [],
	loading: false,
};

const taskLoading = (state, action) =>
	updateObject(state, {
		loading: true,
	});

const taskGetSuccess = (state, { todos }) =>
	updateObject(state, {
		todos,
		loading: false,
	});

const taskFailed = (state, action) =>
	updateObject(state, {
		loading: false,
	});

const taskAddSuccess = (state, { task }) => {
	const newTodos = [...state.todos];
	newTodos.push(task);

	return updateObject(state, { todos: newTodos, loading: false });
};

const taskToggleComplitionSuccess = (state, { id }) => {
	const tasks = [...state.todos];
	const taskIdx = tasks.findIndex((el) => el._id === id);

	tasks[taskIdx].completed = !tasks[taskIdx].completed;

	return updateObject(state, { todos: tasks });
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TASK_LOADING:
			return taskLoading(state, action);
		case actionTypes.TASK_FAILED:
			return taskFailed(state, action);
		case actionTypes.TASK_GET_SUCCESS:
			return taskGetSuccess(state, action);
		case actionTypes.TASK_ADD_SUCCESS:
			return taskAddSuccess(state, action);
		case actionTypes.TASK_TOGGLE_COMPLETION_SUCCESS:
			return taskToggleComplitionSuccess(state, action);
		default:
			return state;
	}
};

export default reducer;
