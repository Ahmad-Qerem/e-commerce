import "./style.css";
import Card from "./Card";

const NewArrival=()=>{

    return(
        <div className="MainContainer">
            <h1 className="MyH1">Featured</h1>
            <div className="MyContainer">
                {[1,2,3,4,5,6,7,8].map((item)=>{
                    return <Card/>
                })}
                
            </div>
        </div>
    );  
};
export default NewArrival;