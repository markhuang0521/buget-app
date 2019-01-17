import React from "react";
import { createStore } from "redux";

// action generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: "INCREMENT",
	incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: "DECREMENT",
	decrementBy
});
const setCount = ({ count }) => ({
	type: "SET",
	count
});

const resetCount = () => ({
	type: "RESET"
});
// reducer
const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + action.incrementBy };

		case "DECREMENT":
			return { count: state.count - action.decrementBy };

		case "SET":
			return { count: action.count };

		case "RESET":
			return { count: 0 };

		default:
			return state;
	}
);

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// unsubscribe();

// actions that change the value of store

// store.dispatch({
// 	type: "SET",
// 	count: 1
// });
// store.dispatch({
// 	type: "RESET"
// });

store.dispatch(setCount({ count: 10 }));

store.dispatch(resetCount());

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(resetCount());


