import { type } from "@testing-library/user-event/dist/type";
import "./button.styles.scss";

const BUTTON_TYPE = {
    google: "google-sign-in",
    inverted: "inverted",
    inverteddisabled: "inverted-disabled",
    undefined: "",
    yes: "confirmyes",
    no: "confirmno",
};

const IS_DISABLED = {
    true: "disabled",
    false: "enabled",
    undefined: "",
};

const Button = ({ children, buttonType, is_disabled, ...Other }) => {
    return (
        <button
            className={`button-container ${BUTTON_TYPE[buttonType]} ${IS_DISABLED[is_disabled]}`}
            {...Other}
        >
            {children}
        </button>
    );
};

export default Button;
