import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
const Checkout = () => {
  const { cartItem,cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Course</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div>
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
            
            return <CheckoutItem key={item.id} CartItem={item} category = {category}></CheckoutItem>;
        })}
      </div>
      <div className="total-container">
      <div className="total-wrapper">
        <span className="total">Total: ${cartTotal}</span>

      </div>
      </div>
    </div>
  );
};

export default Checkout;
