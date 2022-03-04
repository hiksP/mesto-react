import { useEffect, useState } from "react";
import defaultAvatar from "../images/ava.jpg";
import defaultCard from "../images/defCard.jpg";
import {api} from "../utils/Api.js";

export function Main({onEditAvatar, onEditProfile, onAddPlace}) {

  // информация пользователя

  const [userName, setUserName] = useState("Пользователь");
  const [userDescription, setUserDescription ] = useState("Статус");
  const [userAvatar, setUserAvatar] = useState(defaultAvatar)
  
   // загрузка информации о пользователе
  useEffect(() => {
    api.getUserInfo()
    .then(res => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    .catch(res => {
      console.log(res);
    })
  })

  // карточки
  const [cards, setCards] = useState([]);

  // загрузка карточек
  useEffect(() => {
    api.getCards()
    .then(res => {
      console.log(res);
    })
  })

  // разметка
    return(
        <main>
        <section className="profile">
          <a className="profile__avatar-hover" href="#" onClick={onEditAvatar}><img className="profile__avatar" src={userAvatar} alt="Аватар профиля"/></a>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
            <p className="profile__status">{userDescription}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>
        <section className="elements">
          <ul className="elements__list">
          </ul>
        </section>
        </main>
    );
};

{/* <template className="template">
<li className="elements__box">
  <button className="elements__delete-button" type="button"></button>
  <img className="elements__image" src={defaultCard} alt="Каритнка в карточке"/>
  <div className="elements__name-box">
    <h2 className="elements__title"></h2>
    <div className="elements__like">
      <button className="elements__like-button" type="button"></button>
      <p className="elements__likes-count">1</p>
    </div>
  </div>
</li>
</template> */}