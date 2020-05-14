import React from "react";
import classes from "./Button.module.css";
import loader from "./loader.svg";

const button = ({
	loading,
	disabled,
	clicked,
	className,
	children,
	...restProps
}) => {
	const classList = [classes.button];

	className &&
		className.length > 0 &&
		className.forEach((cls) => classList.push(classes[cls]));

	loading && classList.push(classes["button--loading"]);

	const content = loading ? (
		<img className={classes.loader} src={loader} alt="loader" />
	) : (
		children
	);

	return (
		<button
			className={classList.join(" ")}
			disabled={disabled || loading}
			onClick={clicked}
			{...restProps}
		>
			{content}
		</button>
	);
};

export default button;
