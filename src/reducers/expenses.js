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
		case "SET_EXPENSES":
			return action.expenses;

		default:
			return state;
	}
};

export default expenseReducer;
