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



export { addExpense, deleteExpense, editExpense };
