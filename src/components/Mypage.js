import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import ExamOptionList from "./ExamOptionList";
import CheckboxGroup from "./CheckboxGroup";
import '../css/Mypage.css';

const Mypage = () => {

    const [examName, setExamType] = useState({
        dropdown1:'국가기술자격시험',
        dropdown2:'기능장',
        examType: '가스기능장',
        // 다른 초기값들도 필요에 따라 설정
    });

    const [examOptions, setExamOptions] = useState({
        year: 2022,
        version: 1,
        answerType: '교사용'
        // 다른 초기값들도 필요에 따라 설정
    });

    return (
        <div className='Mypage'>
            <p>
            </p>
            <br />
            <br />
            <ExamOptionList onChange={(newOptions) => setExamType(newOptions)} />
            <br />
            <CheckboxGroup onChange={(newOptions) => setExamOptions(newOptions)} />
            {/* setExamType로 수정 */}

            <div className="towbutton">
                <Link
                    to={{
                        pathname: '/download',
                        state: {
                            examType: { ...examName }, // examType을 전달
                            options: { ...examOptions }
                        },
                    }}
                >
                    <button className="dddd">다운받기</button>
                </Link>

                <Link
                    to={{
                        pathname: '/quiz',
                        state: {
                            examType: { ...examName },
                            options: { ...examOptions }
                        },
                    }}
                >
                    <button className="qqqq">문제 풀기</button>
                </Link>
            </div>
        </div>
    );
};
export default Mypage;
