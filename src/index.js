import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import Approuter from "./router/AppRouter";
import store from "./store/store";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selections/expenses";
import "../style.scss";
// import 'react-dates/lib/css/_datepicker.css';
const stores = store()

stores.dispatch(addExpense({description : "water ", amount: 6000, createdAt:400 }))
stores.dispatch(addExpense({ description: "gas bill ", amount:4500, createdAt: 1000 }))
stores.dispatch(addExpense({ description: "rent ", amount: 7000, createdAt: 1200 }))
stores.dispatch(addExpense({ description: "taxes ", amount: 7000, createdAt: 800 }))


const state = stores.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);



const jsx = (
    <Provider store={stores}>
        <Approuter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));



