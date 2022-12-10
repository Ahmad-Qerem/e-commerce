import styles from"./styles.module.css"
import ExploreItem from "./ExploreItem";
import HeaderText from "./HeaderText";
const ExploreContainer = ()=>{
    const allData=[
        {
            StateToTest:"FIELDTESTED",
            Date:{
                Day:19,
                Month: "January",
                Year:2017
            },
            Title:"Connected Clothing: Raye Padit",
            Description:"As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls.",
            ImagePath:"./images/image_24.png",
            ALT:"person sitting on a chare"
        },
        {
            StateToTest:"FIELDTESTED",
            Date:{
                Day:19,
                Month: "January",
                Year:2017
            },
            Title:"Kérastase: A Collaboration",
            Description:"",
            ImagePath:"./images/image_13.png",
            ALT:"hand holding a Pillow"
        },
        {
            StateToTest:"FIELDTESTED",
            Date:{
                Day:19,
                Month: "January",
                Year:2017
            },
            Title:"Jaclynn Seah",
            Description:"Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.",
            ImagePath:"",
            ALT:""
        },
        {
            StateToTest:"FIELDTESTED",
            Date:{
                Day:19,
                Month: "January",
                Year:2017
            },
            Title:"Remarkable Resilience: Grace Kim",
            Description:"A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.",
            ImagePath:"",
            ALT:""
        },
        {
            StateToTest:"FIELDTESTED",
            Date:{
                Day:19,
                Month: "January",
                Year:2017
            },
            Title:"How To Wear The Lounge Lunghi",
            Description:"",
            ImagePath:"./images/image_65.png",
            ALT:" three pictures show how to wear the long lunghi "
        },
    ];
    return(
        <div className={styles.MainExploreWrapper}>
            <ExploreItem  style={styles.Box0} Name={"Box1"}> 
                <HeaderText {...allData[0]}/>
            </ExploreItem>

            <ExploreItem  style={styles.Box1} Name={"Box1"}> 
                <img  className={styles.TopImage} src={allData[0].ImagePath} alt={allData[0].ALT}/>
            </ExploreItem>

            <ExploreItem style={styles.Box2} Name={"Box2"}> 
                <HeaderText {...allData[1]}/>
                <img width={"263px"} height={"120px"} src={allData[1].ImagePath} alt={allData[1].ALT}/>
            </ExploreItem>

            <ExploreItem style={styles.Box3} Name={"Box3"}> 
                    <HeaderText {...allData[2]}/>
            </ExploreItem>

            <ExploreItem style={styles.Box4} Name={"Box4"}> 
                    <HeaderText {...allData[3]}/>
            </ExploreItem>

            <ExploreItem style={styles.Box5} Name={"Box5"}> 
                    <HeaderText {...allData[4]}/>
                    <img width={"263px"} height={"120px"} src={allData[4].ImagePath} alt={allData[4].ALT}/>
            </ExploreItem>
        </div>
    );
};
export default ExploreContainer;