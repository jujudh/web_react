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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});