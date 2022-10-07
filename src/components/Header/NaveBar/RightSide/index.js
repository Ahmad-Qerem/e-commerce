import "./style.css";
import SearchImage from "./images/search.png"; 
import favoriteImage from "./images/favorite.png"; 
import shopImage from "./images/shopping.png";


const RightSide = ( )=>{
    
    return(
        <div className="RightSide">
            <div  className="LogIn">login</div>
            {/* <a href=""><img src="" alt="user image"/></a> */}
            <a href=""><img className="MyImg" src={SearchImage} alt="search"/></a>
            <a href=""><img className="MyImg" src={favoriteImage} alt="favorite"/></a>
            <a href=""><img className="MyImg" src={shopImage} alt="shop"/></a>
            
        </div>
    );
};
export default RightSide;
