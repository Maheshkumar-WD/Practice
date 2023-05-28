import React from "react";
import { ADD } from "../../Reducer/actionTypes";
import classes from "./UserForm.module.css";
// import { useStore } from "../../store/store";
const UserForm = ({ users, dispatcher }) => {
  console.log("users from user form", users);
  let [formData, setFormData] = React.useState({
    name: "",
    email: "",
    age: "",
    disable: false,
  });
  // let users = useStore();
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
    let isFind = users.findIndex((user) => user.email === formData.email);
    if (isFind < 0) {
      setFormData({ name: "", email: "", age: "", disable: false });
      dispatcher({ type: ADD, payload: formData });
    } else {
      alert("User Already Registered!");
    }
  };
  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h3>Add New User</h3>
        <input
          type="text"
          onChange={onchange}
          name="name"
          value={formData.name}
          placeholder="Enter Your Name"
          required
        />
        <input
          type="email"
          onChange={onchange}
          name="email"
          value={formData.email}
          placeholder="Enter Email"
          required
        />
        <input
          type="number"
          onChange={onchange}
          name="age"
          value={formData.age}
          placeholder="Enter Age"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserForm;
