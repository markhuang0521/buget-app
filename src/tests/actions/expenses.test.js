import { addExpense, deleteExpense, editExpense } from "../../actions/expenses";

test("should set up delete expense object", () => {
	const action = deleteExpense({ id: "123" });

	expect(action).toEqual({
		type: "DELETE_EXPENSE",
		id: "123"
	});
});

test("should set up edit expense object", () => {
	const action = editExpense("123abc", {
		amount: 1200,
		createAt: 100
	});

	expect(action).toEqual({
		updates: { createAt: 100, amount: 1200 },
		type: "EDIT_EXPENSE",
		id: "123abc"
	});
});
test("should set up add expense default object", () => {
	const action = addExpense();

	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			id: expect.any(String),
			description: "",
			note: "",
			amount: 0,
			createAt: 0
		}
	});
});
test("should set up add expense provided object", () => {
	const expense = {
		description: "rent",
		note: "nice",
		amount: 1000,
		createAt: 210
	};
	const action = addExpense(expense);

	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			...expense,
			id: expect.any(String)
		}
	});
});
