import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../pages/Header";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import EditPage from "../pages/EditPage";
import HelpPage from "../pages/HelpPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => (
	<Router>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/create" component={AddPage} />
				<Route path="/edit/:id" component={EditPage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
