import { type } from "@testing-library/user-event/dist/type";
import "./button.styles.scss";

const BUTTON_TYPE = {
  google: "google-sign-in",
  inverted: "inverted",
  undefined: "",
};

const Button = ({ children, buttonType, ...Other }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE[buttonType]}`}
      {...Other}
    >
      {children}
    </button>
  );
};

export default Button;
