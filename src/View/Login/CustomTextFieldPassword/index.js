import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
const CustomTextFieldPassword = ({
  HandelChange,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
}) => {
  return (
    <div className={styles.InputFelid}>
      <i className="fa-solid fa-lock"></i>
      <TextField
        onChange={(e) => HandelChange(e, "Password")}
        sx={{ m: 1, width: "225px" }}
        variant="standard"
        id="standard-adornment-password"
        type={showPassword ? "text" : "password"}
        label="Password"
      />
      <InputAdornment sx={{ position: "absolute", right: "5px" }}>
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    </div>
  );
};

export default CustomTextFieldPassword;
