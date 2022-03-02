import React from 'react';
import '../index.css';
import {Header} from './Header.js';
import {Main} from './Main.js';
import {Footer} from './Footer.js';

function App() {
  return (
  <>
    <div className="page">
      <div className="page__size">
        <Header/>
      <Main />
      <Footer />
    </div>
    <div className="popup popup_edit">
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button className="popup__close popup__close_edit" type="button"></button>
        <form className="popup__form popup__form_edit" novalidate name="data-edit">
          <h3 className="popup__title">Редактировать профиль</h3>
          <ul className="popup__list">
            <li className="popup__list-element">
              <input type="text" className="popup__data-box" required minlength="2" maxlength="40" name="name" placeholder="Имя пользователя"/>
              <span className="popup__input-error" id="name-error"></span>
            </li>
            <li className="popup__list-element">
              <input type="text" className="popup__data-box" required minlength="2" maxlength="200" name="status" placeholder="Профессиональная деятельность"/>
              <span className="popup__input-error" id="status-error"></span>
            </li>
          </ul>
          <button className="popup__submit" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_add">
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button className="popup__close popup__close_add" type="button"></button>
        <form className="popup__form popup__form_add" novalidate name="data-add">
          <h3 className="popup__title">Новое место</h3>
          <ul className="popup__list">
            <li className="popup__list-element">
              <input type="text" className="popup__data-box" name="place-name" required minlength="2" maxlength="30" placeholder="Название"/>
              <span className="popup__input-error" id="place-name-error"></span>
            </li>
            <li className="popup__list-element">
              <input type="url" class="popup__data-box" name="place-link" required placeholder="Сылка на картинку"/>
              <span className="popup__input-error" id="place-link-error"></span>
            </li>
          </ul>
          <button className="popup__submit" type="submit">Создать</button>
        </form>
      </div>
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
    <div className="popup popup_confirm">
      <div className="popup__overlay"></div>
      <div className="popup__container popup__container_confirm">
        <button className="popup__close popup__close_image" type="button"></button>
        <h3 className="popup__title popup__title_confirm">Вы уверены?</h3>
        <button className="popup__submit" type="submit">Да</button>
      </div>
    </div>
    <div className="popup popup_change-photo">
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button className="popup__close popup__close_change" type="button"></button>
        <form className="popup__form popup__form_change" novalidate name="data-change">
          <h3 className="popup__title">Обновить аватар</h3>
          <ul className="popup__list">
            <li className="popup__list-element">
              <input type="url" className="popup__data-box" name="avatar" required placeholder="Сылка на аватар"/>
              <span className="popup__input-error" id="avatar-error"></span>
            </li>
          </ul>
          <button className="popup__submit" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  </div>
</>  
  );
}

export default App;
