import styles from "./styles.module.css"

const TextField = ()=>{
    return(
        <div >
            <input className={styles.TextField} type="text" placeholder="Enter your email"></input>
        </div>
    );
};
export default TextField;