import React, { useContext, useEffect, useState } from "react";
import { roomContext } from "../../context/roomContext";
import CustomCard from "../../components/CustomCard";
import "./style.css";
import CustomPagination from "../../components/CustomPagination";
import { useSearchParams } from "react-router-dom";
import FilterByCategory from "../../components/FilterByCategory";

const ListPage = () => {
  const { rooms, getRooms } = useContext(roomContext);
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
