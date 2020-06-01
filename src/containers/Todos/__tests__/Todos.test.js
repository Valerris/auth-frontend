import React from "react";
// import * as ReactRedux from "../react-redux-hooks";
import * as ReactRedux from "react-redux";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Todos from "../Todos";
import TodosItems from "../../../components/TodosItems/TodosItems";

configure({ adapter: new Adapter() });

describe("Todos container: ", () => {
	let wrapper, useSelectorSpy, useDispatchSpy;

	beforeEach(() => {
		useSelectorSpy = jest
			.spyOn(ReactRedux, "useSelector")
			.mockImplementation((state) => ({
				auth: {
					token: "token",
				},
				todos: {
					todos: [],
					loading: false,
				},
			}));

		useDispatchSpy = jest
			.spyOn(ReactRedux, "useDispatch")
			.mockImplementation(() => {});

		wrapper = shallow(<Todos />);
	});

	test("should render TodosItems when receiving todos", () => {
		expect(wrapper.find(TodosItems)).toHaveLength(1);
	});
});
