import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import OneService from "./OneService";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Overlay, Popover, Tooltip } from "react-bootstrap";

export default function Services({ services, more }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({title: ''});
  // console.log({services.info});
  const changeHandler = (id) => {
    setModalShow(!modalShow);
    setModalInfo(services.find((el) => id === el.id))
  }

  console.log(modalInfo)
  return (
    <div className="card-wrapper">
      {modalShow && (
        <Modal show={modalShow} onHide={() => setModalShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{modalInfo.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body fz="10">
            <p>{modalInfo.info}</p>
          </Modal.Body>

          <Modal.Footer></Modal.Footer>
        </Modal>
      )}
      <div className="row">
        {services.map((el) => (
          <div key={el.id} className="col-12 col-md-6 col-lg-4 OneService">
            <OneService service={el} changeHandler={changeHandler} />
          </div>
        ))}
      </div>
    </div>
  );
}
