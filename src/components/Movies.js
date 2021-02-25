import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Movies.module.css";

const Movies = () => {
  const [addMovieVisible, setAddMovieVisible] = useState(false);
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);
  const [currentId, setCurrentId] = useState();
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const handleClick = () => {
    setAddMovieVisible(true);
  };
  const handleCancel = () => {
    setAddMovieVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, url, rate } = e.target;
    console.log(name.value, url.value, rate.value);
    if (
      name.value.length > 3 &&
      name.value.length < 20 &&
      url.value.length &&
      rate.value > 0 &&
      rate.value < 6
    ) {
      const newMovie = {
        id: uuidv4(),
        name: name.value,
        url: url.value,
        rate: rate.value,
      };

      setMovies([...movies, newMovie]);
      setAddMovieVisible(false);
      name.value = "";
      url.value = "";
      rate.value = "";
    } else {
      alert("Enter valid values!!!");
    }
  };

  const handleConfirmDelete = (id) => {
    setConfirmDeleteVisible(true);
    setCurrentId(id);
  };

  const handleDelete = (id) => {
    const newMovieList = movies.filter((movie) => movie.id !== id);
    setMovies([...newMovieList]);
    setConfirmDeleteVisible(false);
  };
  return (
    <div>
      {/* <div className={!visible ? "backdrop" : "backdropVisible"}></div> */}
      <div className={styles.navbar}>
        <div className={styles.heading}>Favorite movies</div>
        <button className={styles.btn} onClick={handleClick}>
          ADD MOVIES
        </button>
      </div>
      <div
        className={
          !movies.length ? styles.greetingVisible : styles.greetingHidden
        }
      >
        Your personal movie database!
      </div>
      <div className={movies.length && styles.moviesContainer}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={styles.movie}
            onClick={() => handleConfirmDelete(movie.id)}
          >
            <img src={movie.url} className={styles.movieImg} />
            <h1>{movie.name}</h1>
            <div>{movie.rate}/5 stars</div>
          </div>
        ))}
      </div>
      <div
        className={
          addMovieVisible ? styles.addMovieVisible : styles.addMovieHidden
        }
      >
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Movie Title</label>
          <input type="text" name="name" className={styles.input} />
          <label>Image URL</label>
          <input type="text" name="url" className={styles.input} />
          <label>Your Rating</label>
          <input type="number" name="rate" className={styles.input} />
          <div className={styles.btns}>
            <button
              name="cancel"
              type="button"
              className={styles.cancel}
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button className={styles.add} type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
      <div
        className={
          confirmDeleteVisible
            ? styles.confirmDeleteVisible
            : styles.confirmDeleteHidden
        }
      >
        <h1>Are you sure to delete movie?</h1>
        <div>
          <button
            onClick={() => handleDelete(currentId)}
            className={styles.add}
          >
            Yes
          </button>
          <button
            className={styles.cancel}
            onClick={() => {
              setConfirmDeleteVisible(false);
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
export default Movies;
