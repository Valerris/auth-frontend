import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodosItems from "../../components/TodosItems/TodosItems";
import TodosForm from "../forms/Todos/Todos";
import * as actions from "../../store/actions/index";

const Todos = (props) => {
	const { token } = useSelector((state) => state.auth);
	const { todos } = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	const onInitTodos = useCallback(
		(token) => dispatch(actions.initTasks(token)),
		[dispatch]
	);

	useEffect(() => {
		onInitTodos(token);
	}, [onInitTodos, token]);

	const postTask = (task) => {
		return dispatch(actions.postTask(task, token));
	};

	const UI = (
		<div>
			<TodosForm postTask={postTask} />
			<TodosItems todos={todos} />
		</div>
	);

	return UI;
};

export default Todos;
