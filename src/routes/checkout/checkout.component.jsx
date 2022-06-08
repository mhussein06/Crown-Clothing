import { CartOpenContext } from "../../contexts/cart-context";
import { useContext } from "react";
import "./checkout.styles.scss";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";

const CheckOut = () => {
  const { cartItems, cartTotal} = useContext(
    CartOpenContext
  );
  
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span> Product </span>
        </div>
        <div className="header-block">
          <span> Description </span>
        </div>
        <div className="header-block">
          <span> Quantity </span>
        </div>
        <div className="header-block">
          <span> Price </span>
        </div>
        <div className="header-block">
          <span> Remove </span>
        </div>
      </div>

      {cartItems.map((item) => 
        <CheckOutItem cartItem={item} key={item.id} />
      )}
      <span className="total"> Total: ${cartTotal} </span>
    </div>
  );
};

export default CheckOut;
