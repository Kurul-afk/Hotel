import React, { useContext, useEffect, useState } from "react";
import { roomContext } from "../../context/roomContext";
import CustomCard from "../../components/CustomCard";
import Header from "../../components/Header";
import "./style.css";

const ListPage = () => {
  const { rooms, getRooms } = useContext(roomContext);
  const [searchText, setSearchText] = useState("");

  useEffect(async () => {
    await getRooms();
  }, []);

  return (
    <>
      <h2>List of Hotel</h2>
      <div className="roomList">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="roomList__container">
          {rooms
            .filter((item) =>
              item.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((item) => (
              <CustomCard room={item} key={item.id} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ListPage;
