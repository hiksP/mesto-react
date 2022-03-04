// создание экземляра карточки
export function Card({card}) {

    return (
            <li className="elements__box">
                <button className="elements__delete-button" type="button"></button>
                <img className="elements__image" src={card.link} alt={card.name}/>
                <div className="elements__name-box">
                    <h2 className="elements__title">{card.name}</h2>
                    <div className="elements__like">
                        <button className="elements__like-button" type="button"></button>
                        <p className="elements__likes-count">{card.likes.length}</p>
                    </div>
                </div>
            </li>
    );
}