import styled from "styled-components";

export const MainAlertContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 99999;
`;

export const AlertContainer = styled.div`
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    -webkit-box-shadow: 0px 1px 33px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 1px 33px 0px rgba(66, 68, 90, 1);
    box-shadow: 0px 1px 33px 0px rgba(66, 68, 90, 1);
    border-radius: 10px;
    padding: 25px 45px;
    height: auto;
    min-width: 350px;
    z-index: 99999;
    color: rgb(47, 48, 57);
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    text-align: center;
`;

export const AlertHeader = styled.h1`
    font-size: 28px;
    font-weight: 800;
    color: ${(props) => props.HeaderColor};
`;

export const TextContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 10px;
`;
export const Text = styled.p`
    font-size: 25px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    text-align: center;
`;
