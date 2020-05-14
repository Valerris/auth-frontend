import React from "react";

const TodosItem = ({ task, completed }) => {
	const UI = (
		<li
			style={{
				textDecoration: completed ? "line-through" : "none",
			}}
		>
			<p>{task}</p>
		</li>
	);

	return UI;
};

export default TodosItem;
