import React from "react";
import ExtraButtons from "../ExtraButtons";
import styles from "./styles.module.css";
const LogInBody = ({ children }) => {
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.BoxWrapper}>
        <div className={styles.TopWrapper}>
          <img src="./images/User.png" className={styles.UserImage} />
        </div>
        <div className={styles.BottomWrapper}>
          {children}
          <ExtraButtons />
        </div>
      </div>
    </div>
  );
};

export default LogInBody;
