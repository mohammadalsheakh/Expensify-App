import React from "react";
import { BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import EditDashbord from "../components/expenseDashpord";
import EditExpense from "../components/editExpense";
import AddExpense from "../components/addExpense";
import HelpPage from "../components/Help";
import Header from "../components/Header";
import PageNotFound from "../components/notfound";
import EditSingleExpense from "../components/editSingleExpense";


const Approuter = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route element={<EditDashbord />} path="/" />
            <Route element={<AddExpense />} path="/create" />
            <Route element={< EditExpense />} path="/edit">
                <Route path=":id" element={< EditSingleExpense />} />
            </Route>
            <Route path="/help" element={<HelpPage />} />
            <Route element={<PageNotFound />} path="*" />
        </Routes>
    </BrowserRouter>
)


export default Approuter
