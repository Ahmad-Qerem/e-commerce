import "./styles.css"
const About = ()=>{
    return(
        <div className="AboutContainer">
            <h1 className="AboutHeader">About Matter</h1>
            <div className="TwoSidesContainer">
                <div className="LeftSideContainer">
                    <img class="DrowningIMG" src="./images/fc26b70da783a49001cf63c38ed1ad5c5044b323.png" alt="some drowning " />
                </div>
                <div className="RightSideContainer">
                    <p className="AboutP">Our mission is threefold - to foster designer-artisan collaborations, inspire consumers to value provenance and process, and pioneer industry change and sustainability for rural textile communities. </p>
                    <div className="RightBottomAbout">
                        <div className="Text1">Artisan Employment Days Created</div>
                        <div className="Text2">123456</div>
                        <div className="Text1">Countries Involved To Date</div>
                        <div className="Text2">India<br/>China<br/>Sri Lanka</div>
                        <div className="Text1">#MatterTribe </div>
                        <div className="Text2">12 designers<br/>12 Factories</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;