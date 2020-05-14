import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../utils/updateObj";

const initialState = {
	error: null,
};

const errorPush = (state, { e }) =>
	updateObject(state, {
		error: e,
	});

const errorCancel = (state, action) =>
	updateObject(state, {
		error: null,
	});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ERROR_PUSH:
			return errorPush(state, action);
		case actionTypes.ERROR_CANCEL:
			return errorCancel(state, action);
		default:
			return state;
	}
};

export default reducer;
