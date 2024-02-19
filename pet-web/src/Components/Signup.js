import React from 'react';
import Style from "../Stylesheets/Signup.module.css";

function Signup() {
  return (
    <div className={Style.signup_form}>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" className={Style.username} name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" className={Style.password} name="password" />
        <label htmlFor="password">Re-enter Your Password:</label>
        <input type="password" className={Style.password} name="password" />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Signup;