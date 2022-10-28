import {
  SignInWithGooglePopup,
  SignInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUp from "../../Components/SignUpForm/signupform.component";
import FormInput from "../../Components/FormInput/forminput.component";
import "./sign-in.styles.scss";
import LogIn from "../../Components/Log-in/Log-in.component";

const SignIn = () => {
  return (
    <div className="LoginContainer">
      <LogIn />
      <SignUp />
    </div>
  );
};

export default SignIn;
