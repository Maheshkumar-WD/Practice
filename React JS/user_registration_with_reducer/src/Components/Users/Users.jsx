import React from "react";
import classes from "./Users.module.css"
import { DISABLE } from "../../Reducer/actionTypes";
const Users = ({ users,dispatcher }) => {
  let onCheckHandler = (e,email)=>{
    let status = (e.target.checked)
    dispatcher({type:DISABLE,payload:{email,status}});
  }
  return (
    <>
      <table className={classes.table}>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Account Status</th>
          <th>Disable</th>
        </tr>

        {users.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td><span className={user.disable?classes.disabled:classes.enabled}>{user.disable?"Disabled":"Enabled"}</span></td>
            <td><input type="checkbox" checked={user.disabled} onChange={(e)=>onCheckHandler(e,user.email)} /></td>
            <td></td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Users;
