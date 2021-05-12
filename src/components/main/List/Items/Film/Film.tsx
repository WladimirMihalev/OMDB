import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./Film.module.css";

interface Film {
  Title: String;
  Poster: String;
  Year: String;
  Runtime: String;
  Language: String;
  Actors: String;
  Type: String;
  Genre: String;
  Production: String;
  Plot: String;
  imdbID: String;
}

interface id {
  id?: string;
}
export const Films = () => {
  const getFilm = useSelector((state: Film) => state);

  const [film, setFilm] = useState<any>({});
  let { id }: id = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_ONE_FILM", id });
  }, []);
  useEffect(() => {
    setFilm(getFilm);
  }, [getFilm]);

  return (
    <div>
      <div className={styles.item}>
        <img className={styles.img} src={film.Poster} alt="Poster" />
        <div className={styles.desc}>
          <h2 className={styles.title}>{film.Title}</h2>
          <p className={styles.text}>Year: {film.Year}</p>
          <p className={styles.text}>Runtime: {film.Runtime}</p>
          <p className={styles.text}>Plot: {film.Plot}</p>
          <p className={styles.text}>Language: {film.Language}</p>
          <p className={styles.text}>Actors: {film.Actors}</p>
          <p className={styles.text}>Type: {film.Type}</p>
          <p className={styles.text}>Genres: {film.Genre}</p>
          <p className={styles.text}>Production: {film.Production}</p>
        </div>
      </div>
    </div>
  );
};
