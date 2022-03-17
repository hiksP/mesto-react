import React from "react";
import { useEffect, useState } from "react";
import defaultAvatar from "../images/ava.jpg";
import {api} from "../utils/Api.js";
import {Card} from "./Card.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  // подписка на контекст с текущим пользователем 
  
  const currentUser = React.useContext(CurrentUserContext);

  // карточки

  const [cards, setCards] = useState([]);

  // загрузка карточек

  useEffect(() => {
    api.getCards()
    .then(res => {
      setCards(res);
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  // обработка массива с карточками

  const sectionWithCards = () => {
    if (cards.length > 0) {
      return cards.map((cardInfo) => (
         <Card card={cardInfo} onCardLike={handleCardLike} key={cardInfo._id} selectedCard={onCardClick} />
      ));
    }
  };

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
}

  // разметка
    return(
        <main>
        <section className="profile">
          <a className="profile__avatar-hover" href="#" onClick={onEditAvatar}><img className="profile__avatar" src={currentUser.avatar} alt="Аватар профиля"/></a>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
            <p className="profile__status">{currentUser.about}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>
        <section className="elements">
          <ul className="elements__list">
            {sectionWithCards()}
          </ul>
        </section>
        </main>
    );
};