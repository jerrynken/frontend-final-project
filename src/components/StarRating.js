import React from 'react';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} style={{ color: index < rating ? '#FFD700' : '#ccc' }}>
      ★
    </span>
  ));
  return <div className="star">{stars}</div>;
};

export default StarRating;
