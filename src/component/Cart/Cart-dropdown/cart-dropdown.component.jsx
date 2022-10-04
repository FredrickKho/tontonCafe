import "./cart-dropdown.styles.scss";
import Button from "../../button/button";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
