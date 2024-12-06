import React from 'react';
import SpecialCard from './SpecialCard';
import greekSaladImage from '../assets/greek salad.jpg';
import bruchettaImage from '../assets/bruchetta.svg';
import lemonDessertImage from '../assets/lemon dessert.jpg';

const specialsData = [
    {
        title: 'Greek Salad',
        price: '$12.99',
        description: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        imageUrl: greekSaladImage, // replace with actual image URL
      },
      {
        title: 'Bruschetta',
        price: '$5.99',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        imageUrl: bruchettaImage, // replace with actual image URL
      },
      {
        title: 'Lemon Dessert',
        price: '$5.00',
        description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        imageUrl: lemonDessertImage, // replace with actual image URL
      }
];


function Specials(){
    return(
        <div className="main-special">
            <div className='first-special'>
               <h2>This Weeks specials!</h2>
               <button className='online-menu-button'>Online Menu</button>
            </div>
            <div className="second-special">
                 {specialsData.map((special, index) => (
          <      SpecialCard key={index} special={special} />
                 ))}  
            </div>
        </div>
    )
}

export default Specials;