import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import EditDashbord from "../components/expenseDashpord";
import EditExpense from "../components/editExpense";
import AddExpense from "../components/addExpense";
import HelpPage from "../components/Help";
import Header from "../components/Header";
import PageNotFound from "../components/notfound";
import EditSingleExpense from "../components/editSingleExpense";
import LoginPage from "../components/loginPage";
import PrivateRoute from "./PrivetRoute";

const Approuter = () => {
    return(
        <BrowserRouter  >
            
            <Routes >
            
                <Route element={<LoginPage />} path="/" />
                <Route path="/dashboard" element={<PrivateRoute><EditDashbord /></PrivateRoute>}/>
                <Route element={<PrivateRoute><AddExpense /></PrivateRoute>} path="/create" />
                <Route element={<PrivateRoute>< EditExpense /></PrivateRoute>} path="/edit">
                    <Route path=":id" element={< EditSingleExpense />} />
                </Route>
                <Route path="/help" element={<HelpPage />} />
                <Route element={<PageNotFound />} path="*" />
            </Routes>
        </BrowserRouter>
    )
    
}


export default Approuter


// this is the router before using the history 

    // < BrowserRouter >
    //     <Header />
    //     <Routes>
    //         <Route element={<LoginPage />} path="/" />
    //         < Route element={< EditDashbord />} path="/dashboard" />
    //         <Route element={<AddExpense />} path="/create" />
    //         <Route element={< EditExpense />} path="/edit">
    //             <Route path=":id" element={< EditSingleExpense />} />
    //         </Route>
    //         <Route path="/help" element={<HelpPage />} />
    //         <Route element={<PageNotFound />} path="*" />
    //     </Routes>
    // </BrowserRouter >