import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Info from './Info';

export default function BasicExample({
  service, changeHandler, user, setService,
}) {
  const [change, setChange] = React.useState(false);

  const newHandler = () => {
    setChange(!change);
  };

  const [postState, setPostState] = React.useState({
    name: service.name,
    url: service.url,
    text: service.text,
    info: service.info,
  });

  // const changeHandler = (e) => {
  //   setPostState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const deleteHandler = () => {
    axios.delete(`/services/${service.id}`)
      .then(() => setService((prev) => prev.filter((el) => el.id !== service.id)))
      .catch(console.log);
    window.location = '/services';
  };

  const editHandler = (e) => {
    axios.put(`/services/edit/${service.id}`, postState)
      .then((res) => {
        setPostState(res.data);
        setChange((prev) => !prev);
        console.log(res.data);
        window.location = '/services';
      });
  };

  // console.log('<<<<<<<<<<<<<<<', user);
  // const changeHandler = () => {
  //   setModalShow(!modalShow);
  // };

  return (

    <div className="card mb-3" style={{ width: '560px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={service.url}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{service.name}</h5>
            <p className="card-text">{service.text}</p>
            <button href="#" onClick={() => changeHandler(service.id)} className="btn btn-primary">
              Подробнее
            </button>

            {(user?.isAdmin || user) ? (
              // eslint-disable-next-line react/button-has-type
              <button
                className="btn btn-danger"
                onClick={deleteHandler}
              >
                Удалить

              </button>

            ) : (
              null)}
            {(user?.isAdmin || user) ? (
              // eslint-disable-next-line react/button-has-type
              <button
                onClick={editHandler}
                className="btn btn-dark"
              >
                Изменить

              </button>

            ) : (
              null)}

            {(change === true) ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={postState.name}
                  onChange={(e) => setPostState((prev) => ({ ...prev, name: e.target.value }))}
                  className="form-control"
                  placeholder="Название"
                />
                //
                {' '}
                <input
                  type="text"
                  name="name"
                  value={postState.url}
                  onChange={(e) => setPostState((prev) => ({ ...prev, url: e.target.value }))}
                  className="form-control"
                  placeholder="URL картинки"
                />
                <input
                  type="text"
                  name="name"
                  value={postState.text}
                  onChange={(e) => setPostState((prev) => ({ ...prev, text: e.target.value }))}
                  className="form-control"
                  placeholder="Краткое описание"
                />
              </>
            ) : (
              null)}
          </div>
        </div>
      </div>

    </div>
  );
}
