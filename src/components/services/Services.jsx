import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Overlay, Popover, Tooltip } from 'react-bootstrap';
import OneService from './OneService';
export default function Services({ services, more, user }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({ title: '' });
  const [service, setService] = React.useState(services || []);
  // console.log({services.info});
  const changeHandler = (id) => {
    setModalShow(!modalShow);
    setModalInfo(services.find((el) => id === el.id));
  };
  console.log(modalInfo);
  return (
    <div className="row">
      {modalShow && (
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body fz="10">
          <p>{modalInfo.info}</p>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
      )}
      {services.map((el) => (
        <OneService key={el.id} service={el} changeHandler={changeHandler} setService={setService} user={user} />
      ))}
    </div>
  );
}
