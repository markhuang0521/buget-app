import React from "react";
import numeral from "numeral";
import { connect } from "react-redux";
import getExpenseTotal from "../selectors/expense-total";
import selectExpenses from "../selectors/visbleExpenses";

const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
	const expenseWord = expenseCount <= 1 ? "expense" : "expenses";
	const currency = numeral(expenseTotal / 100).format("$0,0.00");
	return (
		<div>
			<h1>
				Viewing {expenseCount} {expenseWord}, Totaling: {currency}
			</h1>
		</div>
	);
};

const mapStateToProps = state => ({
	expenseCount: selectExpenses(state.expenses, state.filters).length,
	expenseTotal: getExpenseTotal(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpenseSummary);
