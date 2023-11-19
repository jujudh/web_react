const testDataList = [
    {
      "no": 1,
      "title": "첫번째 게시글입니다.",
      "content": "첫번째 게시글 내용입니다.",
      "createDate": "2020-10-25",
      "readCount": 6
    },
    {
      "no": 2,
      "title": "두번째 게시글입니다.",
      "content": "두번째 게시글 내용입니다.",
      "createDate": "2020-10-25",
      "readCount": 5
    },
    {
      "no": 3,
      "title": "세번째 게시글입니다.",
      "content": "세번째 게시글 내용입니다.",
      "createDate": "2020-10-25",
      "readCount": 1
    },
    {
      "no": 4,
      "title": "네번째 게시글입니다.",
      "content": "네번째 게시글 내용입니다.",
      "createDate": "2020-10-25",
      "readCount": 2
    },
    {
      "no": 5,
      "title": "다섯번째 게시글입니다.",
      "content": "다섯번째 게시글 내용입니다.",
      "createDate": "2020-10-25",
      "readCount": 4
    },
  ];
  
  /*간단하게 게시글 리스트를 갖고 있는 변수를 만들어주고 
  특정 게시글 번호를 통해 게시글 객체를 가져올 수 있는 함수 getPostByNo*/

  const getPostByNo = pno => { 
    //23-11-18 pno가 문자고 데이터 no는 숫자라 parseInt처리
    const array = testDataList.filter(x => x.no === parseInt(pno));
    if (array.length === 1) {
      return array[0];
    }
    return null;
  }

  /* 게시글 생성 */
  const createPost = data => { 
    testDataList.push(data);
  }
  
  /*
    게시글 삭제
  */
  const deletPostByNo = pno => { 
    //23-11-18 pno가 문자고 데이터 no는 숫자라 parseInt처리
    const arrayIndex = testDataList.findIndex(x => x.no === parseInt(pno));
    if (arrayIndex !== -1) {
      testDataList.splice(arrayIndex, 1);
    }
    return null;
  }
  
  export {
    testDataList,
    getPostByNo,
    createPost,
    deletPostByNo
  };