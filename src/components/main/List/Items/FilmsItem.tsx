import React from "react";
import styles from "./FilmsItem.module.css";
export const FilmsItem = ({ film }) => {
  function openOneFilm(id: String) {
    const win: any = window.open(`/${id}`, `/${id}`);
    win.focus();
  }

  return (
    <div>
      <div className={styles.item}>
        <h2 className={styles.title}>
          {film.Title}, ({film.Year})
        </h2>
        <div className={styles.desc}>
          <img className={styles.img} src={film.Poster} alt="Poster" />
          <button
            onClick={() => openOneFilm(film.imdbID)}
            className={styles.button}
          > More details
          </button>
        </div>
      </div>
    </div>
  );
};
