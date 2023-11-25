import React, { useEffect, useState } from 'react';

import {getPostByNo, deletePostByNo} from '../Data';
import {useParams, useHistory, Link} from 'react-router-dom'; // useHistory 추가
import './PostView.css';
import Commentlist from "../Main/Commentlist";
//detail
const PostView = () => {
    const [data, setData] = useState({});
    const { no } = useParams();
    const history = useHistory();
    const [replyLikes, setReplyLikes] = useState({});

    useEffect(() => {
        console.log(no);
        const fetchData = async () => {
            try {
                const postData = await getPostByNo(no);
                setData(postData);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchData();
    }, [no]);

    const deleteHandler = (no) => {
        deletePostByNo(no);
    }


    return (
        <>
            <div className="parent0">

                <div className="postcontainer0">


                    <h2 className="titi">게시물 상세보기</h2>

                    <div className="qnaboard-detail-wrapper0">

                        {data != null ? (
                            <>
                                <div className="qnaboard-detail-row0">
                                    <label className="r1">게시글 번호</label>
                                    <label className="nummmm">{data.no}</label>
                                </div>
                                <div className="qnaboard-detail-row0">
                                    <label className="r1">제목</label>
                                    <label className="nummmm">{data.title}</label>
                                </div>
                                <div className="qnaboard-detail-row0">
                                    <label className="r1">작성일</label>
                                    <label className="nummmm">{data.createDate}</label>
                                </div>
                                <div className="qnaboard-detail-row0">
                                    <label className="r1">조회수</label>
                                    <label className="nummmm">{data.readCount}</label>
                                </div>
                                <div className="qnaboard-detail-row0">
                                    <label className="r1">내용</label>
                                    <div className="nummmm">{data.content}</div>
                                </div>
                                <h2 className="mycommnent">답글목록</h2>

                            </>
                        ) : (
                            '해당 게시글을 찾을 수 없습니다.'
                        )}
                        <Commentlist />
                        <button className="post-view-go-list-btn0" onClick={() => history.goBack()}>목록으로 돌아가기
                        </button>
                        <button className="post-view-go-list-btn0" onClick={() => {
                            deleteHandler(no);
                            history.goBack();
                        }}>
                            삭제
                        </button>
                    </div>
                </div>
                <div align="left" className="banner"></div>
            </div>



        </>
    );
}

export default PostView;





