// import logo from './logo.svg';
import '../pages/index.css';
import logoPath from '../images/logo.svg';

function App() {
  return (
    <body id="root" className="page">
    <div className="page__container">
    <header className="header">
      <img src={logoPath} className="header__logo" alt="Логотип" />
    </header>
    <main>
      <section className="profile">
        <div className="profile__info">
          <div className="profile__image"></div>
          <div className="profile__info-container">
            <h1 className="profile__name"></h1>
            <button type="button" className="profile__edit-button"></button>
            <p className="profile__profession"></p>
          </div>
        </div>  
        <button type="button" className="profile__add-button"></button>
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
    <footer className="footer">
      <p className="footer__copyright">&copy; 2021 Mesto Russia</p>
    </footer>
  </div>
  <div className="popup popup_type_profile">
    <div className="popup__overlay"></div>
    <div className="popup__container">
      <button type="button" className="popup__close"></button>
      <h3 className="popup__title">Редактировать профиль</h3>
      <form name="edit-form" className="popup__form popup__form_type_profile" novalidate>
        <input id="name-input" type="text" name="name" value="" placeholder="Имя" 
        size="40" className="popup__input popup__input_type_name" 
        minlength="2" maxlength="40" required />
        <span id="name-input-error" className="popup__input-error"></span>
        <input id="job-input" type="text" name="job" value="" 
        placeholder="Профессиональная деятельность" size="40" 
        className="popup__input popup__input_type_profession" 
        minlength="2" maxlength="200" required />
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
      <form name="place-form" className="popup__form popup__form_type_place" novalidate>
        <input id="place-input" type="text" name="place" value="" 
        placeholder="Название" size="40" 
        className="popup__input popup__input_type_place" 
        minlength="2" maxlength="30" required />
        <span id="place-input-error" class="popup__input-error"></span>
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
      <form name="submit-form" className="popup__form popup__form_type_submit" novalidate>
        <h3 className="popup__title">Вы уверены?</h3>
        <button type="submit" className="popup__submit-button">Да</button>
      </form>
      <button type="button" className="popup__close"></button>
    </div>
  </div>
  <div className="popup popup_type_avatar-edit">
    <div className="popup__overlay"></div>
    <div className="popup__container">
      <form name="avatar-edit-form" className="popup__form popup__form_type_edit" novalidate>
        <h3 className="popup__title">Обновить аватар</h3>
        <input id="avatar-input" type="url" name="avatar" value=""
          placeholder="Ссылка для аватара" size="40"
          className="popup__input popup__input_type_avatar" required />
        <span id="avatar-input-error" className="popup__input-error"></span>
        <button type="submit" className="popup__submit-button">Сохранить</button>
      </form>
      <button type="button" className="popup__close"></button>
    </div>
  </div>
  </body>
  );
}

export default App;
