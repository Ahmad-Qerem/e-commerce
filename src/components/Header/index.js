import "./styles.css"
import HederText from "./HeaderText/index"
import NaveBar from "./NaveBar/index"
const Header = ()=>{
    return(
        <div className="Header">
            <HederText/>
            <NaveBar/>
        </div>
    );
};


export default Header;