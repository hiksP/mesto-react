import { useEffect } from "react";

export function PopupWithForm({name, children, isOpen, onClose, title}) {
    
    // функция закрытия по ескейпу

    const handleEscClose = (evt) => {
        if(evt.key === "Escape") {
            onClose(evt)
        } 
    }

     // добавление обработчиков события по открытию попапа 
    useEffect(() => {
        if(isOpen) {
            document.addEventListener('keydown', handleEscClose);
        }
        return () => {
            document.removeEventListener('keydown', handleEscClose);
        }
    }, [isOpen]);

    // разметка попапа

    return(
        <>
    <div className={isOpen ? `popup popup_${name} popup_opened` : `popup popup_${name}`}>
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button className={`popup__close popup__close_${name}`} type="button" onClick={onClose}></button>
        <form className={`popup__form popup__form_${name}`} noValidate name={`data-${name}`}>
          <h3 className="popup__title">{title}</h3>
          {children}
          <button className="popup__submit" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
        </>
    );
};