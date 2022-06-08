import "./checkout-item.styles.scss";
import { CartOpenContext } from "../../contexts/cart-context";
import { useContext } from "react";

const CheckOutItem = ({ cartItem }) => {
  const { addItemToCart, removeItem, deleteItem } = useContext(
    CartOpenContext
  );
  const { name, imageUrl, price, quantity } = cartItem;
  const addItemHelper = () => addItemToCart(cartItem);
  const removeItemHelper = () => removeItem(cartItem);
  const deleteItemHelper = () => deleteItem(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div onClick={removeItemHelper} className="arrow">&#10094;</div>
        {quantity}
        <div onClick={addItemHelper} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price"> {price} </span>
      <div
        onClick={deleteItemHelper}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};
export default CheckOutItem;
