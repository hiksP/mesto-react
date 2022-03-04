import React, {useState} from 'react';
import '../index.css';
import {Header} from './Header.js';
import {Main} from './Main.js';
import { PopupWithForm } from './PopupWithForm.js';
import {Footer} from './Footer.js';
import { api } from '../utils/Api.js';

function App() {

// состояния попапов
  
const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

// функции открытия попапов

const handleEditAvatarClick = () => {
  setEditAvatarPopupOpen(true);
}

const handleEditProfileClick = () => {
  setEditProfilePopupOpen(true);
}

const handleAddPlaceClick = () => {
  setAddPlacePopupOpen(true);
}

// закрытие всех попапов

const closeAllPopups = (evt) => {
  if(evt.key === 'Escape' || evt.nativeEvent.path[2].classList.contains('popup_opened')) {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }
}

// вся разметка сайта

  return (
  <>
    <div className="page">
      <div className="page__size">
        <Header/>
      <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}  
      />
      <Footer />
      <PopupWithForm
      name="edit"
      children={
      <>  
          <ul className="popup__list">
          <li className="popup__list-element">
            <input type="text" className="popup__data-box" required minLength="2" maxLength="40" name="name" placeholder="Имя пользователя"/>
            <span className="popup__input-error" id="name-error"></span>
          </li>
          <li className="popup__list-element">
            <input type="text" className="popup__data-box" required minLength="2" maxLength="200" name="status" placeholder="Профессиональная деятельность"/>
            <span className="popup__input-error" id="status-error"></span>
          </li>
        </ul>
      </>
      }
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      title="Редактировать профиль"
      />
      <PopupWithForm
      name="avatar"
      children={
      <>
          <ul className="popup__list">
            <li className="popup__list-element">
              <input type="url" className="popup__data-box" name="avatar" required placeholder="Сылка на аватар"/>
              <span className="popup__input-error" id="avatar-error"></span>
            </li>
          </ul>
      </>
      }
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      title="Обновить аватар"
      />
      <PopupWithForm
      name="add"
      children={
        <>
          <ul className="popup__list">
            <li className="popup__list-element">
              <input type="text" className="popup__data-box" name="place-name" required minLength="2" maxLength="30" placeholder="Название"/>
              <span className="popup__input-error" id="place-name-error"></span>
            </li>
            <li className="popup__list-element">
              <input type="url" className="popup__data-box" name="place-link" required placeholder="Сылка на картинку"/>
              <span className="popup__input-error" id="place-link-error"></span>
            </li>
          </ul>
        </>
      }
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      title="Новое место"/>
    </div>
    <div className="popup popup_image">
      <div className="popup__overlay"></div>
      <figure className="popup__place-box">
        <button className="popup__close popup__close_image" type="button"></button>
        <img className="popup__place-picture" src="<%=require('./images/elementWall.jpg')%>" alt="открытая картинка"/>
        <figcaption className="popup__place-text">
          <p className="popup__place-name">Стена с текстом</p>
        </figcaption>
      </figure>
    </div>
  </div>
</>  
  );
}

export default App;
