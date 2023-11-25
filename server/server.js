/*
npm install cors
*/
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors()); // CORS 미들웨어 추가
app.use(express.static(path.join(__dirname, 'public')));


app.get('/download/:fileName', (req, res) => {
    const decodedFileName = decodeURIComponent(req.params.fileName);
    const filePath = path.join(__dirname, 'public', decodedFileName);

    // 파일이 존재하는지 확인
    if (fs.existsSync(filePath)) {
        // 파일 다운로드
        res.sendFile(filePath);
    } else {
        res.status(404).send('File not found');
        console.log(decodedFileName +decodedFileName );
    }
});

app.get('/contact/:fileName', (req, res) => {
    const decodedFileName = decodeURIComponent(req.params.fileName);
    const filePath = path.join(__dirname, 'public', decodedFileName);

    // 파일이 존재하는지 확인
    if (fs.existsSync(filePath)) {
        // 파일 다운로드
        res.sendFile(filePath);
    } else {
        res.status(404).send('File not found');
        console.log(decodedFileName +decodedFileName );
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const qnaData = [
    { id: 1, question: 'What is your question?', answer: 'This is the answer.' },
    { id: 2, question: 'Another question?', answer: 'Another answer.' },
];

app.get('/qnad', (req, res) => {
    // 여기에서는 예시 데이터를 보내는데, 실제로는 데이터베이스나 다른 소스에서 데이터를 가져와서 응답해야 합니다.
    console.log("성공");
});