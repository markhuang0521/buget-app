const expenses = [
	{
		id: 1,
		description: "rent",
		note: "nice",
		amount: 1000,
		createAt: 210
	},
	{
		id: 2,
		description: "rent",
		note: "nice",
		amount: 2000,
		createAt: 210
	},
	{
		id: 3,
		description: "rent",
		note: "nice",
		amount: 3000,
		createAt: 210
	}
];

const getExpenseTotal = expenses => {
	return expenses.reduce((total, expense) => total + expense.amount, 0);
};

console.log(getExpenseTotal(expenses));

export default getExpenseTotal;
