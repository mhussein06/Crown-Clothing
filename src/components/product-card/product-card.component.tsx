import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import Button, { ButtonClass } from "../buttons/button.component";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.js";
import { CategoryItem } from "../../store/categories/category.types";
import React from "react";

type ProductCardProps = {
  product: CategoryItem,
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price> ${price}</Price>
      </Footer>
      <Button buttonType={ButtonClass.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
