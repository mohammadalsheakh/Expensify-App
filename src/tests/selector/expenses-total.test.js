import expense_total from "../../selections/expenses-total";
import myExpenses from "../fixture/myexpenses";

test('should return 0 for no expenses', () => {
    const action = expense_total([])
    expect(action).toBe(0)
});

test('should coreclly add an expense', () => {
    const action = expense_total([myExpenses[0]]) 
    expect(action).toBe(195)
});


test('should coreclly add a multible expenses ', () => {
    const action = expense_total(myExpenses)
    expect(action).toBe(349)
});
