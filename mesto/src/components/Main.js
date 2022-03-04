import { useEffect, useState } from "react";
import ava from "../images/ava.jpg";
import {api} from "../utils/Api.js";

export function Main({onEditAvatar, onEditProfile, onAddPlace}) {
  const [userName, setUserName] = useState("Пользователь");
  const [userDescription, setUserDescription ] = useState("Статус");
  const [userAvatar, setUserAvatar] = useState(ava)
  
  
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