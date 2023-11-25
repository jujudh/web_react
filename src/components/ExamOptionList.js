import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/ExamOptionList.css';

const ExamOptionList = ({ onChange }) => {
    const [dropdown1, setDropdownOption1] = useState('국가기술자격시험');
    const [dropdown2, setDropdownOption2] = useState('기능장');
    const [examType, setExamType] = useState('가스기능장');

    const history = useHistory();

    const handleDropdownOption1 = (e) => {
        const selectedValue = e.target.value;
        setDropdownOption1(selectedValue);

        let updatedDropdown2 = dropdown2;
        let updatedExamType = examType;

        if (selectedValue === '국가기술자격시험') {
            updatedDropdown2 = '기능장';
            updatedExamType = '가스기능장';
        } else if (selectedValue === '공무원전산직') {
            updatedDropdown2 = '국가공무원 7급';
            updatedExamType = '소프트웨어공학';
        } else if (selectedValue === '기타 IT시험') {
            updatedDropdown2 = '리눅스마스터';
            updatedExamType = '1급';
        }

        setDropdownOption2(updatedDropdown2)
        setExamType(updatedExamType);

        onChange({
            dropdown1: selectedValue,
            dropdown2: updatedDropdown2,
            examType: updatedExamType,
        });
    };

    const handleDropdownOption2 = (e) => {
        const selectedValue = e.target.value;
        setDropdownOption2(selectedValue);

        if (selectedValue === '기능장') {
            setExamType('가스기능장');
        } else if (selectedValue === '기능사') {
            setExamType('가구제작기능사');
        } else if (selectedValue === '기사') {
            setExamType('가스기사');
        } else if (selectedValue === '국가공무원 7급') {
            setExamType('소프트웨어공학');
        } else if (selectedValue === '국가공무원 9급') {
            setExamType('네트워크보안');
        } else if (selectedValue === '리눅스마스터') {
            setExamType('1급');
        } else if (selectedValue === '컴퓨터활용능력') {
            setExamType('1급');
        }

        onChange({
            dropdown1,
            dropdown2: selectedValue,
            examType, // Use examType here, not updatedExamType
        });
    };

    const handleDropdownOption3 = (e) => {
        const selectedValue = e.target.value;
        setExamType(selectedValue);

        onChange({
            dropdown1,
            dropdown2,
            examType:selectedValue, // Use examType here, not updatedExamType
        });
    };

    useEffect(() => {
        // 값이 변경될 때마다 자동으로 history.push 호출
        history.push({
            state: {
                dropdown1,
                dropdown2,
                examType,
            },
        });
    }, [dropdown1, dropdown2, examType, history]);

    return (
        <div className="ExamOptionListContainer">
            <label>첫번째 옵션 </label>
                <select value={dropdown1} onChange={handleDropdownOption1}>
                    <option value="국가기술자격시험">국가기술자격시험</option>
                    <option value="공무원전산직">공무원전산직</option>
                    <option value="기타 IT시험">기타 IT시험</option>
                </select>
            <label>두번째 옵션 </label>
            <select value={dropdown2} onChange={handleDropdownOption2}>
                {dropdown1 === '국가기술자격시험' && (
                    <>
                        <option value="기능장">기능장</option>
                        <option value="기능사">기능사</option>
                        <option value="기사">기사</option>
                    </>
                )}
                {dropdown1 === '공무원전산직' && (
                    <>
                        <option value="국가공무원 7급">국가공무원 7급</option>
                        <option value="국가공무원 9급">국가공무원 9급</option>
                    </>
                )}
                {dropdown1 === '기타 IT시험' && (
                    <>
                        <option value="리눅스마스터">리눅스마스터</option>
                        <option value="컴퓨터활용능력">컴퓨터활용능력</option>
                    </>
                )}
            </select>
            <label>세번째 옵션 </label>
            <select value={examType} onChange={handleDropdownOption3}>
                {dropdown2 === '기능장' && (
                    <>
                        <option value="가스기능장">가스기능장</option>
                        <option value="건설기계정비기능장">건설기계정비기능장</option>
                        <option value="건축목재시공기능장">건축목재시공기능장</option>
                        <option value="건축일반시공기능장">건축일반시공기능장</option>
                        <option value="귀금속가공기능장">귀금속가공기능장</option>
                        <option value="금속재료기능장">금속재료기능장</option>
                        <option value="금형제작기능장">금형제작기능장</option>
                        <option value="기계가공기능장">기계가공기능장</option>
                        <option value="미용장">미용장</option>
                        <option value="배관기능장">배관기능장</option>
                        <option value="압연기능장">압연기능장</option>
                        <option value="에너지관리기능장">에너지관리기능장</option>
                        <option value="용접기능장">용접기능장</option>
                        <option value="위험물기능장">위험물기능장</option>
                        <option value="이용장">이용장</option>
                        <option value="자동차정비기능장">자동차정비기능장</option>
                        <option value="전기기능장">전기기능장</option>
                        <option value="전자기기기능장">전자기기기능장</option>
                        <option value="제강기능장">제강기능장</option>
                        <option value="제과기능장">제과기능장</option>
                        <option value="제선기능장">제선기능장</option>
                        <option value="조리기능장">조리기능장</option>
                        <option value="주조기능장">주조기능장</option>
                        <option value="철도차량정비기능장">철도차량정비기능장</option>
                        <option value="통신설비기능장">통신설비기능장</option>
                        <option value="판금제관기능장">판금제관기능장</option>
                        <option value="표면처리기능장">표면처리기능장</option>
                    </>
                )}
                {dropdown2 === '기능사' && (
                    <>
                        <option value="가구제작기능사">가구제작기능사</option>
                        <option value="가스기능사">가스기능사</option>
                        <option value="건설기계정비기능사">건설기계정비기능사</option>
                        <option value="건설재료시험기능사">건설재료시험기능사</option>
                        <option value="공유압기능사">공유압기능사</option>
                        <option value="공조냉동기계기능사">공조냉동기계기능사</option>
                        <option value="광고도장기능사">광고도장기능사</option>
                        <option value="광학기능사">광학기능사</option>
                        <option value="굴삭기운전기능사">굴삭기운전기능사</option>
                        <option value="귀금속가공기능사">귀금속가공기능사</option>
                        <option value="금속도장기능사">금속도장기능사</option>
                        <option value="금속재료시험기능사">금속재료시험기능사</option>
                        <option value="금형기능사">금형기능사</option>
                        <option value="기계가공조립기능사">기계가공조립기능사</option>
                        <option value="기계정비기능사">기계정비기능사</option>
                        <option value="농기계운전기능사">농기계운전기능사</option>
                        <option value="농기계정비기능사">농기계정비기능사</option>
                        <option value="도자기공예기능사">도자기공예기능사</option>
                        <option value="동력기계정비기능사">동력기계정비기능사</option>
                        <option value="모터그레이더운전기능사">모터그레이더운전기능사</option>
                        <option value="목공예기능사">목공예기능사</option>
                        <option value="무선설비기능사">무선설비기능사</option>
                        <option value="미용사(네일)">미용사(네일)</option>
                        <option value="미용사(일반)">미용사(일반)</option>
                        <option value="미용사(피부)">미용사(피부)</option>
                        <option value="방사선비파괴검사기능사">방사선비파괴검사기능사</option>
                        <option value="방송통신기능사">방송통신기능사</option>
                        <option value="보석가공기능사">보석가공기능사</option>
                        <option value="보석감정사(기능사)">보석감정사(기능사)</option>
                        <option value="배관기능사">배관기능사</option>
                        <option value="버섯종균기능사">버섯종균기능사</option>
                        <option value="사진기능사">사진기능사</option>
                        <option value="산림기능사">산림기능사</option>
                        <option value="생산자동화기능사">생산자동화기능사</option>
                        <option value="석공예기능사">석공예기능사</option>
                        <option value="선체건조기능사">선체건조기능사</option>
                        <option value="설비보전기능사">설비보전기능사</option>
                        <option value="세탁기능사">세탁기능사</option>
                        <option value="수산양식기능사">수산양식기능사</option>
                        <option value="승강기기능사">승강기기능사</option>
                        <option value="식품가공기능사">식품가공기능사</option>
                        <option value="신발류제조기능사">신발류제조기능사</option>
                        <option value="신재생발전설비기능사">신재생발전설비기능사</option>
                        <option value="실내건축기능사">실내건축기능사</option>
                        <option value="압연기능사">압연기능사</option>
                        <option value="양복기능사">양복기능사</option>
                        <option value="양장기능사">양장기능사</option>
                        <option value="양화장치운전기능사">양화장치운전기능사</option>
                        <option value="에너지관리기능사">에너지관리기능사</option>
                        <option value="연삭기능사">연삭기능사</option>
                        <option value="열처리기능사">열처리기능사</option>
                        <option value="염색기능사">염색기능사</option>
                        <option value="영사기능사">영사기능사</option>
                        <option value="용접기능사">용접기능사</option>
                        <option value="원예기능사">원예기능사</option>
                        <option value="원형기능사">원형기능사</option>
                        <option value="웹디자인기능사">웹디자인기능사</option>
                        <option value="위험물기능사">위험물기능사</option>
                        <option value="유기농업기능사">유기농업기능사</option>
                        <option value="의료전자기능사">의료전자기능사</option>
                        <option value="이용사">이용사</option>
                        <option value="인쇄기능사">인쇄기능사</option>
                        <option value="임산가공기능사">임산가공기능사</option>
                        <option value="임업종묘기능사">임업종묘기능사</option>
                        <option value="자기비파괴검사기능사">자기비파괴검사기능사</option>
                        <option value="자동차보수도장기능사">자동차보수도장기능사</option>
                        <option value="자동차정비기능사">자동차정비기능사</option>
                        <option value="자동차차체수리기능사">자동차차체수리기능사</option>
                        <option value="잠수기능사">잠수기능사</option>
                        <option value="전기기능사">전기기능사</option>
                        <option value="전산응용건축제도기능사">전산응용건축제도기능사</option>
                        <option value="전산응용기계제도기능사">전산응용기계제도기능사</option>
                        <option value="전산응용조선제도기능사">전산응용조선제도기능사</option>
                        <option value="전산응용토목제도기능사">전산응용토목제도기능사</option>
                        <option value="전자계산기기능사">전자계산기기능사</option>
                        <option value="전자기기기능사">전자기기기능사</option>
                        <option value="전자부품장착기능사">전자부품장착기능사</option>
                        <option value="전자출판기능사">전자출판기능사</option>
                        <option value="전자캐드기능사">전자캐드기능사</option>
                        <option value="전파전자기능사(구)">전파전자기능사(구)</option>
                        <option value="전파전자통신기능사">전파전자통신기능사</option>
                        <option value="전파통신기능사(구)">전파통신기능사(구)</option>
                        <option value="정밀측정기능사">정밀측정기능사</option>
                        <option value="정보기기운용기능사">정보기기운용기능사</option>
                        <option value="정보처리기능사">정보처리기능사</option>
                        <option value="정보처리기능사 실기(베타)">정보처리기능사 실기(베타)</option>
                        <option value="제강기능사">제강기능사</option>
                        <option value="제과기능사">제과기능사</option>
                        <option value="제빵기능사">제빵기능사</option>
                        <option value="제선기능사">제선기능사</option>
                        <option value="제품응용모델링기능사">제품응용모델링기능사</option>
                        <option value="조경기능사">조경기능사</option>
                        <option value="조주기능사">조주기능사</option>
                        <option value="종자기능사">종자기능사</option>
                        <option value="주조기능사">주조기능사</option>
                        <option value="지게차운전기능사">지게차운전기능사</option>
                        <option value="지게차유사(롤러,기중기등)">지게차유사(롤러,기중기등)</option>
                        <option value="지적기능사">지적기능사</option>
                        <option value="천장크레인운전기능사">천장크레인운전기능사</option>
                        <option value="철도차량정비기능사">철도차량정비기능사</option>
                        <option value="철도차량정비기능사(구)">철도차량정비기능사(구)</option>
                        <option value="철도토목기능사">철도토목기능사</option>
                        <option value="초음파비파괴검사기능사">초음파비파괴검사기능사</option>
                        <option value="축로기능사">축로기능사</option>
                        <option value="축산기능사">축산기능사</option>
                        <option value="측량기능사">측량기능사</option>
                        <option value="침투비파괴검사기능사">침투비파괴검사기능사</option>
                        <option value="컨테이너크레인운전기능사">컨테이너크레인운전기능사</option>
                        <option value="컴퓨터그래픽스운용기능사">컴퓨터그래픽스운용기능사</option>
                        <option value="컴퓨터응용선반기능사">컴퓨터응용선반기능사</option>
                        <option value="컴퓨터응용밀링기능사">컴퓨터응용밀링기능사</option>
                        <option value="콘크리트기능사">콘크리트기능사</option>
                        <option value="타워크레인운전기능사">타워크레인운전기능사</option>
                        <option value="통신기기기능사">통신기기기능사</option>
                        <option value="통신선로기능사">통신선로기능사</option>
                        <option value="특수용접기능사">특수용접기능사</option>
                        <option value="표면처리기능사">표면처리기능사</option>
                        <option value="플라스틱창호기능사">플라스틱창호기능사</option>
                        <option value="피아노조율기능사">피아노조율기능사</option>
                        <option value="한복기능사">한복기능사</option>
                        <option value="한식조리기능사(공통)">한식조리기능사(공통)</option>
                        <option value="항공기관정비기능사">항공기관정비기능사</option>
                        <option value="항공기체정비기능사">항공기체정비기능사</option>
                        <option value="항공장비정비기능사">항공장비정비기능사</option>
                        <option value="항공전자정비기능사">항공전자정비기능사</option>
                        <option value="항로표지기능사">항로표지기능사</option>
                        <option value="화약취급기능사">화약취급기능사</option>
                        <option value="화학분석기능사">화학분석기능사</option>
                        <option value="화훼장식기능사">화훼장식기능사</option>
                        <option value="환경기능사">환경기능사</option>
                    </>
                )}
                {dropdown2 === '기사' && (
                    <>
                        <option value="가스기사">가스기사</option>
                        <option value="건설기계설비기사">건설기계설비기사</option>
                        <option value="건설안전기사">건설안전기사</option>
                        <option value="건설재료시험기사">건설재료시험기사</option>
                        <option value="건축기사">건축기사</option>
                        <option value="건축설비기사">건축설비기사</option>
                        <option value="공조냉동기계기사">공조냉동기계기사</option>
                        <option value="공조냉동기계기사(구)">공조냉동기계기사(구)</option>
                        <option value="광학기사">광학기사</option>
                        <option value="교통기사">교통기사</option>
                        <option value="금속재료기사">금속재료기사</option>
                        <option value="기계설계기사">기계설계기사</option>
                        <option value="기상기사">기상기사</option>
                        <option value="농업기계기사">농업기계기사</option>
                        <option value="농작업안전보건기사">농작업안전보건기사</option>
                        <option value="누설비파괴검사기사">누설비파괴검사기사</option>
                        <option value="누설비파괴검사기사(구)">누설비파괴검사기사(구)</option>
                        <option value="대기환경기사">대기환경기사</option>
                        <option value="도시계획기사">도시계획기사</option>
                        <option value="무선설비기사">무선설비기사</option>
                        <option value="바이오화학제품제조기사">바이오화학제품제조기사</option>
                        <option value="방사선비파괴검사기사">방사선비파괴검사기사</option>
                        <option value="방사선비파괴검사기사(구)">방사선비파괴검사기사(구)</option>
                        <option value="방송통신기사">방송통신기사</option>
                        <option value="방송통신기사(구)">방송통신기사(구)</option>
                        <option value="방재기사">방재기사</option>
                        <option value="사출(프레스)금형기사">사출(프레스)금형기사</option>
                        <option value="산림기사">산림기사</option>
                        <option value="산업안전기사">산업안전기사</option>
                        <option value="산업위생관리기사">산업위생관리기사</option>
                        <option value="생물분류기사(동물)">생물분류기사(동물)</option>
                        <option value="생물분류기사(식물)">생물분류기사(식물)</option>
                        <option value="설비보전기사">설비보전기사</option>
                        <option value="설비보전기사(구)">설비보전기사(구)</option>
                        <option value="소방설비기사(기계분야)">소방설비기사(기계분야)</option>
                        <option value="소방설비기사(전기분야)">소방설비기사(전기분야)</option>
                        <option value="소음진동기사">소음진동기사</option>
                        <option value="소음진동기사(구)">소음진동기사(구)</option>
                        <option value="수산양식기사">수산양식기사</option>
                        <option value="수산제조기사">수산제조기사</option>
                        <option value="수질환경기사">수질환경기사</option>
                        <option value="승강기기사">승강기기사</option>
                        <option value="시각디자인기사">시각디자인기사</option>
                        <option value="시설원예기사">시설원예기사</option>
                        <option value="식물보호기사">식물보호기사</option>
                        <option value="식육가공기사">식육가공기사</option>
                        <option value="식품기사">식품기사</option>
                        <option value="신재생에너지발전설비기사">신재생에너지발전설비기사</option>
                        <option value="신재생에너지발전설비기사(구)">신재생에너지발전설비기사(구)</option>
                        <option value="실내건축기사">실내건축기사</option>
                        <option value="실내건축기사(구)">실내건축기사(구)</option>
                        <option value="에너지관리기사">에너지관리기사</option>
                        <option value="온실가스관리기사">온실가스관리기사</option>
                        <option value="와전류비파괴검사기사">와전류비파괴검사기사</option>
                        <option value="와전류비파괴검사기사(구)">와전류비파괴검사기사(구)</option>
                        <option value="용접기사">용접기사</option>
                        <option value="원자력기사">원자력기사</option>
                        <option value="유기농업기사">유기농업기사</option>
                        <option value="응용지질기사">응용지질기사</option>
                        <option value="의공기사">의공기사</option>
                        <option value="의류기사">의류기사</option>
                        <option value="인간공학기사">인간공학기사</option>
                        <option value="인쇄기사">인쇄기사</option>
                        <option value="일반기계기사">일반기계기사</option>
                        <option value="임산가공기사">임산가공기사</option>
                        <option value="임업종묘기사">임업종묘기사</option>
                        <option value="자기비파괴검사기사">자기비파괴검사기사</option>
                        <option value="자기비파괴검사기사(구)">자기비파괴검사기사(구)</option>
                        <option value="자동차정비기사">자동차정비기사</option>
                        <option value="자연생태복원기사">자연생태복원기사</option>
                        <option value="자연생태복원기사(구)">자연생태복원기사(구)</option>
                        <option value="전기공사기사">전기공사기사</option>
                        <option value="전기기사">전기기사</option>
                        <option value="전기철도기사">전기철도기사</option>
                        <option value="전자계산기기사">전자계산기기사</option>
                        <option value="전자계산기조직응용기사">전자계산기조직응용기사</option>
                        <option value="전자기사">전자기사</option>
                        <option value="전파전자통신기사">전파전자통신기사</option>
                        <option value="정보보안기사">정보보안기사</option>
                        <option value="정보처리기사">정보처리기사</option>
                        <option value="정보처리기사(구)">정보처리기사(구)</option>
                        <option value="정보통신기사">정보통신기사</option>
                        <option value="정보통신기사(구)">정보통신기사(구)</option>
                        <option value="제품디자인기사">제품디자인기사</option>
                        <option value="조경기사">조경기사</option>
                        <option value="조선기사">조선기사</option>
                        <option value="종자기사">종자기사</option>
                        <option value="지적기사">지적기사</option>
                        <option value="철도신호기사">철도신호기사</option>
                        <option value="철도차량기사">철도차량기사</option>
                        <option value="초음파비파괴검사기사">초음파비파괴검사기사</option>
                        <option value="초음파비파괴검사기사(구)">초음파비파괴검사기사(구)</option>
                        <option value="축산기사">축산기사</option>
                        <option value="측량및지형공간정보기사">측량및지형공간정보기사</option>
                        <option value="침투비파괴검사기사">침투비파괴검사기사</option>
                        <option value="침투비파괴검사기사(구)">침투비파괴검사기사(구)</option>
                        <option value="컬러리스트기사">컬러리스트기사</option>
                        <option value="콘크리트기사">콘크리트기사</option>
                        <option value="토목기사">토목기사</option>
                        <option value="토양환경기사eh">토양환경기사</option>
                        <option value="폐기물처리기사">폐기물처리기사</option>
                        <option value="포장기사">포장기사</option>
                        <option value="품질경영기사">품질경영기사</option>
                        <option value="항공기사">항공기사</option>
                        <option value="항로표지기사">항로표지기사</option>
                        <option value="해양공학기사">해양공학기사</option>
                        <option value="해양자원개발기사">해양자원개발기사</option>
                        <option value="해양환경기사">해양환경기사</option>
                        <option value="화공기사">화공기사</option>
                        <option value="화공기사(구)">화공기사(구)</option>
                        <option value="화공기사(구)(구)">화공기사(구)(구)</option>
                        <option value="화약류관리기사">화약류관리기사</option>
                        <option value="화재감식평가기사">화재감식평가기사</option>
                        <option value="화학분석기사">화학분석기사</option>
                        <option value="화학분석기사(구)">화학분석기사(구)</option>
                        <option value="화훼장식기사">화훼장식기사</option>

                    </>
                )}
                {dropdown2 === '국가공무원 7급' && (
                    <>
                        <option value="소프트웨어 공학">소프트웨어 공학</option>
                        <option value="정보보호론">정보보호론</option>
                    </>
                )}
                {dropdown2 === '국가공무원 9급' && (
                    <>
                        <option value="네트워크 보안">네트워크 보안</option>
                        <option value="영어">영어</option>
                        <option value="응급처치학개론">응급처치학개론</option>
                        <option value="정보보호론">정보보호론</option>
                        <option value="정보시스템">정보시스템 보안</option>
                        <option value="컴퓨터일반">컴퓨터일반</option>
                    </>
                )}
                {dropdown2 === '리눅스마스터' && (
                    <>
                        <option value="1급">1급</option>
                        <option value="2급">2급</option>
                    </>
                )}
                {dropdown2 === '컴퓨터활용능력' && (
                    <>
                        <option value="1급">1급</option>
                        <option value="2급">2급</option>
                    </>
                )}
            </select>
            <br />
        </div>
    );

};

export default ExamOptionList;

