import getExpenseTotal from "../../selectors/expense-total";

test("should set up total expense ", () => {
	const expenses = [
		// {
		// 	id: 1,
		// 	description: "rent",
		// 	note: "nice",
		// 	amount: 1000,
		// 	createAt: 210
		// },
		// {
		// 	id: 2,
		// 	description: "rent",
		// 	note: "nice",
		// 	amount: 2000,
		// 	createAt: 210
		// },
		// {
		// 	id: 3,
		// 	description: "rent",
		// 	note: "nice",
		// 	amount: 3000,
		// 	createAt: 210
		// }
	];
	const total = getExpenseTotal(expenses);

	expect(total).toBe(0);
});
