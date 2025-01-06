// src/GiftAStay.js
import React from "react";
import "../GiftAStay.css"; // Import the CSS file
import PurpleWomanImage from "../images/Purple woman.png"; // Import the image

const GiftAStay = () => {
  return (
    <div className="gift-section">
      <section className="testimonial-section">
        <div className="testimonial">
          <div className="image-container">
            {/* Background Image */}
            <img
              src={PurpleWomanImage}
              alt="Happy customer enjoying her stay"
              className="testimonial-image"
            />

            {/* Overlay Content */}
            <div className="overlay-content">
              <h3 className="testimonial-headline">A truly wonderful experience</h3>
              <p className="testimonial-text">
                Brilliant for anyone looking to get away from the hustle and bustle of
                city life or detox from their tech for a few days. I could have stayed
                another week!
              </p>

              <p className="p2">
                They really have thought about everything here down to the finest details.
              </p>

              {/* Rating and Date */}
              <div className="testimonial-rating">
                <div className="stars-container">
                  <div className="star-box">⭐</div>
                  <div className="star-box1">⭐</div>
                  <div className="star-box2">⭐</div>
                  <div className="star-box3">⭐</div>
                  <div className="star-box4">⭐</div>
                </div>
                <p className="testimonial-date">01 Jan 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftAStay;
