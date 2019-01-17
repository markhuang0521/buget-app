import React from "react";
import ExpenseList from "../components/expenseList";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	NavLink
} from "react-router-dom";
import ExpenseListFilter from "../components/ExpenseListFilter";

const HomePage = () => (
	<div>
		<ExpenseListFilter />
		<ExpenseList />
	</div>
);
export default HomePage;
