import React, { Component } from "react";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import updateObject from "../../../utils/updateObj";
import collectData from "../../../utils/forms/collectData";
import clearForm from "../../../utils/forms/clearForm";
import { required } from "../../../utils/forms/validators";
import fieldValidation from "../../../utils/forms/fieldValidation";
import formValidation from "../../../utils/forms/formValidation";
import classesForm from "../Form.module.css";
import classesTodosForm from "./TodosForm.module.css";

class TodosForm extends Component {
	state = {
		controls: {
			task: {
				type: "input",
				config: {
					type: "text",
					name: "task",
					placeholder: "Введите вашу задачу",
					value: "",
				},
				labelName: "Задача",
				touched: false,
				focused: false,
				valid: false,
				validators: [required],
				error: "Введите вашу задачу.",
			},
		},
		formIsValid: false,
		loading: false,
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

		this.setState({ loading: true });

		const formData = collectData(this.getControls(), this.state.controls);

		const result = await this.props.addTask(formData);

		result && console.log(result);

		if (result && result.status === "success") {
			const updatedControls = clearForm(
				this.getControls(),
				this.state.controls
			);
			this.setState({
				controls: updatedControls,
				formIsValid: false,
				loading: false,
			});
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
			loading: false,
		});
	}

	getControls() {
		let controls = Object.keys(this.state.controls);

		return controls;
	}

	createForm = () => {
		const controls = this.getControls();

		const form = (
			<div
				className={[classesForm.formWrapper, classesTodosForm.formWrapper].join(
					" "
				)}
			>
				<form className={classesForm.form} onSubmit={this.submitHandler}>
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
						<Button type="submit" loading={this.state.loading}>
							Отправить
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

export default TodosForm;
