import './category-item.style.scss'

const CategoryItem = (cat) => {
    return (
        <div className="category-container" key={cat.id}>
            <div className="background-image" style={{
                backgroundImage: `url(${cat.cImage})`
             }}/>
          <div className="category-body-container">
            <h2>{cat.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    );
}

export default CategoryItem;