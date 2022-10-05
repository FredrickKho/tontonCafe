import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./product-card.styles.scss";

import Button from "../button/button";

const ProductCard = ({ product, category }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  // console.log(cartCategory)

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img
        src={require(`../../Data/${category}/${imageUrl}`)}
        alt={`${name}`}
      />
      <div className="footerCard">
        <span className="name">Name : {name}</span>
        <span className="price">Price : ${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to order list
      </Button>
    </div>
  );
};
export default ProductCard;
