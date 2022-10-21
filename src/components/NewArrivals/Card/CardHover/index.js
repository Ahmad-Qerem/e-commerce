import styles from "./styles.module.css"
import BTN from "./BTN/index"
const CardHover = ({onClick2,index2})=>{
    return(
        <div className={styles.Hovering}>
            <BTN onClick3={onClick2} index3={index2} Text={"QUICK VIEW"}/>
        </div>
    );
};
export default CardHover;