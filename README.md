*CBT 풀어보기
CBT 사이트처럼 기출문제를 보다 효과적이고 보기 용이하게 구축한 repository입니다.

*Tech/framework used
- Language: JDK 1.8
- Application Framework: Spring Boot 2.0
- Front-End: React.js (향후 SEO를 위해 next.js 등을 적용하여 Server구현. 현재는 모든 React component가 Client-Side Rendering)
- IDE: IntelliJ, VS Code

## Code style
- HTML
    - HTML element에 inline으로 CSS 속성을 주는 것은 지양하고, 외부 CSS 파일로 분리한다.
- HTML 파일 내에 긴 JS 코드를 두는 것은 지양하고, 외부 JS 파일로 분리한다.

사전 과정
1)   라우터 설치 npm install react-router-dom@5.2.0 (다운그레이드를 하므로 안정성 효과)
2)   모듈설치 npm install i
3)   Axios 설치 npm install axios
4)   Material-UI 설치 npm install @mui/material @mui/icons-material @emotion/react @emotion/styled --force
5)   Express 설치 npm install express
6)   Node js 설치 npm init -y
7)   프로젝트 실행 전 서버를 구동해야 한다. Server 폴더로 이동한 후 node server 명령어(node server.js)를 이용해 서버를 구동한 후 앱을 실행한다.
8)   프로젝트 하위에 server 폴더를 만든 후 하위에 server.js와 public 폴더를 위치시킨다. Public 폴더 하위에는 내가 다운받고자 하는 pdf 파일을 넣어놔야 한다. 이때 pdf 파일의 이름은 자격증 이름, 시험연도, 선택한 회차, 문제지 종류로 공백없이 설정해둬야 한다. 예를 들어, 이 앱의 경우 “정보처리기사20221회차(교사용).pdf”으로 설정하였다.
9)   문제 풀이용 데이터 파일은 프로젝트 하위의 public 폴더에 위치하여야 한다. 이 경우 파일 이름은 ‘quiz1.json’으로 설정하였다.