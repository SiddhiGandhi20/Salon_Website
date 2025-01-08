import React, { useEffect, useRef } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const aboutUsRef = useRef(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
          observer.unobserve(entry.target); // Stop observing once it's in view
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Observe the about-us-container
    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current);
    }

    // Observe each service element
    serviceRefs.current.forEach(service => {
      if (service) { // Ensure the element exists before observing
        observer.observe(service);
      }
    });

    // Cleanup on component unmount
    return () => {
      if (aboutUsRef.current) {
        observer.unobserve(aboutUsRef.current);
      }
      serviceRefs.current.forEach(service => {
        if (service) { // Ensure the element exists before unobserving
          observer.unobserve(service);
        }
      });
    };
  }, []);

  return (
    <div className="about-us-container" ref={aboutUsRef}>
      <h2 className="about-us-heading">Indulge Yourself</h2>
      <h1 className="about-us-title">Your Palace of Beauty</h1>
      <div className="services-container">
        <div className="service" ref={(el) => (serviceRefs.current[0] = el)}>
          <img src="hair.jpg" alt="Hair" className="service-icon" />
          <h3 className="service-title">Hair</h3>
          <p className="service-description">Hair stylists at Salon believe that beauty is different for every person, which is why they do not mass produce but tailor-make a look, keeping in mind an individual's features when conceiving their cut and colour.</p>
        </div>
        <div className="service" ref={(el) => (serviceRefs.current[1] = el)}>
          <img src="cosmetology.jpg" alt="Cosmetology" className="service-icon" />
          <h3 className="service-title">Cosmetology</h3>
          <p className="service-description">Your path to radiant skin starts here with top-notch, advanced cosmetology services especially customised for you at Salon.</p>
        </div>
        <div className="service" ref={(el) => (serviceRefs.current[2] = el)}>
          <img src="makeup.jpg" alt="Make-Up" className="service-icon" />
          <h3 className="service-title">Make-Up</h3>
          <p className="service-description">Step into the spotlight with makeup services at Salon that highlights your unique style.</p>
        </div>
        <div className="service" ref={(el) => (serviceRefs.current[3] = el)}>
          <img src="nails.jpg" alt="Nails" className="service-icon" />
          <h3 className="service-title">Nails</h3>
          <p className="service-description">Nail Goals? We've got you covered! Our expert team of nail technicians is all about precision & creating masterpieces with every stroke.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
