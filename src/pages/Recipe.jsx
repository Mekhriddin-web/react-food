import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../api';
import { actionGetMeal } from '../store/actionCreator';
import { MealContext } from '../store/context';
import Preloader from '../components/Preloader';
import RecipeItem from '../components/RecipeItem';

const Recipe = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(MealContext);
  const { recipe } = state;

  useEffect(() => {
    getMealById(id).then(data => {
      dispatch(actionGetMeal(data.meals));
    });
  }, [id, dispatch]);

  return (
    <>
      {state.recipe.length > 0 ? <RecipeItem recipe={recipe} /> : <Preloader />}
    </>
  );
};

export default Recipe;
