import styles from "./styles.module.css"
import TextField from "./TextField";
import SubmitBTN from "./SubmitBTN";
const SubContainer=()=>{
    return(
        <div className={styles.SubMainContainer}>
            <div className={styles.SubTitle}>
                Subscribe to newsletter
            </div>
            <div className={styles.myForm}>
                <TextField/>
                <SubmitBTN/>
            </div>
            <div >
                <img className={styles.MyIcons} src="./images/Facebook.svg"/>
                <img className={styles.MyIcons} src="./images/Twitter.svg"/>

            </div>
        </div>
    );
};

export default SubContainer; 