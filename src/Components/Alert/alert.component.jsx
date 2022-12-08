import {
    AlertContainer,
    AlertHeader,
    HeaderContainer,
    TextContainer,
    Text,
    ButtonContainer,
    MainAlertContainer,
} from "./alert.styles";
import { useDispatch, useSelector } from "react-redux";
import {
    getAlertVisibility,
    getAlertType,
} from "../../store/alert/alert.selector";
import { setAlertVisibility } from "../../store/alert/alert.acitions";
import Button from "../Button/button.component";

const Alert = () => {
    const isAlertVisible = useSelector(getAlertVisibility);
    const type = useSelector(getAlertType);
    const dispatch = useDispatch();
    const headers = {
        in: {
            color: "#07f407",
            text: "Sucessfuly logged in",
            header: "Logged in",
        },
        out: {
            color: "#ff500a",
            text: "Sucessfuly logged out",
            header: "Logged out",
        },
        reg: {
            color: "#07f407",
            text: "Sucessfuly registered",
            header: "Registration",
        },
    };

    const ChangeVisible = () => dispatch(setAlertVisibility(!isAlertVisible));

    return (
        <>
            {isAlertVisible && (
                <MainAlertContainer>
                    <AlertContainer>
                        <HeaderContainer>
                            <AlertHeader HeaderColor={headers[type].color}>
                                {headers[type].header}
                            </AlertHeader>
                        </HeaderContainer>
                        <TextContainer>
                            <Text TextColor={headers[type].color}>
                                {headers[type].text}
                            </Text>
                        </TextContainer>
                        <ButtonContainer>
                            <Button buttonType="base" onClick={ChangeVisible}>
                                Ok
                            </Button>
                        </ButtonContainer>
                    </AlertContainer>
                </MainAlertContainer>
            )}
        </>
    );
};

export default Alert;
