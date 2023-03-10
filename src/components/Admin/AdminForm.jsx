import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export default function AdminForm({ setUser }) {
  const [error, setError] = useState(null);
  // const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    const data = await response.json();
    if (response.ok) {
      setUser(data);
      window.location.href = '/';
      // navigate('/');
    } else {
      // console.log(data.message);
      setError(data.message);
    }
  };

  return (
    <div
      style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
      }}
    >
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            Имя
            <input type="text" name="username" className="form-control" id="email" />
          </label>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              Пароль
              <input type="password" name="password" className="form-control" id="pass" />
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark">Войти</button>
        {/* {error.message && <div style={{ color: 'red' }}>{error.message}</div>} */}

      </form>
    </div>
  );
}
