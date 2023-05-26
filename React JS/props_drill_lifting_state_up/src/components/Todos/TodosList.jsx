import React from 'react'
import TodoItem from './TodoItem'
import classes from "./TodoList.module.css"
const TodosList = ({todos}) => {
    todos = todos.sort((a,b)=>new Date(a.date).getTime() - new Date(b.date).getTime() );
    console.log(todos);
  return (
    <div className={classes.todos}>
        {todos.map(todo=>{
            return <TodoItem key={todo} todo={todo} />
        })}
    </div>
  )
}

export default TodosList