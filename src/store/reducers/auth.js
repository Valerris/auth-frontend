import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../utils/updateObj";

const initialState = {
	isAuth: false,
	token: null,
	tokenExp: null,
};

const authSuccess = (state, { token, tokenExp }) =>
	updateObject(state, {
		token,
		tokenExp,
		isAuth: true,
	});

const authLogout = (state, action) =>
	updateObject(state, {
		token: null,
		tokenExp: null,
		isAuth: false,
	});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_SUCCESS:
			return authSuccess(state, action);
		case actionTypes.AUTH_LOGOUT:
			return authLogout(state, action);
		default:
			return state;
	}
};

export default reducer;
