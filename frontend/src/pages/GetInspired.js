import React from "react";
import '../GetInspired.css'; // Import the CSS file

// Import the images correctly
import beachImage from '../images/card4i.png';
import mountainImage from '../images/card5i.png'; // Ensure this file exists in /images
import cityImage from '../images/card6i.png'; // Ensure this file exists in /images

const inspirations = [
  {
    title: "For those who love To Explore nature",
    image: beachImage,  // Correct imported path
    description: "Discover some of the most beautiful scenery – from the wonders of Snowdonia to the famous beauty of the Scottish Highlands."
  },
  {
    title: "For those who want To Relax, rest & re-set",
    image: mountainImage,  // Correct imported path
    description: "Experience mind and body connection through breathing exercises and relaxation with our Yoga inspired get away for you and the family. "
  },
  {
    title: "For those who have Four-legged friends",
    image: cityImage,  // Correct imported path
    description: "When going on holiday nobody wants to put their dog in a kennel. So, lets keep the family together with our pet friendly cabins."
  }
];

const GetInspired = () => {
  return (
    <div className="inspiration-section">
      <h2 className="section-title">
        <span className="underline">Inspiration</span> for your next getaway
      </h2>
      <p className="p1">We’ve curated some amazing experiences to help you find your next getaway.</p>
      <div className="card-container">
        {inspirations.map((inspiration, index) => (
          <div key={index} className="card">
            <img src={inspiration.image} alt={inspiration.title} className="card-image" />
            <div className="card-info">
              <h4 className="card-title">{inspiration.title}</h4>
              <p className="card-description">{inspiration.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetInspired;
