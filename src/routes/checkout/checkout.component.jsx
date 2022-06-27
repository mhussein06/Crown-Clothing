import {
  CheckOutContainer,
  CheckOutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <HeaderBlock>
          <span> Product </span>
        </HeaderBlock>
        <HeaderBlock>
          <span> Description </span>
        </HeaderBlock>
        <HeaderBlock>
          <span> Quantity </span>
        </HeaderBlock>
        <HeaderBlock>
          <span> Price </span>
        </HeaderBlock>
        <HeaderBlock>
          <span> Remove </span>
        </HeaderBlock>
      </CheckOutHeader>

      {cartItems.map((item) => (
        <CheckOutItem cartItem={item} key={item.id} />
      ))}
      <Total> Total: ${cartTotal} </Total>
    </CheckOutContainer>
  );
};

export default CheckOut;
