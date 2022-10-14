import styles from "./styles.module.css"
import NewTitle from "./NewTitle";
import CardHover from "./CardHover";
const Card = ( {ImagePath,New,Description,Price})=>{
    return (
        <div className={styles.MyCard}>
            <CardHover/>
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