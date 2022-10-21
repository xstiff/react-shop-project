import './categories.style.scss'
import CategoryItem from '../CategoryItem/category-item.component';

const Categories = ({ cats }) => {


    return (
      <div className="categories-container">
        {cats.map((cat) => (
          <CategoryItem key={cat.id} title={cat.title} cImage={cat.imageUrl} />
        ))}
      </div>
    );
}

export default Categories;