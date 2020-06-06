import React from "react";
import { Link } from "react-router-dom";
import logopic from "./logo.svg";
import classes from "./Logo.module.css";

const logo = () => {
	const UI = (
		<Link className={classes.Logo} to="/home">
			<img src={logopic} alt="Logo" />
		</Link>
	);

	return UI;
};

export default logo;
