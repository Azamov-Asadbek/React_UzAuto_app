import React, { useState, useEffect } from 'react';
import CardItems from './CardItems';
import './Cards.css';
import { getCardObject } from './objects/cardobject';

function Cards() {
  const CardObject = getCardObject();
  const [cardObject, setCardObject] = React.useState(CardObject);

  return (
    <div className="container">
      <div className="cards">
        <h1>AVTOMOBILLAR RO'YHATI</h1>
        <ul className="cards_item">
          {CardObject.map((item) => {
            return (
              <CardItems
                key={item.id}
                cardtitle={item.title}
                imgSrc={item.imgurl}
                likenum={item.like}
                price={item.price}
                commentnum={item.comment}
                cardpath="/services"
                ID={item.id}
                funclike={likefunc}
                position={item.position}
                like={item.like}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );

  function likefunc(cardId) {
    setCardObject(
      CardObject.map((item) => {
        if (item.id === cardId) {
          item.position === true ? item.like-- : item.like++;
          item.position = !item.position;
        }
        return CardObject;
      })
    );
  }
}

export default Cards;
