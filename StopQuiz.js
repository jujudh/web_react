import React, { useState, useEffect } from 'react';

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

    return (
        <div>
            {displayedQuestions.map((question, index) => (
                <div key={index}>
                    <div>
                        {question.isCorrect && '맞은 문제'}
                        {!question.isCorrect && '틀린 문제'}
                    </div>
                    <div>
                        <em>{index + 1}</em>.
                        <span>{question.infoQuestion}</span>
                    </div>
                    {/* 이하 추가적으로 원하는 정보를 표시할 수 있도록 UI를 구성하세요 */}
                </div>
            ))}
        </div>
    );
};

export default StopQuiz;
