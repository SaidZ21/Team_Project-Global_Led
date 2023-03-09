import React from 'react';

export default function NavBar({ user, setUser }) {
  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/logout');
    if (response.ok) {
      window.location.href = '/';
      setUser(null);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="/">Главная</a>
            <a className="nav-link active" href="/services">Услуги</a>
            <a className="nav-link active" href="/review">Отзывы</a>
            <a className="nav-link active" href="/contacts">Контакты</a>
            <a className="nav-link" href="/auth/login" >Войти</a>
            {/* <a className="nav-link" href="/auth/reg">Зарегистрироваться</a> */}
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown" />
          </div>
        </div>
        {user && <button onClick={logoutHandler} type="button" className="btn btn-dark">Выйти</button>}
      </div>
    </nav>
  );
}
