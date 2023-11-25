import React, { useState, useEffect }from 'react'
import {Link, useHistory} from 'react-router-dom'; // useHistory 추가
import './PostWriter.css';
import { testDataList, createPost, deletePostByNo } from '../Data';

const PostWriter = () => {
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
            <div className="parent">
                <div align="left" className="bannerbb"></div>
                <div className="qnaboard-detail-wrapper1">
                    <h2 className="h21">게시글 작성하기</h2>
                    <form className="fromw" onSubmit={handleSubmit}>
                        <div className="qnaboard-detail-row1">
                            <span className="nname">제목:</span>
                            <label><input className="titleinput" type="text" name="title" placeholder="제목을 입력하세요." value={title} onChange={(e) => setTitle(e.target.value)}/></label>
                        </div>
                        <div className="qnaboard-detail-row1">
                            <span className="nname">내용:</span>
                            <div><textarea className="titletextarea" name="body" placeholder="내용을 작성해주세요." rows={10} value={content} onChange={(e) => setContent(e.target.value)}></textarea></div>
                        </div>
                        <input type="submit" className = "writepost" value="작성"/>
                    </form>
                    <button className="post-view-go-list-btn1" onClick={() => history.goBack()}>
                        목록으로 돌아가기
                    </button>
                </div>
                <div align="left" className="bannerb"></div>
            </div>

        </>
    );
};

export default PostWriter;