import React, { useState } from 'react';

export default function OneReview({ review, changeHandler }) {
  return (
    <div className="card m-3" style={{ width: '500px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={review.logo} className="img-fluid rounded-start" style={{ height: '200px' }} alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{review.name}</h5>
            <div className="qq" style={{ height: '150px' }}>
              {' '}
              <p className="card-text">
                {review.title}
                {' '}
              </p>
            </div>
            <button href="#" onClick={() => changeHandler(review.id)} className="btn btn-primary">
              Подробнее
            </button>
            <p className="card-text"><small className="align-bottom">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
