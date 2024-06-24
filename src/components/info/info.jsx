import React from 'react';
import './info.css';
import './info.assets.jsx';

const InfoSection = ({ title, course, items }) => (
  <div className="info-section">
    <h2 className="info-title">{title}</h2>
    <h3 className="info-subtitle">{course}</h3>
    {items.map((item, index) => (
      <div key={index} className="info-item">
        <div className="info-header">
          <span className="info-institution">{item.institution}</span>
          <span className="info-years">{item.years}</span>
        </div>
        <div className="info-course">{item.course}</div>
        <div className="info-description">{item.description}</div>
        <div className="info-keywords">
          {item.keywords.map((keyword, idx) => (
            <span key={idx} className="info-keyword">{keyword}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const Info = ({ sections }) => (
  <div className="info-container">
    {sections.map((section, index) => (
      <InfoSection key={index} title={section.title} items={section.items} />
    ))}
  </div>
);

export default Info;
