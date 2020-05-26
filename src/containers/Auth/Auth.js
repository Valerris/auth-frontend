import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../store/actions/index";
import AuthForm from "../forms/Auth/Auth";
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";

class Auth extends Component {
	render() {
		const UI = this.props.isAuth ? (
			<Redirect to="/" />
		) : (
			<Fragment>
				<ErrorHandler
					error={this.props.err}
					handler={this.props.onErrorCancel}
				/>
				<AuthForm
					isSignupForm={this.props.location.pathname === "/signup"}
					postAuth={this.props.onAuth}
				/>
			</Fragment>
		);

		return UI;
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	err: state.error.error,
});

const mapDispatchToProps = (dispatch) => ({
	onAuth: (formData, isSignUp) => dispatch(actions.auth(formData, isSignUp)),
	onErrorCancel: () => dispatch(actions.errorCancel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
