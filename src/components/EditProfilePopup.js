import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import React from "react";
import { useEffect, useState } from "react";

export function EditProfilePopup({isOpen, onClose}) {
    return (
        <div className={isOpen ? `popup popup_edit popup_opened` : `popup popup_edit`}>
        <div className="popup__overlay"></div>
        <div className="popup__container">
          <button className="popup__close popup__close_edit" type="button" onClick={onClose}></button>
          <form className="popup__form popup__form_edit" noValidate name="data-edit">
            <h3 className="popup__title">Редактировать профиль</h3>
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
            <button className="popup__submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
    )
}