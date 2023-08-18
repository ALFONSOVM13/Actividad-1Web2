import React from 'react';
import Card from './Card';

const CardContainer = ({ cards }) => {
  return (
    <div className="card-container row justify-content-center">
      {cards.map((card, index) => (
        <div key={index} className="col-md-2 col-sm-2 mb-2">
          <Card
            title={card.title}
            image={card.image}
            text={card.text}
            count={card.count}
          />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;





