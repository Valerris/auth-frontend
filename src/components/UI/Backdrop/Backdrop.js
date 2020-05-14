import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = ({ clicked }) => (
	<div data-action="close" className={classes.backdrop} onClick={clicked}></div>
);

export default backdrop;
