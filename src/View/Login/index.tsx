import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import * as React from "react";
import styles from "./styles.module.css";
import { VisibilityOff, Visibility } from "@mui/icons-material";
interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const Login = () => {
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.BoxWrapper}>
        <div className={styles.TopWrapper}>
          <img src="./images/User.png" className={styles.UserImage}/>
        </div>

        <div className={styles.BottomWrapper}>
          <div className={styles.TextFelids}>
            <div className={styles.InputFelid}>
              <i className="fa-solid fa-user"></i>
              <TextField sx={{ m: 1}} id="standard-basic" label="Email | ID" variant="standard" className={`${styles.UserText} ${styles.Width}`}/>
            </div>
            <div className={styles.InputFelid}>
              <i className="fa-solid fa-lock"></i>
              <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  className={styles.Width}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            
          </div>
          <div className={styles.TwoButtons}>
            <Button variant="contained" className={styles.class2}>Log In</Button>
            <Button variant="outlined" className={styles.class3}>Register</Button>
          </div>
          <div className={styles.ForgetPassword}>
            <Button variant="text" classes={styles.class1}>Reset Password</Button>
            <div className={styles.Bar}>|</div>
            <Button variant="text" className={styles.class1}>Policy</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
