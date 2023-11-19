import React, { useState, useEffect } from 'react';
import '../css/QuizComponent.css';
import { useHistory } from 'react-router-dom';
import {AiFillCaretLeft,AiFillCaretRight} from "react-icons/ai";
import {IconButton} from "@material-ui/core";

const QuizComponent = () => {

    const history = useHistory();
    const [quizData, setQuizData] = useState([]);
    const [quizCount, setQuizCount] = useState(0);
    const [quizScore, setQuizScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [unansweredQuestions, setUnansweredQuestions] = useState([]);
    const [showUnanswered, setShowUnanswered] = useState(false);

    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]);



    useEffect(() => {
        fetch('/quiz1.json')
            .then((res) => res.json())
            .then((data) => setQuizData(data))
            .catch((error) => console.error('Error fetching quiz data:', error));
    }, []);

    const handleChoiceSelected = (idx) => {
        if (!showAnswer) {
            const currentQuiz = quizData[quizCount];
            const selectedAnswer = currentQuiz.infoChoice[idx];
            const correctAnswer = currentQuiz.infoAnswer;

            if (selectedAnswer === correctAnswer) {
                setQuizScore((prevScore) => prevScore + 1);
                setCorrectAnswers((prevAnswers) => [
                    ...prevAnswers,
                    { ...currentQuiz, questionNumber: quizCount } // 문제 번호를 추가하여 저장
                ]);
                setSelectedAnswers((prevSelected) => [
                    ...prevSelected,
                    { answer: selectedAnswer, questionNumber: quizCount } // 문제 번호를 추가하여 저장
                ]);
            }

            setUnansweredQuestions((prevQuestions) =>
                prevQuestions.filter((questionIdx) => questionIdx !== idx)
            );


            //setShowAnswer(true);
        }
    };
    const updateQuiz = (index) => {
        if (quizData.length === 0) {
            return <div>Loading...</div>; // 데이터를 기다리는 동안 로딩 화면 출력
        }


        const currentQuiz = quizData[index];

        return (
            <>
                <div>
                    <span>{currentQuiz.infoType}</span>
                    <em>{currentQuiz.infoTime}</em>
                </div>
                <div>
                    <em>{index + 1}</em>.
                    <span>{currentQuiz.infoQuestion}</span>
                </div>
                {!showAnswer && (
                    <div>
                        {currentQuiz.infoChoice.map((choice, idx) => (
                            <label key={idx} htmlFor={`choice${idx + 1}`}>
                                <input
                                    type="radio"
                                    id={`choice${idx + 1}`}
                                    name="choice"
                                    value={idx + 1}
                                    onClick={() => handleChoiceSelected(idx)}
                                />
                                <span>{choice}</span>
                            </label>
                        ))}
                    </div>
                )}
                {showAnswer && ( // 정답 확인 버튼을 눌렀을 때만 아래 내용 렌더링
                    <div>
                        <div>
                            정답은 {currentQuiz.infoAnswer}입니다!
                            {currentQuiz.infoDesc}
                        </div>
                    </div>
                )}
                <div>남은문제 : {5 + (-quizCount)}</div>
                <div>
                    점수!<br />
                    6문제중
                    <div>{quizScore}문제를 맞추었습니다.<br /></div>
                    {Math.ceil((quizScore / quizData.length) * 100)} 점!!
                </div>
            </>
        );
    };

    const handleNextQuiz = () => {
        setQuizCount((prevCount) => prevCount + 1);
        setShowAnswer(false);
        if (quizCount === 5) {
            // 마지막 문제까지 완료한 경우에 대한 처리
        }
    };

    const handleLastQuiz = () => {
        setQuizCount((prevCount) => prevCount - 1);
        setShowAnswer(false);

    };

    const handleDontAnswer = () => {
        setShowAnswer(false);

        // 선택되지 않은 문제의 index를 unansweredQuestions 배열에 추가
        if (!showAnswer) {
            setUnansweredQuestions((prevQuestions) => [...prevQuestions, quizCount]);
        }

        // 모르겠어요 버튼을 누르면 alert 창이 뜨도록 함
        alert('답변을 선택해주세요! 아니면 다음 문제로 넘어가세요!');
    };

    const handleShowAnswer = () => {
        setShowAnswer(true);



    };

    const handleStopQuiz = () => {
        setShowUnanswered(true);

        const confirmStop = window.confirm('그만 푸시겠습니까?');
        const correctAnswers = []; // 여기에 정답 배열을 설정해야 함
        if (confirmStop) {
            // 확인을 눌렀을 때의 처리
            // 예를 들어, StopQuiz 페이지로 이동하는 코드
            history.push({
                pathname: '/stop',
                state: {
                    correctAnswers,
                    selectedAnswers,
                }

            });
        }
    };
    return (
        <div className="quiz-container">
            {updateQuiz(quizCount)}



            <button className="stopButton" onClick={handleStopQuiz}>그만 풀기</button>

            {!showAnswer && (
                <button onClick={handleDontAnswer}>모르겠어요</button>
            )}
            <button onClick={handleShowAnswer}>정답확인</button>
            <div className="find-btn">{quizCount !== 0 && (
                <IconButton className="lastButton" onClick={handleLastQuiz} style={{ color: 'gray'}}><AiFillCaretLeft /></IconButton>
            )}
                {quizCount!==5 && (
                    <IconButton className="nextButton" onClick={handleNextQuiz} style={{ color: 'gray'}}>
                        <AiFillCaretRight /></IconButton>
                )}
        </div>


        </div>
    );
};

export default QuizComponent;