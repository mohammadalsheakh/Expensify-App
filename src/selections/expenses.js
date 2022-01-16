import moment from "moment";
// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAt = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAt, "day") :true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAt, "day") : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt - b.createdAt
        }
        else if (sortBy === "amount") {
            return a.amount - b.amount
        }
    })
};

export default getVisibleExpenses