import "./styles.css"

const PartnersContainer=()=>{
    const MyList=["Support" ,"Shipping & Returns", "Size Guide ","Product Care" ];
    return(
        <div className="CatsMainWrapper">
            <div className="CatsHeader">
                 Partners 
            </div>
            <div className="CatsUL">
                {MyList.map((item)=>(<div className="CatsLi">{item}</div>))}
            </div>
        </div>
    );


};

export default PartnersContainer; 