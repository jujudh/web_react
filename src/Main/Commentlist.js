import React, { useState } from 'react';
import '../post/Commentlist.css';

const Commentlist = () => {
    const [value, setValue] = useState('');
    const [commentList, setCommentList] = useState([]);

    // 사용자로부터 받아오는 값을 value에 업데이트
    const getValue = (e) => {
        setValue(e.target.value);
    };

    // 사용자로부터 받아오는 값을 commentList에 배열 데이터 추가 & 댓글 초기화
    const addComment = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
        setCommentList(prevCommentList => [...prevCommentList, value]);
        setValue('');
    };

    return (
        <div className="commentContainer">

            {/* 댓글 입력 공간 */}

                {commentList.map((comment, index) => (
                    <div className="ctype">
                        <li className="litype" key={index}>{comment}</li></div>
                ))}

            <form className="formm" onSubmit={addComment}>
                <input className="textcomment" onChange={getValue} type="text" value={value} />
                <button className="subButton" type="submit">go</button>
            </form>
        </div>
    );
};

export default Commentlist;
