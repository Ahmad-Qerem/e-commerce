import styles from "./styles.module.css";
import { Button, TextField } from "@mui/material";
const sxStyles1 = {
  mx: 2,
  fontSize: "14px",
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: "0px",
  textAlign: "left",
  lineHeight: "20px",
  textTransform: "uppercase",
  backgroundColor: "white",
  borderRadius: "0",
};
const sxStyles2 = [
  {
    "&:hover": {
      border: "3px solid ",
      color: "white",
      backgroundColor: "rgba(51, 51, 58, 1)",
    },
  },
  {
    border: "3px solid rgba(51, 51, 58, 1)",
    color: "rgba(51, 51, 58, 1)",
    fontSize: "12px",
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: "2px",
    textAlign: "center",
    lineHeight: "20px",
    textTransform: "uppercase",
    height: "50px",
    width: "166px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: "0",
  },
];
const SubContainer = () => {
  return (
    <div className={styles.SubMainContainer}>
      <div className={styles.SubTitle}>Subscribe to newsletter</div>
      <div className={styles.TwoInputs}>
        <TextField
          sx={sxStyles1}
          id="outlined-basic"
          label="Enter your email"
          variant="filled"
        />
        <Button variant="contained" sx={sxStyles2}>
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
