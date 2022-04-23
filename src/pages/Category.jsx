import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import MealList from '../components/MealList';
import Preloader from '../components/Preloader';
import { actionFilterCategories } from '../store/actionCreator';
import { MealContext } from '../store/context';

const Category = () => {
  const { name } = useParams();
  const { state, dispatch } = useContext(MealContext);

  const { meals } = state;

  useEffect(() => {
    getFilteredCategory(name).then(data => {
      dispatch(actionFilterCategories(data.meals));
    });
  }, [name, dispatch]);

  return <>{meals.length > 0 ? <MealList meals={meals} /> : <Preloader />}</>;
};

export default Category;
