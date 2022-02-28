import React from 'react';

function Card(props) {
  return (
    <div className="card" key={props.card._id}>
              <img src={props.card.link} className="card__image" alt="" />
              <button type="button" className="card__del-button"></button>
              <div className="card__rectangle">
                <h2 className="card__title">{props.card.name}</h2>
                <button type="button" className="card__like"></button>
                <div className="card__likes-counter">{props.card.likes.length}</div>
              </div>
            </div>
  )
}

export default Card;