import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
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
					<div className={classes.toolbar__ctrls}>
						<Button
							className={["button--cart"]}
							type="button"
							clicked={() => {
								this.props.history.push("/cart");
							}}
						></Button>
						<Button
							className={["button--burger"]}
							type="button"
							clicked={this.toggleSidenavHandler}
						></Button>
					</div>
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

export default withRouter(Toolbar);
