import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Info from "./Info";
import Modal from "react-bootstrap/Modal";

export default function BasicExample({ service, modalShow, setModalShow  }) {
  const changeHandler = () => {
    setModalShow(!modalShow);
  };

  return (
    <div className="card mb-3" style={{ width: "560px" }}>
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
            <button href="#" onClick={changeHandler} class="btn btn-primary">
              Подробнее
            </button>

            <p className="card-text">
              <small className="align-bottom">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
