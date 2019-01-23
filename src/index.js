import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter";
import { Provider } from "react-redux";
import "./style/style.scss";
import "normalize.css";
import configStore from "./store/configStore";
import { firebase } from "./firebase/firebase";
import { startSetExpense } from "./actions/expenses";
import { logIn, logOut } from "./actions/auth";
// import getVisibleExpenses from "./selectors/visbleExpenses";

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
let hasRender = false;
const renderApp = () => {
	if (!hasRender) {
		ReactDOM.render(Jsx, document.getElementById("root"));
		hasRender = true;
	}
};

ReactDOM.render(<p>loading...</p>, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
	if (user) {
		console.log("log in ");
		store.dispatch(logIn(user.uid));
		store.dispatch(startSetExpense()).then(() => {
			renderApp();
		});
		if (history.location.pathname === "/") {
			history.push("/home");
		}
	} else {
		console.log("log out ");
		store.dispatch(logOut());
		renderApp();
		history.push("/");
	}
});
