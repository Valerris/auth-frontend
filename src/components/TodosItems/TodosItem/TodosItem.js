import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions/index";
import classes from "./TodosItem.module.css";

const TodosItem = ({ task, completed, _id }) => {
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const toggleTaskComplition = (_id) => {
		dispatch(actions.toggleTaskComplition(_id, token));
	};

	const UI = (
		<li
			style={{
				textDecoration: completed ? "line-through" : "none",
			}}
			className={classes.list__item}
			id={_id}
			onClick={(e) => toggleTaskComplition(_id)}
		>
			<span className={classes["list__item-inner"]}>{task}</span>
		</li>
	);

	return UI;
};

export default TodosItem;
