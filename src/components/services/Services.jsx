import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import OneService from "./OneService";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Overlay, Popover, Tooltip } from "react-bootstrap";

export default function Services({ services }) {
  const [modalShow, setModalShow] = React.useState(false);
  return (

    <div className="row">
      {modalShow && (
        
          <Modal show={modalShow} onHide={() => setModalShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal>
        
      )}
      {services.map((el) => (
        <OneService key={el.id} service={el} modalShow={modalShow} setModalShow={setModalShow} />
      ))}
    </div>
  );
}
