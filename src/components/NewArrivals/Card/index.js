import "./styles.css"
import NewTitle from "./NewTitle";
import CardHover from "./CardHover";
const Card = ()=>{
    return (
        <div className="MyCard">
            <CardHover/>
            <NewTitle/>
            <img className="MyImage2" src="./images/a18e6a7585aba0a670d755708b53fb0d50be1417.png" alt="new clothes"/>
            <div className="Description">
                <p className="MyP">Pueraria Mirifica And Study Phyto Estrogens</p>
                <span className=".MySpan2">$599.00</span>        
            </div>
        </div>
    );
};
export default Card;