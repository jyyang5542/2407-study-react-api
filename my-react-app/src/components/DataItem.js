import React from 'react';

const DataItem = ({ title, items }) => {
  return (
    <div className="data-container">
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataItem;
