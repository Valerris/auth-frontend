import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodosItems from "../../components/TodosItems/TodosItems";
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

	const UI = <TodosItems todos={todos} />;

	return UI;
};

export default Todos;
