import styles from "./styles.module.css"
import QVNave from "./QVNave"
import MainContainer from "./MainContainer"
const QuickView = ( {DataCard,onClickClose} )=>{
    
    return(
        <div className={styles.QuickViewMainWrapper}>
            <div className={styles.WhiteWindow}>
                <QVNave title={DataCard.title} fun={onClickClose}/>
                <MainContainer DataCard={DataCard} />
           </div>
        </div>
    )
}
export default QuickView;