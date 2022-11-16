import "./directory-item.style.scss";

const DirectoryItem = (cat) => {
    return (
        <div className="directory-item-container" key={cat.id}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${cat.cImage})`,
                }}
            />
            <div className="body">
                <h2>{cat.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default DirectoryItem;
