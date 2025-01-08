import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import image6 from "../images/image6.jpg";
import image4 from "../images/image4.jpg";
import image2 from "../images/image2.jpg";

const ImageSlider = () => {
  const images = [image2, image4, image6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(goToNext, 3000); // Change slide every 3 seconds
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentIndex]);

  return (
    <div className="slider">
      <div className="slider-wrapper">
        <div
          className="slider-image"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>
      </div>
      <button className="slider-btn prev-btn" onClick={goToPrevious}>
        ❮
      </button>
      <button className="slider-btn next-btn" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
