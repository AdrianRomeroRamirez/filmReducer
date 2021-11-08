import { actionTypes } from "./action-types";

export const addFilm = (payload) => ({
  type: actionTypes.add,
  payload,
});

export const deleteFilm = (payload) => ({
  type: actionTypes.delete,
  payload,
});
