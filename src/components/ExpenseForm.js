import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const now = moment();
console.log(now.format("MMM Do, YYYY"));

class ExpenseForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : "",
			note: props.expense ? props.expense.note : "",
			amount: props.expense ? (props.expense.amount / 100).toString() : "",
			createAt: props.expense ? moment(props.expense.createAt) : moment(),
			calendarFocus: false,
			error: ""
		};
	}

	onDescriptionChange = e => {
		const description = e.target.value;
		this.setState({ description });
	};
	onNoteChange = e => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	};
	onAmountChange = e => {
		const amount = e.target.value;

		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};
	onDateChange = createAt => {
		if (createAt) {
			this.setState(() => ({ createAt }));
		}
	};
	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocus: focused }));
	};
	onFormSubmit = e => {
		e.preventDefault();
		if (!this.state.amount || !this.state.description) {
			this.setState(() => ({ error: "Please provide amount and description" }));
		} else {
			this.setState(() => ({ error: "" }));
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createAt: this.state.createAt.valueOf(),
				note: this.state.note
			});
			console.log("submitted");

			// this.setState(prevState => ({
			// 	state: { ...prevState }
			// }));
		}
	};
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onFormSubmit}>
					<input
						value={this.state.description}
						onChange={this.onDescriptionChange}
						type="text"
						placeholder="description"
						autoFocus
					/>
					<input
						type="text"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<SingleDatePicker //third party componment
						date={this.state.createAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocus}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
					<textarea
						value={this.state.note}
						onChange={this.onNoteChange}
						placeholder="Add a note for your expense"
					/>
					<button>Add Expense</button>
				</form>
			</div>
		);
	}
}

export default ExpenseForm;
