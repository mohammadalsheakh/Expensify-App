import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expenseForm";
import { addExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";


// connect function two types :
//state to props and dispatch to props , here we are not using any but we need to pass the dispatch to props as 
//the second argument becouse we have a proplem in testing with this code so :


// const AddExpense = (props) => {
//     const navigate = useNavigate()
//     const GetTheExpense = (expense) =>{
//         console.log(expense);
//         props.dispatch(addExpense(expense))
//         navigate(`/`)
        
//     }
//     return(
//         <div>
//             Add expense here gg
//             < ExpenseForm  
//             getTheExpense={GetTheExpense}
//             />
//         </div>
//     )
// }
// export default connect()(AddExpense)




// here we have the new code :
export const AddExpense = (props) => {
    const navigate = useNavigate()
    const GetTheExpense = (expense) => {
        props.onDispatch(expense)
        navigate(`/`)

    }
    return (
        <div>
            Add Expense 
            < ExpenseForm
                getTheExpense={GetTheExpense}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({ // here we used the dispatch insted of the state 
    onDispatch: expense => dispatch(addExpense(expense))
})

export default connect(undefined,mapDispatchToProps)(AddExpense)