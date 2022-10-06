import { useState } from "react";
import FormInput from "../../../component/form-input/input-form.page";
import "./login-form.styles.scss";
import Button from "../../../component/button/button";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailandPassword,
} from "../../../firebase/firebase";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;
  const clearFormField = () => {
    setFormFields(defaultFormField);
    return;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailandPassword(email, password);
      // console.log(response)
      clearFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={"google"}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
