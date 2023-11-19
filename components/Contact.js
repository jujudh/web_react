import React from "react";
import { useHistory } from "react-router-dom";

import QuizComponent from "./QuizComponent";
const Purl = "http://localhost:3000/pdf.pdf"
const Contact = (props) => {
    const history = useHistory();
    const handleDownloadPDF = (url) => {

        const filename = url.split("/").pop();

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        link.remove();
    };
    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <h1>Contact Page</h1>
            <br />
            <button onClick={goBack}>Go Back</button>
            <QuizComponent />
        </>
    );
};


export default Contact;
