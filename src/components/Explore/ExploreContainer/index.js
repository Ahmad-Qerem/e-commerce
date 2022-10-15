import styles from"./styles.module.css"

const ExploreContainer = ()=>{
    return(
        <div className={styles.MainExplore}>

            <div className={`${styles.Div1} ${styles.borderTop}`}>
                <div className="">
                    <div className={styles.DateStyle}>FIELDTESTED . JANUARY 19, 2017</div>
                    <h1 className={styles.MyH1Style}>Connected Clothing: Raye Padit</h1>
                    <p className={styles.MyPStyle}>As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls. </p>
                </div>
                <img className={styles.ImageNum1} src="./images/image_24.png" alt="person sitting on a chare"/>
            </div>

            <div className={`${styles.Div1} ${styles.borderTop}`}>
                <div className="">
                    <div className={styles.DateStyle}>FIELDTESTED.JANUARY 19, 2017</div>
                    <h1 className={styles.MyH1Style}>Kérastase: A Collaboration</h1>
                    <img className={styles.ImageNum2} src="./images/image_13.png" alt="hand holding a Pillow"/>
                </div>
                <div className={styles.borderTop}>
                    <div className={styles.DateStyle}>FIELDTESTED.JANUARY 19, 2017</div>
                    <h1 className={styles.MyH2Style}>Remarkable Resilience: Grace Kim</h1>
                    <p className={styles.MyPStyle2}>A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.</p>
                </div>
            </div>

            <div className={`${styles.Div2} ${styles.borderTop}`}>
                <div className={styles.InnerDiv}>
                    <div className={styles.DateStyle}>FIELDTESTED.JANUARY 19, 2017</div>
                    <h1 className={styles.MyH1Style}>Jaclynn Seah</h1>
                    <div className={styles.Space}></div>
                    <p className={styles.MyPStyle2}>Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.</p>
                </div>

                <div className={styles.borderTop}>
                    <div className={styles.DateStyle}>FIELDTESTED.JANUARY 19, 2017</div>
                    <h1 className={styles.MyH2Style}>How To Wear The Lounge Lunghi</h1>
                    <img className={styles.ImageNum2} src="./images/image_65.png" alt="hand holding a "/>
                </div>
            </div>

        </div>
    );
};
export default ExploreContainer;