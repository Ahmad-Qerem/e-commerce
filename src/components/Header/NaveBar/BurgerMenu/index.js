import "./style.css"


const ListItemsText = ["shop","fabric","journal","about"];

const BurgerMenu = (  )=> {
    return(
        <div className="MyBurgerMenu">
            <img className="IconBM" src="./images/Icons/icon-hamburger.svg"/>
            <div className="Menu">
                {
                    ListItemsText.map((item)=>{
                        return(
                            <div className="MenuItem"> {item} <div className="down margin">&#62;</div></div>   
                        );
                    })
                }
                
            </div>
        </div>
    );

};

export default BurgerMenu;