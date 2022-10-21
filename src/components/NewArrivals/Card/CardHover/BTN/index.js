import styles from "./styles.module.css"
const BTN = ({onClick3,index3,Text})=>{
    return(
        <div className={styles.MyBTN} onClick={(e)=>onClick3(e,index3)}>{Text}</div>
    );
};

export default BTN; 