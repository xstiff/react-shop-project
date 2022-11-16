import "./button.styles.jsx";
import {
    InvertedButton,
    GoogleSignInButton,
    BaseButton,
    ConfirmNo,
    ConfirmYes,
    DisabledButton,
} from "./button.styles.jsx";

const BUTTON_TYPE_CLASSES = {
    base: "base",
    google: "google-sign-in",
    inverted: "inverted",
    inverteddisabled: "inverted-disabled",
    undefined: "",
    confirmyes: "confirmyes",
    confirmno: "confirmno",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
        [BUTTON_TYPE_CLASSES.confirmyes]: ConfirmYes,
        [BUTTON_TYPE_CLASSES.confirmno]: ConfirmNo,
        [BUTTON_TYPE_CLASSES.inverteddisabled]: DisabledButton,
    }[buttonType]);

const Button = ({ children, buttonType, ...Other }) => {
    const CustomButton = getButton(buttonType);

    return <CustomButton {...Other}>{children}</CustomButton>;
};

export default Button;
