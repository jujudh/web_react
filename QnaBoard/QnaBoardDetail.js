import React, { useEffect, useState } from 'react';
import { getPostByNo, deletPostByNo } from '../Data';
import { useParams, useHistory } from 'react-router-dom'; // useHistory 추가
import './QnaBoard.css';

const QnaBoardDetail = () => {
  const [data, setData] = useState({});
  const { no } = useParams();
  const history = useHistory();

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
    deletPostByNo(no);
  }

  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

      <div className="qnaboard-detail-wrapper">
        {data != null ? (
          <>
            <div className="qnaboard-detail-row">
              <label>게시글 번호</label>
              <label>{data.no}</label>
            </div>
            <div className="qnaboard-detail-row">
              <label>제목</label>
              <label>{data.title}</label>
            </div>
            <div className="qnaboard-detail-row">
              <label>작성일</label>
              <label>{data.createDate}</label>
            </div>
            <div className="qnaboard-detail-row">
              <label>조회수</label>
              <label>{data.readCount}</label>
            </div>
            <div className="qnaboard-detail-row">
              <label>내용</label>
              <div>{data.content}</div>
            </div>
          </>
        ) : (
          '해당 게시글을 찾을 수 없습니다.'
        )}
        <button className="post-view-go-list-btn" onClick={() => history.goBack()}>
          목록으로 돌아가기
        </button>
        <button className="post-view-go-list-btn" onClick={() => {
          deleteHandler(no);
          history.goBack();
        }}>
          삭제
        </button>
      </div>
    </>
  );
};

export default QnaBoardDetail;






