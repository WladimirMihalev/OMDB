import React from 'react'
import {useState, useEffect} from 'react'

import { FilmsItem } from './Items/FilmsItem'
import styles from "./FilmsList.module.css"
import { useSelector} from "react-redux";



export const FilmsList =()=>{
const [films, setFilms] = useState <any[]>([])
const filmsList = useSelector((state:any) => state.Search)

useEffect(() => {
    setFilms(filmsList)
}, [filmsList])

 function sortByAlphabet() {
    const sorted = [...films].sort((a, b) =>{
      if(a.Title.toLowerCase() > b.Title.toLowerCase()){
        return 1;
    }
    if (a.Title.toLowerCase() < b.Title.toLowerCase()) {
      return -1
    }
      return 0; 
    });

    setFilms(sorted);
  }

 

    return(
        <div>
        <button className={styles.button} onClick={sortByAlphabet}>Sort by alphabet</button>
<div className={styles.filmList}>
        
            {films.map(el=> (
                
            <FilmsItem film={el} key={el.imdbID}/>))}
     </div>   
    </div>)
}