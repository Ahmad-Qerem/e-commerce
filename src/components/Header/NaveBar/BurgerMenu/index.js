import styles from "./styles.module.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { useUserProvider } from "../../../../Context/UserProvider";
import UserImage from "../RightSide/UserImage";
const sxStyle = [
  {
    w: "100%",
    color: "#3f3f3f",
    fontSize: "26px",
  },
  {},
];
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
const BurgerMenu = () => {
  const { User, Authenticated } = useUserProvider();

  const [flag, setFlag] = useState(false);
  function HandelMenuOnClick() {
    setFlag(!flag);
  }
  return (
    <>
      <img
        onClick={HandelMenuOnClick}
        className={styles.IconBM}
        src="/images/icon-hamburger.svg"
      />
      {flag && (
        <div className={styles.Menu}>
          <div className={styles.Top}>
            <div onClick={HandelMenuOnClick}>
              {Authenticated ? (
                <UserImage User={User} />
              ) : (
                <Link to="/Login" className={styles.LogIn}>
                  Log In
                </Link>
              )}
            </div>
            <Link to="/search">
              <img
                className={styles.MyImg}
                src="/images/search.svg"
                alt="search"
              />
            </Link>
            <Link to="/favorite">
              <img
                className={styles.MyImg}
                src="/images/heart.svg"
                alt="favorite"
              />
            </Link>
            <Link to="/ProductList">
              <img
                className={styles.MyImg}
                src="/images/Shape.svg"
                alt="shop"
              />
            </Link>
          </div>

          <div className={styles.Bottom}>
            <div className={styles.Buttons}>
              {ListItemsText.map((item) => (
                <Link
                  onClick={HandelMenuOnClick}
                  className={styles.MenuItem}
                  to={item.Link}
                >
                  {item.Title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
