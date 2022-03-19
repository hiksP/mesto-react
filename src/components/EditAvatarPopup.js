import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import React, { useState } from "react";
import { useContext, useRef } from "react";
import { PopupWithForm } from './PopupWithForm.js';

export function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    const currentUser = useContext(CurrentUserContext);
    
    const avatarRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        onUpdateAvatar({
          avatar: avatarRef.current.value
        });
    }


    return (
        <PopupWithForm
         name="avatar"
         isOpen={isOpen}
         onClose={onClose}
         title="Обновить аватар"
         onSubmit={handleSubmit}
         children={
          <ul className="popup__list">
            <li className="popup__list-element">
              <input type="url" ref={avatarRef} defaultValue={''} className="popup__data-box" name="avatar" required placeholder="Сылка на аватар"/>
              <span className="popup__input-error" id="avatar-error"></span>
            </li>
          </ul>
    }/>
      )
}