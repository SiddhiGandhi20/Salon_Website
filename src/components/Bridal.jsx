import React, { useEffect } from 'react';
import './Bridal.css';

// Make sure to import the image

function Bridal() {
  // Function to check if an element is in the viewport
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  };

  // Function to add animation class when element is in view
  const animateOnScroll = () => {
    const bridalTextContent = document.querySelector('.bridal-text-content');
    const bridalTeamImage = document.querySelector('.bridal-team-image-container');
    
    // Add animation classes if elements are in view
    if (isElementInViewport(bridalTextContent)) {
      bridalTextContent.classList.add('animate-slide-in-left');
    }

    if (isElementInViewport(bridalTeamImage)) {
      bridalTeamImage.classList.add('animate-slide-in-right');
    }
  };

  useEffect(() => {
    // Add scroll event listener to trigger the animation
    window.addEventListener('scroll', animateOnScroll);

    // Trigger the function on initial load to check if the element is already in view
    animateOnScroll();

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="bridal-container">
      {/* Signature Bridal Collection Image */}
      <div className="bridal-signature-image">
        <img
          src="../image2.jpg"
          className="bridal-signature-img"
          alt="Ethereal Bloom"
        />
      </div>

      {/* New Section - WHY CHOOSE LAKMĒ SALON? */}
      <div className="container">
        <div className="left">
          <h1>WHY CHOOSE OUR SALON?</h1>
          <p>
            Weddings are all about creating memories with your loved ones. And picture-perfect memories require you to look flawless! Who better than the pioneers of beauty in India to help you achieve that perfect look on your big day? For decades, our Salon has been assisting Indian brides across the country in looking their absolute best on the most important day of their lives. Salon helps brides slay every occasion and sparkle unapologetically. The experts at Salon are here to ensure you put your best face forward and create those picture-perfect memories.
          </p>
        </div>
        <div className="right">
          <img src="../img10.jpg" alt="Our Salon" />
        </div>
      </div>

      {/* The Bridal Team Section */}
      <div className="bridal-team-section">
        <div className="bridal-team-container">
          <div className="bridal-team-content">
            {/* Text Content */}
            <div className="bridal-text-content">
              <h2>THE BRIDAL TEAM</h2>
              <p>
                "At Salon, we go the extra mile to ensure every bride feels confident to sparkle and create picture-perfect memories that last a lifetime. We understand the uniqueness of each bride and strive to enhance her beauty while staying true to her individuality. From pre-wedding events to the big day itself, we're with you every step of the way on this important journey. Our experts undergo extensive training to bring to you best-in-class and latest trends from the world of beauty."
              </p>
              <p>
                When you choose Salon for your bridal appointment, rest assured you're in the hands of highly trained professionals who are trained by experts, committed to making your dream look a reality.
              </p>
            </div>

            {/* Image to the Right */}
            <div className="bridal-team-image-container">
              <img
                src="../image12.jpg" /* Replace with the correct path to your image */
                alt="Bridal Team"
                className="bridal-team-image"
              />
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Bridal;
