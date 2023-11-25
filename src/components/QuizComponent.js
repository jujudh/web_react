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
    const [isChecked, setIsChecked] = useState(0);


    useEffect(() => {
        fetch('/quiz1.json')
            .then((res) => res.json())
            .then((data) => setQuizData(data))
            .catch((error) => console.error('Error fetching quiz data:', error));
    }, []);

    const handleChoiceSelected = (idx, index) => {
        if (!showAnswer) {
            const currentQuiz = quizData[quizCount];
            const selectedAnswer = currentQuiz.infoChoice[idx];
            const correctAnswer = currentQuiz.infoAnswer;

            setQuizScore((prevScore) => {
                // 이전 상태를 기반으로 업데이트
                if ((selectedAnswer === correctAnswer) && (isChecked === index)) {
                    setIsChecked((prevChecked) => prevChecked + 1);
                    // 정답일 경우 점수 증가
                    return prevScore + 1;
                }
                return prevScore; // 정답이 아닐 경우 점수 그대로 유지
            });

            setUnansweredQuestions((prevQuestions) =>
                prevQuestions.filter((questionIdx) => questionIdx !== idx)
            );

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
                    <span className="infoType">{currentQuiz.infoType}</span> <br/>
                    <span className="infoTime">{currentQuiz.infoTime}</span>
                    <div style={{textAlign: "right"}}>남은문제 : {5 + (-quizCount)}</div> <br />
                </div>
                <div style={{ display: 'inline-block', width: "800px", height: "fit-content",
                    backgroundColor: '#d5d5d5', padding: "20px", borderRadius: "8px", lineHeight: "1.5" }}>
                    <span  className="num">{index + 1 + '번.'}</span >
                    <span className="question">{currentQuiz.infoQuestion}</span>
                </div>
                <br />
                <br />
                {!showAnswer && (
                    <div>
                        {currentQuiz.infoChoice.map((choice, idx) => (
                            <label key={idx} htmlFor={`choice${idx + 1}`}>
                                <input className="check"
                                       type="radio"
                                       id={`choice${idx + 1}`}
                                       name="choice"
                                       value={idx + 1}
                                       onClick={() => handleChoiceSelected(idx, index)}
                                />
                                <span className="choice">{choice}</span>
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

                <div>
                    <br/>
                    점수!<br />
                    6문제중 {quizScore}문제를 맞추었습니다.<br />
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
        <div className="QuizComponentContainer"> <div className="quiz-container4">
            {updateQuiz(quizCount)}
            <div className="find-btn">

                {quizCount !== 0 && (
                    <IconButton
                        className="lastButton"
                        onClick={handleLastQuiz}
                        style={{ color: 'gray' }}
                    >
                        <AiFillCaretLeft />
                    </IconButton>
                )}
                <button className="showButton" onClick={handleShowAnswer}>
                    정답확인
                </button>
                <button className="stopButton" onClick={handleStopQuiz}>
                    그만 풀기
                </button>
                {quizCount !== 5 && (
                    <IconButton
                        className="nextButton"
                        onClick={handleNextQuiz}
                        style={{ color: 'gray' }}
                    >
                        <AiFillCaretRight />
                    </IconButton>
                )}
            </div>

        </div></div>

    );
};

export default QuizComponent;