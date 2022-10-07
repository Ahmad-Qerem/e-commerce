import "./styles.css"
import Videos from "./Videos"; 
import NBTN from "./NBTN/index"
const RecommendedVideos=()=>{
    return(
        <div className="RecWrapper">
            <div className="RecommendedTitle">Recommended Videos</div>
            <Videos/>
            <NBTN/>
        </div>
    );
};
export default RecommendedVideos;