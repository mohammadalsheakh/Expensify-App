import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expense_total from '../selections/expenses-total';
import getVisibleExpenses from '../selections/expenses';

function ExpensesSummury({expenseCount, expenseTotal}) {
    const expenseWord = expenseCount===1 ? `expense` :  `expenses`
    const formatExpenseTotal = numeral(expenseTotal).format('$0,0.00')
    return(
        <div>
            <h1>viewing {expenseCount} {expenseWord} expenses totaling {formatExpenseTotal} </h1>
        </div>
    )
}


const mapToStateProps = (state) => {
    const theVisibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    return{
        expenseCount : theVisibleExpenses.length,
        expenseTotal : expense_total(theVisibleExpenses)
    }
}


export {ExpensesSummury}
export default connect(mapToStateProps)(ExpensesSummury)