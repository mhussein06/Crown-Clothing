import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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
  });
  return newArray;
};

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
    return item !== productToRemove;
  });
  return newArray;
};

export const CartOpenContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItem: () => {},
  deleteItem: () => {},
  cartTotal: 0,
});

const CART_ACTION_TYPES = {
  SET_CART_OPEN: "SET_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  ADD_CART_ITEM: "ADD_CART_ITEM",
  REMOVE_CART_ITEM: "REMOVE_CART_ITEM",
  DELETE_CART_ITEM: "DELETE_CART_ITEM",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [cartTotal, setTotal] = useState(0);

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { isCartOpen, cartItems, cartCount, cartTotal } = state;

  const setIsCartOpen = (cartOpen) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_OPEN, cartOpen));
  };

  const updateCartReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (count, cartItem) => count + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, current) => total + current.quantity * current.price,
      0
    );
    
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
      cartItems: newCartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    }));
  };

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartReducer(newCartItems);
  };

  const removeItem = (product) => {
    const newCartItems = removeCartItem(cartItems, product);
    updateCartReducer(newCartItems);
  };

  const deleteItem = (product) => {
    const newCartItems = deleteCartItem(cartItems, product);
    updateCartReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItem,
    deleteItem,
    cartTotal,
  };

  return (
    <CartOpenContext.Provider value={value}>
      {children}
    </CartOpenContext.Provider>
  );
};

export default CartProvider;
