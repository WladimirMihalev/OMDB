import { filmReducers } from "./reducer";
import mySaga from './sagas'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga"

const { reducer } = filmReducers;
const saga = createSagaMiddleware()

const store = createStore(
  reducer,
   composeWithDevTools(
    applyMiddleware(saga)
  ));
saga.run(mySaga)
export default store;