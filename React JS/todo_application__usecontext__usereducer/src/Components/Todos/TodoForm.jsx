import React, { useContext, useRef } from "react";
import { AppContext } from "../../Context/App/appContext";
import { v4 as id } from "uuid";
import classes from "./TodoForm.module.css"
const TodoForm = () => {
  let inputRef = useRef("");
  let contextStore = useContext(AppContext);
  let handleSubmit = (e) => {
    e.preventDefault();
    contextStore.actions.add({ id:id(), title: inputRef.current.value });
    inputRef.current.value = "";
  };
  return (
    <div className={classes.formContainer}>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
