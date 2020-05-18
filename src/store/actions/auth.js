import * as actionTypes from "./actionTypes";
import { errorPush } from "./error";
import { server_url } from "../../config/config";

const authLoading = () => ({
	type: actionTypes.AUTH_LOADING,
});

const authSuccess = ({ token, tokenExp }) => ({
	type: actionTypes.AUTH_SUCCESS,
	token,
	tokenExp,
});

const authFailed = () => ({
	type: actionTypes.AUTH_FAILED,
});

export const authLogout = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("exp");

	return {
		type: actionTypes.AUTH_LOGOUT,
	};
};

const setAutoLogout = (exp) => (dispatch) =>
	setTimeout(() => {
		dispatch(authLogout());
	}, exp);

export const authCheck = () => (dispatch) => {
	const token = localStorage.getItem("token");

	if (!token) {
		dispatch(authLogout());
	} else {
		const exp = localStorage.getItem("exp");

		if (!exp || exp < new Date()) {
			dispatch(authLogout());
		} else {
			const newExp = new Date(exp).getTime() - Date.now();

			dispatch(setAutoLogout(newExp));
			dispatch(authSuccess({ token, tokenExp: newExp }));
		}
	}
};

export const auth = (formData, isSignup) => async (dispatch) => {
	dispatch(authLoading());

	let routePath = isSignup ? "/auth/signup" : "/auth/login";
	const method = isSignup ? "PUT" : "POST";

	const URL = `${server_url}${routePath}`;

	try {
		const response = await fetch(URL, {
			method: method,
			headers: {
				"Content-Type": " application/json;charset=utf-8",
			},
			body: JSON.stringify(formData),
		});

		console.log("[Status]: ", response.status);

		if (response.status === 500)
			throw new TypeError("Something went wrong on the server.");

		const json = await response.json();

		if (!response.ok) {
			console.log("[Status]: ", response.status);

			const error = new Error(json.errorMessage);

			error.body = json;

			throw error;
		}

		dispatch(authSuccess(json));

		const expDate = new Date(Date.now() + +json.tokenExp);

		localStorage.setItem("token", json.token);
		localStorage.setItem("exp", expDate);

		dispatch(setAutoLogout(json.tokenExp));

		return {
			status: "success",
			body: json,
		};
	} catch (e) {
		dispatch(authFailed());

		if (e.name === "TypeError") {
			dispatch(errorPush(e));
			return;
		}

		return {
			status: "error",
			body: e.body,
		};
	}
};
