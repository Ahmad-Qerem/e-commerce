import styles from "./styles.module.css";
import LiftSide from "./LiftSide/index";
import RightSide from "./RightSide/index";
import BurgerMenu from "./BurgerMenu";
import { ShoppingCart } from "./ShoppingCart";
const NaveBar = () => {
  return (
    <div className={styles.NaveBar}>
      <BurgerMenu />
      <LiftSide />
      <RightSide />
      {/* <ShoppingCart /> */}
    </div>
  );
};

export default NaveBar;
