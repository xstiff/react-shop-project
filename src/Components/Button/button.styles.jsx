import styled from "styled-components";

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-weight: 900;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

export const DisabledButton = styled(InvertedButton)`
    cursor: not-allowed;
    background-color: rgb(88, 88, 88);
    color: white;

    &:hover {
        background-color: rgb(88, 88, 88);
        color: white;
    }
`;

export const ConfirmYes = styled(BaseButton)`
    background-color: rgb(56, 145, 255);
    color: white;
    border-radius: 5px;
    outline: none;
    border: none;

    &:hover {
        color: white;
        border: none;
        background-color: rgb(75, 156, 255);
    }
`;

export const ConfirmNo = styled(BaseButton)`
    background-color: rgb(255, 49, 49);
    color: white;
    border-radius: 5px;
    outline: none;
    border: none;

    &:hover {
        color: white;
        border: none;
        background-color: rgb(255, 80, 80);
    }
`;
