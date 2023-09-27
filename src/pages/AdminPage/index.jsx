import React, { useContext, useEffect } from "react";
import { roomContext } from "../../context/roomContext";
import CustomCard from "../../components/CustomCard";
import CustomPagination from "../../components/CustomPagination";
import { useSearchParams } from "react-router-dom";

const AdminPage = () => {
  const { rooms, getRooms, deleteRoom, pages } = useContext(roomContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const onDelete = async (id) => {
    await deleteRoom(id);
    await getRooms(searchParams.get("_page"));
  };
  useEffect(() => {
    getRooms(searchParams.get("_page") || 1);
  }, [searchParams]);

  return (
    <div className="adminList">
      <h1>Admin list</h1>
      <div className="adminList__container">
        {rooms &&
          rooms.map((item) => (
            <CustomCard
              room={item}
              isAdminStatus
              key={item.id}
              onDelete={onDelete}
            />
          ))}
      </div>
      <CustomPagination />
    </div>
  );
};

export default AdminPage;
