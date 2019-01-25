import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseForm from "../components/ExpenseForm";
import { startEditExpense, startDeleteExpense } from "../actions/expenses";

export class EditPage extends Component {
	onSubmit = expense => {
		this.props.startEditExpense(this.props.expense.id, expense);
		this.props.history.push("/home");
	};
	onDelete = () => {
		this.props.startDeleteExpense({ id: this.props.expense.id });
		this.props.history.push("/home");
	};
	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Edit Expense</h1>
					</div>
				</div>

				<div className="content-container">
					<ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
					<button className="button button--remove" onClick={this.onDelete}>
						Remove
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find(expense => expense.id === props.match.params.id)
});
const mapDispatchToProps = (dispatch, props) => ({
	startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
	startDeleteExpense: data => dispatch(startDeleteExpense(data))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditPage);
