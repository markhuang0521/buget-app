import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from "../../actions/filters";
import moment from "moment";

test("should set empty text filter object", () => {
	const action = setTextFilter();

	expect(action).toEqual({
		type: "TEXT_FILTER",
		text: ""
	});
});

test("should set text filter object", () => {
	const text = "working";
	const action = setTextFilter(text);

	expect(action).toEqual({
		type: "TEXT_FILTER",
		text
	});
});

test("should set sort date object", () => {
	const action = sortByDate();

	expect(action).toEqual({
		type: "SORT_BY_DATE"
	});
});

test("should set sort amount object", () => {
	const action = sortByAmount();

	expect(action).toEqual({
		type: "SORT_BY_AMOUNT"
	});
});

test("should set start date object", () => {
	const action = setStartDate(moment(0));

	expect(action).toEqual({
		type: "SET_START_DATE",
		startDate: moment(0)
	});
});

test("should set end date object", () => {
	const action = setEndDate(moment(21));

	expect(action).toEqual({
		type: "SET_END_DATE",
		endDate: moment(21)
	});
});
