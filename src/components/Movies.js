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
    <div className={visible ? "body" : ""}>
      <div className="navbar">
        <div className="heading">Favorite movies</div>
        <button className="btn" onClick={handleClick}>
          ADD MOVIES
        </button>
      </div>
      <div className="content">Your personal movie database!</div>
      <div className={visible ? "open" : "addMovie"}>
        <form className="form">
          <label>Movie Title</label>
          <input type="text" name="name" className="input" />
          <label>Image URL</label>
          <input type="text" name="url" className="input" />
          <label>Your Rating</label>
          <input type="number" name="rate" className="input" />
          <div className="btns">
            {" "}
            <button name="cancel" className="cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button name="submit" className="add">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Movies;
