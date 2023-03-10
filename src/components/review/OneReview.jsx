import axios from 'axios';
import React, { useState } from 'react';

export default function OneReview({
  review, changeHandler, setReview, user,
}) {
  const deleteHandler = () => {
    axios.delete(`/review/${review.id}`)
      .then(() => setReview((prev) => prev.filter((onepost) => onepost.id !== post.id)))
      .catch(console.log);
    window.location.reload();
  };

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
            <button href="#" onClick={() => changeHandler(review.id)} className="btn btn-primary">
              Подробнее
            </button>

            {(user?.isAdmin || user) ? (
              <button
                className="btn btn-danger"
                onClick={deleteHandler}
              >
                Удалить

              </button>
            ) : (
              null)}

            <p className="card-text"><small className="align-bottom">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
