import { combineReducers }  from 'redux';
import  calories  from "./TestReducer";
import TDEE from "./setCaloriesReducer";
import caloriesArr from "./setCaloriesArrayReducer";

const rootReducer = combineReducers({
  calories,
  TDEE,
  caloriesArr
});

export default rootReducer;
