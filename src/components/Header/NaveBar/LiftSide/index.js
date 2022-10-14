import styles from"./styles.module.css"


const ListItemsText = ["shop","fabric","journal","about"];

const LiftSide = (  )=> {
    return(
        <div className={styles.LeftDiv}>
            <span className={styles.Logo}>matter</span>
            <div className={styles.MyUl}>
                {
                    ListItemsText.map((item)=>{
                        return(
                            <div className={styles.myLi}> {item} <div className={styles.down}>&#62;</div></div>   
                        );
                    })
                }
                
            </div>
        </div>
    );

};

export default LiftSide;