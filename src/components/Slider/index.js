import styles from "./styles.module.css"

const Slider = (    )=>{
    return(
        <div className={styles.SlidesContainer}>
            <div className={`${styles.LeftArrow} ${styles.arrowHover}`}><div className={`${styles.arrow} ${styles.left}`}></div></div>
            <div className={`${styles.RightArrow} ${styles.arrowHover}`}><div className={`${styles.arrow} ${styles.right}`}></div></div>
            <div className={styles.content}>
                <span className={styles.MySpan}>Perfume Tips <br></br>Tricks</span>
                <button className={styles.MyButton}>shop now</button>
            </div>
        </div>
    );
};
export default Slider;