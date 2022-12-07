import styled from "styled-components";

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position-y: 25%;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
    height: 60px;
    padding: 0 10px;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: white;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 36px 1px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 36px 1px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 36px 1px rgba(0, 0, 0, 1);
    position: absolute;

    h2 {
        font-weight: bold;
        text-transform: uppercase;
        margin: 0 0px 0;
        font-size: 22px;
        color: #000;
        text-shadow: 0px 0px 51px rgba(255, 255, 255, 1);
        &:hover {
            color: #333131;
        }
    }

    p {
        font-weight: lighter;
        font-size: 16px;
    }
`;

export const DirectoryItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    &:hover {
        cursor: pointer;

        & ${BackgroundImage}:hover {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
    }
`;
