import styles from "./styles.module.css"
import ShopCard from "./ShopCard/index"
const ShopCards=()=>{
    const AllData=[
        {
            ImagePath:"image_22.png",
            Title:"Pants"
        },
        {
            ImagePath:"image_35.png",
            Title:"Jumpsuits"
        },
        
        {
            ImagePath:"image_3.png",
            Title:"Tops"
        },
        {
            ImagePath:"image_29.png",
            Title:"Accessories"
        }
    ]; 
    return(
        <div className={styles.CardWrapper}>
            {AllData.map((item)=>{
                return <ShopCard {...item}/>
            })}
        </div>
    );
};

export default ShopCards;