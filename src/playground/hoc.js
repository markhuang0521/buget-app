import React, { Component } from "react";
import ReactDOM from "react-dom";

// hoc is a componment that render another componment
// reuseable code
// render hijacking
// props manipulation
// abstract state

const Info = props => (
	<div>
		<h1>Info</h1>
		<p> info: {props.info}</p>
	</div>
);

const adminWarning = WrapperComponment => {
	return props => (
		<div>
			{props.isAdmin && <p>warning! this message is important</p>}
			<WrapperComponment {...props} />
		</div>
	);
};

const requireAuthorization = WrapperComponment => {
	return props => (
		<div>
			{props.isRequire ? (
				<WrapperComponment {...props} />
			) : (
				<p> please log in with your info</p>
			)}
		</div>
	);
};

const AdminInfo = adminWarning(Info);
const AuthInfo = requireAuthorization(Info);

// ReactDOM.render(
// 	<AdminInfo isAdmin={false} info="react is op" />,
// 	document.getElementById("root")
// );
ReactDOM.render(
	<AuthInfo isRequire={false} info="react is op" />,
	document.getElementById("root")
);
