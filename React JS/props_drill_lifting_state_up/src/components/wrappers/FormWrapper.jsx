import React, { useState } from 'react'
import NewTodo from '../Todos/NewTodo'
import classes from "./formWrapper.module.css"
import formClasses from "../Todos/NewTodo.module.css"
const FormWrapper = ({currLength,onSubmit}) => {
    let [showForm,setShowForm] = useState(false);
    let handleShowForm = ()=>{
        setShowForm(state=>!state)
    }
  return (
    <div className={classes.formWrapper}>
        {!showForm && <button className={`${classes.add} ${formClasses.btn}`} onClick={handleShowForm}>Add New Todo</button>}
       {showForm && <NewTodo onSubmit={onSubmit} currLength={currLength} onClose={handleShowForm} />}
    </div>
  )
}

export default FormWrapper