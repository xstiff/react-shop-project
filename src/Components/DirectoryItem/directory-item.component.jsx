import "./directory-item.style.jsx";
import {
    DirectoryItemContainer,
    BackgroundImage,
    Body,
} from "./directory-item.style.jsx";

import { useNavigate } from "react-router-dom";
const DirectoryItem = (cat) => {
    const Navigate = useNavigate();

    const goShop = () => {
        Navigate(`./shop/${cat.title}`);
    };
    return (
        <DirectoryItemContainer key={cat.id} onClick={goShop}>
            <BackgroundImage imageUrl={cat.cImage} />
            <Body>
                <h2>{cat.title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
