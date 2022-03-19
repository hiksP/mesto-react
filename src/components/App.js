import React, {useState, useEffect} from 'react';
import {Header} from './Header.js';
import {Main} from './Main.js';
import { PopupWithForm } from './PopupWithForm.js';
import {Footer} from './Footer.js';
import {ImagePopup} from './ImagePopup.js';
import {api} from "../utils/Api.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { EditProfilePopup } from './EditProfilePopup.js';
import { EditAvatarPopup } from './EditAvatarPopup.js';

function App() {
// стейт перменные попапов
  
const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
const [selectedCard, setSelectedCard] = useState(null);

// стейт с данными пользователя 

const [currentUser, setCurrentUser] = useState({})

// установка данных текущего пользователя 
useEffect(() => {
  api.getUserInfo()
  .then(res => {
    setCurrentUser(res)
  })
  .catch(err => {
    console.log(err);
  })
},[isEditProfilePopupOpen])

// обработчики открытия попапов

const handleEditAvatarClick = () => {
  setEditAvatarPopupOpen(true);
}

const handleEditProfileClick = () => {
  setEditProfilePopupOpen(true);
}

const handleAddPlaceClick = () => {
  setAddPlacePopupOpen(true);
}

const handleCardClick  = (card) => {
  setSelectedCard(card);
}

// хендлеры обновления данных пользователя 

 const handleUpdateUser = (user) => {
  api.editInfo(user.name, user.about)
  .then(res => {
    setCurrentUser(res)
  })
  .catch(err => {
    console.log(err)
  })
  closeAllPopups();
 }

 const handleUpdateAvatar = (ref) => {
    api.changeAvatar(ref.avatar)
    .then(res => {
      setCurrentUser(res)
    })
    .catch(err => {
      console.log(err)
    })
    closeAllPopups();
 } 

// закрытие всех попапов

const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
}

// закрытие попапов по эскейпу

useEffect(() => {
  const handleEscClose = (e) => {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  };

  document.addEventListener("keydown", handleEscClose);

  return () => document.removeEventListener("keydown", handleEscClose);
}, []); 

// вся разметка сайта

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <div className="page__size">
        <Header/>
      <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
      />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
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
      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard} />
    </div>
  </div>
</CurrentUserContext.Provider>  
  );
}

export default App;
