import React from "react";
import { useState } from "react";
import { filmStore } from "../redux/films/store";
import * as actions from "../redux/films/action-creators";

const Form = () => {
  const [filmForm, setFilmForm] = useState({ title: "", age: "" });

  const handleAdd = () => {
    filmStore.dispatch(actions.addFilm(filmForm));
    setFilmForm({ title: "", age: "" });
  };

  return (
    <div>
      <form>
        <label for="name">Name:</label>
        <input
          id="name"
          onChange={(event) =>
            setFilmForm({ ...filmForm, title: event.target.value })
          }
          type="text"
        ></input>
        <label for="age">Age:</label>
        <input
          id="age"
          onChange={(event) =>
            setFilmForm({ ...filmForm, age: event.target.value })
          }
          type="text"
        ></input>
        <button type="reset" onClick={handleAdd}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
