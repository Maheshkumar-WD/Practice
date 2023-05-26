import React from "react";
import classes from "./TodoList.module.css";
import DateWiseTodosWrapper from "../wrappers/DateWiseTodosWrapper";
const TodosList = ({ todos }) => {
  todos = todos.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  let datesWiseTodos = {};
  for (let i = 0; i < todos.length; i++) {
    if (datesWiseTodos[todos[i].date]) {
      datesWiseTodos[todos[i].date].push(todos[i]);
    } else {
      datesWiseTodos[todos[i].date] = [todos[i]];
    }
  }

  let renderedList = (
    <>
      {Object.keys(datesWiseTodos).map((date) => {
        let currDate = new Date(new Date().toLocaleDateString());
        let todoDate = new Date(new Date(date).toLocaleDateString()).getTime();
        let stringDate = `${currDate.getFullYear()}-${currDate.getMonth()+1}-${currDate.getDate()+1}`
        let tomorrowDate = new Date(new Date(stringDate).toLocaleDateString());
        let day = todoDate === currDate.getTime()?"Today":todoDate === tomorrowDate.getTime()?"Tomorrow":date
        return (
          <>
           <DateWiseTodosWrapper date={day} todos={datesWiseTodos[date]} />
          </>
        );
      })}
    </>
  );

  return <div className={classes.todos}>{renderedList}</div>;
};

export default TodosList;
