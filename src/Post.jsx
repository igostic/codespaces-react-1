import React, { useState } from 'react';
import like from "./images/like.png";
import fallbackImage from "./images/image-error.png";

const Post = ({ post }) => {
  const { owner, ownerProfileUrl, media, timestamp, likes, commentsCount } = post;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likesState, setLikes] = useState(likes);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  const getTimeAgo = (timestamp) => {
    const currentDate = new Date();
    const postDate = new Date(timestamp);
    const timeDiff = currentDate.getTime() - postDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    const monthsDiff = Math.floor(daysDiff / 30);

    if (daysDiff === 1) {
      return '1 day ago';
    } else if (monthsDiff === 1) {
      return '1 month ago';
    } else if (daysDiff > 1) {
      return `${daysDiff} days ago`;
    } else if (monthsDiff > 1) {
      return `${monthsDiff} months ago`;
    } else {
      return 'Just now';
    }
  };

  const handleLike = () => {
    setLikes(likesState + 1);
  };

  return (
    <div className="post">
      <div className="post-header">
        <img className="profile-pic" src={ownerProfileUrl} alt="Profile Pic" />
        <span>{owner}</span>
        <span>{getTimeAgo(timestamp)}</span>
      </div>
      <div className="post-media">
        <div className="carousel">
          <button className="carousel-button" onClick={handlePrevImage}>Prev</button>
          <img
            className="carousel-image"
            src={media[currentImageIndex].data}
            alt={`Post Media ${currentImageIndex + 1}`}
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = fallbackImage; // Set fallback image
            }}
          />
          <button className="carousel-button" onClick={handleNextImage}>Next</button>
        </div>
      </div>
      <div className="post-details">
        <span onClick={handleLike}><img
          className="like-icon"
          src={like}
          alt="Like Icon"
        />{likesState} likes</span>
        <span>{commentsCount} comments</span>
      </div>
    </div>
  );
};

export default Post;
