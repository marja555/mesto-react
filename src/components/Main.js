import React, {useState} from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api.getUser()
    .then((userData) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    })
    .catch(err => `Не удалось получить данные пользователя, ошибка: ${err}`)

    api.getCards()
    .then((cardsList) => {
      setCards(cardsList);
    })
    .catch(err => `Не удалось получить данные карточек, ошибка: ${err}`)
  }, [])

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <div onClick={onEditAvatar} 
          className="profile__image"
          style={{ backgroundImage: `url(${userAvatar})` }}></div>
          <div className="profile__info-container">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" onClick={onEditProfile} className="profile__edit-button"></button>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>  
        <button type="button" onClick={onAddPlace} className="profile__add-button"></button>
      </section>
      <section className="cards">
        {cards.map((cardData) => (
          <Card 
            card={cardData}
            key={cardData._id}
            onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;