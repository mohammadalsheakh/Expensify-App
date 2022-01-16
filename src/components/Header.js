import React from "react";
import { NavLink } from "react-router-dom"
const Header = () => (
    <div>
        <h1>Expensify</h1>
        < NavLink to="/" activeClassName="active" > Dash Bord </ NavLink>
        <br />
        < NavLink to="/create" activeClassName="active" > Create Expense Page </ NavLink>
        <br/>
        <NavLink to="/help"> Help </NavLink>
    </div>
)
export default Header