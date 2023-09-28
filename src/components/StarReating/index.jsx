import React, { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <h2>Рейтинг: {rating} звёзд</h2>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? "star selected" : "star"}
            onClick={() => handleStarClick(star)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default StarRating;
