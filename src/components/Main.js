import React from 'react';

function Main(props) {

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <div onClick={props.onEditAvatar} className="profile__image"></div>
          <div className="profile__info-container">
            <h1 className="profile__name"></h1>
            <button type="button" onClick={props.onEditProfile} className="profile__edit-button"></button>
            <p className="profile__profession"></p>
          </div>
        </div>  
        <button type="button" onClick={props.onAddPlace} className="profile__add-button"></button>
      </section>
      <section className="cards">
        <template id="cardTemplate">
          <div className="card">
            <img src="#" className="card__image" alt="" />
            <button type="button" className="card__del-button"></button>
            <div className="card__rectangle">
              <h2 className="card__title"></h2>
              <button type="button" className="card__like"></button>
              <div className="card__likes-counter"></div>
            </div>
          </div>
        </template>
      </section>
    </main>
  );
}

export default Main;