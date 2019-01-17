import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({  id, description, amount, createAt }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3> {description}</h3>
		</Link>
		<h5>Amount: {amount}</h5>
		<h5>Create at: {createAt}</h5>
	</div>
);

// const mapStateToProps = state => ({
// 	expenses: state.expenses
// });

export default ExpenseListItem;
