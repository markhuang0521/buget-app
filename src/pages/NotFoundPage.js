import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	NavLink
} from "react-router-dom";
const NotFoundPage = () => (
	<div>
		404! page - <Link to="/">Go Home </Link>
	</div>
);

export default NotFoundPage;
