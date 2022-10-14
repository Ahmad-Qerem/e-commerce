import styles from "./styles.module.css"
const VideoCard=({ImagePath,Description})=>{

    return(
            <div className={styles.VidItem}>
                <div className={styles.MyVideo}>
                    <div className={styles.Pause}><div className={styles.arrowRight}></div></div>
                    <img className={styles.VidImg} src={`./images/${ImagePath}`}/>
                </div>
                <div className={styles.SubTitle}>{Description}</div>
            </div>
    );
};
export default VideoCard;

