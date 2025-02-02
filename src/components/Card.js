import React from 'react';
import '../styles/card.css'; // Make sure you create a Card.css for styling

const Card = ({ title, description, link }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a href={link} className="card-link">Learn More</a>
    </div>
  );
};

export default Card;
