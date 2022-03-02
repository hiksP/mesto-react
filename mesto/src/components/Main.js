export function Main() {
    return(
        <main>
        <section className="profile">
          <a className="profile__avatar-hover" href="#"><img className="profile__avatar" alt="Аватар профиля"/></a>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <button className="profile__edit-button" type="button"></button>
            <p className="profile__status"></p>
          </div>
          <button className="profile__add-button" type="button"></button>
        </section>
        <section className="elements">
          <ul className="elements__list">
          </ul>
        </section>
        </main>
    );
};