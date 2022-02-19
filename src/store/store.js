import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; // middleware is somthing used to interact with the website
import authReducer from "../reducers/auth"
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filter';
import thunk from 'redux-thunk';
const composeEnhanserz = Window.__REDUX_DEVTOOLS_EXTENSION_compose__ || compose;

export default () => {
    // Store creation
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer

        }),
        composeEnhanserz(applyMiddleware(thunk))
    );

    return store
}

// thunk : is a middleware used to allow us to dispatch a function
// we should write some code to ensure that the redux devtool is okay while we are working

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()