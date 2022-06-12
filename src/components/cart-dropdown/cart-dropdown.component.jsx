import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartOpenContext } from "../../contexts/cart-context";
import Button from "../buttons/button.component";
import CartItem from "../cart-items/cart-item.component";
import {
  CartItems,
  DropdownContainer,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartOpenContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <DropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to="/checkout">
        <Button onClick={toggleIsCartOpen}>GO TO CHECKOUT</Button>
      </Link>
    </DropdownContainer>
  );
};

export default CartDropdown;
