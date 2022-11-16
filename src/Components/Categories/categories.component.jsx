import "./categories.style.scss";
import DirectoryItem from "../DirectoryItem/directory-item.component";

const Categories = ({ cats }) => {
    return (
        <div className="categories-container">
            {cats.map((cat) => (
                <DirectoryItem
                    key={cat.id}
                    title={cat.title}
                    cImage={cat.imageUrl}
                />
            ))}
        </div>
    );
};

export default Categories;
