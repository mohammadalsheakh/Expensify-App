import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./expenseListItem";
import getVisibleExpenses from "../selections/expenses";
import ExpenseDashPordFilter from "./expenseDashPordFilter";

export const ExpensesList = (props) => (
    <div>
        <ExpenseDashPordFilter />
        
        {
            props.expense.length === 0 ? (<p>There is no expenses</p>)  : 
                (props.expense.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                }))
        }

    </div>
)

//this usage of the connect api is an application for higher order component 
const mapStateToProps = (state) => {
    return {
        expense: getVisibleExpenses(state.expenses, state.filters)
    }
}
const ConnectedEditList = connect(mapStateToProps)(ExpensesList)



// so connect api will return an object to the child componenet 

export default ConnectedEditList