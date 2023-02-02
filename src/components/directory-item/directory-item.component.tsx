import { useNavigate } from 'react-router-dom'
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body
} from "./directory-item.styles.js";
import React from 'react';

type Category = {
  id: number,
  title: string,
  imageUrl: string,
  route: string,
}

type DirectoryFormProps = {
  category: Category,
}

const DirectoryItem: React.FC<DirectoryFormProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
