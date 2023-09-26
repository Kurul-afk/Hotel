import React, { useContext, useEffect } from "react";
import { roomContext } from "../../context/roomContext";
import CustomCard from "../../components/CustomCard";
import "./style.css";

const ListPage = () => {
  const { rooms, getRooms } = useContext(roomContext);

  useEffect(() => {
    getRooms();
    console.log(rooms);
  }, []);
  return (
    <div className="roomList">
      <div className="roomList__container">
        {rooms && rooms.map((item) => <CustomCard room={item} />)}
      </div>
    </div>
  );
};

export default ListPage;
