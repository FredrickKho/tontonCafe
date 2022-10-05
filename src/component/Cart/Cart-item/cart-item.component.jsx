import "./cart-item.styles.scss";

const CartItem = ({ cartItem, categoryFood }) => {
  const { name, imageUrl, quantity,price } = cartItem;

    //  console.log(categoryFood)
  return (
    <div className="cart-item-container">
      <img
        src={require("../../../Data/" + categoryFood + "/" + imageUrl)}
        alt={name}
      ></img>
      <div className="item-details">
        <span className="name">{name}</span>
      <span className="price">{quantity} x ${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
