import "./Log-in.styles.scss";
import FormInput from "../FormInput/forminput.component";
import Button from "../Button/button.component";
import {
  auth,
  SignInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { useContext, useState } from "react";
import { EmailAndPasswordSignIn } from "../../utils/firebase/firebase.utils";
import { checkAuth } from "../../utils/firebase/firebase.utils";
import { UserSignOut } from "../../utils/firebase/firebase.utils";

const logGoogleUser = async () => {
  await SignInWithGooglePopup();
};

const defLoginForm = {
  LoginEmail: "",
  LoginPassword: "",
};

const LogIn = () => {
  const [LoginForm, setLoginForm] = useState(defLoginForm);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginForm({ ...LoginForm, [name]: value });
  };

  const test = () => {
    console.log(LoginForm);
  };

  const ClearLogin = () => {
    setLoginForm(defLoginForm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await EmailAndPasswordSignIn(
        LoginForm.LoginEmail,
        LoginForm.LoginPassword
      );
      // console.log(response);
      if (response) {
        alert(`Success! ${response.user.email}`);

        // console.log('Response:', response.user);

        ClearLogin();
      }
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User not found");
          break;

        case "auth/wrong-password":
          alert("Wrong Password");
          break;

        default:
          alert("Error!");
          console.log(error.code);
      }
    }
  };

  return (
    <div className="LoginPage">
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          // EmailAndPasswordSignIn(e);
          handleSubmit(e);
        }}
      >
        <FormInput
          label="Email"
          type="email"
          name="LoginEmail"
          onChange={handleChange}
          value={LoginForm.LoginEmail}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="LoginPassword"
          onChange={handleChange}
          value={LoginForm.LoginPassword}
          required
        />

        <div className="Buttons-Container">
          <Button type="submit">
            <p>Login</p>
          </Button>

          <Button buttonType="google" type="button" onClick={logGoogleUser}>
            <p>Login with Google</p>
          </Button>
        </div>
      </form>

      <button onClick={checkAuth}>
        <p>Check auth status</p>
      </button>
      <button
        onClick={() => {
          console.log(UserSignOut());
        }}
      >
        <p>Sign Out</p>
      </button>
    </div>
  );
};

export default LogIn;
