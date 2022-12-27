import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { CategoryItem } from "../categories/category.types";



export const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {

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

export const deleteCartItem = (cartItems: CartItem[], productToDelete: CartItem): CartItem[] => {
  const newArray = cartItems.filter((item) => {
    return item !== productToDelete;
  });
  return newArray;
};

export const removeCartItem = (cartItems: CartItem[], productToRemove: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  let itemQuantity = 0;
  
  if (existingCartItem) {
    itemQuantity = existingCartItem.quantity;
  }

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

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_CART_OPEN, boolean>;
export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>


export const setIsCartOpen = withMatcher((bool: boolean): SetIsCartOpen => {
  return createAction(CART_ACTION_TYPES.SET_CART_OPEN, bool);
});

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => {
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
});

export const addItemToCart = (cartItems: CartItem[], product: CategoryItem): SetCartItems => {
  const newCartItems = addCartItem(cartItems, product);
  return setCartItems(newCartItems);
};

export const removeItem = (cartItems: CartItem[], product: CategoryItem): SetCartItems => {
  const newCartItems = removeCartItem(cartItems, product);
  return setCartItems(newCartItems);
};

export const deleteItem = (cartItems: CartItem[], product: CartItem): SetCartItems => {
  const newCartItems = deleteCartItem(cartItems, product);
  return setCartItems(newCartItems);
};
