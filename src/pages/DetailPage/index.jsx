import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { roomContext } from "../../context/roomContext";

const DetailPage = () => {
  const { id } = useParams();
  const { room, getRoomById } = useContext(roomContext);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    getRoomById(id);
  }, [id]);

  if (!room) return <h1>Loading...</h1>;

  const handleBookClick = () => {
    setIsBooked(true);
  };

  return (
    <div className="detail">
      <div className="detail__container">
        <img src={room.img} alt="img" className="detail__img" />
        <div className="detail__text">
          <div className="detail__text_container">
            <h2 className="detail__title">{room.title}</h2>
            <p className="detail__desc">{room.desc}</p>
            <p className="detail__price">{room.price}</p>
            <button className="detail__btn" onClick={handleBookClick}>
              To book
            </button>
            {isBooked && <p>You have booked!</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
