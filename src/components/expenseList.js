import React, { Component } from "react";
import ExpenseListItem from "./ExpenseListItem";
import { connect } from "react-redux";
import selectExpenses from "../selectors/visbleExpenses";

const ExpenseList = ({ expenses }) => (
	<div>
		<h2 >Expense List</h2>
		<ol>
			{expenses.map((expense, index) => (
				<ExpenseListItem key={index} {...expense} />
			))}
		</ol>
	</div>
);

const mapStateToProps = state => ({
	expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
