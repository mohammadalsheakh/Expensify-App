import expensesReducer from "../../reducers/expenses";
import myExpenses from "../fixture/myexpenses";


test('should set the defualt case', () => {
    const action = expensesReducer(undefined, { type: `@@INIT` })
    expect(action).toEqual([])
})

test('should remove expense', () => {
    const action = expensesReducer(myExpenses, { type: `REMOVE_EXPENSE`, id : myExpenses[1].id })
    expect(action).toEqual([
        myExpenses[0],
        myExpenses[2]
    ])
})

test('should not remove expense in the fualt id', () => {
    const action = expensesReducer(myExpenses, { type: `REMOVE_EXPENSE`, id: `-1` })
    expect(action).toEqual(
        myExpenses
    )
})

test('should add expense', () => {
    const myNewExpense = {
        type: `ADD_EXPENSE`,
        expense :{
            id: 4,
            description: `Wepown`,
            note: `AK47`,
            amount: 19000,
            createdAt: 1500
        }
    }
    const action = expensesReducer(myExpenses, myNewExpense )
    expect(action).toEqual([
        ...myExpenses,
        myNewExpense.expense
    ])
})

test('should edit an expense', () => {
    const myNewExpense = {
        type: 'EDIT_EXPENSE',
        id :myExpenses[1].id ,
        updates : {
            amount : 700
        }
    }
    const action = expensesReducer(myExpenses,myNewExpense)
    expect(action[1].amount).toBe(700)
})


test('should not edit an expense if the id is not found', () => {
    const myNewExpense = {
        type: 'EDIT_EXPENSE',
        id: `-1`,
        updates: {
            amount: 700
        }
    }
    const action = expensesReducer(myExpenses, myNewExpense)
    expect(action).toEqual(myExpenses)
})