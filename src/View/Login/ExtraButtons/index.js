import { Button } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
const ExtraButtons = () => {
  return (
    <div className={styles.ForgetPassword}>
      <Button variant="text" className={styles.class1}>
        Reset Password
      </Button>
      <div className={styles.Bar}>|</div>
      <Button variant="text" className={styles.class1}>
        Policy
      </Button>
    </div>
  );
};

export default ExtraButtons;
