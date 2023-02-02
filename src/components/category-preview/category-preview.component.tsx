import {
  CategoryPreviewContainer,
  TitleName,
  Preview,
} from "./category-preview.styles.js";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
import { CategoryItem } from "../../store/categories/category.types.js";
import React from "react";

type Products = CategoryItem[];

type CategoryPreviewProps = {
  title: string,
  products: Products,
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={`/shop/${title}`}>
          <TitleName>
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </TitleName>
        </Link>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
