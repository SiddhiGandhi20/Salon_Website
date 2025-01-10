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
        <ServiceCard
          imageSrc="img3.jpg"
          title="Pedicure & Manicure"
        />
        <ServiceCard
          imageSrc="img4.jpg"
          title="Beauty Sutra Facial"
        />
        <ServiceCard
          imageSrc="img5.jpg"
          title="Ethereal Bloom Bridal Makeup Collection"
        />
        <ServiceCard
          imageSrc="img6.jpg"
          title="Elemental Symphony- Cut & Colour Collection"
        />
        <ServiceCard
          imageSrc="img7.jpg"
          title="Everyday Glam Makeup"
        />
      </div>
    </div>
  );
}

function ServiceCard({ imageSrc, title }) {
  return (
    <div className="unique-service-card">
      <img src={imageSrc} alt={title} className="unique-service-image" />
      <p className="unique-service-title">{title}</p>
    </div>
  );
}

export default TrendingSection;
