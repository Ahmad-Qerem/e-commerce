import styles from "./styles.module.css";
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

const LiftSide = () => {
  return (
    <div className={styles.LeftDiv}>
      <span className={styles.Logo}>matter</span>
      <div className={styles.MyUl}>
        {ListItemsText.map((item, index) => {
          return (
            <NavLink  key={index} to={item.Link} className={styles.ListItem}>
                {item.Title} 
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default LiftSide;
