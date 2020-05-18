import * as actionTypes from "./actionTypes";
import config from "../../config/config";

/**
 * // Profile GET
 */
const profileInfoLoading = () => ({
	type: actionTypes.PROFILE_INFO_LOADING,
});

const profileInfoSuccess = (payload) => {
	if (payload.profile.imageUrl) {
		const url = payload.profile.imageUrl.replace(/\\+/g, "/");

		payload.profile.imageUrl = `${config.server_url}${url}`;
	}

	return {
		type: actionTypes.PROFILE_INFO_SUCCESS,
		profileInfo: payload,
	};
};

const profileInfoFailed = () => ({
	type: actionTypes.PROFILE_INFO_FAILED,
});

export const profileInfo = (token) => async (dispatch) => {
	dispatch(profileInfoLoading());

	try {
		const response = await fetch(config.server_url + "profile/info", {
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
	type: actionTypes.PROFILE_EDIT_LOADING,
});

const profileEditSuccess = (payload) => {
	if (payload.profile.imageUrl) {
		const url = payload.profile.imageUrl.replace(/\\+/g, "/");

		payload.profile.imageUrl = `${config.server_url}${url}`;
	}

	return {
		type: actionTypes.PROFILE_EDIT_SUCCESS,
		profileInfo: payload,
	};
};

const profileEditFailed = () => ({
	type: actionTypes.PROFILE_EDIT_FAILED,
});

export const profileEdit = (formData, token) => async (dispatch) => {
	dispatch(profileEditLoading());

	const newFormData = new FormData();

	Object.keys(formData).forEach((field) =>
		newFormData.append(field, formData[field])
	);

	// for (let field of formData) {
	// 	newFormData.append(field, formData[field]);
	// }

	try {
		const response = await fetch(config.server_url + "profile/edit", {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: newFormData,
		});

		const result = await response.json();

		if (response.ok) {
			// console.log(["Fetch result: ", result]);

			dispatch(profileEditSuccess(result));
		} else {
			throw new Error("Editing failed.");
		}
	} catch (e) {
		console.log(e);

		dispatch(profileEditFailed());
	}
};
