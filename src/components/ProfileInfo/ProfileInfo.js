import React from "react";
import { useSelector } from "react-redux";

import ProfileForm from "../../containers/forms/Profile/Profile";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = ({ profileInfo, postEdit }) => {
	const { loadingInfo, loadingEdit } = useSelector((state) => state.profile);

	const UI = profileInfo ? (
		<div className={classes["profileInfo-wrapper"]}>
			{/* {profileInfo.img ? (
				<img
					src={profileInfo.profile.img}
					alt={`pic-${profileInfo.user.name}`}
				/>
			) : (
				
			)} */}
			<div className={classes["profileInfo"]}>
				<div className={classes.profileInfo__info}>
					{!profileInfo.profile.imageUrl ? <p>Upload your image.</p> : null}

					<div className={classes.profileInfo__pic}>
						{!profileInfo.profile.imageUrl ? null : (
							<img
								className={classes["profileInfo__pic-img"]}
								src={profileInfo.profile.imageUrl}
								alt={`Profile pic ${profileInfo.profile.username}`}
							/>
						)}
					</div>

					<div className={classes.profileInfo__label}>User name</div>

					<div className={classes.profileInfo__value}>
						{profileInfo.profile.username}
					</div>
					<div className={classes.profileInfo__label}>User email</div>
					<div className={classes.profileInfo__value}>
						{profileInfo.profile.email}
					</div>
				</div>
				<div className={classes.profileInfo__edit}>
					<ProfileForm loadingEdit={loadingEdit} postEdit={postEdit} />
				</div>
			</div>
		</div>
	) : (
		<p>No profile info.</p>
	);

	return (
		<div>
			<h1>Profile</h1>
			<div>{loadingInfo ? "Loading..." : UI}</div>
		</div>
	);
};

export default ProfileInfo;
