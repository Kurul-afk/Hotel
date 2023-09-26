import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { roomContext } from "../../context/roomContext";
import { toast } from "react-toastify";

const AddRoom = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { createRoom, getCategories, categories } = useContext(roomContext);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
    console.log();
  }, []);

  const handleSubmit = async () => {
    const room = {
      title,
      desc,
      price,
      img,
      category: selectedCategory,
    };
    for (const key in room) {
      if (!room[key].trim()) {
        return toast.warning("Fill all inputs");
      }
    }
    await createRoom(room);
    setTitle("");
    setDesc("");
    setPrice("");
    setImg("");
    setSelectedCategory("");
    toast.success("you created card");
  };

  return (
    <div className="addRoom_Form">
      <div className="addRoom_Form__container">
        <div className="addRoom_Form__block">
          <h3 className="addRoom_Form__title">Add new room</h3>
          <div className="addRoom_Form__item">
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="addRoom_Form__input"
              type="text"
            />
            <label className="addRoom_Form__text">Title</label>
          </div>
          <div className="addRoom_Form__item">
            <input
              onChange={(e) => setDesc(e.target.value)}
              className="addRoom_Form__input"
              type="text"
            />
            <label className="addRoom_Form__text">Description</label>
          </div>
          <div className="addRoom_Form__item">
            <input
              onChange={(e) => setPrice(e.target.value)}
              className="addRoom_Form__input"
              type="text"
            />
            <label className="addRoom_Form__text">Price</label>
          </div>
          <div className="addRoom_Form__item">
            <input
              onChange={(e) => setImg(e.target.value)}
              className="addRoom_Form__input"
              type="text"
            />
            <label className="addRoom_Form__text">URL image</label>
          </div>
          <div className="addRoom_select">
            <select
              className="addRoom_category"
              name="category"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories &&
                categories.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.category}
                  </option>
                ))}
            </select>
          </div>
          <div className="addRoom_Form__btns">
            <button className="addRoom_Form__submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
