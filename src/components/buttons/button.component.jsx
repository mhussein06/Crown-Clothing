import "./button.styles.scss";

const ButtonClass = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${ButtonClass[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
