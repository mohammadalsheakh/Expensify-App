import moment from "moment";
import filtersReducer from "../../reducers/filter";

test('should set up defualt filter value', () => {
    const action = filtersReducer(undefined, {type : `@@INIT`})
    expect(action).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf("month")
    })
})

test('should set sort by to amount ', () => {
    const action = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})
    expect(action.sortBy).toBe(`amount`)
})

test('should set sort by date (defual value) ', () => {
    const action = filtersReducer(undefined, { type: 'SORT_BY_DATE' })
    expect(action.sortBy).toBe(`date`)
})


test('should set text filter', () => {
    const action = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text : `hello word`})
    expect(action.text).toBe(`hello word`)
})

test('should set start date', () => {
    const action = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: 1000})
    expect(action.startDate).toBe(1000)
})

test('should set end date', () => {
    const action = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: 5000 })
    expect(action.endDate).toBe(5000)
})

