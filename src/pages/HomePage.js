import React from "react";
import ExpenseList from "../components/expenseList";
import ExpenseListFilter from "../components/ExpenseListFilter";
import ExpenseSummary from "../components/ExpenseSummary";

const HomePage = () => (
	<div>
		<ExpenseSummary />
		<ExpenseListFilter />
		<ExpenseList />
	</div>
);
export default HomePage;
