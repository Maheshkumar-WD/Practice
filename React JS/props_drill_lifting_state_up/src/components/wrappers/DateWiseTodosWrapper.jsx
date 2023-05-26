import React, { useState } from 'react'
import TodoItem from '../Todos/TodoItem'
import classes from "./DateWiseTodosWrapper.module.css"
const DateWiseTodosWrapper = ({todos,date}) => {
    let [show,setShow] = useState(false)
    let handleShow = ()=>{
        setShow(prev=>!prev);
    }
  return (
    <>
        <h3 className={classes.titledDate}><p>{date}</p><span onClick={handleShow}>{!show?"+":"-"}</span></h3>
        {show &&
            todos.map(todo=>{
                return <TodoItem todo={todo} />
            })
        }
    </>
  )
}

export default DateWiseTodosWrapper