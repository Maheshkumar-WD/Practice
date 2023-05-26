import React, { useState } from 'react'
import classes from "./TodoWrapper.module.css"
import TodosList from '../Todos/TodosList';
const TodoWrapper = ({todos}) => {
    let [showTodoItems,setShowTodoItems] = useState(true);
  return (
    <div className={classes.Wrapper}>
        <h1 className={`${classes.arrow} `} ><span>{showTodoItems?"Hide Todos":"Show Todos"}</span><span onClick={()=>setShowTodoItems(prev=>!prev)}>{showTodoItems ?<>&uarr;</>:<>&darr;</>}</span></h1>
        {showTodoItems && <TodosList todos={todos} />}
    </div>
  )
}

export default TodoWrapper