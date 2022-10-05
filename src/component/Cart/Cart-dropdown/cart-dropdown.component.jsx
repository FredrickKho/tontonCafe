import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../button/button";
import CartItem from "../Cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../../context/cart.context";
const CartDropdown = () => {
  const { cartItem } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate ('/checkout');
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItem.map((item) => {
          let category;
          if (item.id.includes("MC")) {
            category = "MainCourse";
          } else if (item.id.includes("DS")) {
            category = "Dessert";
          } else if (item.id.includes("D")) {
            category = "Drink";
          } else if (item.id.includes("S")) {
            category = "Snack";
          } else {
            category = "Appetizer";
          }
          // console.log(category);
          return (
            <CartItem
              key={item.id}
              cartItem={item}
              categoryFood={category}
            ></CartItem>
          );
        })}
      </div>
      <Button onClick= {goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
