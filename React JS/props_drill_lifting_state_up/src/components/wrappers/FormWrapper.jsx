import React, { useState } from 'react'
import NewTodo from '../Todos/NewTodo'
import classes from "./formWrapper.module.css"
import formClasses from "../Todos/NewTodo.module.css"
const FormWrapper = ({currLength,onSubmit}) => {
    let [showForm,setShowForm] = useState(false);
    let handleShowForm = ()=>{
        setShowForm(state=>!state)
    }
    // !false === true
    // !true === false
  return (
    <div className={classes.formWrapper}>
      if false {!showForm && <button className={`${classes.add} ${formClasses.btn}`} onClick={handleShowForm}>Add New Todo</button>}
      if true {showForm && <NewTodo onSubmit={onSubmit} currLength={currLength} onClose={handleShowForm} />}
    </div>
  )
}

export default FormWrapper