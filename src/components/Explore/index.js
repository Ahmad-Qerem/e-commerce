import styles from "./styles.module.css"
import ExploreContainer from "./ExploreContainer";
/*
import ExploreContainer from 
*/
import BTN from "./BTN";

const Explore = ()=>{
    return(
        <div className={styles.ExploreTopModule} >
            <h1 className={styles.ExploreTitle}>Explore</h1>
            <ExploreContainer/>
            <BTN/>
        </div>
    );
};

export default Explore; 