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
import { CartOpenContext } from "../../contexts/cart-context";
import { useContext } from "react";

const CheckOutItem = ({ cartItem }) => {
  const { addItemToCart, removeItem, deleteItem } = useContext(CartOpenContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const addItemHelper = () => addItemToCart(cartItem);
  const removeItemHelper = () => removeItem(cartItem);
  const deleteItemHelper = () => deleteItem(cartItem);
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
