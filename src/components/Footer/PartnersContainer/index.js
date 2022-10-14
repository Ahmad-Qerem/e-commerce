import styles from "./styles.module.css"

const PartnersContainer=()=>{
    const MyList=["Support" ,"Shipping & Returns", "Size Guide ","Product Care" ];
    return(
        <div className={styles.CatsMainWrapper}>
            <div className={styles.CatsHeader}>
                 Partners 
            </div>
            <div className={styles.CatsUL}>
                {MyList.map((item)=>(<div className={styles.CatsLi}>{item}</div>))}
            </div>
        </div>
    );


};

export default PartnersContainer; 