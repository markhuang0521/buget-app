import React from "react";
import numeral from "numeral";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import getExpenseTotal from "../selectors/expense-total";
import selectExpenses from "../selectors/visbleExpenses";

const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
	const expenseWord = expenseCount <= 1 ? "expense" : "expenses";
	const currency = numeral(expenseTotal / 100).format("$0,0.00");
	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">
					Viewing <span>{expenseCount}</span> {expenseWord}, Totaling:
					<span>{currency}</span>
				</h1>
				<div className="page-header__actions">
					<Link to="/create">
						<button className="button" >
							ADD EXPENSE
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	expenseCount: selectExpenses(state.expenses, state.filters).length,
	expenseTotal: getExpenseTotal(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpenseSummary);
