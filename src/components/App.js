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
  }


  return (
    <body id="root" className="page">
    <div className="page__container">
    <Header />
    <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick} 
      onEditAvatar={handleEditAvatarClick}
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

    <ImagePopup />

  {/* <div className="popup popup_type_profile">
    <div className="popup__overlay"></div>
    <div className="popup__container">
      <button type="button" className="popup__close"></button>
      <h3 className="popup__title">Редактировать профиль</h3>
      <form name="edit-form" className="popup__form popup__form_type_profile" noValidate>
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
      </form>
    </div>
  </div>
  <div className="popup popup_type_place">
    <div className="popup__overlay"></div>
    <div className="popup__container">
      <button type="button" className="popup__close"></button>
      <h3 className="popup__title">Новое место</h3>
      <form name="place-form" className="popup__form popup__form_type_place" noValidate>
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
      </form>
    </div>
  </div>
  <div className="popup popup_type_pic">
    <div className="popup__overlay"></div>
    <div className="popup__pic-container">
      <img src="#" alt="Изображение." className="popup__pic" />
      <h2 className="popup__pic-title">картинка</h2>
      <button type="button" className="popup__close"></button>
    </div>
  </div>
  <div className="popup popup_type_submit">
    <div className="popup__overlay"></div>
    <div className="popup__container">
      <form name="submit-form" className="popup__form popup__form_type_submit" noValidate>
        <h3 className="popup__title">Вы уверены?</h3>
        <button type="submit" className="popup__submit-button">Да</button>
      </form>
      <button type="button" className="popup__close"></button>
    </div>
  </div>
  <div className="popup popup_type_avatar-edit">
    <div className="popup__overlay"></div>
    <div className="popup__container">
      <form name="avatar-edit-form" className="popup__form popup__form_type_edit" noValidate>
        <h3 className="popup__title">Обновить аватар</h3>
        <input id="avatar-input" type="url" name="avatar" value=""
          placeholder="Ссылка для аватара" size="40"
          className="popup__input popup__input_type_avatar" required />
        <span id="avatar-input-error" className="popup__input-error"></span>
        <button type="submit" className="popup__submit-button">Сохранить</button>
      </form>
      <button type="button" className="popup__close"></button>
    </div>
  </div> */}
  </body>
  );
}

export default App;
