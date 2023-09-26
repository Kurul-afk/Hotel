import React, { useState } from "react";
import "./style.css";

function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://img.freepik.com/premium-photo/tropical-hotel-holiday-background-resort_756748-74152.jpg?w=900",
    "https://img.freepik.com/premium-vector/beach-hotel-reception-interior_313242-192.jpg?w=1060",
    "https://img.freepik.com/free-vector/hotel-room-with-bed-interior-design-background-window-with-curtains-bed-with-pillows-towels-lamp-happy-holiday-vacation-staying-modern-hotel-with-view-city_575670-2063.jpg?w=900&t=st=1695734515~exp=1695735115~hmac=1a354c5cbd553f47c29d678ae16672786b905c5f0272bca04cd0a5c3e2fa4702",
    "https://img.freepik.com/premium-vector/tropical-luxury-resort-hotel-beach-swimming-pool-poolside-seating-area-summer-vacation-concept-seaside-background-horizontal-vector-illustration_48369-46814.jpg?w=996",
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <button id="prevBtn" onClick={prevSlide}>
        Previous
      </button>
      <div className="carousel-slide">
        <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button id="nextBtn" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
}

export default CustomCarousel;
