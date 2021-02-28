import React, { FC, useState } from "react";
import { IErrorMessage } from "../../common/types/error-code.types";

import PopUpMessage from "../../components/message-popup/popup.component";

import Modal from "@material-ui/core/Modal";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import "./login.page.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 500,
      height: 450,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

const Login: FC = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [valueOfModalsInput, setValueOfModalsInput] = useState("");

  let errorData: IErrorMessage = { message: "Mesaj 1", code: 0, status: true };

  const handleLogin = () => {
    if (errorData.status) setOpen(true);
  };

  const changeHandleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const mailFormatControl = (email: string) => {
    const mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (mailFormat.test(email.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  };

  const handleModalOpen = (email: string) => {
    setOpenModal(true);
    if (mailFormatControl(email)) {
      setValueOfModalsInput(email);
    }
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const changeHandleModal = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueOfModalsInput(event.target.value);
  };

  const body = (
    <div style={modalStyle} className={classes.paper} id="modal-div">
      <div className="login-form-container modal-container">
        <h4 id="simple-modal-title">Forgot your pass, huh?</h4>
        <br/>
        <p id="simple-modal-description">E-Mail:</p>
        <input
          className="nes-input"
          type="text"
          value={valueOfModalsInput}
          onChange={(e) => {
            changeHandleModal(e);
          }}
        />
        <br/>
       <a className="nes-btn" href="#">Send Request</a>
      </div>
    </div>
  );

  return (
    <div className="container-login">
      {open && (
        <PopUpMessage
          message={errorData.message}
          format="warning"
          popUpShow={open}
          setOpen={setOpen}
        />
      )}
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
              value={email}
              onChange={(e) => {
                changeHandleEmail(e);
              }}
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
          <div className="reminder nes-pointer">
            <span
              onClick={(e) => {
                handleModalOpen(email);
              }}
            >
              Forgot password?
            </span>
          </div>
          <br />
          <div className="button-login-container">
            <span
              className="button-login nes-pointer"
              onClick={(e) => {
                handleLogin();
              }}
            >
              Login
            </span>
          </div>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default Login;
