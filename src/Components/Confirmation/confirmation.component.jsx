import "./confirmation.styles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/button.component";
import { BUTTON_TYPE_CLASSES } from "../Button/button.component";

import {
    ConfirmButtonsContainer,
    ConfirmContainer,
    ConfirmText,
    ConfirmHeader,
    ConfirmTextContainer,
    ProductName,
    RemoveImageContainer,
    RemoveIcon,
} from "./confirmation.styles.jsx";
import { useSelector } from "react-redux";

const Confirmation = () => {
    // f(); < - Run after YES
    const { selectedRemove, setconfirmVisible, ConfirmedRemove } = useSelector(
        (state) => state.cart
    );

    const Confirmation_confirm = (i) => {
        const closeWindow = () => {
            setconfirmVisible(false);
        };

        if (i.target.innerHTML.toLowerCase() === "yes") {
            return ConfirmedRemove(selectedRemove);
        }

        return closeWindow();
    };

    return (
        <ConfirmContainer>
            <RemoveIcon>
                <FontAwesomeIcon icon={faExclamationCircle} />
            </RemoveIcon>
            <ConfirmTextContainer>
                <ConfirmHeader>Are you sure?</ConfirmHeader>
                <RemoveImageContainer>
                    <img
                        src={selectedRemove.imageUrl}
                        alt={selectedRemove.name}
                    />
                </RemoveImageContainer>
                <ProductName>{selectedRemove.name}</ProductName>
                <ConfirmText>
                    This item will be&nbsp;<b>removed</b>&nbsp;from your cart.
                </ConfirmText>
            </ConfirmTextContainer>
            <ConfirmButtonsContainer>
                <Button
                    buttonType={BUTTON_TYPE_CLASSES.confirmyes}
                    onClick={(e) => Confirmation_confirm(e)}
                >
                    Yes
                </Button>
                <Button
                    buttonType={BUTTON_TYPE_CLASSES.confirmno}
                    onClick={(e) => Confirmation_confirm(e)}
                >
                    No
                </Button>
            </ConfirmButtonsContainer>
        </ConfirmContainer>
    );
};

export default Confirmation;
