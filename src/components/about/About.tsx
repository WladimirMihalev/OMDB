import React from 'react'
import styles from "./About.module.css"

export const About =()=>{


    return(
        <div className={styles.navigation}>
        <h2>About</h2>
        <div className='Biography'>
          Intern JavaScrpit developer: Mihalev Vladimir <p/>
          <a href="https://github.com/WladimirMihalev">My page on GIT</a>
        </div>
      </div>)
}