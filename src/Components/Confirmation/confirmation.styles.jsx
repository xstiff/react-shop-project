import styled from "styled-components";

export const ConfirmContainer = styled.div`
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    -webkit-box-shadow: 0px 1px 33px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 1px 33px 0px rgba(66, 68, 90, 1);
    box-shadow: 0px 1px 33px 0px rgba(66, 68, 90, 1);
    border-radius: 10px;
    padding: 25px 0px;
    height: auto;
    min-width: 250px;
    z-index: 99999;
    color: rgb(47, 48, 57);
`;

export const ProductName = styled.p`
    line-height: 80px;
    float: left;
    padding-left: 15px;
    font-size: 20px;
    box-sizing: border-box;
`;

export const RemoveImageContainer = styled.div`
    width: auto;
    margin-top: 15px;
    box-sizing: border-box;
    height: 80px;
    float: left;
    img {
        width: 80px;
        height: 100%;
        // border-radius: 80px;
        object-fit: cover;
    }
`;

export const RemoveIcon = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    font-size: 90px;
    justify-content: center;
    margin-top: 10px;
    user-select: none;
    color: rgba(47, 48, 57, 0.613);
    margin: 0px 0px 15px 0px;
`;

export const ConfirmTextContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
`;

export const ConfirmHeader = styled.h1`
    display: flex;
    width: 100%;
    height: auto;
    font-size: 30px;
    text-align: center;
    justify-content: center;
    margin: 10px 0px 20px 0px;
`;

export const ConfirmText = styled.p`
    display: flex;
    width: 100%;
    height: 80px;
    height: auto;
    font-size: 20px;
    text-align: center;
    justify-content: center;
`;

export const ConfirmButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px;

    button:first-child {
        margin-right: 15px;
    }
`;
