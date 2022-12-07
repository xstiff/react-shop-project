import styled from "styled-components";

export const CartIconContainer = styled.div`
    width: 55px;
    height: 55px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ShoppingIconImg = styled.img`
    width: 30px;
    height: 30px;
    user-select: none;
`;
export const ItemCount = styled.span`
    position: absolute;
    font-size: 13px;
    font-weight: bold;
    bottom: 14px;
    user-select: none;
`;
