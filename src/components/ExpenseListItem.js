import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
const ExpenseListItem = ({ id, description, amount, createAt }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3> {description}</h3>
		</Link>
		<h5>Amount: {numeral(amount / 100).format("$0,0.00")}</h5>
		<h5>Create at: {moment(createAt).format("MMMM Do, YYYY")}</h5>
	</div>
);

// const mapStateToProps = state => ({
// 	expenses: state.expenses
// });

export default ExpenseListItem;
