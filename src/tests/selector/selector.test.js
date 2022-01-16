import moment from "moment";
import getVisibleExpenses from "../../selections/expenses";


const expenses = [{
    id: 1,
    description : `Gum`,
    note :``,
    amount :195 ,
    createdAt: 0
},
{
    id: 2,
    description: `Rent`,
    note: ``,
    amount: 109,
    createdAt: moment(0).subtract(4, `days`).valueOf()
},
{
    id: 3,
    description: `credit card`,
    note: ``,
    amount: 45,
    createdAt: moment(0).add(4,`days`).valueOf()
}]

test('should fillter by the text value', () => {
    const filters = {
        text : `e`,
        sortBy : `date`,
        startDate : undefined,
        endDate : undefined
    }
    const action = getVisibleExpenses(expenses,filters)
    expect(action).toEqual([expenses[1],expenses[2]])
})


test('should filter by start date', () => {
    const filters = {
        text: ``,
        sortBy: `date`,
        startDate: moment(0),
        endDate: undefined
    }
    const action = getVisibleExpenses(expenses,filters)
    expect(action).toEqual([expenses[0],expenses[2]])
})

test('should filter by end date', () => {
    const filters = {
        text: ``,
        sortBy: `date`,
        startDate: undefined,
        endDate: moment(0).add(2, `days`)
    }
    const action = getVisibleExpenses(expenses, filters)
    expect(action).toEqual([expenses[1], expenses[0]])
})

test('should sort by date', () => {
    const filters = {
        text: ``,
        sortBy: `date`,
        startDate: undefined,
        endDate: undefined
    }
    const action = getVisibleExpenses(expenses,filters)
    expect(action).toEqual([expenses[1], expenses[0],expenses[2]])
})

test('should sort by amount', () => {
    const filters = {
        text: ``,
        sortBy: `amount`,
        startDate: undefined,
        endDate: undefined
    }
    const action = getVisibleExpenses(expenses, filters)
    expect(action).toEqual([expenses[2], expenses[1], expenses[0]])
})
