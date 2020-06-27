import React from "react";
// import * as ReactRedux from "../react-redux-hooks";
import * as ReactRedux from "react-redux";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Products from "../Products";
import ProductItems from "../../../components/ProductItems/ProductItems";

configure({ adapter: new Adapter() });

describe("Products container: ", () => {
	let wrapper, useSelectorSpy, useDispatchSpy;

	beforeEach(() => {
		useSelectorSpy = jest
			.spyOn(ReactRedux, "useSelector")
			.mockImplementation((state) => ({
				auth: {
					token: "token",
				},
				products: {
					products: [],
					loading: false,
				},
			}));

		useDispatchSpy = jest
			.spyOn(ReactRedux, "useDispatch")
			.mockImplementation(() => {});

		wrapper = shallow(<Products />);
	});

	test("should render ProductItems when receiving todos", () => {
		expect(wrapper.find(ProductItems)).toHaveLength(1);
	});
});
