import {
  BaseButton,
  GoogleButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles.jsx";

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

const Button = ({ children, buttonType, isLoading = false, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
