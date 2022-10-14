import styles from "./styles.module.css"
import CatsContainer from "./CatsContainer";
import PartnersContainer from "./PartnersContainer";
import ContactUsContainer from "./ContactUsContainer";
import SubContainer from "./SubContainer";
import CopyRight from "./CopyRight";

const Footer =()=>{
    return(
        <>
        <div className={styles.Footer}>
            <div className={styles.FooterWrapper}>
                <div className={styles.InnerFooterWrapper}> 
                    <CatsContainer/>
                    <PartnersContainer/>
                    <ContactUsContainer/>
                </div>
                <SubContainer/>
            </div>
            <CopyRight/>
        </div>
        
        </>
    );
};
export default Footer;