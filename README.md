# 2407-study-react-api
이 프로젝트는 세 개의 JSON 파일에서 데이터를 제공하는 JSON 서버를 사용하는 샘플 React 프로젝트입니다.

## 1. 프로젝트 구조
```
bstones-react/
├── public/
├── src/
│ ├── assets/
│ │ ├── css/
│ │ ├── scss/
│ │ │ ├── components/
│ │ │ ├── layouts/
│ │ │ │ ├── _common.scss
│ │ │ │ ├── _functions.scss
│ │ │ │ ├── _mixin.scss
│ │ │ │ ├── _reset.scss
│ │ │ │ └── _variables.scss
│ │ │ ├── views/
│ │ │ │ ├── DataOne.scss
│ │ │ │ ├── DataTwo.scss
│ │ │ │ ├── Guide.scss
│ │ │ │ └── Main.scss
│ │ │ └── styles.scss
│ │ └── data/
│ │ ├── data_one.json
│ │ ├── data_two.json
│ │ └── guide.json
│ ├── components/
│ │ └── DataItem.js
│ ├── views/
│ │ ├── DataOne.js
│ │ └── DataTwo.js
│ ├── App.js
│ ├── index.js
├── .env
├── json-server-middleware.js
├── package.json
├── router.js
└── ...
```

## 2. 설치 및 설정

### 2-1. 리포지토리 클론
```
git clone https://gitlab.com/bstones-feteam/2407-bstones-react
cd my-react-app
```

### 2-2. 종속성 설치
```
npm install
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
이 프로젝트는 다음과 같은 기능을 시연합니다:
- 여러 JSON 파일에서 데이터를 가져와 표시하는 React 컴포넌트.
- SCSS를 사용한 스타일링.
- JSON 서버를 사용한 목 데이터 제공.
- React 개발 서버와 JSON 서버를 동시에 실행.

## 5. 파일 설명
- `src/assets/data/`: 목 데이터로 사용되는 JSON 파일들을 포함합니다.
- `src/assets/scss/`: 스타일링을 위한 SCSS 파일들을 포함합니다.
- `src/components/DataItem.js`: 데이터를 표시하는 React 컴포넌트입니다.
- `src/views/DataOne.js`: `data_one.json`에서 데이터를 가져와 표시하는 React 컴포넌트입니다.
- `src/views/DataTwo.js`: `data_two.json`에서 데이터를 가져와 표시하는 React 컴포넌트입니다.
- `router.js`: 여러 JSON 파일에서 데이터를 제공하기 위한 커스텀 JSON 서버 라우터입니다.

## 6. 유의 사항
- 프로젝트를 실행하기 전에 모든 종속성이 설치되었는지 확인하세요.
- JSON 서버는 5000번 포트에서 실행되도록 설정되어 있습니다.<br />
이 포트가 사용 중인 경우, `router.js`와 `.env` 파일에서 포트를 변경하세요.
