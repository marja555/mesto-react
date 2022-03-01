import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <div className="card">
      <img src={props.card.link} onClick={handleClick} className="card__image" alt="" />
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