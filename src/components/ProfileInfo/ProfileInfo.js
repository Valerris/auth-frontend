import React from "react";
import { useSelector } from "react-redux";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = ({ profileInfo, postEdit }) => {
	const { loadingInfo } = useSelector((state) => state.profile);

	const UI = profileInfo ? (
		<div className={classes["profileInfo-wrapper"]}>
			<div className={classes["profileInfo"]}>
				<div className={classes.profileInfo__info}>
					<div className={classes.profileInfo__pic}>
						{!profileInfo.profile.imageUrl ? null : (
							<img
								className={classes["profileInfo__pic-img"]}
								src={profileInfo.profile.imageUrl}
								alt={`Аватар ${profileInfo.profile.username}`}
							/>
						)}
					</div>

					<div className={classes.profileInfo__label}>Имя</div>

					<div className={classes.profileInfo__value}>
						{profileInfo.profile.username}
					</div>
					<div className={classes.profileInfo__label}>Email</div>
					<div className={classes.profileInfo__value}>
						{profileInfo.profile.email}
					</div>
				</div>
				{/* <div className={classes.profileInfo__edit}>
					<ProfileForm loadingEdit={loadingEdit} postEdit={postEdit} />
				</div> */}
			</div>
		</div>
	) : (
		<p>Аватар профиля не загружен.</p>
	);

	return (
		<div>
			<h1>Профиль</h1>
			<div>{loadingInfo ? "Загрузка..." : UI}</div>
		</div>
	);
};

export default ProfileInfo;
