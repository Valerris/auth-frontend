import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../utils/updateObj";

const initialState = {
	todos: [],
	loading: false,
};

const tasksLoading = (state, action) =>
	updateObject(state, {
		loading: true,
	});

const tasksSuccess = (state, { todos }) =>
	updateObject(state, {
		todos,
		loading: false,
	});

const tasksFailed = (state, action) =>
	updateObject(state, {
		loading: false,
	});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TASKS_LOADING:
			return tasksLoading(state, action);
		case actionTypes.TASKS_SUCCESS:
			return tasksSuccess(state, action);
		case actionTypes.TASKS_FAILED:
			return tasksFailed(state, action);
		default:
			return state;
	}
};

export default reducer;
