import ava from "../images/ava.jpg";

export function Main({editAvatarPopup, editProfilePopup, addCardPopup}) {
    return(
        <main>
        <section className="profile">
          <a className="profile__avatar-hover" href="#" onClick={editAvatarPopup}><img className="profile__avatar" src={ava} alt="Аватар профиля"/></a>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <button className="profile__edit-button" type="button" onClick={editProfilePopup}></button>
            <p className="profile__status"></p>
          </div>
          <button className="profile__add-button" type="button" onClick={addCardPopup}></button>
        </section>
        <section className="elements">
          <ul className="elements__list">
          </ul>
        </section>
        </main>
    );
};