import React from "react";
import { Link } from "react-router-dom";

const HotelCard = ({ hotelData }) => {
  return (
    <div className="hotel-card">
      <h2>{hotelData.name}</h2>
      <p>{hotelData.description}</p>
      <Link to={`/hotel${hotelData.id}`}>Open</Link>
    </div>
  );
};

export default HotelCard;
