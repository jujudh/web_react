import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/DownloadButton.css'

const DownloadButton = ({ examType, year, examRound, answerType, sortOption }) => {
  const examArray = examType.split(', ');
  const yearArray = year.split(', ');
  const roundArray = examRound.split(', ');
  const answerTypeArray = answerType.split(', ');

  // buttons를 배열로 수정
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    // 초기 렌더링 시와 sortOption이 변경될 때마다 버튼을 생성하도록 함
    const newButtons = [];

    examArray.forEach((exam) => {
      yearArray.forEach((yr) => {
        roundArray.forEach((round) => {
          answerTypeArray.forEach((answerType) => {
            const buttonName = `${exam} ${yr} ${round} (${answerType})`;
            const buttonValue = `${exam}${yr}${round}(${answerType}).pdf`;
            // 버튼을 생성하고 배열에 추가
            newButtons.push({
              name: buttonName,
              value: buttonValue,
            });
          });
        });
      });
    });

    // sortOption에 따라 정렬
    newButtons.sort((a, b) => {
      if (sortOption === 'latest') {
        return new Date(b.value.split('(')[0].split(' ')[1]) - new Date(a.value.split('(')[0].split(' ')[1]);
      } else {
        return new Date(a.value.split('(')[0].split(' ')[1]) - new Date(b.value.split('(')[0].split(' ')[1]);
      }
    });

    setButtons(newButtons);
  }, [sortOption, examArray, yearArray, roundArray, answerTypeArray]); // sortOption 및 의존성 배열을 전달하여 업데이트 조건 설정

  const handleDownload = async (value) => {
    const sanitizedValue = encodeURIComponent(value);
    console.log(decodeURIComponent(sanitizedValue));
    try {
      const response = await axios.get(`http://localhost:4000/download/${sanitizedValue}`, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = decodeURIComponent(sanitizedValue);
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error during download:', error);
    }
  };

  return (
      <div className='DownloadButton'>
        {buttons.map(({ name, value }, index) => (
            <button key={index} value={value} onClick={() => handleDownload(value)}>
              {name}
            </button>
        ))}
      </div>
  );
};

export default DownloadButton;
