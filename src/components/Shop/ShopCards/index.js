import "./styles.css"
import CardHover from "./CardHover/index"
const ShopCards=()=>{
    return(
        <div className="CardWrapper">
            <div className="Card">
                <CardHover/>
                <img className="CardImage" src="images/c3d74b651e3f521439ae7e68750fa01c13171c98.png"/>
                <div className="CardTitle">Jumpsuits</div>
            </div>

            <div className="Card">
                <CardHover/>
                <img className="CardImage" src="images/ac22cf3d613f85df2f2d5fbe238567718c47fa96.png"/>
                <div className="CardTitle">Pants</div>
            </div>

            <div className="Card">
                <CardHover/>
                <img className="CardImage" src="images/ee642707bfa9abb265f97fb49aeca2886b3db030.png"/>
                <div className="CardTitle">Tops</div>
            </div>

            <div className="Card">
                <CardHover/>
                <img className="CardImage" src="images/2362345cd93c41ef9634d80b90866ae9394758d9.png"/>
                <div className="CardTitle">Accessories</div>
            </div>
        </div>
    );
};

export default ShopCards;