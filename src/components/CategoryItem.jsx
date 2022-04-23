import { Link } from 'react-router-dom';

const CategoryItem = ({
  idCategory,
  strCategoryThumb,
  strCategory,
  strCategoryDescription,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
        <span className="card-title">{strCategory}</span>
        <Link
          to={`/category/${strCategory}`}
          className="btn-floating halfway-fab waves-effect waves-light red"
        >
          <i className="material-icons">input</i>
        </Link>
      </div>
      <div className="card-content">
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
    </div>
  );
};

export default CategoryItem;
