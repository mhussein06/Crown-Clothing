import { CartItemContainer, Image, Name, ItemDetails } from "./cart-items.styles.js";
import { CartItem as item } from "../../store/cart/cart.types.js";

import React from "react";

type CartItemProps = {
  cartItem: item,
} 

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
