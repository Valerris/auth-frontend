import React, { Fragment, Component } from "react";
import {
	Switch,
	Route,
	Redirect,
	withRouter,
} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import Main from "./containers/Main/Main";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout";
import Toolbar from "./containers/Toolbar/Toolbar";
import Layout from "./hoc/Layout/Layout";
import Profile from "./containers/Profile/Profile";
import Products from "./containers/Products/Products";
import Product from "./containers/Products/Product/Product";
import Cart from "./containers/Cart/Cart";
import Calc from "./containers/Calc/Calc";

class App extends Component {
	state = {
		sizeSelected: "",
		colorSelected: "",
		materialSelected: "",
	};

	componentDidMount() {
		this.props.onAuthCheck();
	}

	setSizeSelected = (val) => {
		this.setState({
			...this.state,
			sizeSelected: val,
		});
	};

	setColorSelected = (val) => {
		this.setState({
			...this.state,
			colorSelected: val,
		});
	};

	setMaterialSelected = (val) => {
		this.setState({
			...this.state,
			materialSelected: val,
		});
	};

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
					<Route
						path="/products/product/:id"
						render={(props) => (
							<Product
								sizeSelected={this.state.sizeSelected}
								colorSelected={this.state.colorSelected}
								setSizeSelected={this.setSizeSelected}
								{...props}
							/>
						)}
					/>
					<Route path="/products" component={Products} />
					<Route
						path="/calc"
						render={(props) => (
							<Calc
								sizeSelected={this.state.sizeSelected}
								colorSelected={this.state.colorSelected}
								materialSelected={this.state.materialSelected}
								setSizeSelected={this.setSizeSelected}
								setColorSelected={this.setColorSelected}
								setMaterialSelected={this.setMaterialSelected}
								{...props}
							/>
						)}
					/>
					<Route path="/cart" component={Cart} />
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

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(App)
);
