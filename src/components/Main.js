import React, {useState} from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {

  // const [userName, setUserName] = useState('');
  // const [userDescription, setUserDescription] = useState('');
  // const [userAvatar, setUserAvatar] = useState('');

  const [cards, setCards] = useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => `Не удалось обновить лайк, ошибка: ${err}`)
  }

  function handleCardDelete() {

  } 


  React.useEffect(() => {
    // api.getUser()
    // .then((userData) => {
    //   setUserName(userData.name);
    //   setUserDescription(userData.about);
    //   setUserAvatar(userData.avatar);
    // })
    // .catch(err => `Не удалось получить данные пользователя, ошибка: ${err}`)

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
          style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
          <div className="profile__info-container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button type="button" onClick={onEditProfile} className="profile__edit-button"></button>
            <p className="profile__profession">{currentUser.about}</p>
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
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;