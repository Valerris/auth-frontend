import React, { Fragment } from "react";
import Modal from "../../components/UI/Modal/Modal";

const errorHandler = ({ error, handler, children }) => {
	const toggleModalHandler = (e) => {
		const target = e.target.closest('[data-action="close"]');

		if (!target) return;

		handler();
	};

	const errorUI = error ? (
		<Fragment>
			<Modal title="Error" clicked={toggleModalHandler}>
				{error.message}
			</Modal>
		</Fragment>
	) : null;

	return errorUI;
};

export default errorHandler;
