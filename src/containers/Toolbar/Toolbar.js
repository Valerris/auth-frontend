import React, { Component, Fragment } from "react";
import Button from "../../components/UI/Button/Button";
import Sidenav from "../../components/Sidenav/Sidenav";
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
					<div>Logo</div>

					<Button
						className={["button--burger"]}
						type="button"
						clicked={this.toggleSidenavHandler}
					></Button>
				</div>

				{this.state.sidenavShow ? (
					<Sidenav clicked={this.toggleSidenavHandler} />
				) : null}
			</Fragment>
		);
	}
}

export default Toolbar;
