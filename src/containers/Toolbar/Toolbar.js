import React, { Component, Fragment } from "react";
import Button from "../../components/UI/Button/Button";
import Sidenav from "../../components/Sidenav/Sidenav";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Logo from "../../components/UI/Logo/Logo";
import classes from "./Toolbar.module.css";

class Toolbar extends Component {
	state = {
		sidenavShow: false,
	};

	toggleSidenavHandler = () => {
		this.setState((prevState) => ({
			sidenavShow: !prevState.sidenavShow,
		}));
	};

	render() {
		return (
			<Fragment>
				<div className={classes.toolbar}>
					<Logo />

					<Button
						className={["button--burger"]}
						type="button"
						clicked={this.toggleSidenavHandler}
					></Button>
				</div>

				{this.state.sidenavShow ? (
					<div>
						<Backdrop clicked={this.toggleSidenavHandler} />
						<Sidenav clicked={this.toggleSidenavHandler} />
					</div>
				) : null}
			</Fragment>
		);
	}
}

export default Toolbar;
