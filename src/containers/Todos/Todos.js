import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodosItems from "../../components/TodosItems/TodosItems";
import TodosForm from "../forms/Todos/Todos";
import * as actions from "../../store/actions/index";

const Todos = (props) => {
	const { token } = useSelector((state) => state.auth);
	const { todos, loading } = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	const onInitTodos = useCallback(
		(token) => dispatch(actions.getTasks(token)),
		[dispatch]
	);

	useEffect(() => {
		onInitTodos(token);
	}, [onInitTodos, token]);

	const addTask = (task) => {
		return dispatch(actions.addTask(task, token));
	};

	const UI = (
		<div>
			<TodosForm addTask={addTask} />
			<TodosItems todos={todos} loading={loading} />
		</div>
	);

	return UI;
};

export default Todos;
