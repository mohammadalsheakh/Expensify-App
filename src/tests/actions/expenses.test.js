import myExpenses from "../fixture/myexpenses";
import { removeExpense, addExpense, editExpense} from "../../actions/expenses";
test('should remove expense', () => {
    const action = removeExpense({id : `0592449672`})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: `0592449672`
    })
})

test('should exdit expense', () => {
    const action = editExpense(`0592449672`,{nonte : `new value`})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: `0592449672`,
        updates : {
            nonte : `new value`
        }
    })
})

test('should add expense', () => {
    const action = addExpense(myExpenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: myExpenses[2]
    })
})



//**** this used when the addExpense action is responsible for the defualt case  */
// test('should add expense (defualt)', () => {
//     const expenseData = {
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     }

//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense : {
//             ...expenseData,
//             id: expect.any(String)

//         }
//     })
// })
