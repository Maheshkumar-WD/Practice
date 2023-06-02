import React, { useContext, useRef } from "react";
import { AppContext } from "../../Context/App/appContext";
import { v4 as id } from "uuid";

const TodoForm = () => {
  let inputRef = useRef("");
  let contextStore = useContext(AppContext);
  let handleSubmit = (e) => {
    e.preventDefault();
    contextStore.actions.add({ id:id(), title: inputRef.current.value });
    inputRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
