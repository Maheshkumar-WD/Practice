import React from "react";
import classes from "./LoginForm.module.css"
const LoginForm = () => {
  return (
    <>
      <form>
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
      </form>
    </>
  );
};

export default LoginForm;
