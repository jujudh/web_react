import React from "react";
import { useHistory } from "react-router-dom";


const Contact = (props) => {
    const history = useHistory();
    const handleDownloadPDF = (fileName) => {
        // Replace this with the actual URL of your PDF file
        const pdfURL = `/웹프 계획_1차/${fileName}.pdf`;

        // Create an anchor element to trigger the download
        const link = document.createElement('a');
        link.href = pdfURL;
        link.download = `${fileName}.pdf`;
        link.click();
    };
    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <h1>Contact Page</h1>
            <br />
            <button onClick={goBack}>Go Back</button>
            <p>Click the buttons to download PDF files:</p>
            <button onClick={() => handleDownloadPDF('/웹프 계획_1차')}>웹프 1차</button>
            <button onClick={() => handleDownloadPDF('file2')}>Download File 2</button>
            <button onClick={() => handleDownloadPDF('file3')}>Download File 3</button>

        </>
    );
};


export default Contact;

