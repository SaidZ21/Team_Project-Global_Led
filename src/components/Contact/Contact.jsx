import React from 'react';
import Karta from './Karta';

export default function Contact() {
  return (
    <div
      className="container"
      style={{
        display: 'flex', justifyContent: 'left', alignItems: 'up', height: '80vh',
      }}
    >
      <div className="flex-colum">

        <div className="row">
          <Karta />
          <h1>
            Мои контакты:
          </h1>
          <h4>Адресс: Деревня Голиково,</h4>
          <h4>  Номер телефона: +7(925)-275-90-98</h4>

        </div>
        <div>
          <a href="#"><i className="fab fa-instagram" /></a>
        </div>
        <div>
          <a href="https://vk.com/globalled" target="_blank" rel="noreferrer"><i className="fab fa-vk" /></a>
        </div>
        <div>
          <a href="https://web.telegram.org/k/#-1621829772" target="_blank" rel="noreferrer"><i className="fab fa-telegram" /></a>

        </div>
      </div>
    </div>
  );
  { /* <a href="#"><i className="fab fa-facebook-f" /></a>
        <a href="#"><i className="fab fa-twitter" /></a>
        <a href="#"><i className="fab fa-instagram" /></a>
        <a href="#"><i className="fab fa-youtube" /></a> */ }
}
