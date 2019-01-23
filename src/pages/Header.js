import React from "react";
import { NavLink } from "react-router-dom";
import { startLogOut } from "../actions/auth";
import { connect } from "react-redux";

const Header = ({ startLogOut }) => (
	<header>
		<h1>
			<NavLink
				to="/"
				exact={true}
				style={{ textDecoration: "none", color: "black" }}
			>
				Expensify
			</NavLink>
		</h1>
		<NavLink to="/home" activeClassName="is-active">
			Home
		</NavLink>

		<NavLink to="/create" activeClassName="is-active">
			Create
		</NavLink>

		<button onClick={startLogOut}>Log out</button>
	</header>
);

const mapDispatchToProps = dispatch => ({
	startLogOut: () => dispatch(startLogOut())
});

export default connect(
	undefined,
	mapDispatchToProps
)(Header);
