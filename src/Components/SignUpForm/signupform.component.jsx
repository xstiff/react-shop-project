import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/forminput.component";
import "./signupform.styles.scss";
import Button from "../Button/button.component";

const defformFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};
const SignUp = () => {
    const [formFields, setFormFields] = useState(defformFields);

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

            console.log("success: ", response);
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
        <div className="signup-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email</span>

            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                {/* <label>Display Name</label> */}
                <FormInput
                    label="Display name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={formFields.displayName}
                />

                {/* <label>Email</label> */}
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={formFields.email}
                />

                {/* <label>Password</label> */}
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={formFields.password}
                />

                {/* <label>Confirm Password</label> */}
                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={formFields.confirmPassword}
                />

                {/* <button type="submit">Register</button> */}

                {/* <Button buttonType="submit" type="submit">
                    <p>Register</p>
                </Button> */}
            </form>
        </div>
    );
};

export default SignUp;
