import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import EditPage from "../pages/EditPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute exact path="/" component={LoginPage} />
				<PrivateRoute path="/home" component={HomePage} />
				<PrivateRoute path="/create" component={AddPage} />
				<PrivateRoute path="/edit/:id" component={EditPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
