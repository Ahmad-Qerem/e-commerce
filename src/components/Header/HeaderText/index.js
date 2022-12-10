import styles from "./styles.module.css";
const HeaderText = ({ text }) => {
  return <div className={styles.headerContainer}>{text} </div>;
};
export default HeaderText;