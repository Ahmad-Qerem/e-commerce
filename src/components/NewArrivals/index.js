import styles from "./styles.module.css";
import Card from "./Card";

const NewArrival=()=>{
    const AllData= [
        {
            ImagePath:"image_75.png",
            New:true,
            Description:"Pueraria Mirifica And Study Phyto Estrogens",
            Price:"$9.99"
        },
        {
            ImagePath:"image_6.png",
            New:false,
            Description:"Pueraria Mirifica And Study",
            Price:"$19.99"
        },
        {
            ImagePath:"image_49.png",
            New:false,
            Description:"Pueraria Mirifica And Study Phyto Estrogens",
            Price:"$9.99"
        },
        {
            ImagePath:"image_41.png",
            New:true,
            Description:"Pueraria Mirifica And Study Phyto Estrogens",
            Price:"$14.99"
        },
        {
            ImagePath:"image_26.png",
            New:false,
            Description:"Pueraria Mirifica And Study Phyto Estrogens afa sad ",
            Price:"$19.99"
        },
        {
            ImagePath:"image_32.png",
            New:false,
            Description:"Pueraria Mirifica And Study Phyto",
            Price:"$59.99"
        },
        {
            ImagePath:"image_31.png",
            New:true,
            Description:"Pueraria Mirifica And Study Phyto Estrogens",
            Price:"$4.99"
        },
        {
            ImagePath:"image_38.png",
            New:true,
            Description:"Pueraria Mirifica And Study Phyto Estrogens",
            Price:"$34.99"
        }
    ];
    return(
        <div className={styles.MainContainer}>
            <h1 className={styles.MyH1}>Featured</h1>
            <div className={styles.MyContainer}>
                {AllData.map((item)=>{
                    return <Card {...item}/>
                })}
                
            </div>
        </div>
    );  
};
export default NewArrival;