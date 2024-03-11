import React, { useState, useEffect } from 'react';
import RatingStars from './RatingStars'; // Import RatingStars component

const ReviewForm = ({ products, selectedProductId, onSubmit, setSelectedProductId }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedProductId) {
      const product = products.find((p) => p.title === selectedProductId);
      if (product && product.reviews) {
        const existingReview = product.reviews.find((r) => 
        /* logic to identify user's review */
        r.userId === 'user123' 
        );
        if (existingReview) {
          setRating(existingReview.rating);
          setReviewText(existingReview.reviewText);
        }
      }
    }
  }, [selectedProductId, products]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    setErrors({ ...errors, rating: undefined });
  };

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
    setErrors({ ...errors, reviewText: undefined });
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !rating) {
      setErrors({ rating: 'Please select a rating' });
      return;
    }

    if (currentStep === 2 && (!reviewText || reviewText.length > 100)) {
      const newErrors = {
        ...(reviewText.length > 100 ? { reviewText: 'Review text cannot exceed 100 characters' } : {}),
      };
      setErrors(newErrors);
      return;
    }

    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    const review = { rating, reviewText };
    const updatedProducts = products.map((product) => {
      if (product.title === selectedProductId) {
        return { ...product, reviews: [...(product.reviews || []), review] };
      }
      return product;
    });

    // Call the provided onSubmit function with updated products
    onSubmit(updatedProducts);

    // Reset form state (optional)
    setCurrentStep(1);
    setRating(0);
    setReviewText('');
    setErrors({});
    setSelectedProductId(null);
    setSelectedProductId(null);

  };

  return (
    <div className="review-form">
      <h2>Review for {selectedProductId}</h2>
      {currentStep === 1 && (
        <div>
          <h3>Select Rating</h3>
          {errors.rating && <span className="error">{errors.rating}</span>}
          <RatingStars rating={rating} onRatingChange={handleRatingChange} errors={errors} />
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <RatingStars rating={rating} onRatingChange={handleRatingChange} errors={errors} />
          <h3>Write Review</h3>
          <textarea value={reviewText} onChange={handleReviewChange} rows={5} maxLength={100} />
          {errors.reviewText && <span className="error">{errors.reviewText}</span>}
          <p className="character-count">
            {reviewText.length} / {100}
          </p>
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <h3>Summary</h3>
          <p>Rating: {rating}</p>
          <p>Review: {reviewText}</p>
        </div>
      )}
      <div className="form-actions">
        {currentStep > 1 && <button className="previous-button" onClick={handlePrevStep}>Previous</button>}
        {currentStep < 3 && <button onClick={handleNextStep}>Next</button>}
        {currentStep === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default ReviewForm;