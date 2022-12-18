import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@mui/material";
import { useUserProvider } from "../../../../Context/UserProvider";
import UserImage from "./UserImage";
import { ShoppingCart } from "../ShoppingCart";
const RightSide = () => {
  const { User, Authenticated } = useUserProvider();
  return (
    <div className={styles.RightSide}>
      {Authenticated ? (
        <UserImage User={User} />
      ) : (
        <Link to="/Login" className={styles.LogInText}>
          <Button variant="text" className={styles.LogIn}>
            Log In
          </Button>
        </Link>
      )}
      <Link to="/Search">
        <img className={styles.MyImg} src="/images/search.svg" alt="search" />
      </Link>
      <Link to="/Favorite">
        <img className={styles.MyImg} src="/images/heart.svg" alt="favorite" />
      </Link>
      <ShoppingCart />
    </div>
  );
};
export default RightSide;
