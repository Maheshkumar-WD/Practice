import React from "react";
import { ADD } from "../../Reducer/actionTypes";
import classes from "./UserForm.module.css"
const UserForm = ({ dispatcher }) => {
  let [formData, setFormData] = React.useState({name:"",email:"",age:"", disable: false });
  const onchange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatcher({ type: ADD, payload: formData });
    setFormData({name:"",email:"",age:"", disable: false });
  };
  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={onchange}
          name="name"
          value={formData.name}
          placeholder="Enter Your Name"
        />
        <input
          type="email"
          onChange={onchange}
          name="email"
          value={formData.email}
          placeholder="Enter Email"
        />
        <input
          type="number"
          onChange={onchange}
          name="age"
          value={formData.age}
          placeholder="Enter Age"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserForm;
