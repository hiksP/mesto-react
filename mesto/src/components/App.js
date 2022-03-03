import React, {useState} from 'react';
import '../index.css';
import {Header} from './Header.js';
import {Main} from './Main.js';
import { PopupWithForm } from './PopupWithForm.js';
import {Footer} from './Footer.js';

function App() {

const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);



const handleEditAvatarClick = () => {
  setEditAvatarPopupOpen(true);
}

const handleEditProfileClick = () => {
  setEditProfilePopupOpen(true);
}

const handleAddPlaceClick = () => {
  setAddPlacePopupOpen(true);
}

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
      isOpen={isEditProfilePopupOpen}
      title="Редактировать профиль"
      />
      <PopupWithForm
      name="change-photo"
      isOpen={isEditAvatarPopupOpen}
      title="Обновить аватар"
      />
      <PopupWithForm
      name="add"
      isOpen={isAddPlacePopupOpen}
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
