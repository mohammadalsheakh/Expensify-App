import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import ExpenseForm from './expenseForm'
import { startEditExpense, startRemoveExpense} from '../actions/expenses'



function EditSingleExpense(props) {
    let navigate = useNavigate()
    let params = useParams()
    
    const getNeeded = () =>{
        return (props.expenses.find((expense) => {
            return expense.id === params.id
        }))
        
    }
    let theExpense = getNeeded()

    const GetTheExpense = (expense) => {
        props.dispatch(startEditExpense(theExpense.id, expense ))
        navigate(`/`)
    }


    return (
        <div>
            <ExpenseForm 
                expense={theExpense}
                getTheExpense={GetTheExpense}
            />
            <button onClick={() => {
                props.dispatch(startRemoveExpense({ id: theExpense.id }))
                navigate(`/`)
            }} >remove</button>
        </div>
        
    )
}

const mapStateToProps = (state) =>{
    
    return{
        expenses: state.expenses}
    }
    


export default connect(mapStateToProps)(EditSingleExpense)