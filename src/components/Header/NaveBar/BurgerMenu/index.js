import styles from "./styles.module.css"
import {useState} from 'react' 
import { Link, NavLink } from "react-router-dom";

const ListItemsText = [
  {
    Title: "Home",
    Link: "/",
  },
  {
    Title: "Products",
    Link: "ProductList",
  },
  {
    Title: "About",
    Link: "About",
  },
  {
    Title: "Contact",
    Link: "Contact",
  },
];
const BurgerMenu = (  )=> {
    const [flag, setFlag] = useState(false);
    function HandelMenuOnClick() {
      setFlag(!flag);
    }
    return (
      <>
        <img onClick={HandelMenuOnClick} className={styles.IconBM} src="./images/icon-hamburger.svg" />
        {flag && 
          <div className={styles.Menu}>
            <div className={styles.Top}>
                <div className={styles.LogIn}>login</div>
                  <Link to=""><img className={styles.MyImg} src="./images/search.svg" alt="search"/></Link>
                  <Link to=""><img className={styles.MyImg} src="./images/heart.svg" alt="favorite"/></Link>
                  <Link to=""><img className={styles.MyImg} src="./images/Shape.svg" alt="shop"/></Link>
            </div>

            <div className={styles.Bottom}>
              {ListItemsText.map((item) =><NavLink onClick={HandelMenuOnClick} className={styles.MenuItem} to={item.Link}>{item.Title}</NavLink>)}
            </div>
          </div>
          }
      </>
    );

};

export default BurgerMenu;