import "./checkout-item.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
const CheckoutItem = ({ CartItem, category }) => {
  const { name, imageUrl, price, quantity } = CartItem;
  const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext)
  const clearItemHandler = ()=>clearItemFromCart(CartItem);
  const addItemHandler = () => addItemToCart(CartItem);
  const removeItemHandler = () => removeItemToCart(CartItem);
  return (
    <div className="test">
      <div className="checkout-item-container">
        <div className="image-container">
          <img
            alt={name}
            src={require("../../Data/" + category + "/" + imageUrl)}
          ></img>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={removeItemHandler}>
                &#10094;
            </div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={addItemHandler}>
                &#10095;
            </div>
        </span>
        <span className="price">{price}</span>
        <div onClick = {clearItemHandler} className="remove-button">&#10005;</div>
      </div>
    </div>
  );
};

export default CheckoutItem;
