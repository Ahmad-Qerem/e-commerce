import styles from "./styles.module.css"
import NewTitle from "./NewTitle";
import CardHover from "./CardHover";
const Card = ( {thumbnail,New,description,price,onClick,index1})=>{
    return (
        <div className={styles.MyCard}>
            <CardHover onClick2={onClick} index2={index1}/>
            {New?<NewTitle/>:<></>}
            <img className={styles.MyImage2} src={thumbnail} alt="new clothes"/>
            <div className={styles.Description}>
                <p className={styles.MyP}>{description}</p>
                <span className={styles.MySpan2}>$ {price}</span>        
            </div>
        </div>
    );
};
export default Card;