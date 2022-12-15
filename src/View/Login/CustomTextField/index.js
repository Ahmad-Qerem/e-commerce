import { TextField } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
const CustomTextField = ({ UserName, HandelChange }) => {
  return (
    <div className={styles.InputFelid}>
      <i className="fa-solid fa-user"></i>
      <TextField
        sx={{ m: 1, width: "225px" }}
        id="standard-basic"
        label="Email | ID"
        variant="standard"
        value={UserName}
        onChange={(e) => HandelChange(e, "Name")}
      />
    </div>
  );
};

export default CustomTextField;
