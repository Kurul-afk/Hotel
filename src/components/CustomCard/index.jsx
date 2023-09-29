import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

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
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="card">
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
            {liked ? "Unlike" : "Like"}
          </button>
          <h3>Comments</h3>
          <div className="card__comments">
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
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
