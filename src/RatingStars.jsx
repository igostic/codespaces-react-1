import React from 'react';

const RatingStars = ({ rating, onRatingChange, errors }) => {
  const handleClick = (newRating) => {
    onRatingChange(newRating);
  };

  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg fill="#eee" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 940.688 940.688" xml:space="preserve" stroke="#eee"
        key={star}
          className={`star ${star <= rating ? 'filled' : ''}`}
          onClick={() => handleClick(star)}>

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g> <path 
d="M885.344,319.071l-258-3.8l-102.7-264.399c-19.8-48.801-88.899-48.801-108.6,0l-102.7,264.399l-258,3.8 c-53.4,3.101-75.1,70.2-33.7,103.9l209.2,181.4l-71.3,247.7c-14,50.899,41.1,92.899,86.5,65.899l224.3-122.7l224.3,122.601 c45.4,27,100.5-15,86.5-65.9l-71.3-247.7l209.2-181.399C960.443,389.172,938.744,322.071,885.344,319.071z"
fill={star <= rating ? '#ffd700' : 'none'} // Fills the star based on rating
            stroke={errors.rating ? '#ff8787' : 'none'} // Adds red stroke for errors
            strokeWidth={errors.rating ? '12' : '0'} // Sets stroke width for errors
/> </g> </g>

</svg>
      ))}
    </div>
  );
};

export default RatingStars;