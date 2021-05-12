import { put, takeEvery } from "redux-saga/effects";
import * as Effects from "redux-saga/effects";
import axios from "axios";
import { filmReducers } from "./reducer";
import API_URL from "../components/API/API_URL"


const call: any = Effects.call;

function* getFilmsList(action) {
  const {
    actions: { getFilms, errorMesage },
  } = filmReducers;
  try {
    const films = yield call(() =>
      axios({
        method: "GET",
        url: `${API_URL.Serch}${action.title}`,
      })
    );

    yield put(getFilms(films.data));
  } catch (e) {
    yield put(errorMesage(e.message));
  }
}

function* getOneFilm(action) {
  const {
    actions: { getOneFilm, errorMesage },
  } = filmReducers;
  try {
    const films = yield call(() =>
      axios({
        method: "GET",
        url: `${API_URL.Id}${action.id}`,
      })
    );

    yield put(getOneFilm(films.data));
  } catch (e) {
    yield put(errorMesage(e.message));
  }
}

export default function* mySaga() {
  yield takeEvery("GET_FILMS", getFilmsList);
  yield takeEvery("GET_ONE_FILM", getOneFilm);
}
