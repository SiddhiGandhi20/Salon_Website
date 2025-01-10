import React from 'react';
import './GiftCard.css';

const GiftCard = () => {
  return (
    <div className="gift-card-container">
      <div className="gift-card-image">
        <img src="img11.jpg" alt="Gift Card" />
      </div>
      <div className="gift-card-content">
        <h2>GIFT CARDS FOR YOUR LOVED ONES</h2>
        <p>
          We know how difficult it is to think of a thoughtful gift for a loved one.
          <br />
          How about gifting them some much-needed pampering?
          <br />
          Get them a Salon gift card today!
        </p>
        <button className="buy-now-button">BUY NOW</button>
        <p>*Terms & Conditions apply</p>
      </div>
    </div>
  );
};

export default GiftCard;
