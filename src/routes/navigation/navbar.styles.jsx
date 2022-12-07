import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    width: 120px;
    padding: 25px;
    display: flex;
    justify-content: left;
    align-items: center;
    img {
        margin-top: 15px;
        width: 120px;
        height: 120px;
    }
`;

export const NavLinksContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 20px;
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

export const Email = styled.span`
    position: absolute;
    left: 50%;
    top: 90%;
    transform: translate(-50%, -0%);
    font-size: 15px;
    color: gray;
`;

export const LogoutContainer = styled.div`
    position: relative;
`;
