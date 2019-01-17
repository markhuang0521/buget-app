import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../components/ExpenseForm";
import { editExpense, deleteExpense } from "../actions/expenses";

const EditPage = props => {
	return (
		<div>
			<ExpenseForm
				expense={props.expense}
				onSubmit={expense => {
					props.dispatch(editExpense(props.expense.id, expense));
					props.history.push("/");
				}}
			/>
			<button
				onClick={e => {
					props.dispatch(deleteExpense({ id: props.expense.id }));
					props.history.push("/");
				}}
			>
				Remove
			</button>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditPage);
