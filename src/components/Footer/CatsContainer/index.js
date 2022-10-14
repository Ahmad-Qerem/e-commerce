import styles from"./styles.module.css"

const CatsContainer=()=>{
    const MyList=["About us" ,"Testimonials", "Contact","Journal" ,"Privacy Policy" ];

    return(
        <div className={styles.CatsMainWrapper}>
            <div className={styles.CatsHeader}>
                Categories
            </div>
            <div className={styles.CatsUL}>
                {MyList.map((item)=>(<div className={styles.CatsLi}>{item}</div>))}
            </div>
        </div>
    );
};


export default CatsContainer; 