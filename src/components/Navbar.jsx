import axios from 'axios';
import React from 'react';

export default function NavBar({ user }) {
  // const logoutHandler = () => {
  //   axios('/api/user/logout')
  //     .then(() => {
  //       window.location.href = '/';
  //     })
  //     .catch(console.log);
  // };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* {user?.id ? (
          <a className="navbar-brand" href="/">
            Здравствуйте,
            {' '}
            {user.username}
          </a>
        ) : (
          <a className="navbar-brand">
            Добро пожаловать!
          </a>
        )} */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="/">Главная</a>
            <a className="nav-link active" href="/">Услуги</a>
            <a className="nav-link active" href="/">Отзывы</a>
            <a className="nav-link active" href="/contacts">Контакты</a>
            {/* <a className="nav-link" href="/login">Войти</a> */}
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown" />
          </div>
        </div>
        {/* {user?.id && <button onClick={logoutHandler} type="button" className="btn btn-dark">Выйти</button>} */}
      </div>
    </nav>
  );
}
