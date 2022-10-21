import styles from "./styles.module.css"
import NewTitle from "./NewTitle";
import CardHover from "./CardHover";
const Card = ( {ImagePath,New,Description,Price,onClick,index1})=>{
    return (
        <div className={styles.MyCard}>
            <CardHover onClick2={onClick} index2={index1}/>
            {New?<NewTitle/>:<></>}
            <img className={styles.MyImage2} src={`./images/${ImagePath}`} alt="new clothes"/>
            <div className={styles.Description}>
                <p className={styles.MyP}>{Description}</p>
                <span className={styles.MySpan2}>{Price}</span>        
            </div>
        </div>
    );
};
export default Card;