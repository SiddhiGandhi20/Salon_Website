import React from "react";
import "./SalonLocator.css";

const SalonLocator = () => {
  // Salon details including Google Maps iframe links
  const salons = [
    {
      name: "Salon A",
      phone: "+1 234 567 890",
      googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60650.76050340016!2d74.549191813571!3d18.178993108218236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3a03bdb59287f%3A0x36e4fb47fb8d8a9d!2sBaramati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1736506616553!5m2!1sen!2sin",
    }
  ];

  return (
    <div className="salon-locator">
      <h2 className="salon-locator-title">Salon Locator</h2>
      <div className="salon-locator-map">
        {/* Dynamically create salon cards with Google Maps iframe */}
        {salons.map((salon) => (
          <div key={salon.name} className="salon-detail-card">
            <h4>{salon.name}</h4>
            <iframe
              src={salon.googleMapsUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title={`Google Maps - ${salon.name}`}
            ></iframe>
            <p>{salon.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalonLocator;
