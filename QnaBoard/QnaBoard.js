import React, { useState, useEffect }from 'react'
import QnaBoardList from './QnaBoardList';
import { testDataList } from '../Data';
import { Link } from 'react-router-dom';
import './QnaBoard.css';

const QnaBoard = () => {  
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(testDataList);
  }, [])

  return (
    <>
      <h2 align="center">Q&A 게시판</h2>
      <button type='button'>
        <Link to='/QnaBoardWriter'>글쓰기</Link>
      </button>
      <QnaBoardList dataList={dataList}/>
    </>
  )
}

export default QnaBoard;