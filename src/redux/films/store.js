import { createStore } from "redux";
import { filmReducer } from "./film-reducer";

export const filmStore = createStore(
  filmReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
