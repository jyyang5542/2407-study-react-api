import React, { useEffect, useState } from 'react';
import '../assets/css/views/Guide.css';

const Guide = () => {
  const [guide, setGuide] = useState({ title: '', items: [] });

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL_GUIDE)
      .then(response => response.json())
      .then(data => setGuide(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className="guide">
      <div className="container">
        <h2>{guide.title}</h2>
        <table>
          <thead>
            <tr>
              <th>Dep 1</th>
              <th>Dep 2</th>
              <th>Dep 3</th>
              <th>Dep4</th>
              <th>Dep 5</th>
              <th>href</th>
              <th>파일명</th>
              <th>상태</th>
              <th>담당자</th>
              <th>완료일</th>
            </tr>
          </thead>
          <tbody>
            {guide.items.map(item => (
              <tr key={item.id}>
                <td>{item.dep1}</td>
                <td>{item.dep2}</td>
                <td>{item.dep3}</td>
                <td>{item.dep4}</td>
                <td>{item.dep5}</td>
                <td>
                  <a href={item.href}>{item.href}</a>
                </td>
                <td>{item.fileName}</td>
                <td>{item.status}</td>
                <td>{item.developer}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Guide;
