import styles from"./../stylesShared.module.css"

const ContactUsContainer=()=>{

    return(
        <div className={styles.CatsMainWrapper}>
            <div className={styles.CatsHeader}>
                Contact us 
            </div>
            <div className={`${styles.CatsLi}`}>
                26A Pagoda St, TANGS,<br/>Singapore, 058187<br/>
                +65 6221 5462
            </div>
        </div>
    );
};

export default ContactUsContainer; 