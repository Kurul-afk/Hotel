import React, { useContext, useEffect } from "react";
import { roomContext } from "../../context/roomContext";
import CustomCard from "../../components/CustomCard";
import "./style.css";
import CustomPagination from "../../components/CustomPagination";
import { useSearchParams } from "react-router-dom";
import FilterByCategory from "../../components/FilterByCategory";

const ListPage = () => {
  const { rooms, getRooms } = useContext(roomContext);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getRooms(searchParams.get("_page"));
  }, [searchParams]);
  return (
    <div className="roomList">
      <div className="roomList__top">
        <FilterByCategory />
      </div>
      <div className="roomList__container">
        {rooms && rooms.map((item) => <CustomCard room={item} />)}
      </div>
      <CustomPagination />
    </div>
  );
};

export default ListPage;
