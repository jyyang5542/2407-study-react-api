// src/Axios.js
import React, { useEffect, useState } from 'react';
import axios from '../api/axios'; // 위에서 만든 axios 인스턴스를 가져옵니다.
import '../assets/css/views/Axios.css';

function Axios() {
  const [data, setData] = useState(null); // 데이터를 저장할 상태 변수
  const [loading, setLoading] = useState(true); // 로딩 상태를 저장할 상태 변수
  const [error, setError] = useState(null); // 에러 상태를 저장할 상태 변수

  useEffect(() => {
    // 컴포넌트가 마운트될 때 API 호출
    axios
      .get('/data') // 로컬 서버의 '/data' 엔드포인트에서 데이터를 가져옴
      .then(response => {
        setData(response.data); // 가져온 데이터를 상태에 저장
        setLoading(false); // 로딩 상태를 false로 변경
      })
      .catch(error => {
        setError('데이터를 가져오는데 실패했습니다.'); // 에러 메시지를 상태에 저장
        setLoading(false); // 로딩 상태를 false로 변경
      });
  }, []);

  // 로딩 중일 때 표시할 내용
  if (loading) {
    return <div>로딩 중...</div>;
  }

  // 에러가 발생했을 때 표시할 내용
  if (error) {
    return <div>{error}</div>;
  }

  // 데이터를 성공적으로 가져왔을 때 표시할 내용
  return (
    <section className="axios">
      <div className="container">
        <h2>API로부터 가져온 사용자 목록:</h2>
        <ul>
          {data.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Axios;
