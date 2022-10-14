import styles from "./styles.module.css"
import ShopCards from "./ShopCards";
const Shop=()=>{
    return(
        <div className={styles.ShopWrapper}>
            <div className={styles.ShopTile}>Shop</div>
            <ShopCards/>
        </div>
    );
};

export default Shop;