import React, { useState } from 'react';

function SelectOption() {
    const [selectedOption, setSelectedOption] = useState('');
    const [dependentOption, setDependentOption] = useState('');
    const optionsData = {
        option1: {
            가스기사: '/pdf.pdf',
            건축기사: '/pdf.pdf',
        },
        option2: {
            가스기능장: '/pdf.pdf',
            미용장: '/pdf.pdf',
        },
    };

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        setDependentOption('');
    };

    const handleDependentOptionChange = (event) => {
        const dependentValue = event.target.value;
        setDependentOption(dependentValue);
    };

    const dependentOptions = optionsData[selectedOption] || {};
    const pdfUrl = dependentOptions[dependentOption] || '';

    const handleDownloadPDF = () => {
        if (pdfUrl) {
            const a = document.createElement('a');
            a.href = pdfUrl;
            a.download = 'downloaded.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };

    return (
        <div>
            <h2>여러 가지 경우 중 하나 선택</h2>
            <p>옵션을 선택하세요:</p>
            <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">선택하세요</option>
                <option value="option1">기사</option>
                <option value="option2">기능장</option>
            </select>

            <p>선택한 옵션: {selectedOption}</p>

            {selectedOption && (
                <div>
                    <p>다음을 선택하세요:</p>
                    <select value={dependentOption} onChange={handleDependentOptionChange}>
                        <option value="">선택하세요</option>
                        {Object.keys(dependentOptions).map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {pdfUrl && (
                <div>
                    <button onClick={handleDownloadPDF}>PDF 다운로드</button>
                </div>
            )}
        </div>
    );
}

export default SelectOption;
