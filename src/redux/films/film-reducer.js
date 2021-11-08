import { actionTypes } from "./action-types";

const initialState = [
  { id: 1, title: "La vida de Bryan", age: "1970" },
  { id: 2, title: "Los caballeros de la mesa cuadrada", age: "1976" },
  { id: 3, title: "La bestia del reino", age: "1980" },
];

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.add:
      const newFilm = action.payload;
      newFilm.id = state[state.length - 1].id + 1;
      return [...state, newFilm];

    case actionTypes.delete:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};
