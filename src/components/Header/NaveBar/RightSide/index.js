import { Link } from "react-router-dom";
import styles from"./styles.module.css";
import {Button} from '@mui/material' ;
const RightSide = ( )=>{
    
    return(
        <div className={styles.RightSide}>
            <Link to="/Login" className={styles.LogInText}><Button variant="text" className={styles.LogIn} >Log In</Button></Link>
            <Link to="/Search"><img className={styles.MyImg} src="/images/search.svg" alt="search"/></Link>
            <Link to="/Favorite"><img className={styles.MyImg} src="/images/heart.svg" alt="favorite"/></Link>
            <Link to="/Shop"><img className={styles.MyImg} src="/images/Shape.svg" alt="shop"/></Link>
        </div>
    );
};
export default RightSide;
