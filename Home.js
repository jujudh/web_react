import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <>
            <h1>Home Page</h1>
            <div>CBT</div>
            <p>Go to the contact page or the page by using one of the following:</p>
            <hr />
            <Link to="/mypage">
                <button>Go to Page</button>
            </Link>
            <Link to="/contact">
                <button>Go to Contact</button>
            </Link>
        </>
    );
};

export default Home;
