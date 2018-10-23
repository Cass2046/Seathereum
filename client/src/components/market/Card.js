import React from 'react';

const Card = ({name, desc}) => (
  <div className="card bg-light">
    <img className="card-img-top" src="card.png" alt="" />
    <div className="card-body text-center">
      <h4 className="card-title text-primary">{name}</h4>
      <p className="card-text">{desc}</p>
    </div>
  </div>
);

export default Card;
