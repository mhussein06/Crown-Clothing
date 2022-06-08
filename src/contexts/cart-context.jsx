import { createContext, useState, useEffect } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const deleteCartItem = (cartItems, productToDelete) => {
  const newArray = cartItems.filter((item) => {
    return item != productToDelete;
 })
 return newArray;
}

export const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  const itemQuantity = existingCartItem.quantity;

  if (itemQuantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  const newArray = cartItems.filter((item) => {
     return item != productToRemove;
  })
  return newArray;
}


export const CartOpenContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItem: () => {},
  deleteItem: () => {},
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, current) => total + (current.quantity * current.price), 0)
    setTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  }

  const removeItem = (product) => {
    setCartItems(removeCartItem(cartItems, product));
  }

  const deleteItem = (product) => {
    setCartItems(deleteCartItem(cartItems, product));
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItem, deleteItem, cartTotal };

  return <CartOpenContext.Provider value={value}>{children}</CartOpenContext.Provider>;
};

export default CartProvider;