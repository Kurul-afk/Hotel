import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { roomContext } from "../../context/roomContext";

const EditRoom = () => {
  const { getCategories, categories, getRoomById, room, editRoom } =
    useContext(roomContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
    getRoomById(id);
  }, []);

  useEffect(() => {
    if (room) {
      setTitle(room.title);
      setDesc(room.desc);
      setPrice(room.price);
      setImg(room.img || "");
      setSelectedCategory(room.category);
    }
  }, [room]);

  const handleSubmit = async () => {
    const room = {
      title,
      desc,
      price,
      img,
      category: selectedCategory,
    };
    await editRoom(room, id);
    navigate(`/detail-page/${id}`);
    setTitle("");
    setDesc("");
    setPrice("");
    setImg("");
  };

  return (
    <div className="addRoom_Form">
      <div className="addRoom_Form__container">
        <div className="addRoom_Form__block">
          <h3 className="addRoom_Form__title">Edit info</h3>
          <div className="addRoom_Form__item">
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="addRoom_Form__input"
              type="text"
            />
            <label className="addRoom_Form__text">Title</label>
          </div>
          <div className="addRoom_Form__item">
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="addRoom_Form__input"
              type="text"
            />
            <label className="addRoom_Form__text">Description</label>
          </div>
          <div className="addRoom_Form__item">
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="addRoom_Form__input"
              type="text"
            />
            <label className="addRoom_Form__text">Price</label>
          </div>
          <div className="addRoom_Form__item">
            <input
              value={img}
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

export default EditRoom;
