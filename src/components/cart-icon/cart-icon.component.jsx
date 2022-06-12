import { useContext } from 'react';

import { CartOpenContext } from '../../contexts/cart-context';

import {CartIconContainer, ShopIcon, ItemCount} from './cart-icon.styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } = useContext(CartOpenContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShopIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
