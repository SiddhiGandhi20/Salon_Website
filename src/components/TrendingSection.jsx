import React from 'react';
import './TrendingSection.css';

function TrendingSection() {
  return (
    <div className="container">
      <h1 className="heading">TRENDSETTING SERVICES</h1>
      <div className="line"></div>
      <p className="paragraph">
        Our runway experts have curated some of the most popular services at Lakmé Salon, just for you. Take your pick and head to your nearest salon and get started on your makeover!
      </p>
      <div className="services-grid">
        <ServiceCard
          imageSrc="img3.jpg" // Use absolute path for public folder
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
    <div className="service-card">
      <img src={imageSrc} alt={title} className="service-image" />
      <p className="service-title">{title}</p>
    </div>
  );
}

export default TrendingSection;
