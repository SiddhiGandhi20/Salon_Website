import React from 'react';
import './MainSection.css';

const MainSection = () => {
  return (
    <div className="main-container">
      <div className="text-container">
        <h1>Indulge in the Extraordinary</h1>
        <p>
        With over a decade of expertise, we have established ourselves as a leader in the beauty and grooming industry,
         offering premium services to fashion enthusiasts, trendsetters, and celebrities alike. 
         From chic haircuts and rejuvenating facials to luxurious nail care and makeup, we are committed to
          providing an unparalleled experience that blends style, comfort, and the latest trends.
         Our dedicated team of professionals ensures every client leaves feeling pampered, refreshed, and confident, 
        ready to take on the world. Experience beauty and luxury like never before with our personalized services, 
        designed to make you feel your best every day.
        </p>
        <button className="discover-button">DISCOVER MORE</button>
      </div>
      <div className="image-container">
        <img
          src="img14.jpg"
          class="mainsection"
          alt="Woman with purple and pink hair"
        />
      </div>
    </div>
  );
};

export default MainSection;
