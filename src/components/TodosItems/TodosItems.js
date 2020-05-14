import React from "react";
import TodosItem from "./TodosItem/TodosItem";
import classes from "./TodosItems.module.css";

const TodosItems = ({ todos }) => {
	const todosList = todos ? (
		todos.map((todo, i) => (
			<TodosItem key={i} task={todo.task} completed={todo.completed} />
		))
	) : (
		<li>"No tasks yet."</li>
	);

	const UI = (
		<div className={classes["list-wrapper-outer"]}>
			<div className={classes["list-wrapper"]}>
				<h5>Todos.</h5>
				<ul className={classes.list}>{todosList}</ul>
			</div>
		</div>
	);

	return UI;
};

export default TodosItems;
