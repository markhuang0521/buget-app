import uuid from "uuid";
import database from "../firebase/firebase";

// add expense
export const addExpense = expense => ({
	type: "ADD_EXPENSE",
	expense
});

// start adding expense
export const startAddExpense = (expenseData = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const {
			description = "",
			note = "",
			amount = 0,
			createAt = 0
		} = expenseData;
		const expense = { description, note, amount, createAt };
		return database
			.ref(`users/${uid}/expenses`)
			.push(expense)
			.then(ref => {
				dispatch(
					addExpense({
						id: ref.key,
						...expense
					})
				);
			});
	};
};

// delete expense
export const deleteExpense = ({ id } = {}) => ({
	type: "DELETE_EXPENSE",
	id
});
// start delete expense
export const startDeleteExpense = ({ id } = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;

		return database
			.ref(`users/${uid}/expenses`)
			.remove()
			.then(() => {
				dispatch(deleteExpense({ id }));
			});
	};
};

// edit Expense
export const editExpense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates
});

//  start updating expense
export const startEditExpense = (id, updates) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;

		return database
			.ref(`users/${uid}/expenses`)
			.update(updates)
			.then(() => {
				dispatch(editExpense(id, updates));
			});
	};
};

//  set expenses
export const setExpenses = expenses => ({
	type: "SET_EXPENSES",
	expenses
});

export const startSetExpense = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;

		return database
			.ref(`users/${uid}/expenses`)
			.once("value")
			.then(snapshot => {
				const expenses = [];
				snapshot.forEach(childSnapshot => {
					expenses.push({
						id: childSnapshot.key,
						...childSnapshot.val()
					});
				}),
					dispatch(setExpenses(expenses));
			});
	};
};
