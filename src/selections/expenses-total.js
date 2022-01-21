const expense_total = (expenses) => {
    return expenses.map((expense) => {
        return expense.amount
    }).reduce((sum, currentValue) => {
        return sum + currentValue
    }, 0)
}

export default expense_total