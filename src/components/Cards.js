import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import img1 from '../assets/img-11.jpg';
import img2 from '../assets/img-13.jpg';
import img3 from '../assets/img-3.jpg';
import img4 from '../assets/img-4.jpg';
import img8 from '../assets/img-12.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Едноименният връх "Караджов камък" се намира в непосредствена близост  до с.Мостово, Западните Родопи.'
              label='Караджов камък'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Пещера Утробата'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Меандрите на р.Арда'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Дяволският Мост'
              path='/products'
            />
            <CardItem
              src={img8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Момини Скали'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;