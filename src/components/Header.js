import React from "react";
import {Link } from "react-router-dom"
import { connect } from "react-redux";
import { StartLogout } from "../actions/auth";
import { auth } from "../firebase/fireBase";
import { useNavigate } from "react-router-dom";
import { logOut } from "../index";
export const Header = (props) => {
    const navigate = useNavigate()
    return (
        <header className="header">
            <div className="content_container">
                <div className="header__content">
                    <Link to="/dashboard" className="header__title" > <h1>Expensify</h1></Link>
                    <button className="buttun buttun--link" onClick={
                        () => {
                            props.dispatch(StartLogout()).then(() => {
                                auth.onAuthStateChanged((user) => {
                                    if (!user) {
                                        localStorage.setItem(`uid`, undefined)
                                        console.log(`out`);
                                        logOut()
                                        navigate("/");
                                    }
                                })
                            })
                        }
                    } >Logout</button>
                </div>
            </div>
        </header>)
    
    }

const mapDispatchToProps = (state) => ({
    startLogout: `error`
})
export default connect(mapDispatchToProps)(Header)