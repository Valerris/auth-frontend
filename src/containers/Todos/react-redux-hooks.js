import {
	useSelector as ogUseSelector,
	useDispatch as ogUseDispatch,
} from "react-redux";

export const useSelector = (state) => ogUseSelector(state);
export const useDispatch = () => ogUseDispatch();
