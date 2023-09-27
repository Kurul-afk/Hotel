import React, { useContext, useEffect } from "react";
import { roomContext } from "../../context/roomContext";
import "./style.css";
import { Link } from "react-router-dom";

const CustomCard = ({ room, isAdminStatus, onDelete }) => {
  const { getRooms } = useContext(roomContext);

  useEffect(() => {
    getRooms();
  }, []);

  const truncatedText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <div className="card">
      <div className="card__container">
        <img src={room.img} alt="img" className="card__img" />
        <div className="card__text">
          <Link to={`/detail-page/${room.id}`} className="card__title">
            {truncatedText(room.title, 20)}
          </Link>
          <p className="card__desc">{truncatedText(room.desc, 40)}</p>
          <p>category: {room.category} - Star</p>
          {isAdminStatus && (
            <>
              <button onClick={() => onDelete(room.id)}>Delete</button>
              <Link to={`/edit-room/${room.id}`}>Edit</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
