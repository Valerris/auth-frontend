import * as actionTypes from "../actions/actionTypes";
import updateObj from "../../utils/updateObj";

const initialState = {
	profileInfo: null,
	loadingInfo: false,
	loadingEdit: false,
};

const profileInfoLoading = (state, action) =>
	updateObj(state, {
		loading: true,
	});

const profileInfoSuccess = (state, { profileInfo }) =>
	updateObj(state, {
		profileInfo,
		loadingInfo: false,
	});

const profileInfoFailed = (state, action) =>
	updateObj(state, {
		loadingInfo: false,
	});

const profileEditLoading = (state, action) =>
	updateObj(state, {
		loadingEdit: true,
	});

const profileEditSuccess = (state, { profileInfo }) =>
	updateObj(state, {
		profileInfo,
		loadingEdit: false,
	});

const profileEditFailed = (state, action) =>
	updateObj(state, {
		loadingEdit: false,
	});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PROFILE_INFO_LOADING:
			return profileInfoLoading(state, action);
		case actionTypes.PROFILE_INFO_SUCCESS:
			return profileInfoSuccess(state, action);
		case actionTypes.PROFILE_INFO_FAILED:
			return profileInfoFailed(state, action);
		case actionTypes.PROFILE_EDIT_LOADING:
			return profileEditLoading(state, action);
		case actionTypes.PROFILE_EDIT_SUCCESS:
			return profileEditSuccess(state, action);
		case actionTypes.PROFILE_EDIT_FAILED:
			return profileEditFailed(state, action);
		default:
			return state;
	}
};

export default reducer;
