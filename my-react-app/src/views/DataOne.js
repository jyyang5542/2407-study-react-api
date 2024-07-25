import React, { useEffect, useState } from 'react';
import '../assets/css/views/DataOne.css';

const DataOne = () => {
  const [dataOne, setDataOne] = useState({ title: '', items: [] });

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL_ONE)
      .then(response => response.json())
      .then(data => setDataOne(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className="data-one">
      <div className="container">
        <h2>{dataOne.title}</h2>
        <ul>
          {dataOne.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DataOne;
