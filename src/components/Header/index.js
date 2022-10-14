import styles from"./styles.module.css"
import HederText from "./HeaderText/index"
import NaveBar from "./NaveBar/index"
const Header = ()=>{
    return(
        <div className={styles.Header}>
            <HederText/>
            <NaveBar/>
        </div>
    );
};


export default Header;