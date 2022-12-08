import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/forminput.component";
import Button from "../Button/button.component";
import { SignUpContainer } from "./signupform.styles.jsx";
import { useDispatch } from "react-redux";
import {
    setAlertType,
    setAlertVisibility,
} from "../../store/alert/alert.acitions";
const defformFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};
const SignUp = () => {
    const [formFields, setFormFields] = useState(defformFields);
    const dispatch = useDispatch();
    const resetForm = () => {
        setFormFields(defformFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = formFields;

        if (!displayName || !email || !password || !confirmPassword) return;

        if (!(formFields.password == formFields.confirmPassword))
            return alert("password doesnt match");

        if (password.length < 6)
            return alert("password should be at least 6 characters long");

        try {
            const response = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            const { user } = response;
            await createUserDocumentFromAuth(user, { displayName });

            // console.log("success: ", response);
            dispatch(setAlertType("reg"));
            dispatch(setAlertVisibility(true));
            return resetForm();
        } catch (error) {
            if (error) {
                console.log(error);
            }
        }
    };

    const handleChange = (e) => {
        const name =
            e.target.name == "displayName" ? e.target.name : e.target.name;
        const value = e.target.value;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email</span>

            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <FormInput
                    label="Display name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={formFields.displayName}
                />

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={formFields.email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={formFields.password}
                />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={formFields.confirmPassword}
                />

                <Button buttonType="base" type="submit">
                    <p>Register</p>
                </Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUp;
