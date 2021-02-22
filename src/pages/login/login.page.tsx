import React, { FC } from "react";

import "./login.page.css";

const Login: FC = () => {
  return (
    <div className="container-login">
      <div
        className="nes-container with-title is-centered"
        id="login-form-container"
      >
        <p className="title" id="title-login">
          Welcome to Login!
        </p>

        <div className="login-form-container">
          <div className="nes-field">
            <label htmlFor="name_field" id="label-login">
              E-Mail
            </label>
            <input
              type="text"
              className="textbox-login"
            ></input>
          </div>
          <br />
          <div className="nes-field">
            <label htmlFor="password_field" id="label-login">
              Your Password
            </label>
            <input
              type="password"
              className="textbox-login"
              onChange={(e) => {}}
            ></input>
          </div>
          <br />
          <div className="button-login-container">
            <span className="button-login nes-pointer" onClick={(e) => {}}>
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
