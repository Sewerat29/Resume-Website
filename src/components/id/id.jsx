import React from 'react';
import './id.css';

const ID = ({name}) => {
  return (
    <div className="card">
      <div className="greeting">Hi, I'm</div>
      <div className="name">{name}</div>
    </div>
  );
};

export default ID;
