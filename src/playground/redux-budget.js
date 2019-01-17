import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// add expense
const addExpense = ({
	description = "",
	note = "",
	amount = 0,
	createAt = 0
} = {}) => ({
	type: "ADD_EXPENSE",
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createAt
	}
});
// delete expense
const deleteExpense = ({ id } = {}) => ({
	type: "DELETE_EXPENSE",
	id
});
// edit Expense
const editExpense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates
});

const expenseDefaultState = [];
// expense Reducer
const expenseReducer = (state = expenseDefaultState, action) => {
	switch (action.type) {
		case "ADD_EXPENSE":
			return [...state, action.expense];
		case "DELETE_EXPENSE":
			return state.filter(({ id }) => id !== action.id);
		case "EDIT_EXPENSE":
			return state.map(expense =>
				expense.id === action.id ? { ...expense, ...action.updates } : expense
			);

		default:
			return state;
	}
};

// set TextFilter
const setTextFilter = (text = "") => ({
	type: "TEXT_FILTER",
	text
});
const sortByDate = () => ({
	type: "SORT_BY_DATE"
});
const sortByAmount = () => ({
	type: "SORT_BY_AMOUNT"
});
const setStartDate = startDate => ({
	type: "SET_START_DATE",
	startDate
});
const setEndDate = endDate => ({
	type: "SET_END_DATE",
	endDate
});

const filterDefault = {
	text: "",
	sortBy: "date",
	startDate: undefined,
	endDate: undefined
};
// filter Reducer
const filterReducer = (state = filterDefault, action) => {
	switch (action.type) {
		case "TEXT_FILTER":
			return { ...state, text: action.text };
		case "SORT_BY_AMOUNT":
			return { ...state, sortBy: "amount" };
		case "SORT_BY_DATE":
			return { ...state, sortBy: "date" };
		case "SET_START_DATE":
			return { ...state, startDate: action.startDate };
		case "SET_END_DATE":
			return { ...state, endDate: action.endDate };

		default:
			return state;
	}
};

// visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter(expense => {
			const startDateMatch =
				typeof startDate !== "number" || expense.createAt >= startDate;
			const endDateMatch =
				typeof endDate !== "number" || expense.createAt <= endDate;
			const textMatch = expense.description
				.toLowerCase()
				.includes(text.toLowerCase());
			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === "date") {
				return a.createAt < b.createAt ? 1 : -1;
			} else if (sortBy === "amount") {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};

// redux store creation
const store = createStore(
	combineReducers({
		expenses: expenseReducer,
		filter: filterReducer
	})
);
store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
	console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: "rant", amount: 1200, createAt: 10 }));
store.dispatch(addExpense({ description: "play", amount: 876, createAt: 100 }));
// // store.dispatch(
// 	editExpense(ex1.expense.id, {
// 		description: "payment123",
// 		note: "redux is op",
// 		amount: 321
// 	})
// );
// store.dispatch(deleteExpense({ id: ex1.expense.id }));

// store.dispatch(setTextFilter("a"));
// store.dispatch(setTextFilter(""));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(-12));
// store.dispatch(setEndDate(2));
// store.dispatch(setEndDate("12/12/2019"));

const demostate = {
	expenses: [
		{
			id: 123,
			description: "rent",
			note: " the final payment",
			amount: 125000,
			createAt: 0
		}
	],
	filter: {
		text: "rent",
		sortBy: "date", // amount/date
		startDate: undefined,
		endDate: undefined
	}
};

// const user = {
// 	name: "mark",
// 	age: 21
// };
// console.log({ ...user, location: "NY", age: 32 });
