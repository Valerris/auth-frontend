import React from "react";
import { createPortal } from "react-dom";
import { connect } from "react-redux";
import Links from "../Links/Links.js";
import Button from "../UI/Button/Button";
import classes from "./Sidenav.module.css";

const linksAuth = [
	{
		href: "/home",
		name: "Home",
	},
	{
		href: "/login",
		name: "Login",
	},
	{
		href: "/signup",
		name: "Signup",
	},
];

const links = [
	{
		href: "/home",
		name: "Home",
	},
	{
		href: "/profile",
		name: "Profile",
	},
	{
		href: "/logout",
		name: "Logout",
	},
];

const sidenav = ({ isAuth, clicked }) => {
	const toggleSidenavHandler = (e) => {
		e.target.closest("a[href]") && clicked();
	};

	const linksList = isAuth ? (
		<Links links={links} />
	) : (
		<Links links={linksAuth} />
	);

	const sidenav = (
		<div className={classes.menu} onClick={toggleSidenavHandler}>
			<div className={classes.menu__head}>
				<h4>Menu.</h4>
				<Button className={["button--close"]} clicked={clicked}>
					Close
				</Button>
			</div>
			{linksList}
		</div>
	);

	return createPortal(sidenav, document.querySelector("#sidenav-root"));
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(sidenav);
