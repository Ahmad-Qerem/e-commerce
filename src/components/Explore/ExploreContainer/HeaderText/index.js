import styles from "./styles.module.css"

const HeaderText = (allData)=>{
    return (
        <div className={styles.ItemWrapper}>
            <div className={styles.TopBorder}>
                <div className={styles.Date}>{`${allData.StateToTest} . ${allData.Date.Month} ${allData.Date.Day}, ${allData.Date.Year}`}</div>
                <div className={styles.Title}>{allData.Title}</div>
            </div>
            { allData.Description !="" ? <p className={styles.Paragraph}>{allData.Description}</p>:<></>}
        </div>
    )
}
export default HeaderText;