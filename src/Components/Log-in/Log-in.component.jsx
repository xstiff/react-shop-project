import "./Log-in.styles.jsx";
import FormInput from "../FormInput/forminput.component";
import Button from "../Button/button.component";
import {
    auth,
    SignInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import { useState } from "react";
import { EmailAndPasswordSignIn } from "../../utils/firebase/firebase.utils";

import { BUTTON_TYPE_CLASSES } from "../Button/button.component";
import {
    setAlertVisibility,
    setAlertType,
} from "../../store/alert/alert.acitions.js";
import { LoginContainer, ButtonsContainer } from "./Log-in.styles.jsx";
import { useDispatch } from "react-redux";
const logGoogleUser = async () => {
    await SignInWithGooglePopup();
};

const defLoginForm = {
    LoginEmail: "",
    LoginPassword: "",
};

const LogIn = () => {
    const dispatch = useDispatch();
    const [LoginForm, setLoginForm] = useState(defLoginForm);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setLoginForm({ ...LoginForm, [name]: value });
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

            if (response) {
                // alert(`Success! ${response.user.email}`);
                ClearLogin();
                dispatch(setAlertType("in"));
                dispatch(setAlertVisibility(true));
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
        <LoginContainer>
            <h2>Login</h2>
            <form
                onSubmit={(e) => {
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

                <ButtonsContainer>
                    <Button type="submit">
                        <p>Login</p>
                    </Button>
                </ButtonsContainer>
            </form>

            {/* <button onClick={checkAuth}>
                <p>Check auth status</p>
            </button> */}
        </LoginContainer>
    );
};

export default LogIn;
