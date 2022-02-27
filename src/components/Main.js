import React from 'react';

function Main() {

  function handleEditProfileClick() {
    const popupProfile = document.querySelector('.popup_type_profile');
    popupProfile.classList.add('popup_type_opened');
  }

  function handleAddPlaceClick() {
    const popupPlace = document.querySelector('.popup_type_place');
    popupPlace.classList.add('popup_type_opened');
  }

  function handleEditAvatarClick() {
    const popupEditAvatar = document.querySelector('.popup_type_avatar-edit');
    popupEditAvatar.classList.add('popup_type_opened');
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <div onClick={handleEditAvatarClick} className="profile__image"></div>
          <div className="profile__info-container">
            <h1 className="profile__name"></h1>
            <button type="button" onClick={handleEditProfileClick} className="profile__edit-button"></button>
            <p className="profile__profession"></p>
          </div>
        </div>  
        <button type="button" onClick={handleAddPlaceClick} className="profile__add-button"></button>
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