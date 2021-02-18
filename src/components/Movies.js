import React, { useState } from "react";
import "./Movies.css";

const Movies = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = (e) => {
    setVisible({
      visible: true,
    });
  };
  const handleCancel = (e) => {
    setVisible({
      visible: false,
    });
  };
  return (
    <div>
      <div className="navbar">
        <div className="heading">Favorite movies</div>
        <button className="btn" onClick={handleClick}>
          ADD MOVIES
        </button>
      </div>
      <div className={visible ? "open" : "addMovie"}>
        <form className="form">
          <label>Movie Title</label>
          <input type="text" name="name" className="input" />
          <label>Image URL</label>
          <input type="text" name="url" className="input" />
          <label>Your Rating</label>
          <input type="number" name="rate" className="input" />
          <button name="cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button name="submit">Add</button>
        </form>
      </div>
    </div>
  );
};
export default Movies;
