import "./style.css"


const ListItemsText = ["shop","fabric","journal","about"];

const LiftSide = (  )=> {
    return(
        <div className="LeftDiv">
            <span className="Logo">matter</span>
            <div className="MyUl">
                {
                    ListItemsText.map((item)=>{
                        return(
                            <div className="myLi"> {item} <div className="down">&#62;</div></div>   
                        );
                    })
                }
                
            </div>
        </div>
    );

};

export default LiftSide;