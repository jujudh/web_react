import React from 'react';
import "../css/signup.css";
import {Link} from "react-router-dom";

const Signup = () => {
    return (
        <div className="signup">
            <h4>Sign up</h4>
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
                    value="SIGNUP"
                    className="btn"
                />
            </form>
            <Link className= "link" to="/login">Login</Link>

        </div>
    );
};

export default Signup;
