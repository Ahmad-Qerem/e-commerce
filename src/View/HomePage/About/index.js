import styles from "./styles.module.css"
const About = ()=>{
    return(
        <div className={styles.AboutContainer}>
            <h1 className={styles.AboutHeader}>About Matter</h1>
            <div className={styles.TwoSidesContainer}>
                <div className={styles.LeftSideContainer}>
                    <img className={styles.DrowningIMG} src="./images/image_2.png" alt="some drowning " />
                </div>
                <div className={styles.RightSideContainer}>
                    <p className={styles.AboutP}>Our mission is threefold - to foster designer-artisan collaborations, inspire consumers to value provenance and process, and pioneer industry change and sustainability for rural textile communities. </p>
                    <div className={styles.RightBottomAbout}>
                        <div className={styles.Text1}>Artisan Employment Days Created</div>
                        <div className={styles.Text2}>123456</div>
                        <div className={styles.Text1}>Countries Involved To Date</div>
                        <div className={styles.Text2}>India<br/>China<br/>Sri Lanka</div>
                        <div className={styles.Text1}>#MatterTribe </div>
                        <div className={styles.Text2}>12 designers<br/>12 Factories</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export  {About};
