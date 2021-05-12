import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeafultMain } from "./Deafult/DeafultMain";
import { FilmsList } from "./List/FilmList";
import  "./Main.module.css";
import styles from  "./Main.module.css";

export const Main = () => {
  const [films, setFilms] = useState([]);
  const [title, setTitle] = useState("");
  const filmsList = useSelector((state: any) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    setFilms(filmsList.Search);
  }, [filmsList]);

  async function ButtonClicked(event) {
    event.preventDefault();
    await dispatch({ type: "GET_FILMS", title });
  }
  return (
    <div>
      <div className={styles.head}>
        <h2 className={styles.title}>Search in OMDb base</h2>
        <form onSubmit={ButtonClicked}>
        <button className={styles.button}>Search</button>
          <input
            className={styles.input}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="I'm wait your search request!"></input>
        </form>
         
      </div>
      {films.length < 1 ? <DeafultMain /> : <FilmsList />}
    </div>
  );
};
