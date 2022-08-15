import { Link } from "react-router-dom";
import Button from "../buttons/button.component";
import CartItem from "../cart-items/cart-item.component";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsCartOpen,
  selectCartItems,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  CartItems,
  DropdownContainer,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
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
        <Button onClick={toggleIsCartOpen}>CHECKOUT</Button>
      </Link>
    </DropdownContainer>
  );
};

export default CartDropdown;
