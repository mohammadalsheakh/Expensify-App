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
const jsx = (
    <Provider store={stores}>
        <Approuter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));



