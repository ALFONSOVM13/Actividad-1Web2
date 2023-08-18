import React from 'react';

const Card = ({ title, image, text, count }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img-top img-fluid" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{text}</p>
        <button className="btn btn-primary mt-auto">Más detalles...</button>
        <p className="card-text">Contador: {count}</p>
      </div>
    </div>
  );
};

export default Card;




