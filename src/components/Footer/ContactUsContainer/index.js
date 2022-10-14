import styles from"./styles.module.css"

const ContactUsContainer=()=>{

    return(
        <div className={styles.CatsMainWrapper}>
            <div className={styles.CatsHeader}>
                Contact us 
            </div>
            <div className={styles.CatsUL}>
                <p>26A Pagoda St, TANGS,<br/>Singapore, 058187</p>
                <p>+65 6221 5462</p>
            </div>
        </div>
    );
};

export default ContactUsContainer; 