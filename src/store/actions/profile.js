import * as actionTypes from "./actionTypes";

/**
 * // Profile GET
 */
const profileInfoLoading = () => ({
	type: actionTypes.PROFILE_INFO_LOADING,
});

const profileInfoSuccess = (payload) => ({
	type: actionTypes.PROFILE_INFO_SUCCESS,
	profileInfo: payload,
});

const profileInfoFailed = () => ({
	type: actionTypes.PROFILE_INFO_FAILED,
});

export const profileInfo = (token) => async (dispatch) => {
	dispatch(profileInfoLoading());

	try {
		const response = await fetch("http://localhost:8080/profile/info", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const profileInfo = await response.json();

		dispatch(profileInfoSuccess(profileInfo));
	} catch (e) {
		console.log(e);

		dispatch(profileInfoFailed());
	}
};

/**
 * Profile Edit POST
 */
const profileEditLoading = () => ({
	type: actionTypes.PROFILE_INFO_LOADING,
});

const profileEditSuccess = (payload) => ({
	type: actionTypes.PROFILE_INFO_SUCCESS,
	profileInfo: payload,
});

const profileEditFailed = () => ({
	type: actionTypes.PROFILE_INFO_FAILED,
});

export const profileEdit = ({ form, token }) => async (dispatch) => {
	dispatch(profileEditLoading());

	try {
		const response = await fetch("http://localhost:8080/profile/edit", {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: new FormData(form),
		});

		const result = await response.json();

		if (response.ok) {
			dispatch(profileEditSuccess(result));
		} else {
			throw new Error("Editing failed.");
		}
	} catch (e) {
		console.log(e);

		dispatch(profileEditFailed());
	}
};
