import React, { Component } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";

import {
	setTextFilter,
	sortByAmount,
	sortByDate,
	setStartDate,
	setEndDate
} from "../actions/filters";

class ExpenseListFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			calendarFocus: null
		};
	}
	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};
	onFocusChange = focusedInput => {
		this.setState(() => ({ calendarFocus: focusedInput }));
	};
	render() {
		return (
			<div>
				<input
					type="text"
					value={this.props.filters.text}
					onChange={e => {
						this.props.dispatch(setTextFilter(e.target.value));
					}}
				/>
				<select
					value={this.props.filters.sortBy}
					onChange={e => {
						e.target.value === "amount"
							? this.props.dispatch(sortByAmount())
							: this.props.dispatch(sortByDate());
					}}
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
					startDateId="startId" // PropTypes.string.isRequired,
					endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
					endDateId="endId" // PropTypes.string.isRequired,
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
					onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
					numberOfMonths={1}
					isOutsideRange={() => false}
					showClearDates={true}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilter);
