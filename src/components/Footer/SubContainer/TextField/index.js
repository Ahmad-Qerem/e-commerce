import styles from "./styles.module.css"

const TextField = ()=>{
    return(
        <input className={styles.TextField} type="text" placeholder="Enter your email"></input>
    );
};
export default TextField;