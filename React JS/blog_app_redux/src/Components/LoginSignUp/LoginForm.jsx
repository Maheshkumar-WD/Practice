import React from "react";
import classes from "./Form.module.css";
import { NavLink } from "react-router-dom";
import Card from "../UI/Card/Card";
const LoginForm = () => {
  return (
    <>
      <form>
        <Card>
          <h2 className={classes.formTitle}>Login</h2>
          <div className={classes["form-controls"]}>
            <label htmlFor="username">User Name or Email</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className={classes["form-controls"]}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className={classes["form-actions"]}>
            <button className={classes.loginBtn}>Login</button>
          </div>
          <div className={classes.formFooter}>
            <p>
              Not Signed up?{" "}
              <NavLink className={classes.formFooterLink} to={"/signup"}>
                Sign up Here
              </NavLink>
            </p>
          </div>
        </Card>
      </form>
    </>
  );
};

export default LoginForm;
