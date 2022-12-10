import { Link } from "react-router-dom";
import styles from"./../stylesShared.module.css"
const CatsContainer=()=>{
    const MyList=[
        {
            Title:"About us",
            Link:"About"
        } ,
        {
            Title:"Testimonials",
            Link:"About"
        } ,
        {
            Title:"Contact",
            Link:"About"
        } ,
        {
            Title:"Journal",
            Link:"About"
        } ,
        {
            Title:"Privacy Policy",
            Link:"About"
        } ,
    ];
    return(
        <div className={styles.CatsMainWrapper}>
            <div className={styles.CatsHeader}>
                Categories
            </div>
            <div className={styles.CatsUL}>
                {MyList.map((item)=>(<Link to={item.Link} className={styles.CatsLi}>{item.Title}</Link>))}
            </div>
        </div>
    );
};


export default CatsContainer; 