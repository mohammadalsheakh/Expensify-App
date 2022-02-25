import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import expense_total from '../selections/expenses-total';
import getVisibleExpenses from '../selections/expenses';

function ExpensesSummury({expenseCount, expenseTotal}) {
    const expenseWord = expenseCount===1 ? `expense` :  `expenses`
    const formatExpenseTotal = numeral(expenseTotal).format('$0,0.00')
    return(
        <div className='page-header' >
            <div className='content_container'>
                <h1 className='page-header__h1' >viewing <span>{expenseCount}</span> {expenseWord} expenses totaling <span>{formatExpenseTotal}</span> </h1>
                <div className='page-header__action' >
                    < Link to="/create" className='buttun'  >Add Expense</Link>
                </div>
            </div>
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