import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import * as actions from "../../store/actions/index";

const Profile = (props) => {
	const { token } = useSelector((state) => state.auth);
	const { profileInfo } = useSelector((state) => state.profile);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.profileInfo(token));
	}, [dispatch, token]);

	const postEdit = async (formData) => {
		dispatch(actions.profileEdit(formData, token));
	};

	return <ProfileInfo profileInfo={profileInfo} postEdit={postEdit} />;
};

export default Profile;
