import React from 'react';

const Card = ({card}) => {
  
    return (
        <div className="">
            <div className="card w-72 text-center shadow-2xl mb-10">
            <div className="card-body text-black">
              <h2 className="card-title">{card.purpose}</h2>
              <img src={card.image} className="h-14" alt="" />
              
            </div>
          </div>
        </div>
        
    );
};

export default Card;