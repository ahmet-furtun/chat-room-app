import React, { FC } from "react";
import { IRegisterObject } from "../../common/types/register.types";

import "./register.page.css";

let holdRegisterObject: IRegisterObject = {
  email: "",
  password: "",
  date: "",
};
let isPasswordsMatch = false;
let tmp = "";

const Register: FC = () => {
  const [progressStatus, setProgressStatus] = React.useState<string>(
    "nes-progress is-error"
  );
  const [progressValue, setProgressValue] = React.useState<number>(0);
  const [registerObject, setRegisterObject] = React.useState<IRegisterObject>(
    holdRegisterObject
  );
  const [mailClass, setMailClass] = React.useState<string>("textbox-register");
  const [passClass, setPassClass] = React.useState<string>("textbox-register");

  const stringCheck = (data: string) => {
    // eslint-disable-next-line
    var format = /[ "=':;)(]/;
    for (let i = 0; i < data.length; i++) {
      if (format.test(data)) {
        return false;
      }
    }
    return true;
  };

  const progressCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    let password = event.target.value;
    let score = 0;
    // eslint-disable-next-line
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    let upperFlag = false;
    let specialFlag = false;
    let lowerFlag = false;

    let isCorrectType = stringCheck(password);

    if (isCorrectType) {
      for (let i = 0; i < password.length; i++) {
        let ascii = password[i].charCodeAt(0);
        if (ascii <= 90 && ascii >= 65) upperFlag = true;
        if (ascii <= 122 && ascii >= 97) lowerFlag = true;
        if (format.test(password)) specialFlag = true;
      }
      if (upperFlag && lowerFlag) {
        score += 30;
      }
      if (specialFlag) {
        score += 40;
      }
      if (password.length >= 6) {
        score += 30;
      }
      setProgressValue(score);
      if (score >= 40) setProgressStatus("nes-progress is-warning");
      if (score > 70) {
        setProgressStatus("nes-progress is-success");
        holdRegisterObject.password = event.target.value;
        setRegisterObject(holdRegisterObject);
      } else {
        holdRegisterObject.password = "";
        setRegisterObject(holdRegisterObject);
      }
    } else {
      event.target.value = tmp;
      console.log("FORMAT YANLIŞ: " + event.target.value);
    }
    tmp = event.target.value;
  };

  const setMail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (mailFormat.test(event.target.value.toLowerCase())) {
      setMailClass("textbox-register-success");
    } else {
      setMailClass("textbox-register-error");
    }
    if (event.target.value === "") setMailClass("textbox-register");
    holdRegisterObject.email = event.target.value;
    setRegisterObject(holdRegisterObject);
  };

  const isPassMatch = (
    event: React.ChangeEvent<HTMLInputElement>,
    password: string,
    setPassClass = (passClass: string) => {}
  ) => {
    if (password === event.target.value) {
      setPassClass("textbox-register-success");
      isPasswordsMatch = true;
    } else {
      setPassClass("textbox-register-error");
    }
    if (event.target.value === "") setPassClass("textbox-register");
  };

  const registerClick = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    if (isPasswordsMatch) {
      isPasswordsMatch = false;
    } else {
    }
  };

  return (
    <div className="container-register">
      <div
        className="nes-container with-title is-centered"
        id="register-form-container"
      >
        <p className="title" id="title">
          Welcome to Register!
        </p>

        <div className="form-container">
          <div className="nes-field">
            <label htmlFor="name_field" id="label-register">
              E-Mail
            </label>
            <input
              type="text"
              className={mailClass}
              onChange={(e) => {
                setMail(e);
              }}
            ></input>
          </div>
          <br />
          <div className="nes-field">
            <label htmlFor="password_field" id="label-register">
              Your Password
            </label>
            <input
              type="password"
              className={passClass}
              onChange={(e) => progressCheck(e)}
            ></input>
          </div>
          <br />
          <div className="nes-field">
            <label htmlFor="password_field" id="label-register">
              Your Password (Again)
            </label>
            <input
              type="password"
              className={passClass}
              onChange={(e) =>
                isPassMatch(e, registerObject.password, setPassClass)
              }
            ></input>
          </div>
          <br />
          <div className="nes-field">
            <progress
              className={progressStatus}
              id="progress-register"
              value={progressValue}
              max="100"
            ></progress>
          </div>
          <br />
          <div className="nes-field">
            <label id="label-register">Date of Birth</label>
            <input
              type="date"
              className="textbox-register nes-pointer"
              id="date-register"
            ></input>
          </div>
          <br />
          <div className="button-register-container">
            <span
              className="button-register nes-pointer"
              onClick={(e) => {
                registerClick(e);
              }}
            >
              Register
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
