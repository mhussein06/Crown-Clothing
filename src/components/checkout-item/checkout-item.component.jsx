import {
  CheckOutItemContainer,
  Image,
  ImageContainer,
  Name,
  Quantity,
  Value,
  Arrow,
  RemoveButton,
} from "./checkout-item.styles.jsx";

import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItem,
  deleteItem,
} from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const CheckOutItem = ({ cartItem }) => {
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const addItemHelper = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHelper = () => dispatch(removeItem(cartItems, cartItem));
  const deleteItemHelper = () => dispatch(deleteItem(cartItems, cartItem));
  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name> {name} </Name>
      <Quantity>
        <Arrow onClick={removeItemHelper}>&#10094;</Arrow>
        {quantity}
        <Arrow onClick={addItemHelper}>&#10095;</Arrow>
      </Quantity>
      <Value> {price} </Value>
      <RemoveButton onClick={deleteItemHelper}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  );
};
export default CheckOutItem;
