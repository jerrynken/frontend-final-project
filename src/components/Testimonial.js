// Testimonial.js

import React from 'react';
import StarRating from './StarRating';

const Testimonial = ({ name,photo, review, rating }) => {
  return (
    <div className="testimonial">
      <img src={photo} alt={`${name}'s profile`} className="profile-img" />
      <h3>{name}</h3>
      <StarRating rating={rating} />
      <p>{review}</p>
    </div>
  );
};

export default Testimonial;
