import React from "react";
import Style from "../Stylesheets/Login.module.css";

const LoginForm = () => {
  return (
    <div className={Style.login_form}>
      <h1>Sign In</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" className={Style.username} name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" className={Style.password} name="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;