import React from "react";
import TodosItem from "./TodosItem/TodosItem";
import classes from "./TodosItems.module.css";

const TodosItems = ({ todos, loading }) => {
	const todosList =
		todos && todos.length > 0 ? (
			todos.map((todo, i) => (
				<TodosItem
					key={todo._id}
					_id={todo._id}
					task={todo.task}
					completed={todo.completed}
				/>
			))
		) : (
			<li>"No tasks yet."</li>
		);

	const UI = (
		<div className={classes["list-wrapper-outer"]}>
			<div className={classes["list-wrapper"]}>
				<h5>Todos.</h5>
				{loading ? (
					<p>Loading...</p>
				) : (
					<ul className={classes.list}>{todosList}</ul>
				)}
			</div>
		</div>
	);

	return UI;
};

export default TodosItems;
