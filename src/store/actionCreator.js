import { GET_CATEGORIES, FILTER_CATEGORIES, GET_MEAL } from './action';

const actionGetCategories = categories => ({
  type: GET_CATEGORIES,
  payload: categories,
});

const actionFilterCategories = categories => ({
  type: FILTER_CATEGORIES,
  payload: categories,
});

const actionGetMeal = recipe => ({
  type: GET_MEAL,
  payload: recipe,
});

export { actionGetCategories, actionFilterCategories, actionGetMeal };
