import styles from "./styles.module.css"
import ExploreContainer from "./ExploreContainer";
import BTN from "../../../components/BTN";

const Explore = ()=>{
    return(
        <div className={styles.ExploreTopModule} >
            <h1 className={styles.ExploreTitle}>Explore</h1>
            <ExploreContainer/>
            <BTN/>
        </div>
    );
};

export  {Explore}; 