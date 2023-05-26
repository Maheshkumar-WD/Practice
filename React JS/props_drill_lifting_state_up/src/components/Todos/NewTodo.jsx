import React, {useState} from 'react'
import classes from "./NewTodo.module.css"
let initialState = {title:"",date:"",priority:""}
const NewTodo = ({onSubmit,onClose}) => {
    
    let [formData,setFormData] = useState(initialState)
   let handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(formData);
        setFormData(initialState);
        onClose()
    }
   const handleChange = (e)=>{
    let {name,value} = e.target;
        setFormData(state=>{
            return {
                ...state,
                [name]:value
            }
        })
   }
  return (
    <>
        <form onSubmit={handleSubmit} >
            <h2>Add New Todo</h2>
            <input placeholder='New Todo' onChange={handleChange} type="text" name="title" id="title" value={formData.title} required />
            <input onChange={handleChange} type="date" name="date" id="date" value={formData.date} required />
            <select onChange={handleChange} name='priority' id='priority' value={formData.priority} required>
                <option value="">select priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <div className={classes.form_actions}>
            <button type="submit" className={`${classes.btn} ${classes.success}`}>Add Todo</button>
            <button type="button" className={`${classes.btn} ${classes.cancle}`} onClick={onClose}>Cancle</button>

            </div>
        </form>
    </>
  )
}

export default NewTodo