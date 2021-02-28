import React, { FC } from "react";

import { IPopUpProps } from "../../common/types/error-code.types";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const PopUpMessage: FC<IPopUpProps> = (props) => {
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    props.setOpen(false);
  };
  return (
    <Snackbar
      open={props.popUpShow}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={props.format}>
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default PopUpMessage;
