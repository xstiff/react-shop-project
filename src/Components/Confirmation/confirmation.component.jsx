import "./confirmation.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWarning,
    faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Confirmation = () => {
    // f(); < - Run after YES
    const {
        selectedRemove,
        confirmVisible,
        setconfirmVisible,
        ConfirmedRemove,
    } = useContext(CartContext);

    const Confirmation_confirm = (i) => {
        const closeWindow = () => {
            setconfirmVisible(false);
        };

        if (i.target.innerHTML.toLowerCase() == "yes") {
            return ConfirmedRemove(selectedRemove);
        }

        return closeWindow();
    };

    return (
        <div className="confirm-container">
            <div className="confirm-icon">
                <FontAwesomeIcon icon={faExclamationCircle} />
            </div>
            <div className="confirm-text-container">
                <h1 className="confirm-header">Are you sure?</h1>
                <div className="remove-image-container">
                    <img
                        src={selectedRemove.imageUrl}
                        alt={selectedRemove.name}
                    />
                </div>
                <p className="product-name">{selectedRemove.name}</p>
                <p className="confirm-text">
                    This item will be&nbsp;<b>removed</b>&nbsp;from your cart.
                </p>
            </div>
            <div className="confirm-buttons">
                <Button
                    buttonType="confirmyes"
                    onClick={(e) => Confirmation_confirm(e)}
                >
                    Yes
                </Button>
                <Button
                    buttonType="confirmno"
                    onClick={(e) => Confirmation_confirm(e)}
                >
                    No
                </Button>
            </div>
        </div>
    );
};

export default Confirmation;
