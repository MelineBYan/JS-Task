import React from "react";
import "./Chat.css";

const Chat = () => {
  const handleClick = (e) => {
    e.target.classList.add("open");
  };
  return (
    <div className="navbar">
      <div className="heading">Favorite movies</div>
      <button className="btn" onClick={() => handleClick}>
        ADD MOVIES
      </button>
      <div className="addMovie">
        <input type="text" name="" className="input" />
        <input type="text" name="" className="input" />
        <input type="text" name="" className="input" />
      </div>
    </div>
  );
};
export default Chat;
