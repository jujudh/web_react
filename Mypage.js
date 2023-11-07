import React from "react";
import { useHistory } from "react-router-dom";
import Contact from "./Contact";
import SelectOption from "./SelectOption";

const Mypage = (props) => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <h1>My Page</h1>
            <br />
            <button onClick={goBack}>시작하기</button>

            <SelectOption /> {/* SelectOption 컴포넌트를 렌더링 */}
        </>
    );
};
export default Mypage;
