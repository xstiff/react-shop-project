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

    const titltes = {
        hats: "hats",
        jackets: "jackets",
        sneakers: "sneakers",
        womens: "women",
        mens: "men",
    };

    return (
        <DirectoryItemContainer key={cat.id} onClick={goShop}>
            <BackgroundImage imageUrl={cat.cImage} />
            <Body>
                <h2>{titltes[cat.title]}</h2>
                {/* <p>Shop Now</p> */}
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
