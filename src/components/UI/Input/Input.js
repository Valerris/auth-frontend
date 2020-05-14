import React, { Fragment } from "react";
import classes from "./Input.module.css";

const input = ({
	valid,
	touched,
	config,
	changed,
	blured,
	focused,
	error,
	label,
}) => {
	let input = null;
	const clses = [classes.input];

	if (touched && !valid) {
		clses.push(classes["input--invalid"]);
	}

	switch (config.type) {
		default:
			input = (
				<input
					className={clses.join(" ")}
					id={config.name}
					{...config}
					onChange={changed}
					onBlur={blured}
				/>
			);
	}

	const withError =
		touched && !valid && !focused && error ? (
			<div className={classes.input__error}>{error}</div>
		) : null;

	const withLabel = (
		<Fragment>
			<label className={classes.label} htmlFor={config.name}>
				{label.name}
			</label>
			{input}
			{withError}
		</Fragment>
	);

	return withLabel;
};

export default input;
