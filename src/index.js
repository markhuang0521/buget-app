import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import "./style/style.scss";
import "normalize.css";
import configStore from "./store/configStore";
import { addExpense, deleteExpense, editExpense } from "./actions/expenses";
import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/visbleExpenses";

const store = configStore();
store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});
console.log("testing");

store.dispatch(
	addExpense({ description: "gas bill", amount: 3210, createAt: 9999 })
);
store.dispatch(
	addExpense({ description: "rent bill", amount: 310000, createAt: 1220 })
);

// store.dispatch(deleteExpense({ id: ex1.id }));
// store.dispatch(setTextFilter("water"));

// setTimeout(() => {
// 	store.dispatch(setTextFilter("bill"));
// }, 5000);

const Jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(Jsx, document.getElementById("root"));
