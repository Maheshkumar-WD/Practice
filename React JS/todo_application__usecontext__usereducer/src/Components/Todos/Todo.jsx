import React, { useContext, useState } from "react";
import classes from "./todo.module.css";
import { AppContext } from "../../Context/App/appContext";
const Todo = ({ todo }) => {
  let [text, setText] = useState("");
  let appCtx = useContext(AppContext);
  let handleEdit = () => {
    appCtx.actions.currEdit(todo.id);
  };
  let handleUpdate = () => {
    appCtx.actions.edit(todo.id, text);
  };
  let handleChange = (e) => {
    setText(e.target.value);
  };

  let handleDelete = () => {
    appCtx.actions.delete(todo.id);
  };
  let tr =
    appCtx.data.ui.currentEdit === todo.id ? (
      <tr>
        <td className={classes.td}>
          <input
            className={classes.editTodoInput}
            onChange={handleChange}
            type="text"
            defaultValue={todo.title}
          />
        </td>
        <td>
          <button className={classes.updateBtn} onClick={handleUpdate}>
            Update
          </button>
          <button className={classes.updateBtn} onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    ) : (
      <tr>
        <td className={classes.td}>{todo.title}</td>
        <td>
          <button className={classes.editBtn} onClick={handleEdit}>
            Edit
          </button>
          <button className={classes.updateBtn} onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  return <>{tr}</>;
};

export default Todo;
