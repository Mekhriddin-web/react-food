import { createContext, useReducer } from 'react';
import { initialMealState, MealReducer } from './reducer';

const MealContext = createContext(initialMealState);

const MealProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MealReducer, initialMealState);
  return (
    <MealContext.Provider value={{ state, dispatch }}>
      {children}
    </MealContext.Provider>
  );
};

export { MealContext, MealProvider };
