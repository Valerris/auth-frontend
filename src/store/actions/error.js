import * as actionTypes from "./actionTypes";

export const errorPush = (e) => ({
	type: actionTypes.ERROR_PUSH,
	e,
});

export const errorCancel = () => ({
	type: actionTypes.ERROR_CANCEL,
});
