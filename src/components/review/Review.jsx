import React from 'react';
import Modal from 'react-bootstrap/Modal';
import OneReview from './OneReview';

export default function Review({ reviews }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({ title: '' });
  // console.log({services.info});
  const changeHandler = (id) => {
    setModalShow(!modalShow);
    setModalInfo(reviews.find((el) => id === el.id));
  };
  return (
    <div className="row">
      {modalShow && (
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body fz="10">
          <p>{modalInfo.info}</p>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
      )}
      <div className="reviewPage">
        <div className="row">
          {reviews.map((el) => <OneReview key={el.id} review={el} className="OneReview" changeHandler={changeHandler} />)}
        </div>
      </div>
    </div>
  );
}
