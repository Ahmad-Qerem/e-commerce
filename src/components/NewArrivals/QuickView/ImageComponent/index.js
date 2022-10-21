import styles from "./styles.module.css"

const ImageComponent = ({Path,onClick,index})=>{
    return(
        <img onMouseEnter ={()=>onClick(index)} src={Path} width={"68px"} hight={"68px"} alt=""/>
    )
}
export default ImageComponent;