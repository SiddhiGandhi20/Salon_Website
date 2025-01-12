import React from 'react';
import './TrendingSection.css';

function TrendingSection() {
  return (
    <div className="trending-container">
      <h1 className="trending-heading">TRENDSETTING SERVICES</h1>
      <div className="trending-line"></div>
      <p className="trending-paragraph">
        Our runway experts have curated some of the most popular services at Salon, just for you. Take your pick and head to your nearest salon and get started on your makeover!
      </p>
      <div className="trending-services-grid">
        <div className="unique-service">
          <img src="img3.jpg" alt="Pedicure & Manicure" className="unique-service-image" />
          <p className="unique-service-title">Pedicure & Manicure</p>
        </div>
        <div className="unique-service">
          <img src="img4.jpg" alt="Beauty Sutra Facial" className="unique-service-image" />
          <p className="unique-service-title">Beauty Sutra Facial</p>
        </div>
        <div className="unique-service">
          <img src="img5.jpg" alt="Ethereal Bloom Bridal Makeup Collection" className="unique-service-image" />
          <p className="unique-service-title">Ethereal Bloom Bridal Makeup Collection</p>
        </div>
        <div className="unique-service">
          <img src="img6.jpg" alt="Elemental Symphony- Cut & Colour Collection" className="unique-service-image" />
          <p className="unique-service-title">Elemental Symphony- Cut & Colour Collection</p>
        </div>
        <div className="unique-service">
          <img src="img7.jpg" alt="Everyday Glam Makeup" className="unique-service-image" />
          <p className="unique-service-title">Everyday Glam Makeup</p>
        </div>
      </div>
    </div>
  );
}

export default TrendingSection;
