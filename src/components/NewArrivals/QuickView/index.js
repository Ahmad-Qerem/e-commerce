import styles from "./styles.module.css"
import BTN from "../Card/CardHover/BTN/index"
import ImageComponent from "./ImageComponent"
import { Rating } from 'react-simple-star-rating'
import {useState} from "react"

const QuickView = ( {id,category,brand,stock,title,description,price,discountPercentage,rating,images,onClickClose} )=>{
    const [index,setIndex]=useState(0);
    const [ratingValue, setRatingValue] = useState(0)
    const HandelImgHover = (index)=>{
        setIndex(index);
    }
    const handleRating = (rate) => {
        setRatingValue(rate)
      }
    return(
        <div className={styles.QuickViewMainWrapper}>
            <div className={styles.WhiteWindow}>

                <div className={styles.Nave}>
                    <div className={styles.Title}>{title}</div>
                    <div className={styles.Close} onClick={onClickClose} ><div className={`${styles.arrow} ${styles.right}`}></div><div className={`${styles.arrow} ${styles.left}`}></div></div>
                </div>
                
                <div className={styles.MainContainer}>
                    <div className={styles.TopDiv}>

                        <div className={styles.Left}>
                            <div className={styles.ImgArray}>
                                {images.map((item,i)=>{
                                    return (
                                        <>
                                            <ImageComponent onClick={HandelImgHover} Path={item} index={i}/>
                                        </>
                                    )
                                })}
                            </div>
                            <div className={styles.Image}>  <img src={images[index]}  /></div>
                        </div>

                        <div className={styles.Right}>
                            <div className={styles.Header}>
                                <div className={styles.HeaderTitle}>
                                    {title}
                                </div>
                                <div className={styles.Price}>
                                    <span>SGD {price}</span>
                                    <div><Rating fillColor={"#FF6008"} allowFraction={true} initialValue={rating} readonly={true}/>
                                    {rating} of 5</div>
                                    
                                </div>
                            </div>
                            <div className={styles.Description}>
                                <div>Description<br/></div>
                                {description}<br/>
                                <span>SEE MORE</span>
                            </div>
                            <div className={styles.Description2}>
                                <div className={styles.DescriptionItem}>
                                    <div className={styles.DescriptionTitle}>
                                        Stock
                                    </div>
                                    <span>{stock}</span>
                                </div>
                                <div className={styles.DescriptionItem}>
                                    <div className={styles.DescriptionTitle}>
                                        Brand
                                    </div>
                                    <span>{brand}</span>
                                </div>
                                <div className={styles.DescriptionItem}>
                                    <div className={styles.DescriptionTitle}>
                                        Category
                                    </div>
                                    <span>{category}</span>
                                </div>
                            </div>
                            <div className={styles.Size}>
                                <span>SIZE</span>
                                <div>
                                    <div></div>
                                </div>
                                <div><span>Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.</span></div>
                            </div>
                            <div className={styles.AddToCart}>
                                <span>Quantity</span>
                                <div className={styles.AddToCartWrapper}>
                                    <div className={styles.QuantityCounter}>
                                        <div className={styles.QuantityCounterMark}>-</div>
                                        <div className={styles.QuantityCounterText}>{"1"}</div>
                                        <div className={styles.QuantityCounterMark}>+</div>
                                    </div>
                                    <div>
                                        <BTN Text={"ADD TO CART"}/>
                                    </div>
                                    <div className={styles.QuantityWishList}>
                                        <img src="./images/questions.png" height={"40px"}/>
                                        <span>add to wishlist</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.Button}>
                        <BTN onClick3={()=>{console.log("hello")}} Text={"View Full product Details"}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default QuickView;