import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import FormInput from "../form-input/form-input.components";
import { SignUpContainer, ButtonsContainer } from "./sign-in-form.styles.jsx";
import Button, { ButtonClass } from "../buttons/button.component";
import { useDispatch, useSelector } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";
import { selectError } from "../../store/user/user.selector";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormField] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [error, setError] = useState("");
  const userError = useSelector(selectError);

  const dispatch = useDispatch();

  const clearFormFields = () => {
    setFormField(defaultFormFields);
  };

  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      clearFormFields();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
        case AuthErrorCodes.USER_DELETED:
          alert("Username or password is incorrect! Please try again.");
          break;
        default:
          console.log("Error occured", error);
      }
    }
  };

  useEffect(() => {
    if (userError) {
      setError(userError.message);
      switch (error) {
        case "auth/wrong-password":
          alert("Password is incorrect! Please try again.");
          break;
        case "auth/user-not-found":
          alert("Email does not exist. Please register for free or try again.");
          break;
        default:
          console.log("Error occured", error);
      }
    }
  }, [error, userError]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit"> Sign In</Button>
          <Button
            type="button"
            buttonType={ButtonClass.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;
