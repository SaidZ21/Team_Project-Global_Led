import React, { useState } from 'react';

export default function BasicExample({ service, changeHandler }) {
  // const changeHandler = () => {
  //   setModalShow(!modalShow);
  // };

  return (
    <div className="card-wrapper bg-gray">
      <div className="card m-3" style={{ width: '500px' }}>
        <div className="row g-0" style={{ height: '250px' }}>
          <div className="col-md-4">
            <img
              src={service.url}
              className="img-fluid rounded-start"
              alt="..."
              style={{ height: '200px' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{service.name}</h5>
              <p className="card-text">{service.text}</p>
              <button href="#" onClick={() => changeHandler(service.id)} className="btn btn-primary">
                Подробнее
              </button>

              <p className="card-text">
                <small className="align-bottom">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
