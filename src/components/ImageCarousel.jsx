import React, { useState } from 'react';
import './ImageCarousel.css'; // Make sure to style the carousel properly

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/images/enchanted-lily.jpg",
      alt: "Enchanted Lily",
      title: "ENCHANTED LILY",
      description: "Inspired by the euphoric beauty of Gen Z trends and the mesmerizing allure of holographic eyes, this ethereal bridal look unfurls like a rare blossom. Featuring holographic hues, paired with a glossy nude lip and lifted contour, this look is for the free-spirited bride who dares to dream."
    },
    {
      src: "/images/marigold-radiance.jpg",
      alt: "Marigold Radiance",
      title: "MARIGOLD RADIANCE",
      description: "This radiant bridal look features soft, smudged liner, diffused pink-nude lips, and a gentle blush that evokes the delicate petals of a marigold. Perfect for the happy-go-lucky bride who exudes warmth and elegance, this look is ideal for the woman who wants to glow with natural beauty on her special day."
    },
    {
      src: "/images/rouge-bloom.jpg",
      alt: "Rouge Bloom",
      title: "ROUGE BLOOM",
      description: "A sophisticated and alluring makeup look that draws inspiration from the golden ages of cinema, comprised of full red lips and captivating eyes, this look is timeless yet modern. Curated for the bride who wants to make a statement and has a passion for luxury."
    },
    {
      src: "/images/peach-poppy.jpg",
      alt: "Peach Poppy",
      title: "PEACH POPPY",
      description: "Inspired by Pantone's color of the year, this chic, modern style showcases soft peachy cheeks, gentle warm-toned eyes, and a radiant, glowing complexion. Crafted for the bride who wants to shine with effortless glamour & loves a soft whimsical charm."
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-item">
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        <div className="carousel-caption">
          <h3>{images[currentIndex].title}</h3>
          <p>{images[currentIndex].description}</p>
        </div>
      </div>

      {/* Navigation buttons */}
      <button className="prev-btn" onClick={handlePrev}>❮</button>
      <button className="next-btn" onClick={handleNext}>❯</button>
    </div>
  );
};

export default ImageCarousel;
