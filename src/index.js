import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import "./style/style.scss";
import "normalize.css";
import configStore from "./store/configStore";
import getVisibleExpenses from "./selectors/visbleExpenses";
import "./firebase/firebase";
import { startSetExpense } from "./actions/expenses";

const store = configStore();
// store.subscribe(() => {
// 	const state = store.getState();
// 	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// 	console.log(visibleExpenses);
// });

const Jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(<p>loading...</p>, document.getElementById("root"));

store.dispatch(startSetExpense()).then(() => {
	ReactDOM.render(Jsx, document.getElementById("root"));
});
