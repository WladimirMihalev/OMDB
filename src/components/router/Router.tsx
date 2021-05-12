import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {About} from "../about/About"
import { Films } from '../main/List/Items/Film/Film';
import {Main} from "../main/Main"
 
import  "./RouterStyles.module.css"

function Routs() {
  return (
      <Router>
      <div >
        <nav>
          <ul>
            <li>
              <Link  to="/" >Main page</Link>
            </li>
            <li>
              <Link to="/about">About team</Link>
            </li>

          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <Main />
          </Route>
            <Route exact path="/:id">
            <Films />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routs;
