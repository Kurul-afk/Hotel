import React, { useContext, useEffect, useState } from "react";
import { roomContext } from "../../context/roomContext";
import CustomCard from "../../components/CustomCard";
import CustomPagination from "../../components/CustomPagination";
import { useSearchParams } from "react-router-dom";
import FilterByCategory from "../../components/FilterByCategory";
import "./style.css";

const AdminPage = () => {
  const { rooms, getRooms, deleteRoom } = useContext(roomContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "");
    getRooms(searchParams.get("_page") || 1, selectedCategory);
  }, [searchParams, selectedCategory]);

  const onDelete = async (id) => {
    await deleteRoom(id);
    await getRooms(searchParams.get("_page"));
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <div className="adminList">
      <h1>Admin list</h1>
      <FilterByCategory
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="adminList__container">
        {rooms &&
          rooms.map((item) => (
            <CustomCard
              room={item}
              isAdminStatus
              onDelete={onDelete}
              key={item.id}
            />
          ))}
      </div>
      <CustomPagination />
    </div>
  );
};

export default AdminPage;
