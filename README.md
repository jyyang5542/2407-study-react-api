# 2407-study-react-api
이 프로젝트는 두 개의 JSON 파일에서 데이터를 제공하는 JSON 서버를 사용하는 샘플 React 프로젝트입니다. 이 프로젝트는 Material-UI를 사용한 스타일링과 여러 JSON 파일에서 데이터를 가져오는 방법을 보여줍니다.

## 1. 프로젝트 구조
```
my-react-app/
├── public/
├── src/
│ ├── assets/
│ │ ├── css/
│ │ ├── scss/
│ │ │ ├── styles.scss
│ │ └── data/
│ │ ├── data_one.json
│ │ └── data_two.json
│ ├── components/
│ │ └── DataItem.js
│ ├── views/
│ │ ├── DataOne.js
│ │ └── DataTwo.js
│ ├── App.js
│ ├── index.js
├── .env
├── package.json
├── router.js
└── ...
```

## 2. 설치 및 설정

### 2-1. 리포지토리 클론
```
git clone https://github.com/jyyang5542/2407-study-react-api
cd my-react-app
```

### 2-2. 종속성 설치
```
npm install
```

### 2-3. .env 파일 생성 및 설정
```
REACT_APP_API_URL_GUIDE=http://localhost:5000/guide
REACT_APP_API_URL_ONE=http://localhost:5000/data_one
REACT_APP_API_URL_TWO=http://localhost:5000/data_two
```

### 2-4. src/assets/data 디렉토리에 다음 JSON 파일들이 있는지 확인
**guide.json**
```
{
  "title": "퍼블리싱 가이드",
  "items": [
    { "id": 0, "dep1": "메인", "dep2": "", "dep3": "", "dep4": "", "dep5": "", "href": "/", "fileName": "Main.js", "status": "완료", "developer": "홍길동", "date": "2024-01-01" },
    { "id": 1, "dep1": "데이터바인딩 샘플", "dep2": "", "dep3": "", "dep4": "", "dep5": "", "href": "/data", "fileName": "", "status": "미완료", "developer": "홍길동", "date": "2024-01-01" }
  ]
}
```
**data_one.json**
```
{
  "title": "Data One",
  "items": ["Item 1", "Item 2", "Item 3"]
}
```

**data_two.json**
```
{
  "title": "Data Two",
  "items": [
    { "id": 1, "name": "Item A", "description": "Description of Item A" },
    { "id": 2, "name": "Item B", "description": "Description of Item B" },
    { "id": 3, "name": "Item C", "description": "Description of Item C" }
  ]
}
```

### 2-5. 프로젝트 최상단에 router.js 파일 생성
```
const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const guide = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/assets/data/guide.json')));
const dataOne = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/assets/data/data_one.json')));
const dataTwo = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/assets/data/data_two.json')));

const router = jsonServer.router({
  guide: guide,
  data_one: dataOne,
  data_two: dataTwo,
});

server.use(middlewares);
server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running on port 5000');
});
```

## 3. 프로젝트 실행
프로젝트를 실행하려면 다음 명령어를 사용하세요
```
npm run start
```
이 명령어는 React 개발 서버와 JSON 서버를 동시에 실행합니다.

### 3-1. 애플리케이션 접근
- React 앱: http://localhost:3000
- JSON 서버 엔드포인트 :
    + http://localhost:5000/data_one
    + http://localhost:5000/data_two

## 4. 프로젝트 개요
리액트 서버가 실행되면 메뉴가 3개 있습니다.

**Main**은 일반적으로 퍼블리싱할 때 사용할 수 있는 빈 요소 예제,

**Data**는 데이터 바인딩과 컴포넌트를 사용한 예제,

**Guide**는 데이터 바인딩을 활용한 퍼블리싱 가이드입니다.

## 5. 파일 설명
- `src/assets/data/`: 목 데이터로 사용되는 JSON 파일들을 포함합니다.
- `src/assets/scss/`: 스타일링을 위한 SCSS 파일들을 포함합니다.
- `src/components/DataItem.js`: 데이터를 표시하는 React 컴포넌트입니다.
- `src/views/DataOne.js`: `data_one.json`에서 데이터를 가져와 표시하는 React 컴포넌트입니다.
- `src/views/DataTwo.js`: `data_two.json`에서 데이터를 가져와 표시하는 React 컴포넌트입니다.
- `router.js`: 여러 JSON 파일에서 데이터를 제공하기 위한 커스텀 JSON 서버 라우터입니다.

## 6. 추가 사항
- 프로젝트를 실행하기 전에 모든 종속성이 설치되었는지 확인하세요.
- JSON 서버는 5000번 포트에서 실행되도록 설정되어 있습니다. 이 포트가 사용 중인 경우, `router.js`와 `.env` 파일에서 포트를 변경하세요.

## 7. 라이센스
이 프로젝트는 MIT 라이센스에 따라 라이센스가 부여됩니다.