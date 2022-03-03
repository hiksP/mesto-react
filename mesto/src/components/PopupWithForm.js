export function PopupWithForm({title, name, children, isOpen}) {
    return(
        <>
    <div className={isOpen ? `popup popup_${name} popup_opened` : `popup popup_${name}`}>
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button className={`popup__close popup__close_${name}`} type="button"></button>
        <form className={`popup__form popup__form_${name}`} noValidate name={`data-${name}`}>
          <h3 className="popup__title">{title}</h3>
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
    {/* <div className="popup popup_add">
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button className="popup__close popup__close_add" type="button"></button>
        <form className="popup__form popup__form_add" noValidate name="data-add">
          <h3 className="popup__title">Новое место</h3>
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
          <button className="popup__submit" type="submit">Создать</button>
        </form>
      </div>
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
        <form className="popup__form popup__form_change" noValidate name="data-change">
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
    </div> */}
        </>
    );
};