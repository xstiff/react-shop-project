import "./directory-item.style.jsx";
import {
    DirectoryItemContainer,
    BackgroundImage,
    Body,
} from "./directory-item.style.jsx";
const DirectoryItem = (cat) => {
    return (
        <DirectoryItemContainer key={cat.id}>
            <BackgroundImage imageUrl={cat.cImage} />
            <Body>
                <h2>{cat.title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
