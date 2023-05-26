import React from 'react'
import classes from "./TodoItem.module.css";
const TodoItem = ({todo}) => {
    let priorityClass = "";
    if(todo.priority==="low"){
        priorityClass = classes.priority_low;
    }else if(todo.priority === "medium"){
        priorityClass = classes.priority_medium;
    }else {
        priorityClass = classes.priority_high;
    }
  return (
    <div className={`${classes.todo} ${priorityClass}`}>
        <div className=''>
            <h2>{todo.title}</h2>
            <p>{todo.date}</p>
        </div>
        <div className="actions"><button>Edit</button><button>Delete</button></div>
    </div>
  )
}

export default TodoItem