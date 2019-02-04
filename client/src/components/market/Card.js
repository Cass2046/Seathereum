import React from 'react';
import inkfish from '../../inkfish.png';

import './Card.css';

const Card = (props) => {
  const {name, desc} = props;
  return (
    <div className="card text-center border-0 bg-light">
      <div className="front">
        <img className="card-img-top w-auto" src={inkfish} alt="" />
      </div>
      <div className="back card-body w-100 position-absolute">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
