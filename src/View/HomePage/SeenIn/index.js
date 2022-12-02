import styles from"./styles.module.css"

const SeenIn=()=>{
    return(
        <div className={styles.SeenWrapper}>
            <div className={styles.SeenTitle}>As Seen On</div>
            <img className={styles.ButImage} src="images/image_72.png"/>
        </div>
    );
};

export {SeenIn};