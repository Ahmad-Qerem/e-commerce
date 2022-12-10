import styles from"./styles.module.css"
import HederText from "./HeaderText"
import NaveBar from "./NaveBar"
const Header = ()=>{
    return(
        <div className={styles.Header}>
            <HederText text={"Free shipping for orders above USD 150"}/>
            <NaveBar/>
        </div>
    );
};


export  {Header};