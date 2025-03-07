import React from 'react';
import '../Assets/Styles/review.css';
import { FaUser, FaStar } from 'react-icons/fa'; // Using React Icons for modern icons

function Review() {
  const feed = window.localStorage;

  // Calculate the total number of reviews
  const totalReviews = Object.keys(feed).length;

  return (
    <div className="review-container">
      {/* Display Total Reviews */}
      <div className="total-reviews">
        <h3>Total Reviews: {totalReviews}</h3>
      </div>

      {/* Render Review Cards */}
      {Object.keys(feed).map((keyName, i) => {
        const review = JSON.parse(feed[keyName]);

        // Check if the review object has the required properties
        if (!review || !review.experience || !review.problem) {
          return null; // Skip this entry if data is invalid
        }

        const experience = review.experience;
        const problem = review.problem;
        const isWide = experience.length > 200 || problem.length > 100; // Adjust thresholds as needed

        return (
          <div
            className={`review-card ${isWide ? 'wide' : ''}`}
            key={i}
            style={{ '--index': i }} // Pass the index as a CSS variable
          >
            <div className="review-header">
              <div className="user-icon">
                <FaUser />
              </div>
              <div className="user-details">
                <h6>@{review.name}</h6>
                <h6>{review.date}</h6>
              </div>
            </div>
            <div className="review-content">
              <h5>{review.name}</h5>
              <p className="problem-text">
                <b>'{review.problem}'</b>
              </p>
              <hr className="divider" />
              <p className="experience-text">{review.experience}</p>
            </div>
            <div className="review-rating">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="star-icon" />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Review;