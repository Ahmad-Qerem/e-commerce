import styles from "./styles.module.css"
import CardHover from "../CardHover/index"
const ShopCards=({ImagePath,Title})=>{
    return(
        <div className={styles.Card}>
            <CardHover/>
            <img className={styles.CardImage} src={`./images/${ImagePath}`}/>
            <div className={styles.CardTitle}>{Title}</div>
        </div>
    );
};

export default ShopCards;