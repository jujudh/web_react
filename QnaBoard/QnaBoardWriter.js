import React, { useState, useEffect }from 'react'
import { useHistory } from 'react-router-dom'; // useHistory 추가
import './QnaBoard.css';
import { testDataList, createPost } from '../Data';

const QnaBoardWriter = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // 새로운 게시글 객체 생성
        const newPost = {
          no: testDataList.length + 1, // 현재 글 개수 + 1
          title: title,
          content: content,
          createDate: new Date().toISOString(),
          readCount: 0,
        };

        //배열에 추가
        createPost(newPost);
    
        // 폼 초기화
        setTitle('');
        setContent('');

        history.goBack();
      };
    

    return (
        <>
        <h2 align="center">게시글 상세정보</h2>

        <div className="qnaboard-detail-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="qnaboard-detail-row">
                    <label>제목</label>
                    <label><input type="text" name="title" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/></label>
                </div>
                <div className="qnaboard-detail-row">
                    <label>내용</label>
                    <div><textarea name="body" placeholder="body" value={content} onChange={(e) => setContent(e.target.value)}></textarea></div>
                </div>
            <input type="submit" value="작성"/>
            </form>
            <button className="post-view-go-list-btn" onClick={() => history.goBack()}>
            목록으로 돌아가기
            </button>
        </div>
        </>
    );
};

export default QnaBoardWriter;