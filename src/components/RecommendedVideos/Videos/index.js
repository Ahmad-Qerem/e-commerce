import "./styles.css"
const Videos=()=>{
    return(
        <div className="VidWrapper">
            <div className="VidItem">
                <div className="MyVideo">
                    <div className="Pause"><div className="arrow-right"></div></div>
                    <img className="VidImg" src="./images/635c0a53670aa9b611314996afb28e7cbfb6a4ec.png"/>
                </div>
                <div className="SubTitle">Jamdani</div>
            </div>

            <div className="VidItem">
                <div className="MyVideo">
                    <div className="Pause"><div className="arrow-right"></div></div>
                    <img className="VidImg" src="./images/2ef8f1a6888f5e313706fce9ac7b0c9d436b5104.png"/>
                </div>
                <div className="SubTitle">Lorem ipsum dolor sit amet</div>
            </div>

            <div className="VidItem">
                <div className="MyVideo">
                    <div className="Pause"><div className="arrow-right"></div></div>
                    <img className="VidImg" src="./images/2f06e2ebbe92b4a0b18863c9322dba5d691c54fc.png"/>
                </div>
                <div className="SubTitle">Lorem ipsum dolor sit amet</div>
            </div>

        </div>
    );
};
export default Videos;

