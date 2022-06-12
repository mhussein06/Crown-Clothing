import { BaseButton, GoogleButton, InvertedButton } from "./button.styles.jsx";

export const ButtonClass = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = ButtonClass.base) =>
  ({
    [ButtonClass.base]: BaseButton,
    [ButtonClass.google]: GoogleButton,
    [ButtonClass.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
