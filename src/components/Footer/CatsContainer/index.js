import "./styles.css"

const CatsContainer=()=>{
    const MyList=["About us" ,"Testimonials", "Contact","Journal" ,"Privacy Policy" ];

    return(
        <div className="CatsMainWrapper">
            <div className="CatsHeader">
                Categories
            </div>
            <div className="CatsUL">
                {MyList.map((item)=>(<div className="CatsLi">{item}</div>))}
            </div>
        </div>
    );
};


export default CatsContainer; 