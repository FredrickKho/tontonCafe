import "./cart.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../images/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default Cart;
