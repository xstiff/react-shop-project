import styled from "styled-components";

import {
    BaseButton,
    InvertedButton,
    GoogleSignInButton,
} from "../Button/button.styles";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    max-height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    text-align: center;

    ${BaseButton},
    ${InvertedButton},
    ${GoogleSignInButton} {
        margin-top: auto;
    }

    *::-webkit-scrollbar {
        width: 12px;
    }
`;

export const EmptyMessage = styled.h3`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItems = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
    overflow-x: hidden;
`;
