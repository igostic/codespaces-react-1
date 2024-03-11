import React from 'react';

const RatingStars = ({ rating, onRatingChange, errors }) => {
  const handleClick = (newRating) => {
    onRatingChange(newRating);
  };

  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`star ${star <= rating ? 'filled' : ''}`}
          onClick={() => handleClick(star)}
          viewBox="0 0 25 25" // Defines the size of the SVG
        >
          <path
            d="M12.5 7.38l9.76 5.67-.97 4.48C21.44 18.62 19.76 20 17.94 20H7.06c-1.82 0-3.5-1.38-4.23-3.43l-.97-4.48 9.76-5.67z" // Defines the star shape
            fill={star <= rating ? '#ffd700' : 'none'} // Fills the star based on rating
            stroke={errors.rating ? '#ff8787' : 'none'} // Adds red stroke for errors
            strokeWidth={errors.rating ? '12' : '0'} // Sets stroke width for errors
          />
        </svg>
      ))}
    </div>
  );
};

export default RatingStars;
