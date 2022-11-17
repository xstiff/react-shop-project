import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;

    h2 {
        margin: 10px 0;
    }
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    justify-content: center;
    align-content: center;
    flex-wrap: nowrap;
    background-color: red;

    button {
        float: left;
    }

    button:nth-child(1) {
        margin-right: 15px;
    }
`;
