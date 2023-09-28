import React, { useContext, useEffect } from "react";
import { roomContext } from "../../context/roomContext";
import CustomCard from "../../components/CustomCard";

const AdminPage = () => {
  const { rooms, getRooms, deleteRoom } = useContext(roomContext);

  const onDelete = async (id) => {
    await deleteRoom(id);
    await getRooms();
  };

  useEffect(async () => {
    await getRooms();
  }, []);

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
    </div>
  );
};

export default AdminPage;
