import React, { useEffect, useState } from 'react';
import '../assets/css/views/DataTwo.css';

const DataTwo = () => {
  const [dataTwo, setDataTwo] = useState({ title: '', items: [] });

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL_TWO)
      .then(response => response.json())
      .then(data => setDataTwo(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className="data-two">
      <div className="container">
        <h2>{dataTwo.title}</h2>
        <ul>
          {dataTwo.items.map(item => (
            <li key={item.id}>
              <strong>{item.name}</strong>: {item.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DataTwo;
