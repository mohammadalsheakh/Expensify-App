import database from '../firebase/fireBase';
import { v1 as uuidv1 } from 'uuid';
import { get, onValue, push, ref, remove, update } from 'firebase/database';
// ADD_EXPENSE
const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData
        const expense = {description , note , amount, createdAt}
        push(ref(database, `expenses`), expense).then((snapshot) =>{
            dispatch(addExpense({
                id: snapshot.key,
                ...expense
            }))
        })
    }
}
// note here we got the dispatch order from the dispatch that located in the addExpense page (frome the connect)





// REMOVE_EXPENSE
const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) =>{
        remove(ref(database, `expenses/${id}`)).then(() =>{
            dispatch(removeExpense(id))
        })
    }
}




// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const startEditExpense = (id, updates) =>{
    return (dispatch) =>{
        update(ref(database, `expenses/${id}`), updates).then(() =>{
            dispatch(editExpense(id, updates))
        })
    }
}




// Set_Expenses 
const setExpense = (expenses) => ({
    type : `SET_EXPENSE`,
    expenses
})

const startSetExpense = () => {
    return (dispatch) => {
        return get(ref(database, `expenses`)).then((snapshot) => {
            const newArray = []
            snapshot.forEach(myExpense => {
                newArray.push({
                    id: myExpense.key,
                    ...myExpense.val()
                })
            });
            dispatch(setExpense(newArray))
        })
    }
}

export {removeExpense,addExpense,editExpense,setExpense, startSetExpense,startRemoveExpense, startEditExpense}
 // here we have a new return becouse when we use more than one promis in sequance we should return the first to genarate the second