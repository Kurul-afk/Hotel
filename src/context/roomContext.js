import axios from "axios";
import React, { createContext, useReducer } from "react";

export const roomContext = createContext();

const API = "http://localhost:8000";
const INIT_STATE = {
  rooms: [],
  pages: 0,
  categories: [],
  img: null,
  category: null,
  room: null,
};

const LIMIT = 3;

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_ROOMS":
      return {
        ...state,
        rooms: action.payload.data,
        pages: Math.ceil(action.payload.total / LIMIT),
      };
    case "GET_ROOM":
      return {
        ...state,
        room: action.payload,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload.data,
      };
    case "GET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
}

const RoomContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const createRoom = async (room) => {
    try {
      await axios.post(`${API}/rooms`, room);
    } catch (error) {
      console.log(error);
    }
  };

  const getRooms = async (_page, category) => {
    console.log(_page);
    try {
      const res = await axios(`${API}/rooms?_limit=${LIMIT}&_page=${_page}`, {
        params: category ? { category } : null,
      });
      dispatch({
        type: "GET_ROOMS",
        payload: { data: res.data, total: res.headers["x-total-count"] },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getRoomById = async (id) => {
    try {
      const { data } = await axios(`${API}/rooms/${id}`);
      dispatch({
        type: "GET_ROOM",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRoom = async (id) => {
    try {
      await axios.delete(`${API}/rooms/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const editRoom = async (room, id) => {
    await axios.patch(`${API}/rooms/${id}`, room);
  };

  const getCategories = async () => {
    try {
      const { data } = await axios(`${API}/categories`);
      dispatch({
        type: "GET_CATEGORIES",
        payload: { data },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoryById = async (id) => {
    try {
      const { data } = await axios(`${API}/categories/${id}`);
      dispatch({
        type: "GET_CATEGORIES",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <roomContext.Provider
      value={{
        rooms: state.rooms,
        room: state.room,
        img: state.img,
        categories: state.categories,
        category: state.category,
        pages: state.pages,
        getRooms,
        createRoom,
        getRoomById,
        deleteRoom,
        editRoom,
        getCategories,
        getCategoryById,
      }}
    >
      {children}
    </roomContext.Provider>
  );
};

export default RoomContextProvider;
