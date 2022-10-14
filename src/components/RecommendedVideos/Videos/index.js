import styles from "./styles.module.css"
import VideoCard from "./VideoCard";
const Videos=()=>{

    const AllData=[
        {
            ImagePath:"image_37.png",
            Description:"Jamdani",
        },
        {
            ImagePath:"image_56.png",
            Description:"Lorem ipsum dolor sit amet",
        },
        {
            ImagePath:"image_57.png",
            Description:"Lorem ipsum dolor sit amet",
        }
    ];

    return(
        <div className={styles.VidWrapper}>
            {AllData.map((item)=>{
                return <VideoCard {...item} />
            })}
        </div>
    );
};
export default Videos;

