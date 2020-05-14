import React from "react";
import { Link } from "react-router-dom";
import classes from "./Link.module.css";

const link = ({ link }) => {
	const linkItem = (
		<li className={classes.menu__item}>
			<Link className={classes.menu__link} to={link.href}>
				{link.name}
			</Link>
		</li>
	);

	return linkItem;
};

export default link;
