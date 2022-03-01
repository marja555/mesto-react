import React, {useState} from 'react';
import '../pages/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  function handleCardClick(cardData) {
    setSelectedCard({name: cardData.name, link: cardData.link});
  }

  return (
  <div className="page">
    <div className="page__container">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
    </div>
    <PopupWithForm 
      title='Редактировать профиль' 
      name='profile'
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
    >
    <input id="name-input" type="text" name="name" value="" placeholder="Имя" 
      size="40" className="popup__input popup__input_type_name" 
      minLength="2" maxLength="40" required />
    <span id="name-input-error" className="popup__input-error"></span>
    <input id="job-input" type="text" name="job" value="" 
      placeholder="Профессиональная деятельность" size="40" 
      className="popup__input popup__input_type_profession" 
      minLength="2" maxLength="200" required />
    <span id="job-input-error" className="popup__input-error"></span>
    <button type="submit" className="popup__submit-button">Сохранить</button>
    </PopupWithForm>
    <PopupWithForm
      title='Новое место'
      name='place'
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    >
    <input id="place-input" type="text" name="place" value="" 
      placeholder="Название" size="40" 
      className="popup__input popup__input_type_place" 
      minLength="2" maxLength="30" required />
    <span id="place-input-error" className="popup__input-error"></span>
    <input id="link-input" type="url" name="image" value="" 
      placeholder="Ссылка на картинку" size="40" 
      className="popup__input popup__input_type_photo-link" required />
    <span id="link-input-error" className="popup__input-error"></span>
    <button type="submit" className="popup__submit-button">Создать</button>
    </PopupWithForm>
    <PopupWithForm
      title='Вы уверены?'
      name='submit'
    >
      <button type="submit" className="popup__submit-button">Да</button>
    </PopupWithForm>
    <PopupWithForm
      title='Обновить аватар'
      name='avatar-edit'
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    >
      console.log(handleEditAvatarClick)
    <input id="avatar-input" type="url" name="avatar" value=""
      placeholder="Ссылка для аватара" size="40"
      className="popup__input popup__input_type_avatar" required />
    <span id="avatar-input-error" className="popup__input-error"></span>
    <button type="submit" className="popup__submit-button">Сохранить</button>
    </PopupWithForm>

    <ImagePopup 
      card={selectedCard}
      onClose={closeAllPopups}
    />
  </div>
  );
}

export default App;