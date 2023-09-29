import React from "react";
import "./style.css";

const HotelCard = () => {
  return (
    <div className="hotel-card">
      <h2>{hotelData.name}</h2>
      <p>{hotelData.description}</p>
    </div>
  );
};

export default HotelCard;
