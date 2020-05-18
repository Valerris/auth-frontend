import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import updateObject from "../../../utils/updateObj";
import collectData from "../../../utils/forms/collectData";
import clearForm from "../../../utils/forms/clearForm";
import { required, length, email } from "../../../utils/forms/validators";
import fieldValidation from "../../../utils/forms/fieldValidation";
import formValidation from "../../../utils/forms/formValidation";
import classes from "../Form.module.css";

class AuthForm extends Component {
	state = {
		controls: {
			username: {
				type: "input",
				config: {
					type: "text",
					name: "username",
					placeholder: "Enter your username",
					value: "",
				},
				labelName: "User name",
				touched: false,
				focused: false,
				valid: false,
				validators: [required],
				error: "Provide your username.",
			},
			email: {
				type: "input",
				config: {
					type: "text",
					name: "email",
					placeholder: "Enter your email",
					value: "",
				},
				labelName: "Email",
				touched: false,
				focused: false,
				valid: false,
				validators: [required, email],
				error: "Enter a valid email.",
			},
			password: {
				type: "input",
				config: {
					type: "password",
					name: "password",
					placeholder: "Enter a password",
					value: "",
				},
				labelName: "Password",
				touched: false,
				focused: false,
				valid: false,
				validators: [required, length({ min: 5 })],
				error: "Enter a password at least 5 characters long.",
			},
			confirmPassword: {
				type: "input",
				config: {
					type: "password",
					name: "confirmPassword",
					placeholder: "Repeat your password",
					value: "",
				},
				labelName: "Confirm password",
				touched: false,
				focused: false,
				valid: false,
				validators: [required, length({ min: 5 })],
				error: "Passwords should match.",
			},
		},
		skip: ["confirmPassword", "username"],
		formIsValid: false,
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.props.isSignupForm !== prevProps.isSignupForm) {
			const updatedControls = clearForm(
				this.getControls(),
				this.state.controls
			);

			this.setState({ controls: updatedControls, formIsValid: false });
		}
	}

	inputBlurHandler = (ctrl) => {
		this.setState({
			controls: updateObject(this.state.controls, {
				[ctrl]: updateObject(this.state.controls[ctrl], {
					touched: true,
					focused: false,
				}),
			}),
		});
	};

	changeHandler = (e, ctrl) => {
		const value = e.target.value;

		const fieldValidity = fieldValidation(
			this.state.controls[ctrl].validators,
			value
		);

		const updatedControls = updateObject(this.state.controls, {
			[ctrl]: updateObject(this.state.controls[ctrl], {
				config: updateObject(this.state.controls[ctrl].config, {
					value: value,
				}),
				touched: true,
				focused: true,
				valid: fieldValidity,
			}),
		});

		let formValidity = formValidation(updatedControls, this.getControls());

		this.setState({
			controls: updatedControls,
			formIsValid: formValidity,
		});
	};

	submitHandler = async (e) => {
		e.preventDefault();

		if (!this.state.formIsValid) return console.log("Incorrect form fields.");

		const formData = collectData(this.getControls(), this.state.controls);

		const result = await this.props.postAuth(formData, this.props.isSignupForm);

		result && console.log(result);

		if (result && result.status === "success") {
			if (this.props.isSignupForm) {
				return this.props.history.push("/login");
			} else {
				return this.props.history.replace("/home");
			}
			// const updatedControls = clearForm(
			// 	this.getControls(),
			// 	this.state.controls
			// );
			// this.setState({ controls: updatedControls, formIsValid: false });
		} else if (result && result.status === "error") {
			this.fillErrorFields(result.body.errors);
		}
	};

	fillErrorFields(errors) {
		const updatedControls = { ...this.state.controls };

		for (let error of errors) {
			updatedControls[error.param].valid = false;
			updatedControls[error.param].error = error.msg;
		}

		this.setState({
			controls: updatedControls,
			formIsValid: false,
		});
	}

	getControls() {
		let controls = Object.keys(this.state.controls);
		let skipArr = [...this.state.skip];

		!this.props.isSignupForm &&
			(controls = controls.filter((ctrl) => {
				for (let skip of skipArr)
					if (ctrl === skip) {
						return false;
					}

				return true;
			}));

		return controls;
	}

	createForm = () => {
		const controls = this.getControls();

		const form = (
			<div className={classes.formWrapper}>
				<form className={classes.form} onSubmit={this.submitHandler}>
					<h4>{this.props.isSignupForm ? "Sign up." : "Login."}</h4>
					{controls.map((ctrl) => (
						<div className={classes.form__field} key={ctrl}>
							<Input
								label={{
									name: this.state.controls[ctrl].labelName,
								}}
								config={this.state.controls[ctrl].config}
								changed={(e) => {
									this.changeHandler(e, ctrl);
								}}
								blured={(e) => {
									this.inputBlurHandler(ctrl);
								}}
								focused={this.state.controls[ctrl].focused}
								error={this.state.controls[ctrl].error}
								touched={this.state.controls[ctrl].touched}
								valid={this.state.controls[ctrl].valid}
							/>
						</div>
					))}
					<div>
						<Button type="submit" loading={this.props.loading}>
							Submit
						</Button>
					</div>
				</form>
			</div>
		);

		return form;
	};

	render() {
		const form = this.createForm();

		return form;
	}
}

export default withRouter(AuthForm);