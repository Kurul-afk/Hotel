// import React, { useEffect, useState } from "react";
//import axios from 'axios';

// import { useParams } from "react-router-dom";
// const apiUrl = "http://localhost:8000";

// const RoomPage = () => {
//   const { id } = useParams();
//   const [roomData, setRoomData] = useState(null);
//   useEffect(() => {
//     axios
//       .get(`/API/rooms/${id}`)
//       .then((response) => {
//         setRoomData(response.data);
//       })
//       .catch((error) => {
//         console.error("Ошибка при запросе данных о номере:", error);
//       });
//   }, [id]);

//   return (
//     <div className="room-page">
//       <>
//         <h2>{roomData.name}</h2>
//         <p>{roomData.description}</p>
//         <button>Забронировать</button>
//       </>
//     </div>
//   );
// };

// export default RoomPage;
