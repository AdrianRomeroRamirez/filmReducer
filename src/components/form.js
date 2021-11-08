import React from "react";
import { useState } from "react";
import { filmStore } from "../redux/films/store";
import * as actions from "../redux/films/action-creators";

const Form = () => {
  const [filmForm, setFilmForm] = useState({ title: "", age: "" });

  const handleAdd = () => {
    filmStore.dispatch(actions.addFilm(filmForm));
  };

  return (
    <div>
      <form>
        <label>Name:</label>
        <input
          onChange={(event) =>
            setFilmForm({ ...filmForm, title: event.target.value })
          }
          type="text"
        ></input>
        <label>Age:</label>
        <input
          onChange={(event) =>
            setFilmForm({ ...filmForm, age: event.target.value })
          }
          type="text"
        ></input>
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
