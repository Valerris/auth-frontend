import React from "react";

const TodosItem = ({ task, completed, _id }) => {
	const UI = (
		<li
			style={{
				textDecoration: completed ? "line-through" : "none",
      }}
      id={_id}
		>
			<p>{task}</p>
		</li>
	);

	return UI;
};

export default TodosItem;
