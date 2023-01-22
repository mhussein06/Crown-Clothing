import React from "react";

import {
  BaseButton,
  GoogleButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles";

export enum ButtonClass  {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
};

const getButton = (buttonType = ButtonClass.base): typeof BaseButton =>
  ({
    [ButtonClass.base]: BaseButton,
    [ButtonClass.google]: GoogleButton,
    [ButtonClass.inverted]: InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  children?: React.ReactNode,
  buttonType?: ButtonClass,
  isLoading?: boolean,
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
