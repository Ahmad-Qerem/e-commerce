import styles from "./styles.module.css";
import Card from "./Card";
import QuickView from "./QuickView";
import {useState}from"react"
import DataAPI from "../Data";
const allData = DataAPI.products;
const NewArrival=()=>{
    const [QuickViewFlag,setQVFlag]=useState(false);
    const [Index,SetIndex]= useState(0); 
    const HandelButtonClick=(e,index)=>{
        SetIndex(index);
        setQVFlag(!QuickViewFlag);
    }

    return(
        <>
            {QuickViewFlag &&<QuickView DataCard={allData[Index]} onClickClose={HandelButtonClick}/>}
            <div className={styles.MainContainer}>
                <h1 className={styles.MyH1}>Featured</h1>

                <div className={styles.MyContainer}>
                    {allData.map((item,index)=>{
                        return (
                            <Card onClick={HandelButtonClick} {...item} New={!Math.round(Math.random())}index1={index}/>
                        )
                    })}
                </div>
                
            </div>  
        </>
    );  
};
export default NewArrival;