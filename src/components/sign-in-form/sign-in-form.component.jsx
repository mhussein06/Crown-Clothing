import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.components";
import {SignUpContainer, ButtonsContainer } from "./sign-in-form.styles.jsx";
import Button, {ButtonClass} from "../buttons/button.component";


const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormField] = useState(defaultFormFields);
  const { email, password } = formFields;

  const clearFormFields = () => {
    setFormField(defaultFormFields);
  };


  const signInWithGoogle = async () => {
    const userAuth = await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      clearFormFields();
    } catch (error) {
      switch (error.code) {
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
  };

  const handleChange = (event) => {
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
          <Button type="button" buttonType={ButtonClass.google} onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;
