import React, {useState} from 'react';
import {Header} from './Header.js';
import {Main} from './Main.js';
import { PopupWithForm } from './PopupWithForm.js';
import {Footer} from './Footer.js';
import {ImagePopup} from './ImagePopup.js';

function App() {

// стейт перменные попапов
  
const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
const [selectedCard, setSelectedCard] = useState(null);

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

// закрытие всех попапов

const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
}

// const esc = (evt) => {
//   if(evt.key === 'Escape' || evt.nativeEvent.path[2].classList.contains('popup_opened')) {
    
//   }
// }

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
      onCardClick={handleCardClick}
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
      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard} />
    </div>
  </div>
</>  
  );
}

export default App;
