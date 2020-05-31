import reducer from "../auth";
import * as actionTypes from "../../actions/actionTypes";

describe("auth reducer: ", () => {
	it("should return the init state", () => {
		expect(reducer(undefined, {})).toEqual({
			isAuth: false,
			token: null,
			tokenExp: null,
		});
	});

	it("should store the token upon login", () => {
		expect(
			reducer(
				{
					isAuth: false,
					token: null,
					tokenExp: null,
				},
				{
					type: actionTypes.AUTH_SUCCESS,

					token: "token",
					tokenExp: "tokenExp",
				}
			)
		).toEqual({
			isAuth: true,
			token: "token",
			tokenExp: "tokenExp",
		});
	});
});
