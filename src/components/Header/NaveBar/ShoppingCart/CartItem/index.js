import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useDataProvider } from "../../../../../Context/DataProvider";
import {
  AddToCart,
  RemoveFromCart,
} from "../../../../../Redux/Slice/CartSlice";
import styles from "./styles.module.css";

const CartItem = ({ ProductId, Quantity }) => {
  const { AllProducts } = useDataProvider();
  const item = AllProducts?.find((i) => i.id === ProductId);
  const dispatch = useDispatch();
  const counter = 1;
  const TotalPrice = Quantity * item.price;

  return (
    <>
      {item ? (
        <div className={styles.MainWrapper}>
          <h3 className={styles.HederTitle}>{item.title}</h3>
          <div className={styles.InnerWrapper}>
            <div className={styles.Left}>
              <div className={styles.information}>
                <p>Price: ${item.price}</p>
                <p>Total: ${TotalPrice}</p>
              </div>
              <div className={styles.Buttons}>
                <div
                  onClick={() => dispatch(RemoveFromCart({ ProductId }))}
                  className={styles.Circle}
                >
                  -
                </div>
                <p className={styles.Quantity}>{Quantity}</p>
                <div
                  onClick={() => dispatch(AddToCart({ ProductId, counter }))}
                  className={styles.Circle}
                >
                  +
                </div>
              </div>
            </div>
            <img className={styles.MyImage} src={item.image} alt={item.title} />
          </div>
        </div>
      ) : (
        <h3>Loading ... </h3>
      )}
    </>
  );
};

export default CartItem;
