import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import Approuter from "./router/AppRouter";
import store from "./store/store";
import { startSetExpense } from "./actions/expenses";
import "../style.scss";
import "./firebase/fireBase"

// import 'react-dates/lib/css/_datepicker.css';
const stores = store()
const jsx = (
    <Provider store={stores}>
        <Approuter />
    </Provider>
)
ReactDOM.render(<p>Pleas Wait </p>, document.getElementById('root'));

stores.dispatch(startSetExpense()).then(() =>{
    ReactDOM.render(jsx, document.getElementById('root'));
})




