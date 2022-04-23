import { Link } from 'react-router-dom';

const MealItem = ({ strMeal, strMealThumb, idMeal }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
        <Link
          to={`/meal/${idMeal}`}
          className="btn-floating halfway-fab waves-effect waves-light red"
        >
          <i className="material-icons">input</i>
        </Link>
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
    </div>
  );
};

export default MealItem;
