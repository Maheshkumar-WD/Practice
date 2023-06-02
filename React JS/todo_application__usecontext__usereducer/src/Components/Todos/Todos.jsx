import React, { useContext } from "react";
import { AppContext } from "../../Context/App/appContext";
import Todo from "./Todo";
import classes from "./Todos.module.css"
const Todos = () => {
  const store = useContext(AppContext);
  console.log(store)

  return (
    <div>
      <table className={classes.todosTable}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {store?.data?.app?.todos?.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
