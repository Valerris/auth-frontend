import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./normalize.css";
import "./index.css";
import App from "./App";

import authReducer from "./store/reducers/auth";
import todosReducer from "./store/reducers/todos";
import profileReducer from "./store/reducers/profile";
import errorReducer from "./store/reducers/error";

const composeEnhancers =
	process.env.NODE_ENV === "development"
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
		: compose;

const rootReducer = combineReducers({
	auth: authReducer,
	todos: todosReducer,
	profile: profileReducer,
	error: errorReducer,
});

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));
