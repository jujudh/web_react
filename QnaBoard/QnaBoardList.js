import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../componentT/CommonTable';
import CommonTableColumn from '../componentT/CommonTableColumn';
import CommonTableRow from '../componentT/CommonTableRow';

const QnaBoardLists = ({dataList}) => {
    
    return (
        <>
          <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
            {dataList ?  (
              dataList.map((item, index) => (
                <CommonTableRow key={index}>
                    <CommonTableColumn>{ item.no }</CommonTableColumn>
                    <CommonTableColumn>
                      <Link to={`/QnaBoardDetail/${item.no}`}>{ item.title }</Link>
                    </CommonTableColumn>
                    <CommonTableColumn>{ item.createDate }</CommonTableColumn>
                    <CommonTableColumn>{ item.readCount }</CommonTableColumn>
                  </CommonTableRow>
                ))
              ) : (
                ''
            )}
          </CommonTable>
        </>
      );
    };
    
export default QnaBoardLists;