import React from 'react';
import "../css/login.css";
import {Link} from "react-router-dom";

const Signin = () => {
    return (
        <div className="login">
            <h4>Login</h4>
            <form className="form">
                <div className="text_area">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        defaultValue="username"
                        className="text_input"
                    />
                </div>
                <div className="text_area">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        defaultValue="password"
                        className="text_input"
                    />
                </div>
                <input
                    type="submit"
                    value="LOGIN"
                    className="btn"
                />
            </form>
            <Link className= "link" to="/signup">Sign Up</Link>

        </div>
    );
};

export default Signin;
