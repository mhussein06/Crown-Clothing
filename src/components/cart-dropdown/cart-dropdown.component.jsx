import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartOpenContext } from "../../contexts/cart-context";

import Button from "../buttons/button.component";
import CartItem from "../cart-items/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartOpenContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Link to="/checkout">
        <Button onClick={toggleIsCartOpen}>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
