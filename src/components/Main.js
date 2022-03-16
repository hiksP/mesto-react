import React from "react";
import { useEffect, useState } from "react";
import defaultAvatar from "../images/ava.jpg";
import {api} from "../utils/Api.js";
import {Card} from "./Card.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  // подписка на контекст с пользователем 
  
  const user = React.useContext(CurrentUserContext);

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
         <Card card={cardInfo} key={cardInfo._id} selectedCard={onCardClick} />
      ));
    }
  };

  // разметка
    return(
        <main>
        <section className="profile">
          <a className="profile__avatar-hover" href="#" onClick={onEditAvatar}><img className="profile__avatar" src={user.avatar} alt="Аватар профиля"/></a>
          <div className="profile__info">
            <h1 className="profile__name">{user.name}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
            <p className="profile__status">{user.about}</p>
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