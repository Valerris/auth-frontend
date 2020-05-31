import React, { Fragment, Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import Main from "./containers/Main/Main";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout";
import Toolbar from "./containers/Toolbar/Toolbar";
import Layout from "./hoc/Layout/Layout";
import Profile from "./containers/Profile/Profile";
import Products from "./containers/Products/Products";

class App extends Component {
	componentDidMount() {
		this.props.onAuthCheck();
	}

	render() {
		let routes = (
			<Switch>
				<Route path="/login" exact component={Auth} />
				<Route path="/signup" exact component={Auth} />
				<Redirect to="/login" />
			</Switch>
		);

		this.props.isAuth &&
			(routes = (
				<Switch>
					<Route path="/logout" component={Logout} />
					<Route path="/profile" component={Profile} />
					<Route path="/products" component={Products} />
					<Route path="/home" component={Main} />
					<Redirect to="/home" />
				</Switch>
			));

		return (
			<Fragment>
				<Toolbar />
				<Layout>{routes}</Layout>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
	onAuthCheck: () => dispatch(actions.authCheck()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
