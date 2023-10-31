import React from "react";
import { useHistory } from "react-router-dom";
import Contact from "./Contact";

const Mypage = (props) => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <h1>My Page</h1>
            <br />
            <button onClick={goBack}>Go Back</button>
        </>
    );
};
export default Mypage;
