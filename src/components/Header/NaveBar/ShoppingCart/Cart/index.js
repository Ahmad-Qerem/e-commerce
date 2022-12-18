import CartItem from "../CartItem";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const UserCart = useSelector((state) => state.cart.products);
  const TotalPrice = 0;

  return (
    <div className={styles.MainWrapper}>
      <h2 className={styles.CartTitle}>Your Cart</h2>
      {UserCart.length === 0 ? <p>No items in cart.</p> : null}
      {UserCart &&
        UserCart.map((item) => {
          return (
            <CartItem
              key={item.id}
              ProductId={item.productId}
              Quantity={item.quantity}
            />
          );
        })}
      <h2 className={styles.CartSupTitle}>Total: ${TotalPrice}</h2>
    </div>
  );
};

export default Cart;
