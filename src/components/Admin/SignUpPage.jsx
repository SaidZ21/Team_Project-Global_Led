import React, { useState } from 'react';
import axios from 'axios';

export default function SignUpPage({ setUser }) {
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/reg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      // setUser(data);
      window.location.href = '/';
    } else {
      const data = await response.json();
      // console.log(data.message);
      // setError(data.message);
    }
  };

  const changeHandler = (e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
    }}
    >
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            Ваше ФИО
            <input
              spellCheck="true"
              type="text"
              name="username"
              className="form-control"
              id="user"
              value={inputs.username}
              onChange={changeHandler}
            />
          </label>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label"
            >
              Ваш email
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={inputs.email}
                onChange={changeHandler}
              />
            </label>
          </div>
          <div className="mb-3">
            <label
              htmlFor="pass"
              className="form-label"
            >
              Ваш пароль
              <input
                type="password"
                name="password"
                className="form-control"
                id="pass"
                value={inputs.password}
                onChange={changeHandler}
              />
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark">Зарегистрироваться</button>
        {/* {error.message && <div style={{ color: 'red' }}>{error.message}</div>} */}
      </form>
    </div>
  );
}
