import React, {  useState } from "react";
import classes from "./Form.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import Card from "../UI/Card/Card";
import axios from "axios";
let initData = {
  email: "",
  password: "",
  confirmPassword: "",
};
const SignupForm = () => {
  let navigate = useNavigate();
  let [formData, setFormData] = useState(initData);
console.log(process.env.REACT_APP_USERS)
  let onRegister = async (e) => {
    e.preventDefault();
    let url = process.env.REACT_APP_USERS;
    let response = await axios.post(url, {
      ...formData,
    });
    if (response.status === 200) {
      alert("Registered Successfully");
      return navigate("/login");
    } else {
      alert("failed");
    }
    console.log(response);
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <form onSubmit={onRegister}>
        <Card>
          <h2 className={classes.formTitle}>Sign up</h2>
          <div className={classes["form-controls"]}>
            <label htmlFor="email">Email</label>
            <input
              value={formData.email}
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className={classes["form-controls"]}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className={classes["form-controls"]}>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleChange}
            />
          </div>

          <div className={classes["form-actions"]}>
            <button className={classes.loginBtn}>Login</button>
          </div>
          <div className={classes.formFooter}>
            <p>
              Already Signed up?{" "}
              <NavLink className={classes.formFooterLink} to={"/login"}>
                Login Here
              </NavLink>
            </p>
          </div>
        </Card>
      </form>
    </>
  );
};

export default SignupForm;
