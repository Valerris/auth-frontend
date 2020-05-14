import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const modal = ({ title, clicked, children }) => {
	return createPortal(
		<div className={classes["modal-wrapper-outer"]} onClick={clicked}>
			<Backdrop />
			<div className={classes["modal-wrapper-inner"]}>
				<div className={classes.modal}>
					<div className={classes["modal__head"]}>
						<h4>{title}</h4>
						<Button
							data-action="close"
							type="button"
							className={["button--close", "button--close-modal"]}
						>
							Close
						</Button>
					</div>
					<div className={classes["modal__body"]}>{children}</div>
				</div>
			</div>
		</div>,
		document.querySelector("#modal-root")
	);
};

export default modal;
