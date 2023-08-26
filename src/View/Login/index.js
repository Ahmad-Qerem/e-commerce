import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import styles from "./styles.module.css";
import { Link, redirect, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import CustomTextField from "./CustomTextField";
import CustomTextFieldPassword from "./CustomTextFieldPassword";
import LogInBody from "./LogInBody";
import { useUserProvider } from "../../Context/UserProvider";
import { useEffect } from "react";
const sxStyles1 = [
  {
    height: "50px",
    border: "3px solid rgba(51, 51, 58, 1)",
    textTransform: "uppercase",
    backgroundColor: "rgba(51, 51, 58, 1)",
  },
  {
    "&:hover": {
      border: "3px solid rgba(51, 51, 58, 1)",
      color: "rgba(51, 51, 58, 1)",
      backgroundColor: "white",
    },
  },
];
const sxStyles2 = [
  {
    "&:hover": {
      border: "3px solid rgba(51, 51, 58, 1)",
      color: "white",
      backgroundColor: "rgba(51, 51, 58, 1)",
    },
  },
  {
    border: "3px solid rgba(51, 51, 58, 1)",
    color: "rgba(51, 51, 58, 1)",
    textTransform: "uppercase",
    height: "50px",
    backgroundColor: "white",
  },
];

const Login = () => {
  const { UserLogIn, Authenticated } = useUserProvider();
  const [DataForme, SetDataForme] = useState({
    UserName: "",
    Password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [Valid, SetValid] = useState(false);

  const HandelChange = (e, type) => {
    switch (type) {
      case "Name":
        SetDataForme({ ...DataForme, UserName: e.target.value });
        break;
      case "Password":
        SetDataForme({ ...DataForme, Password: e.target.value });
        break;
      default:
        break;
    }
  };
  const HandelSubmit = () => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
    if (DataForme.UserName.match(validRegex)) {
      SetValid(UserLogIn(DataForme.UserName, DataForme.Password));
      if (Authenticated) {
        navigate("/");
      }
    } else {
      SetValid(true);
    }
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    console.log(Authenticated);
    if (Authenticated) {
      navigate("/");
    }
  }, [Authenticated]);

  return (
    <LogInBody>
      <FormControl>
        <div className={styles.TextFelids}>
          <CustomTextField
            UserName={DataForme.UserName}
            HandelChange={HandelChange}
          />
          <CustomTextFieldPassword
            HandelChange={HandelChange}
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
          />
        </div>
        <div className={styles.TwoButtons}>
          <Button
            type="submit"
            onClick={HandelSubmit}
            variant="contained"
            sx={sxStyles1}
          >
            Log In
          </Button>

          <Link to="/SignUp" className={styles.class1}>
            <Button variant="outlined" sx={sxStyles2}>
              Register
            </Button>
          </Link>
        </div>

        <div className={`${styles.Validator} ${Valid ? "" : styles.Valid}`}>
          Invalid Email Or Password
        </div>
      </FormControl>
    </LogInBody>
  );
};

export default Login;
