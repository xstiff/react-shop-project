import styled from "styled-components";

export const CardItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
`;

export const ImageAndDeletionContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    img {
        height: 80%;
        width: 100%;
        object-fit: contain;
        /* position: relative; */
        z-index: 1;
    }
`;

export const ItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center;
    padding: 7px;
`;

export const Name = styled.span`
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 90%;
`;

export const Price = styled.span`
    font-size: 16px;
    width: 90%;
`;

export const Deletion = styled.div`
    position: absolute;
    z-index: 2;

    &:hover svg {
        opacity: 0.8;
        cursor: pointer;
    }

    svg {
        width: 60%;
        opacity: 0;
        color: red;
        height: 60%;
    }
`;
