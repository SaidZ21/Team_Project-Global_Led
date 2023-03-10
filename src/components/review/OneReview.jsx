
import React, { useState } from "react";


export default function OneReview({ review,  changeHandler }) {
  return (
    <div className="card m-3" style={{ width: '500px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={review.logo} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{review.name}</h5>
            <p className="card-text">{review.title}</p>
            <button href="#" onClick={() => changeHandler(review.id)} class="btn btn-primary">
              Подробнее
            </button>
            <p className="card-text"><small className="align-bottom">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
