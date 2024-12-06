import React from 'react';

function SpecialCard({ special }) {
  return (
    <div className="special-card">
      <img src={special.imageUrl} alt={special.title} className="special-image" />
      <h3 className='title'>{special.title}</h3>
      <p className="price">{special.price}</p>
      <p className="description">{special.description}</p>
      <button className="order-button">Order a delivery 🚚</button>
    </div>
  );
}

export default SpecialCard;
