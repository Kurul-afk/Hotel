import React, { useContext, useEffect, useState } from "react";
import { roomContext } from "../../context/roomContext";
import CustomCard from "../../components/CustomCard";
import Header from "../../components/Header";
import "./style.css";
import CustomPagination from "../../components/CustomPagination";
import { useSearchParams } from "react-router-dom";
import FilterByCategory from "../../components/FilterByCategory";

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

  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "");
    getRooms(searchParams.get("_page") || 1, selectedCategory);
  }, [searchParams, selectedCategory]);

  return (
    <div className="roomList">
      <div className="roomList__top">
        <FilterByCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="roomList__container">
        {rooms && rooms.map((item) => <CustomCard room={item} />)}
      </div>
      <CustomPagination />
    </div>
  );
};

export default ListPage;
