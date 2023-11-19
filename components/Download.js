import React, { useState } from 'react';
import DownloadButton from "./DownloadButton";
import '../css/Download.css';

const Download = (props) => {
    const { examType, options } = props.location.state;
    const [sortOption, setSortOption] = useState('latest'); // 정렬 옵션을 나타내는 상태

    if (!options) {
        // options가 없는 경우에 대한 처리
        return (
            <div>
                <h2>No options selected</h2>
            </div>
        );
    }

    // 선택된 항목을 객체로 저장
    const selectedItems = {
        examType: examType.examType,
        year: '',
        examRound: '',
        answerType: '',
    };


    // options.selectedItems 배열 순회
    options.selectedItems.forEach((item) => {
        // item의 길이에 따라 분기 처리
        if (item.length === 1) {
            // 길이가 1이면 examRound에 추가
            selectedItems.examRound += item + '회차, ';
        } else if (item.length === 3) {
            // 길이가 3이면 answerType에 추가
            selectedItems.answerType += item + ', ';
        } else if (item.length === 4) {
            // 길이가 4이면 year에 추가
            selectedItems.year += item + ', ';
        }
    });

    // 정렬 및 마지막에 추가된 콤마 제거
    selectedItems.examRound = selectedItems.examRound.slice(0, -2);
    selectedItems.answerType = selectedItems.answerType.slice(0, -2);
    selectedItems.year = selectedItems.year.slice(0, -2);

    const handleSortOption = (e) => {
        setSortOption(e.target.value);
    }
    // 선택된 정렬 옵션에 따라 년도를 동적으로 정렬하는 함수
    const sortYears = (years, option) => {
        const sortedYears = years.split(', ')
            .sort((a, b) => {
                if (option === 'latest') {
                    return b - a; // 'latest'인 경우 내림차순 정렬
                } else {
                    return a - b; // 'oldest'인 경우 오름차순 정렬
                }
            })
            .join(', ');

        return sortedYears;
    }

    // answerType을 사전순으로 정렬
    selectedItems.answerType = selectedItems.answerType.split(', ').sort().join(', ');


    return (
        <div className='DownloadContainer'>
            <br />
            <div>
                <p>선택한 옵션</p>
                <p>자격증 시험 종류 : {examType.examType}</p>
                <p>시험년도 : {selectedItems.year}</p>
                <p>시험회차: {selectedItems.examRound}</p>
                <p>답안지 종류: {selectedItems.answerType}</p>
                <select value={sortOption} onChange={handleSortOption}>
                    <option value="latest">최신순</option>
                    <option value="oldest">오래된순</option>
                </select>
            </div>
            <br />
            <DownloadButton examType={examType.examType} year={sortYears(selectedItems.year, sortOption)}
                            examRound={selectedItems.examRound} answerType={selectedItems.answerType} />
        </div>
    );
};

export default Download;
