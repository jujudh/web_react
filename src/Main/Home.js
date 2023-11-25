import { useState, useEffect, useRef } from "react";
import '../css/Home.css';
import {useHistory,Link} from 'react-router-dom';
import Mypage from "../components/Mypage";
import Dots from "../Dots";

const DIVIDER_HEIGHT = 5;

const Home = (props) => {
    const history = useHistory();
    const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);
    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

            if (deltaY > 0) {
                // 스크롤 내릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(1);
                } else {
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(2);
                }
            } else {
                // 스크롤 올릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(0);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(1);
                }
            }
        };
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", wheelHandler);
        return () => {
            outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
        };
    }, []);
    return (
        <>
            <div ref={outerDivRef} className="outer">
                <Dots scrollIndex={scrollIndex} />
                <div className="inner mainPage">
                    <div className="homeFont">
                        DO CBT
                    </div>

                    <div className="subFont">
                        Test your skills on this site!
                    </div>
                    <div className="scrollM"></div>

                </div>
                <a href="#"><span></span><span></span><span></span></a>
                <div className="divider">
                    <Mypage/>
                </div>
            </div>
        </>

    );
};

export default Home;