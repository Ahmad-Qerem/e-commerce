import "./styles.css"
import TextField from "./TextField";
import SubmitBTN from "./SubmitBTN";
const SubContainer=()=>{
    return(
        <div className="SubMainContainer">
            <div className="SubTitle">
                Subscribe to newsletter
            </div>
            <div className="myForm">
                <TextField/>
                <SubmitBTN/>
            </div>
            <div >
                <img className="MyIcons" src="./images/Icons/Facebook.svg"/>
                <img className="MyIcons" src="./images/Icons/Twitter.svg"/>

            </div>
        </div>
    );
};

export default SubContainer; 