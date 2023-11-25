import React, { useState, useEffect } from 'react';
import '../css/StopQuiz.css';
import leftImage from '../image/banner3.png'; // 맞은 문제 이미지
import rightImage from '../image/banner.png'; // 틀린 문제 이미지

const StopQuiz = (props) => {
    const { correctAnswers, selectedAnswers } = props.location.state;
    const [displayedQuestions, setDisplayedQuestions] = useState([]);

    useEffect(() => {
        fetch('/quiz1.json')
            .then((res) => res.json())
            .then((data) => {
                const displayed = data.map((question, index) => {
                    const correctAnswer = question.infoAnswer;
                    const userAnswer = selectedAnswers.find(answer => answer.questionNumber === index)?.answer;

                    const isCorrect = userAnswer === correctAnswer;

                    return {
                        ...question,
                        isCorrect: isCorrect
                    };
                });

                setDisplayedQuestions(displayed);
            })
            .catch((error) => console.error('Error fetching quiz data:', error));
    }, [correctAnswers, selectedAnswers]);

    const correctQuestions = displayedQuestions.filter(question => question.isCorrect);
    const incorrectQuestions = displayedQuestions.filter(question => !question.isCorrect);

    return (

        <div className="container">
            <div className="leftbanner" />
            <div className="quiz-container">
                <div className="correct-questions">
                    <h2>맞은 문제</h2>
                    {correctQuestions.map((question, index) => (
                        <div key={index} className="allquestion">
                            <em></em> -
                            <span>{question.infoQuestion}</span>
                            <span>{question.selectedAnswers}</span>
                        </div>
                    ))}
                </div>
                <div className="incorrect-questions">
                    <h2>틀린 문제</h2>
                    {incorrectQuestions.map((question, index) => (
                        <div key={index} className="allquestion">
                            <em></em> -
                            <span>{question.infoQuestion}</span>
                            <span></span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="rightbanner"/>
        </div>

    );
};

export default StopQuiz;