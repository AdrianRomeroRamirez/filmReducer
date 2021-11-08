import React from "react";
import Item from "./item";
import { useState, useEffect } from "react";
import { filmStore } from "../redux/films/store";

const List = () => {
  const [state, setState] = useState([{ id: 0, name: "", age: "0" }]);

  useEffect(() => {
    setState(filmStore.getState());
    filmStore.subscribe(() => {
      setState(filmStore.getState());
    });
  }, []);

  const listFilms = state.map((film) => {
    return <Item key={film.id} film={film} />;
  });

  return (
    <div>
      <ul className="film-list">{listFilms}</ul>
    </div>
  );
};

export default List;
