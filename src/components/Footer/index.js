import "./styles.css"
import CatsContainer from "./CatsContainer";
import PartnersContainer from "./PartnersContainer";
import ContactUsContainer from "./ContactUsContainer";
import SubContainer from "./SubContainer";
import CopyRight from "./CopyRight";

const Footer =()=>{
    return(
        <>
        <div className="Footer">
            <div className="FooterWrapper">
                <div className="InnerFooterWrapper"> 
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