import styles from "./styles.module.css"
import Videos from "./Videos"; 
import NBTN from "./NBTN/index"
const RecommendedVideos=()=>{
    return(
        <div className={styles.RecWrapper}>
            <div className={styles.RecommendedTitle}>Recommended Videos</div>
            <Videos/>
            <NBTN/>
        </div>
    );
};
export default RecommendedVideos;