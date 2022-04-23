import { FILTER_CATEGORIES, GET_CATEGORIES, GET_MEAL } from './action';

const initialMealState = {
  categories: [],
  meals: [],
  recipe: [],
};

const MealReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_MEAL:
      return {
        ...state,
        recipe: payload,
      };
    case FILTER_CATEGORIES:
      return {
        ...state,
        meals: payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};

export { initialMealState, MealReducer };
