import styles from "./styles.module.css"
import {useState} from 'react' 

const ListItemsText = ["shop","fabric","journal","about"];

const BurgerMenu = (  )=> {
    const [flag, setFlag] = useState(false);
    function HandelMenuOnClick() {
      setFlag(!flag);
    }
    return (
      <>
        <img onClick={HandelMenuOnClick} className={styles.IconBM} src="./images/icon-hamburger.svg" />
        {flag && <div className={styles.MyBurgerMenu}>
          <div className={styles.Menu}>
            <div className={styles.RightSide}>
                <div className={styles.LogIn}>login</div>
                  <a href=""><img className={styles.MyImg} src="./images/search.svg" alt="search"/></a>
                  <a href=""><img className={styles.MyImg} src="./images/heart.svg" alt="favorite"/></a>
                  <a href=""><img className={styles.MyImg} src="./images/Shape.svg" alt="shop"/></a>
            </div>
            {ListItemsText.map((item) => {
              return (
                <div className={styles.MenuItem}>
                  {item}<div className={`${styles.down} ${styles.margin}`}>&#62;</div>
                </div>
              );
            })}
          </div>
        </div>}
      </>
    );

};

export default BurgerMenu;