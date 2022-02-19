import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import Approuter from "./router/AppRouter";
import store from "./store/store";
import { startSetExpense } from "./actions/expenses";
import { auth } from "./firebase/fireBase";
import { login, logout } from "./actions/auth";

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

ReactDOM.render(jsx, document.getElementById('root'));


export const loginPage = () =>{
    stores.dispatch(startSetExpense()).then(() => {
        ReactDOM.render(jsx, document.getElementById('root'));
    })
}
export const logOut = () => {
    ReactDOM.render(jsx, document.getElementById('root'));
}
loginPage()


auth.onAuthStateChanged((user) => {
    if (user) {
        console.log(`in`);
        console.log(user.uid);
        
        stores.dispatch(login(user.uid))
    }
    else {
        console.log(`out`);
        stores.dispatch(logout())
    }
})
