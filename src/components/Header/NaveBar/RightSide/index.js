import styles from"./styles.module.css";

const RightSide = ( )=>{
    
    return(
        <div className={styles.RightSide}>
            <div  className={styles.LogIn}>login</div>
            <a href=""><img className={styles.MyImg} src="./images/search.svg" alt="search"/></a>
            <a href=""><img className={styles.MyImg} src="./images/heart.svg" alt="favorite"/></a>
            <a href=""><img className={styles.MyImg} src="./images/Shape.svg" alt="shop"/></a>
        </div>
    );
};
export default RightSide;
