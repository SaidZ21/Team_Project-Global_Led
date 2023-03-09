import React from 'react';

export default function OneReview({ review, setModalStat, setModalContent }) {
  return (
    <div className="card mb-3" style={{ width: '560px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={review.logo} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{review.name}</h5>
            <p className="card-text">{review.title}</p>
            <a href="#" className="btn btn-primary">Результат работы</a>
            <p className="card-text"><small className="align-bottom">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
