/*자격증 종류를 선택하는 필터 컴포넌트*/

import React, { useState } from 'react';

const ExamOptionList = (e) => {
    const [dropdown1, setDropdownOption1] = useState('');
    const [dropdown2, setDropdownOption2] = useState('');
    const [dropdown3, setDropdownOption3] = useState('');

    const handleDropdownOption1 = (e) => {
        const selectedValue = e.target.value;
        setDropdownOption1(selectedValue);

        if (selectedValue === 'techTest') {
            setDropdownOption2('master');
            setDropdownOption3('');
        } else if (selectedValue === 'govTest') {
            setDropdownOption2('gov7');
            setDropdownOption3('');
        } else if (selectedValue === 'etcTest') {
            setDropdownOption2('linux');
            setDropdownOption3('');
        }
        
    };

    const handleDropdownOption2 = (e) => {
        const selectedValue = e.target.value;
        setDropdownOption2(selectedValue);
    
        if (selectedValue === 'master') {
            setDropdownOption3('fs');
        } else if (selectedValue === 'engineer') {
            setDropdownOption3('mn');
        } else if (selectedValue === 'expert') {
            setDropdownOption3('df');
        }
    };


    return (
        <div>
            <div>
                <label>첫번째 옵션</label>
                <select value={dropdown1} onChange={handleDropdownOption1}>
                    <option value="techTest">국가기술자격시험</option>
                    <option value="govTest">공무원전산직</option>
                    <option value="etcTest">기타 IT시험</option>
                </select>
            </div>

            <div>
            <label>두번째 옵션</label>
            <select value={dropdown2} onChange={handleDropdownOption2}>
                {dropdown1 === 'techTest' && (
                    <>
                        <option value="master">기능장</option>
                        <option value="engineer">기능사</option>
                        <option value="expert">기사</option>
                    </>
                )}
                {dropdown1 === 'govTest' && (
                    <>
                        <option value="gov7">국가공무원 7급</option>
                        <option value="gov9">국가공무원 9급</option>
                    </>
                )}
                {dropdown1 === 'etcTest' && (
                    <>
                        <option value="linux">리눅스마스터</option>
                        <option value="comUse">컴퓨터활용능력</option>
                    </>
                )}
            </select>
            </div>

            <div>
            <label>세번째 옵션</label>
            <select value={dropdown3} onChange={(e) => setDropdownOption3(e.target.value)}>
                {dropdown2 === 'master' && (
                    <>
                        <option value="fs">가스기능장</option>
                        <option value="can">건설기계정비기능장</option>
                        <option value="cat">건축목재시공기능장</option>
                        <option value="cap">건축일반시공기능장</option>
                        <option value="cau">귀금속가공기능장</option>
                        <option value="vk">금속재료기능장</option>
                        <option value="caq">금형제작기능장</option>
                        <option value="rz">기계가공기능장</option>
                        <option value="cag">미용장</option>
                        <option value="g7">배관기능장</option>
                        <option value="caj">압연기능장</option>
                        <option value="rx">에너지관리기능장</option>
                        <option value="gp">용접기능장</option>
                        <option value="g6">위험물기능장</option>
                        <option value="cak">이용장</option>
                        <option value="gm">자동차정비기능장</option>
                        <option value="nu">전기기능장</option>
                        <option value="na">전자기기기능장</option>
                        <option value="cah">제강기능장</option>
                        <option value="vm">제과기능장</option>
                        <option value="cai">제선기능장</option>
                        <option value="vj">조리기능장</option>
                        <option value="cao">주조기능장</option>
                        <option value="cam">철도차량정비기능장</option>
                        <option value="nb">통신설비기능장</option>
                        <option value="cas">판금제관기능장</option>
                        <option value="car">표면처리기능장</option>
                    </>
                )}
                {dropdown2 === 'engineer' && (
                    <>
                        <option value="mn">가구제작기능사</option>
                        <option value="ks">가스기능사</option>
                        <option value="e6">건설기계정비기능사</option>
                        <option value="ee">건설재료시험기능사</option>
                        <option value="b6">공유압기능사</option>
                        <option value="n5">공조냉동기계기능사</option>
                        <option value="cdo">광고도장기능사</option>
                        <option value="cec">광학기능사</option>
                        <option value="jh">굴삭기운전기능사</option>
                        <option value="hq">귀금속가공기능사</option>
                        <option value="hp">금속도장기능사</option>
                        <option value="c6">금속재료시험기능사</option>
                        <option value="gt">금형기능사</option>
                        <option value="da">기계가공조립기능사</option>
                        <option value="mv">기계정비기능사</option>
                        <option value="g4">농기계운전기능사</option>
                        <option value="fa">농기계정비기능사</option>
                        <option value="m6">도자기공예기능사</option>
                        <option value="ced">동력기계정비기능사</option>
                        <option value="ceg">모터그레이더운전기능사</option>
                        <option value="ccu">목공예기능사</option>
                        <option value="ceh">무선설비기능사</option>
                        <option value="k4">미용사(네일)</option>
                        <option value="jc">미용사(일반)</option>
                        <option value="jm">미용사(피부)</option>
                        <option value="en">방사선비파괴검사기능사</option>
                        <option value="cei">방송통신기능사</option>
                        <option value="cdz">보석가공기능사</option>
                        <option value="gf">보석감정사(기능사)</option>
                        <option value="gc">배관기능사</option>
                        <option value="di">버섯종균기능사</option>
                        <option value="kk">사진기능사</option>
                        <option value="nz">산림기능사</option>
                        <option value="n8">생산자동화기능사</option>
                        <option value="cef">석공예기능사</option>
                        <option value="cce">선체건조기능사</option>
                        <option value="nm">설비보전기능사</option>
                        <option value="kn">세탁기능사</option>
                        <option value="cae">수산양식기능사</option>
                        <option value="k5">승강기기능사</option>
                        <option value="fp">식품가공기능사</option>
                        <option value="cds">신발류제조기능사</option>
                        <option value="n9">신재생발전설비기능사</option>
                        <option value="d6">실내건축기능사</option>
                        <option value="ey">압연기능사</option>
                        <option value="rw">양복기능사</option>
                        <option value="ec">양장기능사</option>
                        <option value="q7">양화장치운전기능사</option>
                        <option value="kp">에너지관리기능사</option>
                        <option value="cdc">연삭기능사</option>
                        <option value="f7">열처리기능사</option>
                        <option value="cea">염색기능사</option>
                        <option value="rv">영사기능사</option>
                        <option value="jr">용접기능사</option>
                        <option value="m7">원예기능사</option>
                        <option value="cdw">원형기능사</option>
                        <option value="j9">웹디자인기능사</option>
                        <option value="jy">위험물기능사</option>
                        <option value="d9">유기농업기능사</option>
                        <option value="cj">의료전자기능사</option>
                        <option value="by">이용사</option>
                        <option value="mw">인쇄기능사</option>
                        <option value="ma">임산가공기능사</option>
                        <option value="caw">임업종묘기능사</option>
                        <option value="dm">자기비파괴검사기능사</option>
                        <option value="dn">자동차보수도장기능사</option>
                        <option value="jq">자동차정비기능사</option>
                        <option value="ed">자동차차체수리기능사</option>
                        <option value="f8">잠수기능사</option>
                        <option value="jo">전기기능사</option>
                        <option value="jj">전산응용건축제도기능사</option>
                        <option value="jk">전산응용기계제도기능사</option>
                        <option value="cdh">전산응용조선제도기능사</option>
                        <option value="n2">전산응용토목제도기능사</option>
                        <option value="jz">전자계산기기능사</option>
                        <option value="n6">전자기기기능사</option>
                        <option value="gd">전자부품장착기능사</option>
                        <option value="jp">전자출판기능사</option>
                        <option value="n7">전자캐드기능사</option>
                        <option value="fv">전파전자기능사(구)</option>
                        <option value="fw">전파전자통신기능사</option>
                        <option value="fx">전파통신기능사(구)</option>
                        <option value="ccd">정밀측정기능사</option>
                        <option value="j2">정보기기운용기능사</option>
                        <option value="j1">정보처리기능사</option>
                        <option value="jb">정보처리기능사 실기(베타)</option>
                        <option value="cfd">제강기능사</option>
                        <option value="j7">제과기능사</option>
                        <option value="j8">제빵기능사</option>
                        <option value="e2">제선기능사</option>
                        <option value="ccb">제품응용모델링기능사</option>
                        <option value="jx">조경기능사</option>
                        <option value="k6">조주기능사</option>
                        <option value="ek">종자기능사</option>
                        <option value="cck">주조기능사</option>
                        <option value="jg">지게차운전기능사</option>
                        <option value="nx">지게차유사(롤러,기중기등)</option>
                        <option value="fq">지적기능사</option>
                        <option value="br">천장크레인운전기능사</option>
                        <option value="cfi">철도차량정비기능사</option>
                        <option value="cfh">철도차량정비기능사(구)</option>
                        <option value="cdi">철도토목기능사</option>
                        <option value="dw">초음파비파괴검사기능사</option>
                        <option value="ms">축로기능사</option>
                        <option value="gk">축산기능사</option>
                        <option value="dk">측량기능사</option>
                        <option value="bq">침투비파괴검사기능사</option>
                        <option value="gu">컨테이너크레인운전기능사</option>
                        <option value="j5">컴퓨터그래픽스운용기능사</option>
                        <option value="jt">컴퓨터응용선반기능사</option>
                        <option value="ju">컴퓨터응용밀링기능사</option>
                        <option value="dr">콘크리트기능사</option>
                        <option value="fy">타워크레인운전기능사</option>
                        <option value="cac">통신기기기능사</option>
                        <option value="cad">통신선로기능사</option>
                        <option value="js">특수용접기능사</option>
                        <option value="q1">표면처리기능사</option>
                        <option value="dx">플라스틱창호기능사</option>
                        <option value="ccg">피아노조율기능사</option>
                        <option value="m5">한복기능사</option>
                        <option value="ja">한식조리기능사(공통)</option>
                        <option value="bs">항공기관정비기능사</option>
                        <option value="kw">항공기체정비기능사</option>
                        <option value="f9">항공장비정비기능사</option>
                        <option value="cab">항공전자정비기능사</option>
                        <option value="ccc">항로표지기능사</option>
                        <option value="q3">화약취급기능사</option>
                        <option value="eo">화학분석기능사</option>
                        <option value="ko">화훼장식기능사</option>
                        <option value="kr">환경기능사</option>
                    </>
                )}
                {dropdown2 === 'expert' && (
                    <>
                        <option value="df">가스기사</option>
                        <option value="e7">건설기계설비기사</option>
                        <option value="nj">건설안전기사</option>
                        <option value="do">건설재료시험기사</option>
                        <option value="nf">건축기사</option>
                        <option value="du">건축설비기사</option>
                        <option value="cer">공조냉동기계기사</option>
                        <option value="bz">공조냉동기계기사(구)</option>
                        <option value="caf">광학기사</option>
                        <option value="ff">교통기사</option>
                        <option value="hn">금속재료기사</option>
                        <option value="mz">기계설계기사</option>
                        <option value="c5">기상기사</option>
                        <option value="cdt">농업기계기사</option>
                        <option value="px">농작업안전보건기사</option>
                        <option value="pz">누설비파괴검사기사</option>
                        <option value="py">누설비파괴검사기사(구)</option>
                        <option value="b4">대기환경기사</option>
                        <option value="dy">도시계획기사</option>
                        <option value="b8">무선설비기사</option>
                        <option value="ro">바이오화학제품제조기사</option>
                        <option value="fm">방사선비파괴검사기사</option>
                        <option value="fn">방사선비파괴검사기사(구)</option>
                        <option value="cfg">방송통신기사</option>
                        <option value="kz">방송통신기사(구)</option>
                        <option value="cfb">방재기사</option>
                        <option value="gs">사출(프레스)금형기사</option>
                        <option value="b5">산림기사</option>
                        <option value="ku">산업안전기사</option>
                        <option value="bw">산업위생관리기사</option>
                        <option value="qa">생물분류기사(동물)</option>
                        <option value="qb">생물분류기사(식물)</option>
                        <option value="cet">설비보전기사</option>
                        <option value="de">설비보전기사(구)</option>
                        <option value="nd">소방설비기사(기계분야)</option>
                        <option value="nc">소방설비기사(전기분야)</option>
                        <option value="cez">소음진동기사</option>
                        <option value="gq">소음진동기사(구)</option>
                        <option value="fr">수산양식기사</option>
                        <option value="cdg">수산제조기사</option>
                        <option value="nk">수질환경기사</option>
                        <option value="bg">승강기기사</option>
                        <option value="q2">시각디자인기사</option>
                        <option value="ccr">시설원예기사</option>
                        <option value="bv">식물보호기사</option>
                        <option value="cej">식육가공기사</option>
                        <option value="ne">식품기사</option>
                        <option value="rr">신재생에너지발전설비기사</option>
                        <option value="dt">신재생에너지발전설비기사(구)</option>
                        <option value="cew">실내건축기사</option>
                        <option value="dc">실내건축기사(구)</option>
                        <option value="dd">에너지관리기사</option>
                        <option value="fd">온실가스관리기사</option>
                        <option value="q5">와전류비파괴검사기사</option>
                        <option value="q9">와전류비파괴검사기사(구)</option>
                        <option value="np">용접기사</option>
                        <option value="ccj">원자력기사</option>
                        <option value="eb">유기농업기사</option>
                        <option value="ck">응용지질기사</option>
                        <option value="fo">의공기사</option>
                        <option value="ccf">의류기사</option>
                        <option value="c9">인간공학기사</option>
                        <option value="ccp">인쇄기사</option>
                        <option value="ny">일반기계기사</option>
                        <option value="q4">임산가공기사</option>
                        <option value="ceq">임업종묘기사</option>
                        <option value="ei">자기비파괴검사기사</option>
                        <option value="er">자기비파괴검사기사(구)</option>
                        <option value="nt">자동차정비기사</option>
                        <option value="ceu">자연생태복원기사</option>
                        <option value="eg">자연생태복원기사(구)</option>
                        <option value="ni">전기공사기사</option>
                        <option value="kt">전기기사</option>
                        <option value="my">전기철도기사</option>
                        <option value="kx">전자계산기기사</option>
                        <option value="ji">전자계산기조직응용기사</option>
                        <option value="bf">전자기사</option>
                        <option value="rs">전파전자통신기사</option>
                        <option value="ccw">정보보안기사</option>
                        <option value="iz">정보처리기사</option>
                        <option value="j4">정보처리기사(구)</option>
                        <option value="cey">정보통신기사</option>
                        <option value="ns">정보통신기사(구)</option>
                        <option value="cdj">제품디자인기사</option>
                        <option value="b9">조경기사</option>
                        <option value="cch">조선기사</option>
                        <option value="d8">종자기사</option>
                        <option value="ea">지적기사</option>
                        <option value="hd">철도신호기사</option>
                        <option value="cdx">철도차량기사</option>
                        <option value="ej">초음파비파괴검사기사</option>
                        <option value="es">초음파비파괴검사기사(구)</option>
                        <option value="e9">축산기사</option>
                        <option value="dv">측량및지형공간정보기사</option>
                        <option value="e5">침투비파괴검사기사</option>
                        <option value="ef">침투비파괴검사기사(구)</option>
                        <option value="dh">컬러리스트기사</option>
                        <option value="e1">콘크리트기사</option>
                        <option value="n1">토목기사</option>
                        <option value="eh">토양환경기사</option>
                        <option value="dj">폐기물처리기사</option>
                        <option value="cdp">포장기사</option>
                        <option value="bp">품질경영기사</option>
                        <option value="ccy">항공기사</option>
                        <option value="vo">항로표지기사</option>
                        <option value="cdr">해양공학기사</option>
                        <option value="cdq">해양자원개발기사</option>
                        <option value="mg">해양환경기사</option>
                        <option value="cev">화공기사</option>
                        <option value="bi">화공기사(구)</option>
                        <option value="bm">화공기사(구)(구)</option>
                        <option value="ca">화약류관리기사</option>
                        <option value="ew">화재감식평가기사</option>
                        <option value="ry">화학분석기사</option>
                        <option value="d5">화학분석기사(구)</option>
                        <option value="m8">화훼장식기사</option>

                    </>
                )}
                {dropdown2 === 'gov7' && (
                    <>
                        <option value="sof">소프트웨어 공학</option>
                        <option value="info">정보보호론</option>
                    </>
                )}
                {dropdown2 === 'gov9' && (
                    <>
                        <option value="net">네트워크 보안</option>
                        <option value="eng">영어</option>
                        <option value="em">응급처치학개론</option>
                        <option value="info">정보보호론</option>
                        <option value="sys">정보시스템 보안</option>
                        <option value="com">컴퓨터일반</option>
                    </>
                )}
                {dropdown2 === 'linux' && (
                    <>
                        <option value="li1">1급</option>
                        <option value="li2">2급</option>
                    </>
                )}
                {dropdown2 === 'comUse' && (
                    <>
                        <option value="use1">1급</option>
                        <option value="use2">2급</option>
                    </>
                )}
            </select>
            </div>
        </div>
    );

};

export default ExamOptionList;

