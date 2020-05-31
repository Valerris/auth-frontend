// import React from "react";

// import { configure, shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// import Todos from "../Todos";
// import TodosItems from "../../../components/TodosItems/TodosItems";

// configure({ adapter: new Adapter() });

// describe("Todos container: ", () => {
// 	let wrapper = null;

// 	beforeEach(() => {
// 		wrapper = shallow(<Todos token />);
// 	});

// 	it("should render TodosItems when receiving todos", () => {
// 		let wrapper = shallow(<Todos />);

// 		wrapper.setProps({
// 			todos: [{ _id: 1, task: "Test task", completed: false }],
// 		});

// 		expect(wrapper.find(TodosItems)).toHaveLength(1);
// 	});
// });
