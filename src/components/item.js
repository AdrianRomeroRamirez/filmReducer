import React from "react";
import "./item.css";
import { filmStore } from "../redux/films/store";
import * as actions from "../redux/films/action-creators";

const Item = ({ film }) => {
  const handleDelete = () => {
    filmStore.dispatch(actions.deleteFilm(film.id));
  };

  return (
    <li className="film-list__item">
      <p>{film.title}</p>
      <p>{film.age}</p>
      <span data-testid={`delete${film.id}`} onClick={handleDelete}>
        x
      </span>
    </li>
  );
};

export default Item;
