const express = require('express');
const cors = require('cors'); // cors 모듈 가져오기
const app = express();
const port = 5001;

app.use(cors()); // cors 미들웨어 추가

// 샘플 사용자 데이터
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
];

// '/data' 엔드포인트에서 사용자 데이터 반환
app.get('/data', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
