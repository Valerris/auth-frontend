import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodosItems from "../TodosItems";
import TodosItem from "../TodosItem/TodosItem";

configure({ adapter: new Adapter() });

describe("TodosItems: ", () => {
	it("should render list of todos", () => {
		const wrapper = shallow(<TodosItems />);

		// expect(wrapper.find(TodosItem));
		expect(wrapper.contains(<TodosItem />));
	});
});
