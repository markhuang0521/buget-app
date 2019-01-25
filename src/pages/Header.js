import React from "react";
import { Link } from "react-router-dom";
import { startLogOut } from "../actions/auth";
import { connect } from "react-redux";

const Header = ({ startLogOut }) => (
	<header className="header">
		<div className="content-container">
			<div className="header__content">
				<Link to="/home" className="header__title ">
					<h1>Expensify</h1>
				</Link>
				<button onClick={startLogOut} className="button ">
					Log out
				</button>
			</div>
		</div>
	</header>
);

const mapDispatchToProps = dispatch => ({
	startLogOut: () => dispatch(startLogOut())
});

export default connect(
	undefined,
	mapDispatchToProps
)(Header);
