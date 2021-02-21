import React, { FC } from "react";

import './login.page.css';

const Login: FC = () => {
  return (
    <div className="container-login">
      <div
        className="nes-container with-title is-centered"
        id="login-form-container"
      >
        <p className="title" id="title">
          Welcome to Login!
        </p>

        <div id="login-form-container">
          <div className="item-holder-login">
            <div className="nes-field">
              <label htmlFor="name_field" id="label-register">
                E-Mail
              </label>
              <input
                type="text"
                className="textbox-login"
              ></input>
            </div>
          </div>
          <div className="item-holder-login">
            <div className="nes-field">
              <label htmlFor="name_field" id="label-register">
                Password
              </label>
              <input
                type="password"
                className="textbox-login"
              ></input>
            </div>
          </div>
          <div className="item-holder-login">
            <div className="button-login-container">
              <span className="button-login nes-pointer">Register</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
