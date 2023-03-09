import React from 'react';
import OneReview from './OneReview';

function Review({ reviews }) {
  return (
    <div className='row'>{reviews.map(el => <OneReview key={el.id} review={el} />)}</div>
  );
}

export default Review;
