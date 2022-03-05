import { useEffect } from "react";

export function ImagePopup({onClose, card}) {

    // функция закрытия по эскейпу

    const handleEscClose = (evt) => {
        if(evt.key === "Escape") {
            onClose(evt)
        } 
    }

     // добавление обработчика события по открытию попапа 
    useEffect(() => {
        if(card) {
            document.addEventListener('keydown', handleEscClose);
        }
        return () => {
            document.removeEventListener('keydown', handleEscClose);
        }
    }, [card]);

    return(
        <>
            <div className={card ? `popup popup_image popup_opened` : `popup popup_image`}>
            <div className="popup__overlay"></div>
            <figure className="popup__place-box">
                <button className="popup__close popup__close_image" onClick={onClose} type="button"></button>
                <img className="popup__place-picture" src={card.link} alt={card.name}/>
                <figcaption className="popup__place-text">
                    <p className="popup__place-name">{card.name}</p>
                </figcaption>
            </figure>
            </div>
        </>   
    );
}