import React, { useContext, useEffect, useState } from "react";
import { roomContext } from "../../context/roomContext";
import "./style.css";
import { Link } from "react-router-dom";
import StarRating from "../StarReating";

const CustomCard = ({ room, isAdminStatus, onDelete }) => {
  const [liked, setLiked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(room.likes || 0);
  const [comments, setComments] = useState(room.comments || []);

  const truncatedText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const handleLike = () => {
    if (liked) {
      setLiked(false); // Если лайк уже поставлен, убираем его
      setLikes(likes - 1); // Уменьшаем счетчик лайков
    } else {
      setLiked(true); // Если лайк не стоит, ставим его
      setLikes(likes + 1); // Увеличиваем счетчик лайков
    }
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleCommentDelete = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1); // Удаляем комментарий по индексу
    setComments(updatedComments);
  };

  return (
    <div className="card">
      <StarRating />
      <div className="card__container">
        <img src={room.img} alt="img" className="card__img" />
        <div className="card__text">
          <Link to={`/detail-page/${room.id}`} className="card__title">
            {truncatedText(room.title, 20)}
          </Link>
          <p className="card__desc">{truncatedText(room.desc, 40)}</p>
          <p>category: {room.category} - Star</p>
          <p className="card__likes">Likes: {likes}</p>
          <button onClick={handleLike} className="card__likes-button">
            {liked ? "Unlike" : "Like"} {/* Текст на кнопке меняется */}
          </button>
          <h3>Comments</h3>
          <div className="card__comments">
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>
                  {comment}
                  {isAdminStatus && (
                    <button onClick={() => handleCommentDelete(index)}>
                      Delete Comment
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <div>
              <input
                type="text"
                placeholder="Add a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={handleCommentSubmit}>Add Comment</button>
            </div>
          </div>
        </div>
        {isAdminStatus && (
          <>
            <button onClick={() => onDelete(room.id)}>Delete</button>
            <Link to={`/edit-room/${room.id}`}>Edit</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomCard;
