import styles from "./styles.module.css";
import { Button, TextField } from "@mui/material";
const SubContainer = () => {
  return (
    <div className={styles.SubMainContainer}>
      <div className={styles.SubTitle}>Subscribe to newsletter</div>
      <div className={styles.TwoInputs}>
        <TextField
          id="outlined-basic"
          label="Enter your email"
          variant="filled"
          className={styles.TextField}
        />
        <Button variant="contained" className={styles.Button}>
          Subscribe
        </Button>
      </div>

      <div>
        <img className={styles.MyIcons} src="./images/Facebook.svg" />
        <img className={styles.MyIcons} src="./images/Twitter.svg" />
      </div>
    </div>
  );
};

export default SubContainer;
