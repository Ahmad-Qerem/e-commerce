import styles from "./styles.module.css";
import NewTitle from "./NewTitle";
import CardHover from "./CardHover";
const Card = ({
  title,
  category,
  description,
  id,
  image,
  price,
  rating,
  onClick,
  index1,
}) => {
  return (
    <div className={styles.MyCard}>
      <CardHover onClick2={onClick} index2={index1} />
      <img className={styles.MyImage2} src={image} alt="new clothes" />
      <div className={styles.Description}>
        <h4 className={styles.Title}>{title}</h4>
        <p className={styles.MyP}>{description}</p>
        <span className={styles.MySpan2}>$ {price}</span>
      </div>
    </div>
  );
};
export default Card;
