import React, { Component, createRef } from "react";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import updateObject from "../../../utils/updateObj";
import collectData from "../../../utils/forms/collectData";
import clearForm from "../../../utils/forms/clearForm";
import { required, length, email } from "../../../utils/forms/validators";
import fieldValidation from "../../../utils/forms/fieldValidation";
import formValidation from "../../../utils/forms/formValidation";
import classesForm from "../Form.module.css";
import classesProfileForm from "./ProfileForm.module.css";

let fileInputVal = null;

class ProfileForm extends Component {
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
				labelName: "Username",
				touched: false,
				focused: false,
				valid: false,
				validators: [length({ min: 3 })],
				error: "Enter your username.",
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
				validators: [email],
				error: "Enter a valid email.",
			},
			image: {
				type: "input",
				config: {
					type: "file",
					name: "image",
					placeholder: "Choose your profile pic",
					value: "",
				},
				labelName: "Profile pic",
			},
		},
		formIsValid: false,
	};

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
		if (e.target.type === "file") {
			fileInputVal = e.target.files[0];
		}
		const value = e.target.value;

		let fieldValidity = true;

		if (this.state.controls[ctrl].validators) {
			fieldValidity = fieldValidation(
				this.state.controls[ctrl].validators,
				value
			);
		}

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

		formData.image = fileInputVal;

		const result = await this.props.postEdit(formData);

		result && console.log(result);

		const updatedControls = clearForm(this.getControls(), this.state.controls);

		this.setState({ controls: updatedControls, formIsValid: false });

		// if (result && result.status === "success") {
		// 	if (this.props.isSignupForm) {
		// 		return this.props.history.push("/login");
		// 	} else {
		// 		return this.props.history.replace("/home");
		// 	}
		// } else if (result && result.status === "error") {
		// 	this.fillErrorFields(result.body.errors);
		// }
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

		return controls;
	}

	createForm = () => {
		const controls = this.getControls();

		const form = (
			<div className={classesForm.formWrapper}>
				<form
					className={[classesForm.form, classesProfileForm.form].join(" ")}
					onSubmit={this.submitHandler}
					encType="multipart/form-data"
				>
					<h4>Edit profile.</h4>
					{controls.map((ctrl) => (
						<div className={classesForm.form__field} key={ctrl}>
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
						<Button type="submit" loading={this.props.loadingEdit}>
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

export default ProfileForm;
