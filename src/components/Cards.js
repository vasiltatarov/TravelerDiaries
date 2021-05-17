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
              text='Пещера Утробата се намира близо до село Илиница, в местността Тангардък кая, на около 12 км северозападно от Кърджали.'
              label='Пещера Утробата'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Меандърът "Завоя" на р.Арда се намира края с.Стар Читак и с.Рибарци по посока Кърджали-Ардино.'
              label='Меандрите на р.Арда'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Дяволският мост на р.Арда се намира на около 10 км северозападно от град Ардино, близо до с.Дядовци и недалеч от с.Латинка.'
              label='Дяволският Мост'
              path='/products'
            />
            <CardItem
              src={img8}
              text='"Момина Скала" се намира в близост до гр.Пловдив, разположена е между селата Извор и Храбрино.'
              label='Момина Скала'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;