const testDataList = [
    {
        "no": 1,
        "title": "정보처리기사 질문하고 싶어요",
        "content": "데이터베이스 문제가 너무 헷갈립니다ㅠㅠ",
        "createDate": "2020-11-22",
        "readCount": 6,
    },
    {
        "no": 2,
        "title": "시험 관련 질문있어요.",
        "content": "계속 같은 문제를 틀리는데 어떨게 해야할까요?",
        "createDate": "2020-11-20",
        "readCount": 0,
    },
    {
        "no": 3,
        "title": "시험 날짜...",
        "content": "시험 날짜가 6월 13일이 맞나요?",
        "createDate": "2020-11-19",
        "readCount": 1,
    },
    {
        "no": 4,
        "title": "시험 시감",
        "content": "시험 시간을 점점 줄이고 싶은데 어떻게 해야 하나요?",
        "createDate": "2020-11-18",
        "readCount": 2,
    },
    {
        "no": 5,
        "title": "DDL 문제",
        "content": "약자 뜻도 다 알아야 하나요?",
        "createDate": "2020-11-16",
        "readCount": 4,
    },
    {
        "no": 6,
        "title": "모의고사 질문...",
        "content": "어떤 식으로 모의고사를 풀어야할지 모르겠어요ㅠㅠ",
        "createDate": "2020-11-13",
        "readCount": 8,
    },
    {
        "no": 7,
        "title": "기능장 시험 질문있어요",
        "content": "그냥 계속 풀어보는 게 좋을까요?",
        "createDate": "2020-11-11",
        "readCount": 11,
    },
    {
        "no": 8,
        "title": "기출문제 책 추천,,,",
        "content": "기출문제도 풀어보고 싶은데 추천해주세요",
        "createDate": "2020-11-9",
        "readCount": 5,
    },
    {
        "no": 9,
        "title": "벌써 3번째 시험,,,",
        "content": "마지막 시험이 되고 싶은데 조언이 있으면 알려주세요..!!온라인 강의는 어떤 걸 들으면 좋을지 알려주시면 감사하겠습니다!",
        "createDate": "2020-11-7",
        "readCount": 5,
    },


];


const increaseReadCountByNo = pno => {
    const post = testDataList.find(x => x.no === parseInt(pno));
    if (post) {
        post.readCount += 1;
    }
};

const getPostByNo = pno => {
    const post = testDataList.find(x => x.no === parseInt(pno));
    if (post) {
        increaseReadCountByNo(pno);
        return {
            ...post,
            // createData를 변경된 형식으로 반환
            createDate: new Date(post.createDate).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            }),
        };
    }
    return null;
};

const createPost = data => {
    // 새로운 게시글을 추가할 때 createDate를 현재 날짜로 설정
    testDataList.push({
        ...data,
        createDate: new Date().toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),
    });
};

const deletePostByNo = pno => {
    const arrayIndex = testDataList.findIndex(x => x.no === parseInt(pno));
    if (arrayIndex !== -1) {
        testDataList.splice(arrayIndex, 1);
    }
    return null;
};

export {
    testDataList,
    getPostByNo,
    createPost,
    deletePostByNo,
};