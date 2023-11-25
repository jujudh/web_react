import PostList from './PostList';
import React, { useState, useEffect }from 'react'
import { testDataList } from '../Data';
import { Link } from 'react-router-dom';
import './PostMain.css';

const PostMain = () => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        setDataList(testDataList);
    }, [])

    return (
        <>
            <div className = "qna-board-container1">
                <h2 align="center" className = "mainText1">Q&A 게시판</h2>
                <PostList dataList={dataList}/>
                <div  className="mainbutton">
                    <button color="white" className="linkbutton1" type='button'>
                    <Link to='/PostWriter' className ="linka1">Write</Link>
                    </button>
                </div>
            </div>


        </>
    )
}
export default PostMain;