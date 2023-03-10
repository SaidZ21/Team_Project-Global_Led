import React, { useState } from 'react';
//import nodemailer from 'nodemailer';

function MainPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Phone: ${phone}`);

    // создаем транспорт
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yevgen237@gmail.com',
        pass: 'A2h9pe48.'
      }
    });

    // устанавливаем параметры отправки письма
    const mailOptions = {
      from: 'yevgen237@gmail.com',
      to: 'neetwex@mail.ru',
      subject: 'Запрос на обратный звонок',
      html: `<p>Имя: ${name}</p><p>Телефон: ${phone}</p>`,
    };

    // отправляем письмо
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  };

  return (
    <div className="main-page">
      <div className="banner">
        <h1>Услуги по полировке фар</h1>
        <p>Восстановление прозрачности фар вашего автомобиля</p>
        <a href="/services" className="btn btn-secondary">Наши Услуги</a>
      </div>
      <div className="features">
        <div className="feature">
          <i className="fas fa-car" />
          <h3>Безопасность</h3>
          <p>Полировка фар увеличивает видимость в темное время суток, повышая безопасность на дороге.</p>
        </div>
        <div className="feature">
          <i className="fas fa-shield-alt" />
          <h3>Защита</h3>
          <p>Полировка фар защищает линзы от повреждений и увеличивает их срок службы.</p>
        </div>
        <div className="feature">
          <i className="fas fa-hand-holding-usd" />
          <h3>Экономия</h3>
          <p>Полировка фар значительно дешевле, чем замена фар на новые.</p>
        </div>
      </div>
      <div className="cta">
        <h2>Готовы начать?</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Имя:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Телефон:
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <button type="submit" className="btn btn-secondary">Перезвонить</button>
        </form>
      </div>
    </div>
  );
}

export default MainPage;
