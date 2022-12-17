import { Button } from "@mui/material";

const Item = ({ item, handleAddToCart }) => {
  return (
    <div>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </div>
  );
};

export default Item;
