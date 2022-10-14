import styles from "./styles.module.css"


const ListItemsText = ["shop","fabric","journal","about"];

const BurgerMenu = (  )=> {
    return(
        <div className={styles.MyBurgerMenu}>
            <img className={styles.IconBM} src="./images/icon-hamburger.svg"/>
            <div className={styles.Menu}>
                {
                    ListItemsText.map((item)=>{
                        return(
                            <div className={styles.MenuItem}> {item} <div className={`${styles.down} ${styles.margin}`}>&#62;</div></div>   
                        );
                    })
                }
                
            </div>
        </div>
    );

};

export default BurgerMenu;