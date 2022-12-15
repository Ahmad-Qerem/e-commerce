import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@mui/material";
import { useUserProvider } from "../../../../Context/UserProvider";
import UserImage from "./UserImage";
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

      <div>
        <Link to="/Search">
          <img className={styles.MyImg} src="/images/search.svg" alt="search" />
        </Link>
        <Link to="/Favorite">
          <img
            className={styles.MyImg}
            src="/images/heart.svg"
            alt="favorite"
          />
        </Link>
        <Link to="/Shop">
          <img className={styles.MyImg} src="/images/Shape.svg" alt="shop" />
        </Link>
      </div>
    </div>
  );
};
export default RightSide;
